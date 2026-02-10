// import { dev } from '$app/environment';
import { json } from '@sveltejs/kit';
// import { PUBLIC_DEV_URL } from '$env/static/public';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';
import type { SpotifyPlaylistResponse } from '$lib/types/Playlist.js';
// const baseUrl = dev ? PUBLIC_DEV_URL : 'https://kadepitsch.com/';
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/playlists';
const corsHeaders = {
	'Access-Control-Allow-Origin': 'https://kadepitsch.com',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type'
};

export async function OPTIONS() {
	return new Response(null, { headers: corsHeaders });
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
			client_id: SPOTIFY_CLIENT_ID,
			client_secret: SPOTIFY_CLIENT_SECRET,
			refresh_token: SPOTIFY_REFRESH_TOKEN
		})
  });
	const data = await response.json();
	return data.access_token;
}

async function getPlaylistData(playlistId: string, accessToken: string) {
	const resp = await fetch(`${PLAYLISTS_ENDPOINT}/${playlistId}`, {
		headers: { Authorization: `Bearer ${accessToken}` }
	});
  if (!resp.ok) {
    console.error('Spotify API error: ', resp.status, await resp.text());
	}
	const data: SpotifyPlaylistResponse = await resp.json();
	return {
		id: data.id,
		name: data.name,
		tracks: data.tracks.items.map((item) => ({
			name: item.track.name,
			artist: item.track.artists.map((artists) => artists.name).join(', '),
			spotify_link: item.track.external_urls.spotify,
			id: item.track.id,
			albumImg: item.track.album.images[1]?.url ?? ''
		}))
	};
}

export async function GET({ url }) {
	const playlistId = url.searchParams.get('id');
	if (!playlistId) {
		return json({ error: 'No playlist id provided' }, { status: 400, headers: corsHeaders });
	}
	try {
		const accessToken = await getSpotifyAccessToken();
		const playlist = await getPlaylistData(playlistId, accessToken);
		return json(playlist, { headers: corsHeaders });
	} catch (err) {
		console.error(`Error fetching playlist: ${err}`);
		console.error('Spotify API error: ');
		return json({ error: 'Failed to fetch playlist' }, { status: 500, headers: corsHeaders });
	}
}
