<script lang="ts">
	import Navigation from './Navigation.svelte';
</script>

<header class="sticky top-0 z-50 flex flex-row justify-between bg-stone-50">
	<Navigation />
</header>

<style>
	header {
		view-transition-name: header;
	}
</style>
