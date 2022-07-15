<script lang="ts">
	import Footer from '../Components/Footer.svelte';
	import Card from '../Components/Card.svelte';
	import Header from '../Components/Header.svelte';
	import gh_logo from '$lib/images/GitHub_Logo.png';
	import yeBoot from '$lib/inspoimgs/yeHome.png';
	import pythonLogo from '$lib/images/python.svg';
	import svelteLogo from '$lib/images/sv_logo.svg';
	import tailwindLogo from '$lib/images/tailwind.svg';
	import tsLogo from '$lib/images/tsLogo.svg';
	let cardArray = [
		{
			title: 'This Website!',
			description: `This site is a my first large project that i built from scratch.
			I have been working on this site for quite sometime now and i am super excited to finally be able to present it to you!`,
			imgSrc: `${svelteLogo}`,
			link: '/projects',
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
			title: 'Python Cashier Line Sim',
			description: `Text based Cashier line simulation that i completed for a interview process. Takes in some user input
			and distributes customers to different lines based on specifications.`,
			imgSrc: `${pythonLogo}`,
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

<main class="flex flex-col min-h-screen flex-grow">
	<Header title="My Projects" />
	<div class="flex flex-col flex-grow">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
			{#each cardArray as { title, description, imgSrc, link, stackArray }}
				<Card {title} {description} {link}>
					{#each stackArray as stackArray}
						<div class="flex flex-row gap-2">
							<img
								src={stackArray.icon}
								alt={stackArray.language}
								class="w-6 h-6 md:w-10 md:h-10"
							/>
							<p class="font-light text-sm" >{stackArray.language}</p>
						</div>
					{/each}
					<!-- <img
						src={imgSrc}
						alt="img of concrete"
						class="w-40 h-40 object-contain scale-75 md:scale-100"
					/> -->
				</Card>
			{/each}
		</div>
	</div>
	<Footer />
</main>
