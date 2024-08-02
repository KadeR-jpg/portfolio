<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { PUBLIC_DEV_URL } from '$env/static/public';
	import MediaItem from './MediaItem.svelte';

	interface StoredAudioInfo {}
	const base_url = dev ? PUBLIC_DEV_URL : `https://www.kadepitsch.com/`;
	let current_audio: any;
	let initial_load = true;
	let is_loading = false;
	let intervalId: NodeJS.Timeout;
	let last_playing_item: any;

	async function getNowPlaying() {
		if (initial_load) {
			is_loading = true;
		}
		try {
			const response = await fetch(`${base_url}api/now_playing`);
			current_audio = await response.json();
			mediaItemProps = getMediaItemProps();
			if (!current_audio.is_playing) {
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
	let mediaItemProps: any;
	function getMediaItemProps() {
		if (current_audio && current_audio.is_playing && !current_audio.podcast) {
			return {
				image_url: current_audio.cover_art,
				title: current_audio.title,
				subtitle: current_audio.album,
				subsubtitle: current_audio.artist,
				link_url: current_audio.link,
				is_playing: current_audio.is_playing
			};
		} else if (current_audio.is_playing && current_audio.podcast) {
			return {
				image_url: current_audio.cover_art,
				title: current_audio.title,
				subtitle: current_audio.host,
				subsubtitle: current_audio.publisher,
				link_url: last_playing_item.link,
				is_playing: current_audio.is_playing
			};
		}
		console.log(last_playing_item);
		return {
			image_url: last_playing_item.cover_art,
			title: last_playing_item.title,
			subtitle: last_playing_item.podcast ? last_playing_item.host : last_playing_item.album,
			subsubtitle: last_playing_item.podcast
				? last_playing_item.publisher
				: last_playing_item.artist,
			link_url: last_playing_item.link,
			is_playing: false
		};
	}

	onMount(async () => {
		getNowPlaying();
		intervalId = setInterval(() => {
			getNowPlaying();
		}, 2500);
		const stored_last_playing_item = localStorage.getItem('last_playing_item');
		if (stored_last_playing_item !== null) {
			last_playing_item = JSON.parse(stored_last_playing_item);
		}
	});
	onDestroy(() => {
		clearInterval(intervalId);
	});
	$: if (current_audio?.is_playing || current_audio?.is_listening) {
		last_playing_item = current_audio;
		localStorage.setItem('last_playing_item', JSON.stringify(current_audio));
	}
</script>

{#if mediaItemProps}
	<MediaItem {is_loading} {...mediaItemProps} />
{/if}
