<script lang="ts">
	import Header from '../Components/Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
	// import NowPlaying from '../Components/NowPlaying.svelte';
	// import CodeBlock from '../Components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<Header title="Home" />
<div class="flex flex-1">
	<article
		class="flex flex-col md:flex-row justify-center md:justify-around px-2 font-sans align-middle items-center"
	>
		<!-- <CodeBlock /> -->
		<div class="prose-slate prose-lg md:prose-2xl md:w-1/2">
			<h2 class="inline-flex justify-start font-plex">
				My name is Kade Pitsch, I am a full-stack developer.
			</h2>
			<section class="prose-slate prose-lg md:prose-xl font-plex">
				Welcome to my portfolio, featuring some of my projects that showcase my skills in both
				backend development and graphic design. I am deeply invested in both programming and design,
				and I strive to create products that not only look appealing but also offer a seamless user
				experience. I hope you enjoy your visit and learn more about my skills and interests as a
				developer and designer.
			</section>
		</div>
		<!-- <NowPlaying /> -->
	</article>
</div>
