<script>
	import Header from '../../lib/Components/Header.svelte';
	import Gallery from '../../lib/Components/Gallery.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container prose mx-auto flex flex-col justify-center p-4 font-plex text-neutral-800">
	<h2 class="font-manrope font-semibold md:text-4xl">
		I grew up in a small town of Montana, surrounded by fields and cows.
	</h2>
	<p>
		I come from a family with a strong agricultural heritage, and it has been a part of my life for
		as long as I can remember. In high school, I wasn't sure what I wanted to do after graduating,
		but I knew i wanted to go to college. I applied to Montana State University, my top choice, and
		was accepted . Although I had some exposure to computers and programming the summer before
		starting college, I had not yet decided on a major. My counselor suggested that computer science
		might not be the best fit for me because I was "bad at math." This only served to motivate me
		more, and I ended up declaring computer science as my major. Math eventually became my favorite
		subject.
	</p>
	<!-- <Gallery /> -->
	<h2 class="mt-0 font-manrope font-semibold md:text-3xl">
		I graduated in May of 2021 with a bachelors degree in computer science.
	</h2>
	<p>
		I am passionate about programming and staying up to date with the latest technologies. This
		website was my first large-scale project, and I used it as an opportunity to challenge myself to
		beecome more comfortable with TypeScript. This site is built with the Svelte and TailwindCSS.
	</p>
</div>
