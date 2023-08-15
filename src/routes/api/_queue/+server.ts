// import { json } from '@sveltejs/kit';
// const queue_endpoint = `https://api.spotify.com/v1/me/player/queue`;
// type Queue = {
// 	song_title: string;
// 	album_url: string;
// 	artist: string | [string];
// }[];

// export async function GET() {
// 	const { access_token } = await fetch('http://localhost:5173/api/access_token/').then((res) => {
// 		return res.json();
// 	});

// 	const resp = await fetch(queue_endpoint, {
// 		headers: {
// 			Authorization: `Bearer ${access_token}`
// 		}
// 	});
// 	const queue_obj = await resp.json();
// 	const queue: Queue = [];
// 	for (let index = 0; index < 5; index++) {
// 		const artist: string = queue_obj[index].artists
// 			.map((_artist: { name: string }) => _artist.name)
// 			.join(', ');
// 		const song_title: string = queue_obj.album.name;
// 		const album_url: string = queue_obj.album.images[0].url;
// 		queue.push({ artist, song_title, album_url });
// 	}

// 	return json(queue);
// }
