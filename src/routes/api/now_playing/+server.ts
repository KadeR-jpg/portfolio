import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { PUBLIC_DEV_URL } from '$env/static/public';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

const base_url = dev ? PUBLIC_DEV_URL : `https://kadepitsch.com/`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;

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

export async function GET() {
	const access_token = await getSpotifyAccessToken();
	const res = await fetch(now_playing_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			'Access-Control-Allow-Origin': '*'
		}
	});

	if (res.status === 204 || res.status > 400) {
		return json({ body: { isPlaying: false } });
	}

	const song = await res.json();

	if (song.currently_playing_type === 'episode') {
		return json({
			body: {
				listeningToPodcast: true
			}
		});
	}
	// TODO add a feature to show what podcast is playing, probably add another endpoint and will have to update the scopes
	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist: string = song.item.artists
		.map((_artist: { name: string }) => _artist.name)
		.join(', ');
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;
	const progress = song.progress_ms;
	const duration = song.item.duration_ms;

	return json({ title, artist, album, isPlaying, albumImageUrl, songUrl, progress, duration });
}
