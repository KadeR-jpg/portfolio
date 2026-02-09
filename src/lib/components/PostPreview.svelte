<script lang="ts">
	import { type Tags, tagClasses } from '$lib/types/PostType';
	interface Props {
		title: string;
		date: string;
		description: string;
		link: string;
		tags: Tags[];
	}

	let {
		title,
		date,
		description,
		link,
		tags
	}: Props = $props();
</script>

<div
	class="prose flex flex-col border-b border-stone-500 pt-1 dark:prose-invert first:pt-0 last:border-0"
>
	<hgroup class="not-prose inline-flex justify-between align-baseline font-hedvig">
		<a href={link}>
			<h1 class="text-pretty underline hover:no-underline md:text-2xl">{title}</h1>
		</a>
		<p>{date}</p>
	</hgroup>
	<span class="inline-flex gap-2 py-1">
		{#each tags as tag}
			<small class="px-1 {tagClasses[tag]}">
				{tag}
			</small>
		{/each}
	</span>
	<article class="pb-2">
		{description}
	</article>
</div>