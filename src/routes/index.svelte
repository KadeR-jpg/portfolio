<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<main class="flex flex-col min-h-screen flex-grow">
	<Header title={'Welcome to my Portfolio'} />
	<article
		class="flex flex-col pl-4 pr-4 font-sans prose-slate prose-xl md:prose-2xl flex-grow md:w-1/2 md:m-auto md:justify-center md:content-center"
	>
		<h2>My name is Kade Pitsch, I am a self proclaimed full-stack developer.</h2>
		<section class="flex flex-col flex-grow prose-slate prose-lg md:prose-xl">
			Welcome to my portfolio, featuring a wide range of projects that showcase my skills in both
			backend development and graphic design. I am deeply invested in both programming and design,
			and I strive to create products that not only look appealing but also offer a seamless user
			experience. As you browse through my portfolio, you'll see how I've blended elements of
			minimalism, modernity, and brutalism to create cohesive and unique projects. I hope you enjoy
			your visit and learn more about my skills and interests as a developer and designer.
		</section>
	</article>
	<Footer />
</main>
