<script>
	import Header from '../Components/Header.svelte';
	import Gallery from '../Components/Gallery.svelte';
	import Footer from '../Components/Footer.svelte';
</script>

<Header title={'About Me'} />
<div class="flex flex-col pl-4 pr-4 pb-4 font-space prose-slate prose-xl text-gray-800">
	<h2 class="prose text-gray-900 md:text-5xl">
		I grew up in a small town of Montana, surrounded by fields and cows.
	</h2>
	<p class="md:m-0">
		My family came from agricultural roots and carried on that tradition throughout my lifetime.
		When I got to high school I was not sure what I wanted to do and I did not figure it out until
		my senior year. Friends were going to college so I figured that I should as well. I applied to
		my first and only choice in April of 2016 and got accepted a month later to Montana State
		University. I had gotten some exposure to computers and some very high-level programming the
		summer prior. I still had not chosen a direction for my studies but I had suggested to my
		counselor that I was interested in computer science but they said I was too bad at math to
		actually complete a computer science degree. I guess that was all the motivation I needed, I
		went on to declare computer science as my major and math quickly became my favorite subject.
	</p>
	<Gallery />
	<h3 class="text-right md:text-5xl  mt-4">
		I graduated in May of 2021 with a bachelors degree in computer science
	</h3>
	<p>
		I love programming and keeping up to date with all the current technologies. This site was the
		first large project I took on to challenge myself to finally learn some JavaScript. This site is
		built with a JS framework called
		<a href="https://svelte.dev/" class="font-grenze hover:underline underline-offset-1">Svelte </a>
		and styled with
		<a href="https://tailwindcss.com/" class="font-grenze hover:underline underline-offset-1"
			>TailwindCSS.</a
		>
		Above is an image gallery of some of my largest influences. In my opinion a website is just as much
		as a work of art as it is a product with a function. My time is usually searching for inspiration
		in things that are fully detached from technology. It is more of a thought experiment for me. Taking
		specific elements out of objects and trying to emulate a feeling. I do not want to look for inspiration
		in other website's or modern design trends because I want my work to be unique and timeless.
	</p>
</div>

<Footer />
