<script lang="ts">
	import '../app.postcss';
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
		class="flex md:hidden
                            cursor-pointer
                            justify-end align-middle"
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
			class="flex flex-row absolute right-0 pt-4 top-8 justify-end"
			transition:fly={{ x: 100, duration: 200 }}
		>
			<div
				class="flex flex-col gap-4 absolute border-2 border-black rounded-2xl bg-purple-300 right-0 p-5 text-2xl text-black shadow-lg text-end"
			>
				<a href="/">Home</a>
				<a href="/resume">Resume</a>
				<a href="/projects">Projects</a>
				<!-- <a class="text-2xl font-light text-white text-end" href="/about">About</a> -->
			</div>
		</nav>
	{/if}
</div>

<div class="md:flex flex-row justify-center place-items-center hidden font-plex">
	<nav class="flex gap-6 pr-4 pt-2 text-2xl">
		<a class="hover:text-purple-500 transition-colors ease-in-out duration-150" href="/">Home</a>
		<a class="hover:text-purple-500 transition-colors ease-in-out duration-150" href="/resume"
			>Resume</a
		>
		<a class="hover:text-purple-500 transition-colors ease-in-out duration-150" href="/projects"
			>Projects</a
		>
		<a class="hover:text-purple-500 transition-colors ease-in-out duration-150" href="/about"
			>About</a
		>
	</nav>
</div>

<style>
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
