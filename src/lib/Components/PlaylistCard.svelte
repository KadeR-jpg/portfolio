<script lang="ts">
	import { dev } from '$app/environment';
	import { PUBLIC_DEV_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { Playlist, SpotifyTrack } from '$lib/types/Playlist';

	interface Props {
		playlistId: string;
	}

	let { playlistId }: Props = $props();

	const base_url = dev ? PUBLIC_DEV_URL : `https://www.kadepitsch.com/`;

	let playlist: Playlist = $state();
	let error: string | null;
	let tracks: SpotifyTrack[] = $state([]);
	let loading = $state(true);

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

<div class="grid w-full border-1 border-stone-400">
	{#if loading}
		<p>Fetching playlist...</p>
	{/if}
	{#if playlist}
		<div class="flex flex-col gap-8">
			<h2 class="font-hedvig text-xl font-extralight text-stone-700 dark:text-stone-300">
				capsule / <em>{playlist.name}</em>
			</h2>

			<div class="group relative flex size-32 md:size-52 lg:size-64">
				{#each tracks as track, idx (track.id)}
					<img
						class:current={idx === 0}
						style="
								transform: rotate({getRandomRotation()}deg);
								top: {getRandomOffset()};
								left: {getRandomOffset()};
								z-index: {tracks.length - idx};"
						onclick={nextTrack}
						onkeydown={nextTrack}
						src={track.albumImg}
						alt="{track.name} album art"
						class="absolute inset-1 z-0 m-0 inline-flex size-32 items-center self-center object-cover antialiased transition-transform duration-150 ease-in md:size-52 lg:size-64 {(
							idx === 0
						) ?
							'hover:scale-105 active:scale-105'
						:	'cursor-default'}" />
				{/each}
			</div>
		</div>
		<div class="flex flex-col pt-4">
			<h3 class="font-base w-full font-hedvig text-sm font-light text-stone-700">
				<a
					class="font-base cursor-pointer text-sm text-stone-700 underline lg:text-lg dark:text-stone-300"
					target="_blank"
					rel="noopener noreferrer"
					href={tracks[0].spotify_link}>
					{tracks[0].name}
				</a>
			</h3>
			<p
				class="w-full text-pretty font-manrope text-sm text-stone-500 lg:text-base dark:text-stone-400">
				>{tracks[0].artist}
			</p>
		</div>
	{/if}
</div>
