<script lang="ts">
	import { formatDate } from '$lib/utils.ts';
	import PostPreview from '$lib/components/PostPreview.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Kade's Blog</title>
</svelte:head>

<section class="flex h-full w-full max-w-2xl flex-col">
	<ul class="flex flex-col gap-4">
		{#each data.posts as post, i (i)}
			<PostPreview {...post} date={formatDate(post.date)} link={post.slug} />
		{/each}
	</ul>
</section>
