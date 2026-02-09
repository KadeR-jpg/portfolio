<script module>
	export type CardType = 'Job' | 'Project';
</script>

<script lang="ts">
	import Arrow from 'phosphor-svelte/lib/ArrowUp';
	interface Props {
		cardType: CardType;
		title?: string[];
		bps?: string[];
		fromTo?: string;
		blobColor?: string;
		link?: string;
	}
	let {
		cardType,
		title = ['No Title Provided'],
		bps = ['No bullet points provided'],
		fromTo = 'No date provided',
		blobColor = 'No blob provided',
		link = 'No link provided'
	}: Props = $props();
</script>

{#if cardType === 'Project'}
	<div
		class="grid grid-flow-col-dense items-baseline justify-between font-hedvig md:inline-flex md:w-full"
	>
		<h2 class="text-lg font-semibold md:text-2xl dark:text-stone-300">{title}</h2>
		<a
			href={link}
			rel="external"
			target="_blank"
			class="group inline-flex items-center bg-transparent {blobColor} via-stone-100 px-3 py-1 text-stone-600 hover:bg-radial dark:via-stone-800 dark:text-stone-300"
		>
			<Arrow
				class="size-4 rotate-45 rounded-full bg-transparent via-stone-100 transition-all duration-150 ease-out group-hover:rotate-90 hover:bg-radial dark:via-stone-800"
			/>View Project
		</a>
	</div>
{:else if cardType === 'Job'}
	<div
		class="grid-flow-col-dense items-baseline justify-between font-hedvig md:w-full md:items-baseline md:justify-between"
	>
		<h2
			class="rounded-full bg-transparent via-stone-100 text-lg font-semibold hover:bg-radial md:text-2xl dark:via-stone-800 dark:font-semibold dark:text-stone-300 {blobColor}"
		>
			{title}
		</h2>
		<p class="text-xs text-stone-500 md:text-sm dark:text-stone-300">{fromTo}</p>
	</div>
{/if}
<ul class="font-manrope prose prose-stone dark:prose-invert">
	{#each bps as bp, i (i)}
		<li class="list-outside list-disc text-xs text-pretty md:text-sm">{@html bp}</li>
	{/each}
</ul>
