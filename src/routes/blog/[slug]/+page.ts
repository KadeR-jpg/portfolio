import type { Post } from '$lib/types/PostType.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`).catch((e) => {
			console.log(`Could not find markdown files, looking for .svx files. Error: ${e}`);
			import(`../${params.slug}.svx`);
		});
		const postsResponse = await fetch('/api/posts');
		const posts = await postsResponse.json();
		const fullSlug = `/blog/${params.slug}`;
		const currentIndex = posts.findIndex((p: Post) => p.slug === fullSlug);
		const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
		const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
		return {
			content: post.default,
			meta: post.metadata,
			prevPost,
			nextPost
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}. Error: ${e}`);
	}
};
