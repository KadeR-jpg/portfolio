import type { Post } from '$lib/types/PostType';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ fetch, params }) => {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	const currentIndex = posts.findIndex((post) => post.slug === params.slug);
	const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
	const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

	return {
		posts,
		prevPost,
		nextPost
	};
};
