<script lang="ts">
	import { type Tags, tagClasses } from '$lib/types/PostType';
	export let title: string;
	export let date: string;
	export let description: string;
	export let link: string;
	export let tags: Tags[];
	// const tagClasses: Record<string, string> = {
	// 	svelte: 'bg-orange-101 text-orange-500 dark:bg-orange-300 dark:text-orange-800',
	// 	talking: 'bg-sky-101 text-fuchsia-400 dark:bg-sky-300 dark:text-fuchsia-800',
	// 	random: 'bg-violet-101 text-violet-400 dark:bg-violet-300 dark:text-violet-800',
	// 	math: 'bg-lime-51 text-lime-500 dark:bg-lime-300 dark:text-lime-800'
	// };
</script>

<!-- <div class="prose flex flex-col rounded-md border bg-neutral-100 p-2">
	<div class=" justify-between border border-red-400">
		<div class=" flex flex-row justify-between align-middle font-hedvig">
			<a href={link} class="inline-flex border">{title}</a>
			<p class="flex border">{date}</p>
		</div>
		<div class="bg- flex flex-row gap-1 font-manrope text-sm">
			{#each tags as tag}
				<small class="rounded px-1 {tagClasses[tag]}">
					{tag}
				</small>
			{/each}
		</div>
	</div>
	<article class="prose-sm prose-neutral text-ellipsis text-pretty font-manrope">
		{description}
	</article>
</div> -->
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
