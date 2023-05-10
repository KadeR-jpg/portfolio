<script lang="ts">
	import '../app.postcss';
	import favicon from '$lib/Icons/favicon.svg';
	import Footer from '../Components/Footer.svelte';
	import Header from '../Components/Header.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg" />
</svelte:head>
<body class="flex flex-col min-h-screen font-plex">
	<slot />
	<Footer />
</body>
