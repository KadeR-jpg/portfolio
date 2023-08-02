// src/routes/api/env.ts
import { VERCEL_URL } from '$env/static/private';
export const GET = async () => {
	const body = JSON.stringify('kadepitsch.com');
	const headers = {
		'content-type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST'
	};
	return new Response(body, { headers });
};
