<script lang="ts">
	import Footer from '../../Components/Footer.svelte';
	import Card from '../../Components/Card.svelte';
	import Header from '../../Components/Header.svelte';
	import pythonLogo from '$lib/Icons/python_logo.svg';
	import svelteLogo from '$lib/Icons/sv_logo.svg';
	import tailwindLogo from '$lib/Icons/tailwind_logo.svg';
	import tsLogo from '$lib/Icons/ts_logo.svg';
	import supaLogo from '$lib/Icons/supabase_logo.svg';
	import numpyLogo from '$lib/Icons/numpy_logo.svg';
	import figmaLogo from '$lib/Icons/figma_logo.svg';
	let devArray = [
		{
			title: 'This Website!',
			description: `This website represents my first major project that I have built from the ground up.
			 It has been a long-term undertaking, as i was never satisfied on the design but here it is
			  and I am thrilled to finally be able to share it with you.`,
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
			description: `I am currently working on a personal project in my free time
			 which involves building a website that utilizes a Postgres database hosted
			  on Supabase to store user data.`,
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
			description: `For my data mining final, I utilized a Spotify music dataset to analyze
			 the correlation between energy level and song popularity. I selected specific
			  elements and trends from the data to examine this relationship.`,
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
			description: `I developed a text-based cashier line simulation for an interview process.
			 The program accepts user input of specific shapes and distributes customers to different
			  lines based on predetermined criteria.`,
			link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim',
			stackArray: [
				{
					language: 'Python',
					icon: `${pythonLogo}`
				}
			]
		}
	];

	// let designArray = [
	// 	{
	// 		title: 'INQ Tattoo',
	// 		description: `Logo designed for a local tattoo artist. `,
	// 		link: 'https://github.com/KadeR-jpg/portfolio',
	// 		stackArray: [
	// 			{
	// 				language: 'Figma',
	// 				icon: `${figmaLogo}`
	// 			}
	// 		]
	// 	},
	// 	{
	// 		title: 'Beartooth Repair',
	// 		description: `A personal project that i have been working on in my free-time. The main function of the website
	// 		will be to store user data using a postgres database that is hosted on Supabase.`,
	// 		link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim',
	// 		stackArray: [
	// 			{
	// 				language: 'Figma',
	// 				icon: `${figmaLogo}`
	// 			}
	// 		]
	// 	},
	// 	{
	// 		title: 'Spectis',
	// 		description: `Some logo designs for my personal website`,
	// 		link: 'https://github.com/KadeR-jpg/data-mining-final/tree/main/FinalProject',
	// 		stackArray: [
	// 			{
	// 				language: 'Figma',
	// 				icon: `${figmaLogo}`
	// 			}
	// 		]
	// 	},
	// 	{
	// 		title: 'Mock-Up app',
	// 		description: `Text based Cashier line simulation that I completed for a interview process. The program takes in user input
	// 		of the same shape and then distributes customers to different lines based on specifications.`,
	// 		link: 'https://github.com/KadeR-jpg/Cashier-Line-Sim',
	// 		stackArray: [
	// 			{
	// 				language: 'Figma',
	// 				icon: `${figmaLogo}`
	// 			}
	// 		]
	// 	}
	// ];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="flex flex-col min-h-screen flex-grow">
	<Header title="My Projects" />
	<div class="flex flex-col flex-grow">
		<h2 class="flex justify-center md:text-4xl p-4 md:pb-10 text-2xl">Development Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:p-8 p-4 ">
			{#each devArray as { title, description, link, stackArray }}
				<Card {title} {description} {link}>
					{#each stackArray as stackArray}
						<div class="flex flex-row gap-2 items-center ">
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
		<!-- <h2 class="flex justify-center text-4xl p-4 pb-10">Design Projects</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:p-8 p-4">
			{#each designArray as { title, description, link, stackArray }}
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
		</div> -->
	</div>
</main>
