<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ye from '$lib/inspoimgs/yeBoot.png';
	import axelV from '$lib/inspoimgs/axelVervoordt_v0.png';
	import jamesTurrell from '$lib/inspoimgs/jamesTurrell.png';
	import dieterRams from '$lib/inspoimgs/dieterRams.png';
	let imageArray = [
		{
			id: '1',
			url: `${ye}`,
			name: 'Ye West',
			summary: `Ye West is a major influence on my work. His music has inspired
			 me for countless hours, and I have also studied his design choices in depth.
			  As an all-around artist, he has had a significant impact on my creative process and decision-making.`
		},
		{
			id: '2',
			url: `${axelV}`,
			name: 'Axel Vervoordt',
			summary: `Axel Vervoordt is a visionary visual artist whose curated spaces consistently
			 inspire and evoke emotion. I often find myself striving to replicate this effect in my own work.
			  His minimalistic and brutalistic interior designs are influential to me, as I am constantly
			   wondering how I can emulate these styles in web design.`
		},
		{
			id: '3',
			url: `${jamesTurrell}`,
			name: 'James Turrell',
			summary: `
			James Turrell is an exceptional artist who has mastered
			 the art of creating amazing visuals through using a few elements.
			 His works gives me hope that gradients can be cool.`
		},
		{
			id: '4',
			url: `${dieterRams}`,
			name: 'Dieter Rams',
			summary: `The Ten Principles of Good Design by Dieter Rams has served as a valuable
			 reference for me in my design work. Using these as a jump off point has helped my
			  understanding of what constitutes a good design language`
		}
	];
	let inspo_text = imageArray[0].summary;
</script>

<div class="flex flex-col md:flex-row">
	<div class="grid grid-cols-4 gap-4 md:w-2/3">
		{#each imageArray as { id, url, name, summary }}
			<Motion
				let:motion
				whileTap={{ scale: 1.03, transition: { duration: 0.0001 } }}
				whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
			>
				<img
					use:motion
					on:click={(event) => (inspo_text = summary)}
					loading="lazy"
					src={url}
					alt={name}
					{id}
					class="w-full h-32 md:h-96 mb-0
								object-cover rounded"
				/>
			</Motion>
		{/each}
	</div>
	<div class="flex flex-col md:p-4 text-xs justify-center md:w-1/3">
		{#key inspo_text}
			<p
				class="flex font-sans text-gray-700 font-light md:font-normal"
				transition:slide={{ duration: 300, easing: quintOut }}
			>
				{inspo_text}
			</p>
		{/key}
	</div>
</div>
