<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<main class="flex flex-col min-h-screen flex-grow">
	<Header title={'Welcome to my Portfolio'} />
	<article class="flex flex-col pl-4 pr-4 font-space prose-slate prose-xl md:prose-2xl flex-grow">
		<h2> My name is Kade Pitsch, a self proclaimed full-stack developer.</h2>
		<section class="flex prose-slate prose-lg md:prose-2xl">
			Here is the place to explore my projects. I have a range
			of projects all the way from purely backend to graphic design. I am very passionate about programming
			as well as designing. Making sure that the final product looks good as well as feels easy to use.
			With this iteration of my portfolio website i wanted to emulate a combination of minimilism, modern
			and brutalism. Taking inspiration from architecture to fonts and everywhere inbetween.
		</section>
	</article>
	<Footer />
</main>
