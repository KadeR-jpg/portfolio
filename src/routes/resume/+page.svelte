<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import resume from '$lib/assets/2026_resume.pdf';
	let jobs_array = [
		{
			title: 'Software Engineer - Envita Health',
			fromTo: 'Current',
			bps: [
				'Architected and built a multistep AI research pipeline from scratch',
				'Developed custom LLM orchestration tools in TypeScript, enhancing our model provider flexibility',
				'Architected our the entire LIMS integration with our own machines and network',
				'High level of interdisciplinary collaboration'
			]
		},
		{
			title: 'Software Engineer - Conduit Resources',
			fromTo: `February 2024 - September 2024`,
			bps: [
				'Developed two C# data analysis tools with custom parsers, processing millions of log entries',
				'Created a program to convert old unstructured logs to structured data, improving data consistency and ability to search'
			]
		},
		{
			title: 'Python Developer - Florida Blue',
			fromTo: 'October 2022 - June 2023',
			bps: ['Contributor and maintainer on the payment platform team.']
		},
		{
			title: 'Solutions Developer - Zoot Enterprise',
			fromTo: 'July 2021 - May 2022',
			bps: [
				'Developed a Bash script to automate peak season data collection, reduced manual data entry by 30 days.',
				'Oversaw production installs, using tools like Kibana, MySQL, and Linux servers to monitor status.',
				'Worked directly with one of the largest US retailer to ensure platforms were capable for holiday season.'
			]
		},
		{
			title: 'Python Developer - MSU',
			fromTo: 'February 2020 - November 2020',
			bps: [
				'Developed a program to scrape and extract student names from public honor roll lists',
				'Led an effort to modernize recruitment strategy with social media integration.'
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
				class="bg-radial via-stone-50 to-transparent font-semibold transition-colors duration-200 ease-out hover:bg-radial hover:from-orange-300 dark:via-stone-800 dark:font-medium dark:text-stone-400 hover:dark:from-pink-800"
				target="_blank"
				href={resume}
				rel="noopener noreferrer"
			>
				PDF version
			</a>
		</div>
		<p class="font-manrope">
			Currently looking for new opportunities as a full-stack developer with about 4 years of
			experience. I am looking for a company that values real software engineering, real problem
			solving, and hard work. My principled stance on AI; it is a force multiplying tool. Nothing
			more, nothing less. <br />
			If you were writing shit code without AI, you're writing 10x shit code with AI.
		</p>
	</div>
	<div class="flex flex-col gap-4">
		{#each jobs_array as job (job.title)}
			<Card cardType="Job" {...job} />
			<hr />
		{/each}
	</div>
</div>
