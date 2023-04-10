<script lang="ts">
	import '../app.postcss';
	import favicon from '$lib/Icons/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg" />
</svelte:head>
<body class="smoll-smooth flex flex-col justify-center">
	<slot />
</body>
