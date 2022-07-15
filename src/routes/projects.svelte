<script>
	import { Motion } from 'svelte-motion';
	import Footer from '../Components/Footer.svelte';
	import Card from '../Components/Card.svelte';
	import Header from '../Components/Header.svelte';
	import crete from '$lib/images/bare_concrete.jpg';
	import crete_2 from '$lib/images/dith_crete_3.jpg';
	import gh_logo from '$lib/images/GitHub_Logo.png';
	import yeBoot from '$lib/inspoimgs/yeHome.png';
	let cardArray = [
		{
			title: 'This Website!',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/images/sv_logo.svg',
			link: ''
		},
		{
			title: 'Python Web Scraper',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/inspoimgs/yeBoot.png',
			link: ''
		},
		{
			title: 'Python Web Scraper',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/inspoimgs/yeBoot.png',
			link: ''
		},
		{
			title: 'Cashier Line Sim',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/inspoimgs/yeHome.png',
			link: ''
		},
		{
			title: 'This Website!',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/images/sv_logo.svg',
			link: ''
		},
		{
			title: 'Python Web Scraper',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/inspoimgs/yeBoot.png',
			link: ''
		},
		{
			title: 'Python Web Scraper',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/inspoimgs/yeBoot.png',
			link: ''
		},
		{
			title: 'Cashier Line Sim',
			description: 'This is a my first real self-led project that i am proud of',
			imgSrc: 'src/lib/inspoimgs/yeHome.png',
			link: ''
		}
	];
</script>

<Header title="My Projects" />
<div class="flex flex-col flex-grow p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each cardArray as { title, description, imgSrc, link }}
			<a href={link}>
				<Card {title} {description}>
					<img src={imgSrc} alt="img of concrete" class="object-fit w-48 h-48" />
				</Card>
			</a>
		{/each}
	</div>
</div>
<Footer />
