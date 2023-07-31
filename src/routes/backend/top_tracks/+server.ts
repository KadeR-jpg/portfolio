import { json } from '@sveltejs/kit';
const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

export async function GET() {
	const { access_token } = await fetch('http://localhost:5173/backend/access_token/').then((res) =>
		res.json()
	);

	const data = await fetch(top_tracks_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	}).then((res) => res.json());

	return json({
		status: 200,
		body: {
			top_tracks: data.items
		}
	});
}
