<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	let open = false;
	let onClick = () => {
		open = !open;
	};
	let width: string | number = 50;
</script>

<div class="flex flex-col">
	<button
		on:click={onClick}
		class="flex cursor-pointer
                            justify-end
                            align-middle md:hidden"
	>
		<svg
			class:open
			class="stroke-black stroke-[2px]"
			viewBox="0 0 100 100"
			fill="none"
			stroke-linecap="round"
			{width}
		>
			<path
				class="top"
				d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
			/>
			<path class="middle" d="m 30,50 h 40" />
			<path
				class="bottom"
				d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
			/>
		</svg>
	</button>

	{#if open}
		<nav
			class="absolute right-0 top-8 flex flex-row justify-end pt-4"
			transition:fly={{ x: 100, duration: 200 }}
		>
			<div
				class="absolute right-0 flex flex-col gap-4 rounded-2xl border-2 border-black bg-purple-300 p-5 text-end text-2xl text-black shadow-lg"
			>
				<a aria-current="page" href="/">Home</a>
				<a href="/resume">Resume</a>
				<a href="/projects">Projects</a>
				<!-- <a class="text-2xl font-light text-white text-end" href="/about">About</a> -->
			</div>
		</nav>
	{/if}
</div>

<div class="hidden font-manrope md:flex">
	<nav class="flex gap-2 text-2xl font-semibold text-neutral-800">
		<a
			class="rounded p-2 ring-1 ring-black transition-all duration-150 ease-in-out hover:ring-fuchsia-500"
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			Home
		</a>
		<a
			class="rounded p-2 ring-1 ring-black transition-all duration-150 ease-in-out hover:ring-sky-500"
			href="/resume"
		>
			Resume
		</a>
		<a
			class="rounded p-2 ring-1 ring-black transition-all duration-150 ease-in-out hover:ring-orange-500"
			href="/projects"
		>
			Projects
		</a>
	</nav>
</div>

<style>
	a[aria-current='page']::before {
		content: '';
		width: 0;
		view-transition-name: active-page;
	}
	:root {
		--transition-duration: 200ms;
	}
	svg {
		transition: transform var(--transition-duration);
	}
	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}
	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}
	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}
	.open {
		transform: rotate(45deg);
	}
	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}
	.open .middle {
		transform: rotate(90deg);
	}
</style>
