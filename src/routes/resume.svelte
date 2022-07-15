<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
</script>

<Header title={'My Resume'} />

<div class="flex h-screen w-1/2 m-auto">
	<iframe
		class="inline-block"
		title="Resume"
		src="https://drive.google.com/file/d/1N5TKfnxUCMIO6U9Z1Pjl2puC4oA6iebz/preview"
		width="100%"
		height="100%"
		allow="autoplay"
		frameBorder="0"
		scrolling="auto"
	/>
</div>
<Footer />
