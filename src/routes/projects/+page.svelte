<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	let projList = [
		{
			title: 'Austin Pitsch Farms',
			bps: [
				'This is a beta-site for some modernization testing in the wild world of agricultural seed sales',
				'End goal is to allow users to interact with the data and questions to optimize their planting selection',
				'Sprinkle in some AI just for the hype of it'
			],
			blobColor: 'from-lime-300',
			link: 'https://austinpitsch.farm/'
		},
		{
			title: 'This Website',
			bps: [
				'This website was my first project with Svelte and TailwindCSS',
				'Started building it in college to get familiar with web-dev',
				"It's gone through <em>several</em> iterations. I like to play around with stuff"
			],
			blobColor: 'from-cyan-300',
			link: 'https://github.com/KadeR-jpg/portfolio'
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="flex flex-col">
	<div class="prose text-left prose-stone dark:prose-invert">
		<h1 class="font-hedvig text-3xl dark:font-medium">Development Projects</h1>
		<p class="font-manrope pb-4">
			I thought I was required to have this section, turns out I don't have much to show for it!
			Funny.
		</p>
	</div>
	<div class="flex flex-col gap-4">
		{#each projList as proj, i (i)}
			<Card cardType="Project" {...proj} />
			<hr class="dark:border-stone-600" />
		{/each}
	</div>
</main>
