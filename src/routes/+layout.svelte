<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import favicon from '$lib/Icons/favicon.svg';
	import NowPlaying from '$components/NowPlaying.svelte';
	import Arrow_tr from '$lib/Icons/Arrow_tr.svelte';
	import Logo from '$lib/Icons/Logo.svelte';
	import ThemeToggle from '../lib/Components/ThemeToggle.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

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
	<link
		rel="icon"
		href={favicon}
		type="image/svg" />
</svelte:head>
<section>
	<header
		class="font-xs flex justify-center bg-stone-100 p-2 font-manrope text-xs text-stone-500 md:text-base dark:bg-stone-800">
		<a
			href="/"
			class="self-center">
			<Logo />
		</a>
	</header>
	<div class="grid md:grid-cols-6">
		<nav
			class="sticky top-0 flex h-fit flex-row justify-evenly border-b bg-stone-100 py-2 font-hedvig md:justify-start md:border-0 dark:bg-stone-800">
			<div
				class="flex flex-row gap-2 px-2 text-xs font-light text-stone-700 antialiased md:flex-col md:gap-2 md:text-lg dark:text-stone-100">
				{#each links as { title, highlightColor, href }}
					<a
						{href}
						class="self-start rounded-full bg-transparent {highlightColor} via-stone-100 hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:via-stone-800">
						{title}
					</a>
				{/each}
				<a
					target="_blank"
					href="https://github.com/KadeR-jpg"
					class="group inline-flex items-center">
					<Arrow_tr />Github
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/kade-pitsch-compsci/"
					class="group inline-flex items-center">
					<Arrow_tr />LinkedIn
				</a>
				<ThemeToggle />
			</div>
		</nav>
		<div class="grid justify-items-center px-4 pt-4 md:col-span-4 md:pt-0">
			{@render children?.()}
		</div>
		<aside class="hidden place-items-start md:grid">
			<NowPlaying />
		</aside>
	</div>
</section>
