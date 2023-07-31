<script lang="ts">
	import Navigation from './Navigation.svelte';
	export let title = 'No Title Provided';
</script>

<header class="flex flex-row justify-between border-b-2 border-black bg-white sticky top-0 z-50">
	<div class="flex text-3xl lg:text-3xl font-light font-plex p-2 w-2/3 h-1/4 text-neutral-500">
		{title}
	</div>
	<Navigation />
</header>
