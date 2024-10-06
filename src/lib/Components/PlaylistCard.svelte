<script lang="ts">
	import { dev } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { PUBLIC_DEV_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { Playlist, SpotifyTrack } from '$lib/types/Playlist';

	export let playlistId: string;

	const base_url = dev ? PUBLIC_DEV_URL : `https://www.kadepitsch.com/`;

	let playlist: Playlist;
	let error: string | null;
	let tracks: SpotifyTrack[] = [];
	let loading = true;

	let rotations: number[] = [];

	const getRandomRotation = () => (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.99 * 15);
	const getRandomOffset = () => {
		const offset = Math.random() * 20 - 5;
		return `${offset}px`;
	};

	function nextTrack() {
		tracks = [...tracks.slice(1), tracks[0]];
		rotations = [...rotations.slice(1), rotations[0]];
	}

	async function fetchPlaylist(id: string) {
		try {
			const resp = await fetch(`${base_url}api/get_playlists?id=${id}`);
			if (!resp.ok) throw new Error('Failed to fetch playlist');
			const data = await resp.json();
			playlist = {
				...data,
				tracks: data.tracks
			};
			tracks = data.tracks;
			loading = false;
		} catch (e) {
			error = 'An error occurred while fetching the playlist';
			console.error(error, e);
		}
	}
	onMount(async () => {
		fetchPlaylist(playlistId);
	});
</script>

<div class="grid place-content-center">
	{#if loading}
		<p>Fetching playlist...</p>
	{/if}
	{#if playlist}
		<div class="flex flex-col gap-8">
			<h2 class="font-hedvig text-xl font-extralight text-stone-700 dark:text-stone-300">
				capsule / <em>{playlist.name}</em>
			</h2>
			<div class="flex">
				<div class="group container relative flex size-32 md:size-52 lg:size-64">
					{#each tracks as track, idx (track.id)}
						<button
							on:click={nextTrack}
							class="absolute inset-0 z-0 w-full self-center"
							class:current={idx === 0}
							style="
								transform: rotate({getRandomRotation()}deg);
								top: {getRandomOffset()};
								left: {getRandomOffset()};
								z-index: {tracks.length - idx};">
							<img
								src={track.albumImg}
								alt="{track.name} album art"
								class="inset-1 inline-flex size-32 items-center object-cover blur transition-transform duration-150 ease-in md:size-52 lg:size-64 {(
									idx === 0
								) ?
									'!blur-none hover:scale-105'
								:	'cursor-default'}" />
						</button>
					{/each}
				</div>
			</div>
			<div class="flex flex-col">
				<h3 class="font-hedvig">
					<a
						class="font-base cursor-pointer text-lg text-stone-700 underline dark:text-stone-300"
						target="_blank"
						rel="noopener noreferrer"
						href={tracks[0].spotify_link}>
						{tracks[0].name}
					</a>
				</h3>
				<p class="w-full text-center font-manrope text-stone-500 dark:text-stone-400">
					by {tracks[0].artist}
				</p>
			</div>
		</div>
	{/if}
</div>
