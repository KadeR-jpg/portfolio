<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
	import Tooltip from '../Components/Tooltip.svelte';
	import resume from '$lib/2023_resume.pdf';
	import py_logo from '$lib/Icons/python_logo.svg';
	import sv_logo from '$lib/Icons/sv_logo.svg';
	import figma_logo from '$lib/Icons/figma_logo.svg';
	import git_logo from '$lib/Icons/git_logo.svg';
	import rust_logo from '$lib/Icons/rust_logo.svg';
	import bash_logo from '$lib/Icons/bash_logo.svg';
	import tw_logo from '$lib/Icons/tailwind_logo.svg';
	import js_logo from '$lib/Icons/js_logo.svg';
	import ts_logo from '$lib/Icons/ts_logo.svg';
	let jobs_array = [
		{
			company: 'Blue Cross Blue Shield',
			title: 'Python Developer',
			date: 'October 2022 - Present',
			about: [
				'Member of the payment platform team, my primary responsibility is to implement new logic for user and also maintain our current codebase',
				"Utilize our backend system to perform various logical checks on data, including verifying payment information through 3rd party API's like stripe"
			]
		},
		{
			company: 'Zoot Enterprises',
			title: 'Solutions Developer',
			date: 'July 2021 - May 2022',
			about: [
				'Tracked and fixed bugs, refactoring code to better represent the state of the system with better error logging',
				'Maintained and oversaw production installs. Utilizing Kibana, MySQL and linux boxes to track the progress as well as parsing log files',
				'Proactively created a Bash script to automate the writing of our peak season data which provided a 100x boost in productivity'
			]
		},
		{
			company: 'Montana State University',
			title: 'Python Developer',
			date: 'February 2020 - November 2020',
			about: [
				'I developed an automated python script that efficiently scraped and extracted student names from public web-pages',
				'The script inferred student email addresses based on first name, last name data',
				'I utilized Selenium web-driver, which facilitated a seamless integration to the python script',
				'I built a prototype that incorporated the LinkedIn API and token access to help connect and reach out to students.'
			]
		}
	];

	let academic_projects = [
		{
			title: 'Spotify Data Classification',
			about: `As part of my project, I utilized a comprehensive data set from Spotify to investigate potential
			correlations between high-energy songs and their placement on the charts. To conduct this analysis, I used various
			programming techniques and tools such as Python, as well as specialized libraries like SciKit and NumPy to handle the
			large and complex data sets involved in this project.`
		},
		{
			title: 'Animated Job Scheduler',
			about: `I co-developed a website using HTML/CSS and Javascript to create a simulation of how a Central
			Processing Unit (CPU) schedules jobs in the background. The simulation allows users to select the number and priority
			of jobs. The website also incorporates animation to enhance the user experience.`
		},
		{
			title: 'CatScript',
			about: `As part of my senior capstone project, I was responsible for developing a specialized programming language
			using Java. This involved implementing advanced techniques such as tokenization, parsing, and Java bytecode optimization
			to ensure efficient and effective performance of the language.`
		}
	];

	let language_arr = [
		{
			name: 'Python',
			familiarity: 85,
			image: `${py_logo}`
		},
		{
			name: 'TailwindCSS',
			familiarity: 100,
			image: `${tw_logo}`
		},
		{
			name: 'JavaScript',
			familiarity: 75,
			image: `${js_logo}`
		},
		{
			name: 'TypeScript',
			familiarity: 60,
			image: `${ts_logo}`
		},
		{
			name: 'Git',
			familiarity: 75,
			image: `${git_logo}`
		},
		{
			name: 'Figma',
			familiarity: 90,
			image: `${figma_logo}`
		},
		{
			name: 'Svelte',
			familiarity: 80,
			image: `${sv_logo}`
		},
		{
			name: 'Rust',
			familiarity: 15,
			image: `${rust_logo}`
		},
		{
			name: 'Bash',
			familiarity: 60,
			image: `${bash_logo}`
		}
	];
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<Header title={'Resume'} />

<div class="flex flex-col gap-2 sm:w-full md:w-3/5 p-4 self-center">
	<div class="flex flex-row justify-between">
		<div class="inline-flex text-xl items-center">Professional Experience</div>
		<a
			class="flex flex-col border-2 rounded-2xl hover:border-sky-200 hover:shadow-md p-2 text-neutral-500"
			href={resume}>PDF version</a
		>
	</div>
	{#each jobs_array as job}
		<div class="flex flex-col pt-4 border border-neutral-300 rounded-2xl shadow">
			<div class="flex flex-row justify-around text-sm font-bold border-b mx-2 border-neutral-200">
				<p>{job.title}</p>
				<p>{job.company}</p>
				<p>{job.date}</p>
			</div>
			<article class="flex flex-col pb-4 gap-3  pt-2 pl-4 text-xs">
				{#each Array(job.about.length) as _, idx}
					<li class="list-disc list-inside">{job.about[idx]}</li>
				{/each}
			</article>
		</div>
	{/each}
	<div class="inline-flex self-center text-xl ">Academic Projects</div>
	{#each academic_projects as ap}
		<div
			class="flex flex-col pt-2  border items-center text-sm border-neutral-300 rounded-2xl shadow"
		>
			<h3 class="mb-2 font-bold border-neutral-300 border-b text-sm">{ap.title}</h3>
			<p class="text-xs pb-4 pl-4">{ap.about}</p>
		</div>
	{/each}
	<div class="inline-flex self-center text-xl ">Language and Tool Proficiency</div>
	<div
		class="flex flex-col gap-4 border border-neutral-300 py-4 md:p-4 rounded-2xl shadow"
	>
		{#each language_arr as la}
			<div class="flex flex-row  md:p-0.5 justify-evenly md:justify-between items-center">
				<Tooltip title={la.name}>
					<img src={la.image} alt={la.name} title={la.name} class="w-8 h-8 md:w-6 md:h-6" />
				</Tooltip>
				<p class="text-neutral-500 hidden md:block">{la.name}</p>
				<div class="w-1/2 md:w-1/4 bg-gray-200 rounded-full md:h-3.75">
					<div
						class="bg-green-600/80 text-xs font-medium text-green-900 text-center p-0.5 leading-none rounded-full"
						style="width: {la.familiarity}%"
					>
						<p class=" md:inline-block">{la.familiarity}%</p>
					</div>
				</div>
			</div>
		{/each}
		<p
			class="inline-flex text-center w-4/5 self-center justify-center text-xs border-t border-neutral-200  p-4 text-neutral-400"
		>
			* This is how much i would score my ability to use the language or tool effectively. In no way
			is this objective representation of my understanding of the language or tool.
		</p>
	</div>
</div>

<Footer />
