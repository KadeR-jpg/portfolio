import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { PUBLIC_DEV_URL } from '$env/static/public';

const base_url = dev ? PUBLIC_DEV_URL : `https://kadepitsch.com/`;

const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;

export async function GET() {
	const { access_token } = await fetch(`${base_url}backend/access_token`).then((res) => {
		return res.json();
	});
	const res = await fetch(now_playing_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
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
