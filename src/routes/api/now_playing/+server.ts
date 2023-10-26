import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { PUBLIC_DEV_URL } from '$env/static/public';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

const base_url = dev ? PUBLIC_DEV_URL : `https://kadepitsch.com/`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing?additional_types=track%2Cepisode`;

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

export async function GET() {
	const access_token = await getSpotifyAccessToken();
	const res = await fetch(now_playing_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});

	if (res.status === 204 || res.status > 400) {
		return json({ body: { isPlaying: false } });
	}

	const data = await res.json();
	const is_playing = data.is_playing;
	const title = data.item.name;
	const link = data.item.external_urls.spotify;
	let podcast: boolean;
	let artist, album, description, cover_art;
	if (data.currently_playing_type === 'episode') {
		podcast = true;
		cover_art = data.item.show.images[0].url;
		artist = data.item.show.name;
		description = data.item.show.publisher;
	} else {
		podcast = false;
		cover_art = data.item.album.images[0].url;
		artist = data.item.artists.map((_artists: { name: string }) => _artists.name).join(', ');
		album = data.item.album.name;
	}
	return json({
		podcast,
		title,
		description,
		artist,
		album,
		is_playing,
		cover_art,
		link,
		headers: {
			'Access-Control-Allow-Origin': 'https://www.kadepitsch.com',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
		}
	});
}
// 	if (song.currently_playing_type === 'episode') {
// 		const name = song.item.name;
// 		const cover_art = song.item.show.images[1].url;
// 		const link = song.item.external_urls.spotify;
// 		const description = song.item.show.description;
// 		const is_playing = song.is_playing;
// 		return json({
// 				listeningToPodcast: true,
// 				is_playing,
// 				name,
// 				cover_art,
// 				link,
// 				description,
// 		});
// 	}
// 	const is_playing = song.is_playing;
// 	const title = song.item.name;
// 	const artist: string = song.item.artists
// 		.map((_artist: { name: string }) => _artist.name)
// 		.join(', ');
// 	const album = song.item.album.name;
// 	const albumImageUrl = song.item.album.images[0].url;
// 	const songUrl = song.item.external_urls.spotify;
// 	const progress = song.progress_ms;
// 	const duration = song.item.duration_ms;

// }
