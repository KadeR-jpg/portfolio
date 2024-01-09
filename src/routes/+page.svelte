<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	// import toast from 'svelte-french-toast';

	inject({ mode: dev ? 'development' : 'production' });
	const links = [
		{
			link: '/home',
			title: '/home',
			style: `bg-gradient-to-br`
		},
		{
			link: '/projects',
			title: '/projects',
			style: `bg-gradient-to-bl`
		},
		{
			link: '/home',
			title: '/blog',
			style: `bg-gradient-to-tr`
		},
		{
			link: '/home',
			title: '/tools',
			style: `bg-gradient-to-tl`
		}
	];

	// import CodeBlock from '../Components/CodeBlock.svelte';
	// function setClipboard(text: string) {
	// 	var type = 'text/plain';
	// 	var blob = new Blob([text], { type });
	// 	var data = [new ClipboardItem({ [type]: blob })];
	// 	navigator.clipboard
	// 		.write(data)
	// 		.then(function () {
	// 			toast.success('Copied', {
	// 				style: 'border: 2px solid #000; color: #000;',
	// 				position: 'bottom-center',
	// 				iconTheme: {
	// 					primary: '#000',
	// 					secondary: '#fff'
	// 				}
	// 			});
	// 		})
	// 		.catch(() => {
	// 			toast.error('error');
	// 		});
	// }
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<article id="main" class="prose prose-stone py-4 dark:prose-invert">
	<h2 class="text-pretty font-hedvig text-3xl font-bold dark:font-medium">
		My name is Kade Pitsch, welcome to my portfolio.
	</h2>
	<section class="text-pretty font-manrope">
		Featuring some of my projects that showcase my skills in both backend development and graphic
		design. I am deeply invested in both programming and design, and I strive to create websites
		that not only look appealing but also offer a seamless user experience.
	</section>
	<p class="font-manrope">
		I grew up on a farm in Montana. I had no idea what I wanted to do after highschool so I applied
		to MSU in Bozeman. I did not know what i wanted my major to be either but I remember my
		counselor suggesting that computer science would not be a good fit for me because I was not
		great at math. I chose computer science anyway and math became my favorite subject.
	</p>
	<h2 class="text-pretty font-hedvig text-2xl dark:font-medium">
		I graduated in May of 2021 with a B.S of <mark
			class="bg-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-300 via-violet-50 to-transparent dark:from-violet-800 dark:via-stone-800 dark:text-stone-100"
		>
			Computer Science.
		</mark>
	</h2>
	<p class="font-manrope">
		I am passionate about programming and trying to stay up to date with the latest technologies.
		This website was my first solo project out of school and i have just been chucking new things on
		it and revising it for fun. I used it as an opportunity to challenge myself to become more
		comfortable with TypeScript. It's built with Sveltekit and TailwindCSS.
	</p>
</article>

<!-- <CodeBlock /> -->
