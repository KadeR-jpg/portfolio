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
			title: 'Beartooth Repair',
			bps: [
				'Website built for a heavy equipment repair company',
				'Utilized Sveltekit and TailwindCSS to build out the site',
				'Contact form is utilizing the Sendgrid API'
			],
			blobColor: 'from-fuchsia-300',
			link: 'https://www.beartoothrepair.contact/'
		},
		{
			title: 'Prime Reacts',
			bps: [
				'Another site built with Svelte, tailwind and <strong>Supabase</strong> as the backend',
				'Full stack app using supabase and discord for user authentication.',
				'Utilizing MySQL to store user data'
			],
			blobColor: 'from-orange-300',
			link: 'https://github.com/KadeR-jpg/prime-reacts'
		},
		{
			title: 'Blackjack Game',
			bps: [
				'Built for fun to get more familiar with a few web-dev concepts',
				'Very simple set of rules',
				'Used Sveltekit and TailwindCSS'
			],
			blobColor: 'from-rose-300',
			link: 'https://simple-blackjack-kade.vercel.app/'
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="flex flex-col">
	<div class="prose prose-stone text-left dark:prose-invert">
		<h1 class="font-hedvig text-3xl dark:font-medium">Development Projects</h1>
		<p class="pb-4 font-manrope">
			Here is a list of some of the things that i have worked on that i liked enough to show off.
			Links are to their github repo
		</p>
	</div>
	<div class="flex flex-col gap-4">
		{#each projList as proj}
			<Card cardType="Project" {...proj} />
			<hr class="dark:border-stone-600" />
		{/each}
	</div>
</main>
