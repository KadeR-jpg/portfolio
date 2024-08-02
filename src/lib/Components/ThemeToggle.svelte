<script lang="ts">
	import { onMount } from 'svelte';

	let darkMode: Boolean;

	function updateDarkMode() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}

	function toggleDarkMode() {
		if (darkMode) {
			localStorage.theme = 'light';
		} else {
			localStorage.theme = 'dark';
		}
		updateDarkMode();
	}

	onMount(() => {
		updateDarkMode();
	});
</script>

<button on:click={toggleDarkMode} class="flex">
	&#9680;{darkMode ? 'Dark' : 'Light'}
</button>
