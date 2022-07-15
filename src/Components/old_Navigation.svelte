<script lang="ts">
	import '../app.postcss';
	import { fly } from 'svelte/transition';
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
	export let width: string | number = 80;
</script>

<div class="flex flex-col w-screeen lg:hidden">
	<div class="flex flex-row align-middle justify-items-center">
		<button
			on:click={onClick}
			class="
				cursor-pointer
				overflow-hidden justify-center align-middle"
		>
			<svg
				class:open
				class="stroke-black hover:stroke-purple-600 stroke-[4px]"
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
	</div>
	{#if open}
		<div class="flex">
			<nav
				transition:fly={{ y: 400, duration: 400 }}
				class="absolute flex flex-col rounded-tl-lg rounded-bl-lg bg-purple-200 h-screen"
			>
				<a class="text-lg p-2" href="/">Home</a>
				<a class="text-lg p-2 hover:text-white" href="/resume">Resume</a>
				<a class="text-lg p-2 hover:text-white" href="/projects">Projects</a>
				<a class="text-lg p-2 hover:text-white" href="/about">About</a>
			</nav>
		</div>
	{/if}
</div>

<div class="lg:flex flex-row pt-10 justify-center align-middle hidden">
	<nav id="links">
		<a class="neuButton" href="/">Home</a>
		<a class="neuButton" href="/resume">Resume</a>
		<a class="neuButton" href="/projects">Projects</a>
		<a class="neuButton" href="/about">About</a>
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
