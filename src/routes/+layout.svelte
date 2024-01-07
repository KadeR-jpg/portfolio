<script lang="ts">
	import '../app.postcss';
	import { onNavigate } from '$app/navigation';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import favicon from '$lib/Icons/favicon.svg';
	import { Toaster } from 'svelte-french-toast';
	import NowPlaying from '../lib/Components/NowPlaying.svelte';
	import Arrow_tr from '$lib/Icons/Arrow_tr.svelte';
	import Logo from '$lib/Icons/Logo.svelte';
	import { onMount } from 'svelte';

	let datetime: string = 'loading...';
	const links = [
		{
			title: '/Home',
			highlightColor: 'from-green-300',
			href: '/'
		},
		{
			title: '/Blog',
			highlightColor: 'from-amber-300',
			href: '/blog'
		},
		{
			title: '/Projects',
			highlightColor: 'from-blue-300',
			href: '/projects'
		},
		{
			title: '/Resume',
			highlightColor: 'from-violet-300',
			href: '/resume'
		}
	];
	injectSpeedInsights();
	onMount(() => {
		const interval = setInterval(() => {
			datetime = new Date().toLocaleTimeString();
		}, 1000);
		return () => clearInterval(interval);
	});
	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg" />
</svelte:head>
<Toaster />
<body class="bg-stone-100">
	<header class="grid bg-stone-100 p-2">
		<div class="flex flex-row justify-between text-xs md:text-base">
			<div class="flex flex-col font-vt text-stone-500">
				<p>Kade Pitsch</p>
				{#if datetime}
					<p>{datetime}</p>
				{/if}
			</div>
			<Logo />
			<div class="font-xs flex flex-col text-right font-vt text-stone-500">
				<p>Last Edited</p>
				<p>06/01/2024</p>
			</div>
		</div>
	</header>
	<div class="grid md:grid-cols-6">
		<nav
			class=" sticky top-0 flex h-fit flex-row justify-evenly border-b bg-stone-100 py-2 font-hedvig md:justify-start md:border-0"
		>
			<div
				class="flex flex-row gap-2 px-2 text-xs font-semibold text-stone-700 antialiased md:flex-col md:gap-2 md:text-lg"
			>
				{#each links as { title, highlightColor, href }}
					<a
						{href}
						class="self-start rounded-full bg-transparent {highlightColor} via-stone-100 hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
					>
						{title}
					</a>
				{/each}
				<a
					target="_blank"
					href="https://github.com/KadeR-jpg"
					class="group inline-flex items-center"
				>
					<Arrow_tr />Github
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/kade-pitsch-compsci/"
					class="group inline-flex items-center"
				>
					<Arrow_tr />LinkedIn
				</a>
			</div>
		</nav>
		<div
			class="grid place-content-center justify-center justify-items-center gap-1 px-4 py-1 md:col-span-4"
		>
			<slot />
		</div>
		<aside class="place-items-center">
			<NowPlaying />
		</aside>
	</div>
</body>

<style>
	/* body {
		background-image: radial-gradient(
			at center top,
			rgb(148, 163, 184),
			rgb(17, 94, 89),
			rgb(15, 23, 42)
		);
	} */
	.pushable {
		-webkit-tap-highlight-color: transparent;
		user-select: none;
	}
</style>
