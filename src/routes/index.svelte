<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<main class="flex flex-col min-h-screen flex-grow">
	<Header title={'Welcome to my Portfolio'} />
	<article class="flex flex-col pl-4 pr-4 font-sans prose-slate prose-xl md:prose-2xl flex-grow md:w-1/2 md:m-auto md:justify-center md:content-center">
		<h2> My name is Kade Pitsch, I am a self proclaimed full-stack developer.</h2>
		<section class="flex flex-col flex-grow prose-slate prose-lg md:prose-xl lg:prose-2xl">
			Here is the place to explore my projects. I have a range
			of projects all the way from purely backend to graphic design. I am very passionate about programming
			as well as designing. Making sure that the final product looks good as well as feels easy to use.
			With this iteration of my portfolio I wanted to emulate a combination of minimalism, modernity
			and brutalism. Taking inspiration from anything like architecture and all the way to fonts.
		</section>
	</article>
	<Footer />
</main>
