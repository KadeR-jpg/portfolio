<script lang="ts">
	import { formatDate } from '$lib/utils';
	import PostNavigation from '$lib/Components/PostNavigation.svelte';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
	let { content, meta, prevPost, nextPost } = $derived(data);
</script>

<!-- SEO -->
<svelte:head>
	{#if meta}
		<title>{meta.title}</title>
		<meta property="og:type" content="article" />
		<meta property="og:title" content={meta.title} />
	{/if}
</svelte:head>

{#if meta && content}
	{@const SvelteComponent = content}
	<article class="prose prose-stone flex flex-col dark:prose-invert">
		<!-- Title -->
		<hgroup class="not-prose pb-2">
			<h1 class="font-hedvig text-3xl">{meta.title}</h1>
			<p class="font-manrope text-sm">Published on {formatDate(meta.date)}</p>
		</hgroup>

		<!-- Tags -->
		<div class="flex flex-row gap-x-2 border-b pb-1 font-manrope">
			{#each meta.tags as tag}
				<span class="px-1 text-xs first:p-0">&num;{tag}</span>
			{/each}
		</div>

		<!-- Post -->
		<div class="font-manrope">
			<SvelteComponent />
		</div>
		<PostNavigation {prevPost} {nextPost} />
	</article>
{/if}
