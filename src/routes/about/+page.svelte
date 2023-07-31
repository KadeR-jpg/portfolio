<script>
	import Header from '../../Components/Header.svelte';
	import Gallery from '../../Components/Gallery.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Header title={'About Me'} />
<div class="flex flex-col pl-4 pr-4 pb-4 font-plex prose-slate prose-xl text-gray-800">
	<h2 class="prose text-gray-900 md:text-5xl">
		I grew up in a small town of Montana, surrounded by fields and cows.
	</h2>
	<p class="indent-4 md:m-0">
		I come from a family with a strong agricultural heritage, and it has been a part of my life for
		as long as I can remember. In high school, I wasn't sure what I wanted to do after graduating,
		but I knew i wanted to go to college. I applied to Montana State University, my top choice, and
		was accepted . Although I had some exposure to computers and programming the summer before
		starting college, I had not yet decided on a major. My counselor suggested that computer science
		might not be the best fit for me because I was "bad at math." This only served to motivate me
		more, and I ended up declaring computer science as my major. Math eventually became my favorite
		subject.
	</p>
	<Gallery />
	<h3 class="text-right md:text-5xl mt-4">
		I graduated in May of 2021 with a bachelors degree in computer science
	</h3>
	<p class="indent-4">
		I am passionate about programming and staying up to date with the latest technologies. This
		website was my first large-scale project, and I used it as an opportunity to challenge myself to
		learn JavaScript. The site is built with the
		<a href="https://svelte.dev/" class="font-grenze hover:underline underline-offset-1">Svelte </a>
		framework and styled with
		<a href="https://tailwindcss.com/" class="font-grenze hover:underline underline-offset-1"
			>TailwindCSS.</a
		>
		The image gallery above features some of the individuals who have had the most significant impact
		on my work. In my view, a website is both a work of art and a functional product. When seeking inspiration,
		I often turn to sources that are unrelated to technology. I see it as a thought experiment, in which
		I try to capture certain emotions by isolating specific elements from various objects. I strive to
		create unique, timeless designs, rather than following current website or design trends.
	</p>
</div>
