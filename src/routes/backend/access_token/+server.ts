import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';
import { dev } from '$app/environment';
import { PUBLIC_DEV_URL } from '$env/static/public';

const base_url = dev ? PUBLIC_DEV_URL : `https://${process.env.VERCEL_URL}/`;

const credentials: string = SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET;
const encoded_credentials = Buffer.from(credentials).toString('base64');
import { json } from '@sveltejs/kit';
const redirect_uri = base_url;
const token_endpoint = `https://accounts.spotify.com/api/token`;

export const GET = async () => {
	const { access_token } = await fetch(token_endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + encoded_credentials
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			redirect_uri,
			client_id: SPOTIFY_CLIENT_ID,
			client_secret: SPOTIFY_CLIENT_SECRET,
			refresh_token: SPOTIFY_REFRESH_TOKEN
		})
	}).then((res) => {
		return res.json();
	});

	return json({ access_token });
};
