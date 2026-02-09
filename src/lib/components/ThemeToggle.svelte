<script lang="ts">
	import { onMount } from 'svelte';

	let darkMode = $state(false);

	function applyTheme(dark: boolean) {
		darkMode = dark;
		document.documentElement.classList.toggle('dark', dark);
	}

	function resolveTheme(): boolean {
		if (localStorage.theme === 'dark') return true;
		if (localStorage.theme === 'light') return false;
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function toggleDarkMode() {
		const next = !darkMode;
		localStorage.theme = next ? 'dark' : 'light';
		applyTheme(next);
	}

	onMount(() => {
		applyTheme(resolveTheme());

		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = () => {
			if (!localStorage.theme) applyTheme(mq.matches);
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});
</script>

<button
	class="flex items-center gap-2 rounded-lg text-stone-700 dark:text-stone-100"
	onclick={toggleDarkMode}
>
	&#9680;{darkMode ? 'Dark' : 'Light'}
</button>
