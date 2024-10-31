<script lang="ts">
	import AsciiSpinner from './AsciiSpinner.svelte';
	import { blur } from 'svelte/transition';
	interface Props {
		image_url: string;
		title: string;
		subtitle: string;
		subsubtitle: string;
		link_url: string;
		is_playing: boolean;
		is_loading: boolean;
	}

	let {
		image_url,
		title,
		subtitle,
		subsubtitle,
		link_url,
		is_playing,
		is_loading
	}: Props = $props();
	let isExpanded = $state(true);

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<div class="relative w-full">
	<button
		onclick={toggleExpand}
		class="inline-flex w-full items-center justify-end px-8 text-center text-xs font-light text-stone-400 dark:text-stone-400"
		aria-label={isExpanded ? 'Collapse' : 'Expand'}
	>
		{isExpanded ? 'Collapse' : 'Expand'}

		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="size-5 {isExpanded ? '' : 'rotate-180'} transition-transform duration-100 ease-in"
		>
			<path
				fill-rule="evenodd"
				d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	{#if isExpanded}
		{#if is_loading}
			<div class="flex h-80 max-w-80 flex-col items-center justify-center rounded-3xl text-2xl">
				<AsciiSpinner {is_loading} />
			</div>
		{:else if is_playing}
			<div class="grid max-w-80 overflow-hidden md:text-base" transition:blur|global={{ duration: 50 }}>
				<div class="my-4 flex flex-col items-center p-4">
					<img
						in:blur|global
						src={image_url}
						alt="cover art"
						class="bg-conic-gradient-right bg-conic-gradient-right w-40 rounded-full ring-1 ring-stone-800 md:w-60 dark:ring-stone-100 {is_playing
							? ''
							: 'opacity-20 blur-sm hover:opacity-100 hover:blur-none'} transition-all duration-300 ease-in"
						style="animation: spin 100s infinite linear;"
					/>
				</div>
				<div class="flex flex-col text-left">
					<div class="px-4 pb-4">
						<a href={link_url} rel="noopener noreferrer" target="_blank" {title}>
							<p
								class="line-clamp-1 text-ellipsis text-pretty font-hedvig text-lg font-semibold text-stone-700 underline dark:text-stone-300"
							>
								{title}
							</p>
						</a>
						<p
							class=" line-clamp-1 font-manrope text-sm font-semibold text-stone-500 dark:text-stone-400"
						>
							{subtitle}
						</p>
						<p
							class="line-clamp-1 font-manrope text-xs font-semibold text-stone-400 dark:text-stone-500"
						>
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
	{/if}
</div>

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
