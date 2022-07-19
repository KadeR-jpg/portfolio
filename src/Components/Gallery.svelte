<script lang="ts">
	import { Motion } from 'svelte-motion';
	import ye from '$lib/inspoimgs/yeBoot.png';
	import axelV from '$lib/inspoimgs/axelVervoordt_v0.png';
	import jamesTurrell from '$lib/inspoimgs/jamesTurrell.png';
	import dieterRams from '$lib/inspoimgs/dieterRams.png';
	let imageArray = [
		{
			id: '1',
			url: `${ye}`,
			name: 'Kanye West',
			summary: `Kanye West, the biggest influence of mine.
				 Spending hours being inspired by his music while I was studying to studying his design decisions.
				  An all around artist that heavily inspires my creative decisions.`
		},
		{
			id: '2',
			url: `${axelV}`,
			name: 'Axel Vervoordt',
			summary: `Axel Vervoordt, a revolutionary visual artist.
			 Looking at the spaces that he has curated it is hard to not be inspired. Striving to match that feeling in my personal work.
			 I have found myself wondering how I can emulate this minimalism/brutalism interior designs`
		},
		{
			id: '3',
			url: `${jamesTurrell}`,
			name: 'James Turrell',
			summary: `James Turrell, an amazing artist.
			 	Taking colors and shapes to the maximum with so little. Using natural spaces to create ethereal shapes an colors.
			 	His works gives me hope that gradient color spaces can be cool.`
		},
		{
			id: '4',
			url: `${dieterRams}`,
			name: 'Dieter Rams',
			summary: `Dieter Rams. The Ten Principles of Good Design has been a keystone piece of reference material for me.
			Being able to build on that foundation of good designs has helped me really focus on what it means to have a good design language.`
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
		<p class="flex font-space text-gray-700 font-light md:text-base">
			{inspo_text}
		</p>
	</div>
</div>
