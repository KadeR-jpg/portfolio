<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	export let isLoading: boolean = false;
	const spinnerCharacters = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
	let currentCharacter = 0;
	let intervalId: NodeJS.Timeout;

	// Function to update the character index in the spinner
	function updateCharacterIndex() {
		currentCharacter = (currentCharacter + 1) % spinnerCharacters.length;
	}

	// Spinning animation function
	function startAnimation() {
		intervalId = setInterval(updateCharacterIndex, 100);
	}

	// Start the animation when the component is mounted
	onMount(() => {
		startAnimation();
	});

	// Stop the animation when the component is destroyed
	onDestroy(() => {
		clearInterval(intervalId);
	});

	// Simulate data fetching after 2 seconds
	setTimeout(() => {
		isLoading = false;
	}, 2000);
</script>

{#if isLoading}
	<span class="spinner">{spinnerCharacters[currentCharacter]}</span>
{/if}

<!-- Spinner.svelte -->
<style>
	.spinner {
		white-space: pre;
	}
</style>
