<script lang="ts">
	import { onMount } from 'svelte';
	import AsciiSpinner from './AsciiSpinner.svelte';
	import { fly, fade, slide, blur, scale } from 'svelte/transition';
	import { quintOut, quintIn, linear } from 'svelte/easing';
	// import anime from 'animejs';
	export let image_url: string;
	export let title: string;
	export let subtitle: string;
	export let subsubtitle: string;
	export let link_url: string;
	export let is_playing: boolean;
	export let is_loading: boolean;
</script>

{#if is_loading}
	<div class="flex h-80 w-80 flex-col items-center justify-center rounded-3xl text-2xl">
		<AsciiSpinner {is_loading} />
	</div>
{:else if is_playing}
	<div class="grid max-w-80 overflow-hidden md:text-base">
		<div class="relative my-4 flex flex-col items-center p-4">
			<p class="pb-2 text-center text-xs text-stone-400">
				{is_playing ? 'Somewhere currently listening to' : 'I was listening to'}
			</p>
			<img
				in:blur
				src={image_url}
				alt="cover art"
				class="w-60 rounded-full ring-1 ring-neutral-800 {is_playing
					? ''
					: 'opacity-20 blur-sm hover:opacity-100 hover:blur-none'} transition-all duration-300 ease-in"
				style="animation: spin 100s infinite linear;"
			/>
		</div>
		<div class="flex flex-col text-left">
			<div class="px-4 pb-4">
				<a href={link_url} rel="noopener noreferrer" target="_blank" {title}>
					<p
						class="line-clamp-1 text-ellipsis text-pretty font-hedvig text-lg font-semibold text-stone-700 underline"
					>
						{title}
					</p>
				</a>
				<p class=" line-clamp-1 font-manrope text-sm font-semibold text-stone-500">
					{subtitle}
				</p>
				<p class="line-clamp-1 font-manrope text-xs font-semibold text-stone-400">
					{subsubtitle}
				</p>
			</div>
		</div>
	</div>
{:else}
	<div class="grid max-w-80 overflow-hidden md:text-base">
		<div class="relative my-4 flex flex-col items-center p-4">
			<p class="pb-2 text-center text-xs text-stone-400">I was listening to</p>
		</div>
		<div class="flex flex-col text-left">
			<div class="px-4 pb-4">
				<a href={link_url} rel="noopener noreferrer" target="_blank" {title}>
					<p
						class="line-clamp-1 text-ellipsis text-pretty font-hedvig text-lg font-semibold text-stone-700 underline"
					>
						{title}
					</p>
				</a>
				<p class=" line-clamp-1 font-manrope text-sm font-semibold text-stone-500">
					{subtitle}
				</p>
				<p class="line-clamp-1 font-manrope text-xs font-semibold text-stone-400">
					{subsubtitle}
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes -global-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
