<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
	let index = $state(0);
	let intervalId: ReturnType<typeof setInterval>;

	onMount(() => {
		intervalId = setInterval(() => {
			index = (index + 1) % frames.length;
		}, 100);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<span class="whitespace-pre">{frames[index]}</span>
