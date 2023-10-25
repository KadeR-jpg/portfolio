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
					position: 'top-center',
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
<article
	class="grid grid-cols-1 md:grid-cols-6 place-items-center justify-items-center md:h-screen sm:gap-4 p-4"
>
	<div class="flex flex-col md:col-span-4">
		<div class=" rounded-2xl border-2 border-neutral-400">
			<h2 class="font-plex tracking-tighter text-4xl p-4">
				My name is Kade Pitsch, welcome to my portfolio.
			</h2>
			<section class="font-plex leading-normal text-base md:text-xl font-light pb-4 px-4 flex-1">
				Featuring some of my projects that showcase my skills in both
				backend development and graphic design. I am deeply invested in both programming and design,
				and I strive to create products that not only look appealing but also offer a seamless user
				experience. I hope you enjoy your visit and learn more about my skills and interests as a
				developer and designer.
			</section>
		</div>
		<div class="flex flex-row justify-between px-4 py-2 text-xs">
			<a
				href="https://github.com/KadeR-jpg"
				target="_blank"
				class="inline-flex items-center group underline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-4 h-4 group-hover:rotate-45 transition-transform duration-75 ease-in"
				>
					<path
						fill-rule="evenodd"
						d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
						clip-rule="evenodd"
					/>
				</svg>Github</a
			>
			<a
				href="https://www.linkedin.com/in/kade-pitsch-compsci/"
				class="inline-flex items-center group underline"
				target="_blank"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-4 h-4 group-hover:rotate-45 transition-transform duration-75 ease-in"
				>
					<path
						fill-rule="evenodd"
						d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
						clip-rule="evenodd"
					/>
				</svg>
				LinkedIn
			</a>
			<button
				class="underline inline-flex items-center group"
				on:click={() => setClipboard('kade.pitsch@gmail.com')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4 mr-1 fill-transparent group-hover:scale-110transition-all duration-75 ease-in"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
					/>
				</svg>

				kade.pitsch@gmail.com</button
			>
		</div>
	</div>
	<!-- <CodeBlock /> -->
		<div class="col-span-2">
			<NowPlaying />
		</div>
</article>
