// src/routes/api/env.ts
import { VERCEL_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';
export async function GET() {
	return json({ VERCEL_URL });
}
