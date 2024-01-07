<script lang="ts">
	import Card from '../../lib/Components/Card.svelte';
	import type { CardProps } from '$lib/types/CardProps';

	let projList: CardProps[] = [
		{
			title: 'This Website',
			bps: [
				'This website was my first project with <strong>Svelte</strong> and <strong>TailwindCSS</strong>',
				'Started building it in college to get familiar with web-dev',
				"It's gone through <em>several</em> iterations. I like to play around with stuff"
			],
			blobColor: 'from-cyan-300',
			link: 'https://github.com/KadeR-jpg/portfolio'
		},
		{
			title: 'Spectis',
			bps: [
				'Another site built with Svelte and tailwind',
				'More of a full-stack app with utilizing <strong>Supabase</strong> as the backend',
				'on Supabase to store user data'
			],
			blobColor: 'from-orange-300',
			link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim'
		},
		{
			title: 'Prime Reacts',
			bps: [
				'Side project built for a streamer',
				'the correlation between energy level and song popularity. I selected specific',
				'elements and trends from the data to examine this relationship'
			],
			blobColor: 'from-fuchsia-300',
			link: 'https://github.com/KadeR-jpg/data-mining-final/tree/main/FinalProject'
		},
		{
			title: 'Blackjack Game',
			bps: [
				'Built for fun to get more familiar with a few web-dev concepts',
				'Very simple set of rules',
				'Used Sveltekit and TailwindCSS'
			],
			blobColor: 'from-rose-300',
			link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim'
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="flex flex-col">
	<div class="prose prose-stone text-left">
		<h1 class="font-hedvig text-3xl">Development Projects</h1>
		<p class="pb-4 font-manrope">
			Here is a list of some of the things that i have worked on that i liked enough to show off.
			Links are to their github repo
		</p>
	</div>
	<div class="flex flex-col gap-4">
		{#each projList as proj}
			<Card cardType="Project" {...proj} />
			<hr />
		{/each}
	</div>
</main>
