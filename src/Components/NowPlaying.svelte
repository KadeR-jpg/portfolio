<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { PUBLIC_DEV_URL } from '$env/static/public';
	import MediaItem from './MediaItem.svelte';

	const base_url = dev ? PUBLIC_DEV_URL : `https://www.kadepitsch.com/`;

	let current_audio: any;
	let is_loading = false;
	let intervalId: NodeJS.Timer;
	let initial_load = true;
	// async function getNowPlaying() {
	// 	isLoading = true;
	// 	song = await fetch(`${base_url}api/now_playing`)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.finally(() => {
	// 			isLoading = false;
	// 		});
	// }
	async function getNowPlaying() {
		if (initial_load) {
			is_loading = true;
		}
		try {
			const response = await fetch(`${base_url}api/now_playing`);
			current_audio = await response.json();
			if (!current_audio.is_playing || !current_audio.is_listening) {
				initial_load = true;
			}
		} catch (error) {
			console.error('Error fetching now playing:', error);
		} finally {
			if (initial_load) {
				is_loading = false;
				initial_load = false;
			}
		}
	}

	onMount(async () => {
		getNowPlaying();
		intervalId = setInterval(() => {
			getNowPlaying();
		}, 5000);
	});
	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>
{#if current_audio && current_audio.is_playing === true}
	<MediaItem
		image_url={current_audio.albumImageUrl}
		title={current_audio.title}
		subtitle={current_audio.album}
		subsubtitle={current_audio.artist}
		link_url={current_audio.songUrl}
		is_playing={current_audio.is_playing}
		{is_loading}
	/>
	{:else if current_audio && current_audio.listeningToPodcast}
		<MediaItem
		{is_loading}
		image_url={current_audio.cover_art}
		title={current_audio.name}
		subtitle={current_audio.description}
		subsubtitle=""
		link_url={current_audio.link}
		is_playing={current_audio.isListening}
	/>
{/if}
