<script lang="ts">
	import Navigation from './Navigation.svelte';
	export let title = 'No Title Provided';
</script>

<header class="flex flex-row justify-between pb-4 bg-white sticky top-0 z-50">
	<div class="flex text-5xl lg:text-7xl font-bold font-grenze p-2 w-2/3 h-1/4">
		{title}
	</div>
	<Navigation />
</header>
