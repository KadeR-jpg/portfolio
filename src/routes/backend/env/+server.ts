// src/routes/api/env.ts
import { VERCEL_URL } from '$env/static/private';
export const GET = async () => {
	const body = JSON.stringify(VERCEL_URL);
	const headers = {
		'content-type': 'application/json',
		'access-control-allow-origin': 'https://kadepitsch.com/backend/now_playing'
	};
	return new Response(body, { headers });
};
