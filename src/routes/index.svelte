<script lang="ts">
	import Header from '../Components/Header.svelte';
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<Header title="Home" />
<div class="flex flex-1">
	<article class="flex flex-row px-2 font-sans justify-center align-middle items-center">
		<div class="prose-slate prose-lg md:prose-2xl md:w-1/2 ">
			<h2 class="inline-flex justify-start font-plex">
				My name is Kade Pitsch, I am a full-stack developer.
			</h2>
			<section class="prose-slate prose-lg md:prose-xl font-plex">
				Welcome to my portfolio, featuring a wide range of projects that showcase my skills in both
				backend development and graphic design. I am deeply invested in both programming and design,
				and I strive to create products that not only look appealing but also offer a seamless user
				experience. I hope you enjoy your visit and learn more about my skills and interests as a
				developer and designer.
			</section>
		</div>
	</article>
</div>
