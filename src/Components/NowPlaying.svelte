<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import AsciiSpinner from './AsciiSpinner.svelte';
	import { dev } from '$app/environment';
	import { PUBLIC_DEV_URL } from '$env/static/public';

	const base_url = dev ? PUBLIC_DEV_URL : `https://kadepitsch.com/`;

	let song: any;
	let isLoading = false;
	$: song;

	onMount(async () => {
		// const response = await fetch(`${window.location.origin}/backend/env`);
		// const resp = await response.json();
		// console.log(resp);
		// VERCEL_URL = resp.VERCEL_URL;
		getNowPlaying();
	});
	async function getNowPlaying() {
		// const base_url = dev ? PUBLIC_DEV_URL : `https://${VERCEL_URL}/`;
		// const base_url = `https://kadepitsch.com/`;
		isLoading = true;
		song = await fetch(`${base_url}api/now_playing`)
			.then((res) => {
				return res.json();
			})
			.finally(() => {
				isLoading = false;
			});
	}

	setInterval(() => {
		getNowPlaying();
	}, 5000);
</script>

<!-- {song ? 'hover:bg-[#1DB954] dark:hover:bg-[#1DB954]': ''} -->
<div
	class="group relative items-center transition-colors decoration-none dark:bg-gray-50/10 text-sm"
>
	{#if !song}
		<div class="flex flex-col rounded-3xl justify-center items-center text-2xl h-80 w-80">
			<AsciiSpinner {isLoading} />
		</div>
	{:else if song}
		{#if song.isPlaying === true}
			<div class="flex flex-col text-xs md:text-base">
				<div class="flex flex-col justify-start">
					{#key song.albumImageUrl}
						<div
							class="flex flex-col justify-center items-center relative my-4 border-2 border-black p-4 rounded-t-3xl rounded-b"
						>
							<p class="text-center text-xs pb-2 text-neutral-600">
								Somewhere currently listening to
							</p>
							<img
								src={song.albumImageUrl}
								alt="album art"
								class="album-art flex rounded-full w-40 md:w-56"
								style="animation: {song.isPlaying ? 'spin 50s infinite linear' : 'none'};"
							/>
						</div>
					{/key}
					<div class="grid grid-rows-1 font-plex">
						{#key [song.album, song.artist, song.title]}
							<div class="border-2 border-black p-4 rounded-b-3xl rounded-t">
								<a
									href={song.songUrl}
									rel="noopener noreferrer"
									target="_blank"
									title={song.artist}
								>
									<p
										class="w-60 overflow-ellipsis hover:underline scroll-text whitespace-nowrap overflow-hidden text-xl"
									>
										{song.title}
									</p>
								</a>
								<p
									class="overflow-hidden whitespace-nowrap text-neutral-700 text-ellipsis text-base"
								>
									{song.album}
								</p>
								<p class="text-sm text-neutral-400 whitespace-nowrap">
									{song.artist}
								</p>
							</div>
						{/key}
					</div>
				</div>
			</div>
		{:else}
			<div class="flex flex-col text-xs md:text-base">
				<div class="flex flex-col justify-start">
					{#key song.isPlaying}
						<div
							class="flex flex-col justify-center container relative my-4 border border-black p-4 rounded-t-3xl rounded-b"
							in:fade
						>
							<p class="text-center text-xs pb-2 text-neutral-600">I was listening to</p>
							<img
								src={song.albumImageUrl}
								alt="album art"
								class="album-art rounded-full w-40 md:w-56 opacity-30 blur-sm hover:blur-none hover:opacity-100 transition-all duration-150 ease-in-out"
								style="animation: none;"
							/>
						</div>
					{/key}
					<div class="grid grid-rows-1 font-plex">
						{#key song.isPlaying}
							<div class="border border-black p-4 rounded-b-3xl rounded-t" in:fade>
								<a
									href={song.songUrl}
									rel="noopener noreferrer"
									target="_blank"
									title={song.artist}
								>
									<p
										class="w-60 overflow-ellipsis hover:underline scroll-text whitespace-nowrap overflow-hidden text-xl"
									>
										{song.title}
									</p>
								</a>
								<p
									class="overflow-hidden whitespace-nowrap text-neutral-700 text-ellipsis text-base"
								>
									{song.album}
								</p>
								<p class="text-sm text-neutral-400 whitespace-nowrap">
									{song.artist}
								</p>
							</div>
						{/key}
					</div>
				</div>
			</div>
		{/if}
	{:else}
		<p>here</p>
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
