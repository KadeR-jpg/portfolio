<script lang="ts">
	import PlaylistCard from '$components/PlaylistCard.svelte';
	import { onMount } from 'svelte';
	let playlists = $state([]);
	let isLoading = $state(true);
	let error: string = $state(null);

	onMount(async () => {
		try {
			const playlistIds = ['7eGqyYZkkTPYD56GFReyCO'];
			const response = await fetch(`/api/get_playlists?ids=${playlistIds.join(',')}`);
			if (!response.ok) {
				throw new Error('Failed to fetch playlists');
			}
			const data = await response.json();
			playlists = data.playlists;
			console.log(playlists[0]);
		} catch (e) {
			error = e.message;
		} finally {
			isLoading = false;
		}
	});
</script>

<div class="playlists-container">
	<h1>My Spotify Playlists</h1>

	{#if isLoading}
		<p>Loading playlists...</p>
	{:else if error}
		<p class="error">Error: {error}</p>
	{:else}
		{#each playlists as playlist (playlist.id)}
			<PlaylistCard {playlist} />
		{/each}
	{/if}
</div>

<style>
	.playlists-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	h1 {
		color: #1db954;
		margin-bottom: 24px;
	}

	.error {
		color: #ff5555;
	}
</style>
