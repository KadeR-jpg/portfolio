<script lang="ts">
	import Footer from '../Components/Footer.svelte';
	import Card from '../Components/Card.svelte';
	import Header from '../Components/Header.svelte';
	import pythonLogo from '$lib/Icons/python.svg';
	import svelteLogo from '$lib/Icons/sv_logo.svg';
	import tailwindLogo from '$lib/Icons/tailwind.svg';
	import tsLogo from '$lib/Icons/tsLogo.svg';
	import supaLogo from '$lib/Icons/supabaseLogo.svg';
	import numpyLogo from '$lib/Icons/numpyLogo.svg';
	let devArray = [
		{
			title: 'This Website!',
			description: `This site is my first large project that I built from scratch. 
			I have been working on this site for quite sometime now and I am super excited to finally be able to present it to you!`,
			link: 'https://github.com/KadeR-jpg/portfolio',
			stackArray: [
				{
					language: 'SvelteKit',
					icon: `${svelteLogo}`
				},
				{
					language: 'TailwindCSS',
					icon: `${tailwindLogo}`
				},
				{
					language: 'TypeScript',
					icon: `${tsLogo}`
				}
			]
		},
		{
			title: 'Spectis',
			description: `A personal project that i have been working on in my free-time. The main function of the website
			will be to store user data using a postgres database that is hosted on Supabase.`,
			link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim',
			stackArray: [
				{
					language: 'SvelteKit',
					icon: `${svelteLogo}`
				},
				{
					language: 'Supabase',
					icon: `${supaLogo}`
				},
				{
					language: 'TailwindCSS',
					icon: `${tailwindLogo}`
				},
				{
					language: 'TypeScript',
					icon: `${tsLogo}`
				}
			]
		},
		{
			title: 'Data Mining Final',
			description: `For my data-mining final i downloaded a Spotify music data-set and picked certain aspects and trends from 
			the data to try and see if there was correlation between the energy level and popularity of the song.`,
			link: 'https://github.com/KadeR-jpg/data-mining-final/tree/main/FinalProject',
			stackArray: [
				{
					language: 'Python',
					icon: `${pythonLogo}`
				},
				{
					language: 'Numpy',
					icon: `${numpyLogo}`
				}
			]
		},
		{
			title: 'Cashier Line Sim',
			description: `Text based Cashier line simulation that I completed for a interview process. The program takes in user input
			of the same shape and then distributes customers to different lines based on specifications.`,
			link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim',
			stackArray: [
				{
					language: 'Python',
					icon: `${pythonLogo}`
				}
			]
		}
	];
</script>
<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="flex flex-col min-h-screen flex-grow">
	<Header title="My Projects" />
	<div class="flex flex-col flex-grow">
		<h2 class="flex justify-center md:text-4xl p-4 md:pb-10 text-2xl">Development Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:p-8 p-4">
			{#each devArray as { title, description, link, stackArray }}
				<Card {title} {description} {link}>
					{#each stackArray as stackArray}
						<div class="flex flex-row gap-2 items-center">
							<img
								src={stackArray.icon}
								alt={stackArray.language}
								class="w-6 h-6 md:w-10 md:h-10"
							/>
							<p class="font-light text-sm md:font-normal text-gray-500">{stackArray.language}</p>
						</div>
					{/each}
				</Card>
			{/each}
		</div>
		<h2 class="flex justify-center text-4xl p-4 pb-10">Design Projects</h2>
	</div>
	<Footer />
</main>
