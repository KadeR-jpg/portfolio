<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageProps } from './$types';
	import PostNavigation from '$lib/components/PostNavigation.svelte';
	let { data }: PageProps = $props();
	let { content, meta, prevPost, nextPost } = $derived(data);
</script>

<svelte:head>
	{#if meta}
		<title>{meta.title}</title>
		<meta property="og:type" content="article" />
		<meta property="og:title" content={meta.title} />
	{/if}
</svelte:head>

{#if meta && content}
	{@const SvelteComponent = content}
	<article class="prose flex flex-col prose-stone dark:prose-invert">
		<hgroup class="not-prose pb-2">
			<h1 class="font-hedvig text-3xl">{meta.title}</h1>
			<p class="font-manrope text-sm">Published on {formatDate(meta.date)}</p>
		</hgroup>
		<div class="font-manrope flex flex-row gap-x-2 border-b pb-1">
			{#each meta.tags as tag, i (i)}
				<span class="px-1 text-xs first:p-0">&num;{tag}</span>
			{/each}
		</div>
		<div class="font-manrope">
			<SvelteComponent />
		</div>
		<PostNavigation {prevPost} {nextPost} />
	</article>
{/if}
