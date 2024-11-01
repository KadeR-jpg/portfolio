<script lang="ts">
	import type { CardProps } from '$lib/types/CardProps';
	import Card from '$lib/Components/Card.svelte';
	import resume from '$lib/2024_resume.pdf';
	let jobs_array: CardProps[] = [
		{
			title: 'Software Engineer - Conduit Resources',
			fromTo: `February 2024 - September 2024`,
			bps: [
				'Developed two C# data analysis tools with custom parsers, processing millions of log entries',
				'Engineered solution to convert unstructured logs to structured data, enhancing analytical capabilities',
				'Designed and implemented Avalonia UI for efficient data visualization and interaction',
				'Optimized parsing algorithms, improving processing speed and resource efficiency'
			]
		},
		{
			title: 'Python Developer - Florida Blue',
			fromTo: 'October 2022 - June 2023',
			bps: [
				'Key contributor to the payment platform team.',
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
	<div class="prose prose-stone dark:prose-invert">
		<div class="w-full items-baseline justify-between md:inline-flex">
			<h1 class="text-3xl dark:font-medium">Professional Experience</h1>
			<a
				class="bg-transparent from-pink-300 via-stone-100 font-semibold hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-pink-800 dark:via-stone-800 dark:font-medium dark:text-stone-400"
				target="_blank"
				href={resume}
			>
				PDF version
			</a>
		</div>
		<p class="font-manrope">
			Currently looking for new opportunities as a full-stack developer with 3 years of experience
			specializing in backend development with Python, C# and web development with Svelte/SvelteKit.
		</p>
	</div>
	<div class="flex flex-col gap-4">
		{#each jobs_array as job}
			<Card cardType="Job" {...job} />
			<hr />
		{/each}
	</div>
</div>
