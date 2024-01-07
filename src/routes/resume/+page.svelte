<script lang="ts">
	import type { CardProps } from '$lib/types/CardProps';
	import Card from '$lib/Components/Card.svelte';
	import resume from '$lib/2023_resume.pdf';
	let jobs_array: CardProps[] = [
		{
			title: 'Python Developer - Florida Blue',
			fromTo: 'October 2022 - June 2023',
			bps: [
				'Key contributor to the payment platform team, driving user engagement through innovative logic implementations.',
				'Maintained code-base integrity for robust and error-free operations.',
				'Utilized Stripe API for secure payment validation, enhancing data accuracy and security.'
			]
		},
		{
			title: 'Solutions Developer - Zoot Enterprise',
			fromTo: 'July 2021 - May 2022',
			bps: [
				'Led system efficiency improvements by identifying and fixing bugs, and refactoring code with enhanced error logging.',
				'Oversaw production installs, employing tools like Kibana, MySQL, and Linux servers for real-time monitoring.',
				'Initiated and developed a Bash program to automate peak season data collection, reducing manual data entry by 30 days.'
			]
		},
		{
			title: 'Python Developer - MSU',
			fromTo: 'February 2020 - November 2020',
			bps: [
				'Engineered an advanced automated script to streamline the scraping and extraction of student names from Dean and President’s lists',
				'Utilized Selenium Web-Driver for script integration.',
				'Led the development of a prototype leveraging the LinkedIn API to enhance connections and outreach to students.'
			]
		}
	];

	let academic_projects: CardProps[] = [
		{
			title: 'Spotify Data Classification',
			fromTo: '2019',
			bps: [
				`As part of my project, I utilized a comprehensive data set from Spotify to investigate potential`,
				`correlations between high-energy songs and their placement on the charts. To conduct this analysis, I used various`,
				`programming techniques and tools such as Python, as well as specialized libraries like SciKit and NumPy to handle the`,
				`large and complex data sets involved in this project.`
			]
		},
		{
			title: 'Animated Job Scheduler',
			fromTo: '2019',
			bps: [
				`I co-developed a website using HTML/CSS and Javascript to create a simulation of how a Central
			Processing Unit (CPU) schedules jobs in the background. The simulation allows users to select the number and priority
			of jobs. The website also incorporates animation to enhance the user experience.`
			]
		},
		{
			title: 'CatScript',
			fromTo: '2019',
			bps: [
				`As part of my senior capstone project, I was responsible for developing a specialized programming language
			using Java. This involved implementing advanced techniques such as tokenization, parsing, and Java bytecode optimization
			to ensure efficient and effective performance of the language.`
			]
		}
	];
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<div class="flex flex-col gap-2 font-hedvig">
	<div class="prose prose-stone">
		<div class="w-full items-baseline justify-between md:inline-flex">
			<h1 class="text-3xl">Professional Experience</h1>
			<a
				class="bg-transparent from-pink-300 via-stone-100 font-semibold hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
				target="_blank"
				href={resume}
			>
				PDF version
			</a>
		</div>
		<p class="font-manrope">
			Software engineer <mark>currently looking for a new role.</mark>
			I have 3 years of experience specializing in backend development and web development with Svelte/SvelteKit.
			I have professional experience in Python, TypeScript and JavaScript, as well as soft skills like
			teamwork and problem-solving. I am Looking for opportunities to leverage my skills in a challenging
			role.
		</p>
	</div>
	<hr class="not-prose w-1/2 self-center border-dotted" />
	<div class="flex flex-col gap-4">
		{#each jobs_array as job}
			<Card cardType="Job" {...job} />
			<hr />
		{/each}
	</div>
	<!-- {#each jobs_array as job}
		<div class="flex flex-col rounded-2xl border border-neutral-300 px-2 pt-4 shadow">
			<div class="mx-2 flex flex-col items-center gap-1 border-b border-neutral-200 pb-2">
				<p class="inline-flex text-lg font-bold md:font-semibold">{job.title}</p>
				<div class="inline-flex w-full justify-around md:justify-center md:gap-4">
					<p class="inline-flex text-xs font-normal text-neutral-600 md:text-sm">
						{job.company}
					</p>
					<p class="inline-flex text-xs font-normal text-neutral-600 md:text-sm">
						{job.date}
					</p>
				</div>
			</div>
			<article class="flex flex-col gap-3 pb-4 pl-4 pt-2 text-xs">
				{#each Array(job.about.length) as _, idx}
					<li class="list-inside list-disc">{job.about[idx]}</li>
				{/each}
			</article>
		</div>
	{/each}
	<div class="inline-flex text-xl">Academic Projects</div>
	{#each academic_projects as ap}
		<div
			class="flex flex-col items-center rounded-2xl border border-neutral-300 px-4 pt-2 text-sm shadow"
		>
			<p
				class=" inline-flex w-full items-center justify-center border-b border-neutral-200 pb-2 text-lg font-bold md:font-semibold"
			>
				{ap.title}
			</p>
			<p class="p-4 text-xs md:text-sm">{ap.about}</p>
		</div>
	{/each}
	<div class="inline-flex self-center text-xl">Known Languages and Tools</div>
	<div
		class="place grid grid-cols-3 gap-4 overflow-hidden rounded-2xl border border-neutral-300 py-4 shadow md:grid-cols-9 md:p-4"
	>
		{#each language_arr as la}
			<div class="relative m-auto flex justify-center">
				<Tooltip title={la.name}>
					<span class="absolute -bottom-1 -left-1 h-full w-full rounded-2xl bg-black" />
					<img
						src={la.image}
						alt={la.name}
						title={la.name}
						class="relative h-12 w-12 rounded-2xl border-2 border-black bg-white p-1 transition-transform duration-75 hover:-translate-x-1 hover:translate-y-1 md:h-20 md:w-20"
					/>
				</Tooltip>
			</div>
		{/each}
	</div> -->
</div>
