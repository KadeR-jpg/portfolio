import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { PUBLIC_DEV_URL } from '$env/static/public';
import type { SpotifyTrack, Playlist } from '$lib/types/Playlist';
import {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

const base_url = dev ? PUBLIC_DEV_URL : `https://kadepitsch.com/`;
const playlists_endpoint = `https://api.spotify.com/v1/playlists`;

export async function OPTIONS() {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://www.kadepitsch.com',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    };
}

async function getSpotifyAccessToken(): Promise<string> {
    const credentials = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
        'base64'
    );
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            base_url,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
            refresh_token: SPOTIFY_REFRESH_TOKEN
        })
    });

    const data = await response.json();

    return data.access_token;
}

async function getPlaylistData(playlistId: string, accessToken: string) {
    const resp = await fetch(`${playlists_endpoint}/${playlistId}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await resp.json();
    return {
        id: data.id,
        name: data.name,
        tracks: data.tracks.items.map((item: any) => ({
            name: item.track.name,
            artist: item.track.artists.map((_artists: { name: string }) => _artists.name).join(', '),
            spotify_link: item.track.external_urls.spotify,
            id: item.track.id,
            albumImg: item.track.album.images[1]?.url ?? ''
        }))
    }

}

export async function GET({ url }) {
    const playlistId = url.searchParams.get('id');
    if (!playlistId) {
        return json({ error: 'No playlist IDs provided' }, { status: 400 });
    }

    try {
        const access_token = await getSpotifyAccessToken();
        const playlist = await getPlaylistData(playlistId, access_token)
        return json(playlist);
    } catch (error) {
        console.error('Error fetching playlists:', error);
        return json({ error: 'Failed to fetch playlists' }, { status: 500 });
    }
}
