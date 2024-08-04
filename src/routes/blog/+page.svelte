<script lang="ts">
	import { formatDate } from '$lib/utils';
	import PostPreview from '$lib/Components/PostPreview.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kade's Blog</title>
</svelte:head>

<!-- Posts -->
<section class="flex h-full w-full max-w-2xl flex-col">
	<ul class="flex flex-col gap-4">	
		{#each data.posts as post}
			<PostPreview {...post} date={formatDate(post.date)} link={post.slug} />
		{/each}
	</ul>
</section>
