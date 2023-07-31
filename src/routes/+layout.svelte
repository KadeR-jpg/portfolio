<script lang="ts">
	import '../app.postcss';
	import favicon from '$lib/Icons/favicon.svg';
	import { Toaster } from 'svelte-french-toast';
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg" />
</svelte:head>
<Toaster />
<body class="flex flex-col w-screen font-plex min-h-screen flex-grow h-screen overflow-x-hidden">
	<slot />
</body>
