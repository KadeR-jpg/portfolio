<script lang="ts">
	import '../app.css';
	import favicon from '$lib/Icons/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg" />
</svelte:head>
<slot />
