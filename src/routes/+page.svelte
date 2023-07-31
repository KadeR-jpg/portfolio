<script lang="ts">
	import Header from '../Components/Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import toast from 'svelte-french-toast';
	
	inject({ mode: dev ? 'development' : 'production' });

	import NowPlaying from '../Components/NowPlaying.svelte';
	import CodeBlock from '../Components/CodeBlock.svelte';
	function setClipboard(text: string) {
		var type = 'text/plain';
		var blob = new Blob([text], { type });
		var data = [new ClipboardItem({ [type]: blob })];
		navigator.clipboard
			.write(data)
			.then(function () {
				toast.success('Copied', {
					style: 'border: 2px solid #000; color: #000;',
					position: 'bottom-center',
					iconTheme: {
						primary: '#000',
						secondary: '#fff'
					}
				});
			})
			.catch(() => {
				toast.error('error');
			});
	}
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<Header title="Home" />
<article class="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen p-4">
	<div class="flex flex-col gap-4 col-span-2">
		<div class="flex relative flex-col rounded-2xl border-2 border-neutral-600">
			<h2 class="font-plex tracking-tighter text-4xl p-4">
				My name is Kade Pitsch, I am an aspiring full-stack developer.
			</h2>
			<section class="font-plex leading-tight text-lg font-light pb-4 px-4 flex-1">
				Welcome to my portfolio, featuring some of my projects that showcase my skills in both
				backend development and graphic design. I am deeply invested in both programming and design,
				and I strive to create products that not only look appealing but also offer a seamless user
				experience. I hope you enjoy your visit and learn more about my skills and interests as a
				developer and designer.
			</section>
		</div>
		<CodeBlock />
	</div>
	<div class="col-span-1 flex flex-col justify-between">
		<div class="m-auto">
			<NowPlaying />
		</div>
		<div class="flex flex-row justify-between px-4 py-2 text-xs">
			<a
				href="https://github.com/KadeR-jpg"
				class="flex align-middle justify-center underline hover:scale-110 transition-transform ease-in-out duration-150"
				>Github</a
			>
			<a
				href="https://www.linkedin.com/in/kade-pitsch-compsci/"
				class="flex align-middle justify-center underline hover:scale-110 transition-transform ease-in-out duration-150"
				>LinkedIn
			</a>
			<button class="underline" on:click={() => setClipboard('kade.pitsch.gmail.com')}
				>kade.pitsch@gmail.com</button
			>
		</div>
	</div>
</article>
