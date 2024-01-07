<script lang="ts">
	import type { CardProps, CardType } from '$lib/types/CardProps';
	import ArrowTr from '$lib/Icons/Arrow_tr.svelte';
	export let cardType: CardType;
	export let title: CardProps['title'] = 'No Title Provided';
	export let bps: CardProps['bps'] = ['No bullet points provided'];
	export let fromTo: CardProps['fromTo'] = 'No date provided';
	export let blobColor: CardProps['blobColor'] = 'No blob provided';
	export let link: CardProps['link'] = 'No link provided';
</script>

{#if cardType === 'Project'}
	<div
		class="grid grid-flow-col-dense items-baseline justify-between font-hedvig md:inline-flex md:w-full"
	>
		<h2 class="text-lg font-semibold md:text-2xl">{title}</h2>
		<a
			href={link}
			target="_blank"
			class="bg-transparent {blobColor} group inline-flex items-center rounded-3xl via-stone-100 px-3 py-1 text-stone-600 ring-0 transition-all duration-150 ease-in hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:ring-1 hover:ring-stone-300 active:ring-1 active:ring-stone-300"
		>
			<ArrowTr />View Project
		</a>
	</div>
{:else if cardType === 'Job'}
	<div
		class="grid-flow-col-dense items-baseline justify-between font-hedvig md:inline-flex md:w-full md:items-baseline md:justify-between"
	>
		<h2 class="text-lg font-semibold md:text-2xl">{title}</h2>
		<p class="text-xs text-stone-500 md:text-sm">{fromTo}</p>
	</div>
{/if}
<ul class="prose prose-stone font-manrope">
	{#each bps as bp}
		<li class="list-outside list-disc text-pretty text-xs md:text-sm">{@html bp}</li>
	{/each}
</ul>
