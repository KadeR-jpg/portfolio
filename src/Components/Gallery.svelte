<script lang="ts">
	import { Motion } from 'svelte-motion'
	let imageArray = [
		{
			id: '1',
			url: '/src/lib/inspoimgs/yeBoot.png',
			name: 'Kanye West',
			summary: `Kanye West, the biggest influence of mine.
				 Spending hours being inspired by his music while i was studying to studying his design decisions.
				  An all around artist that heavily inspires my creative decisions.`
		},
		{
			id: '2',
			url: '/src/lib/inspoimgs/axelVervoordt_v0.png',
			name: 'Axel Vervoordt',
			summary: `Axel Vervoordt, a revolutionary visual artist.
			 Looking at the spaces that he has curated it is hard to not be inspired and wanting that to seep into my own design.
			 I have found myself wondering how i emulate a minimal brutalist interior design into my design work.`
		},
		{
			id: '3',
			url: '/src/lib/inspoimgs/jamesTurrell.png',
			name: 'James Turrell',
			summary: `James Turrell, an amazing minimalist artist.
			 	Taking colors and shapes to the maximum.
				His installations are inspiring solely based on the fact that there can be so much with so little.
			 	His work gives me hope that gradient color spaces can be cool.`
		},
		{
			id: '4',
			url: '/src/lib/inspoimgs/dieterRams.png',
			name: 'Dieter Rams',
			summary: `Dieter Rams, the epitome of product design. The Ten Principles of Good Design has been a keystone piece of reference material for me.
			Being able to build on that foundation of good designs has helped me trim and really focus on what it means to have a good design language.`
		}
	];
	let inspo_text = imageArray[0].summary;
	// function handleTouch(elem) {
	// 	var image = document.getElementById(elem.path[0].id)
	// 	image.style.border = 'thin solid #0000FF';
	// }
	// function handleUp(elem){
	// 	var image = document.getElementById(elem.path[0].id)
	// 	image.style.border = 'thin dotted #0000FF';
	// };
</script>

<div class="flex flex-col flex-grow md:flex-row">
		<div class="grid grid-cols-4 gap-4 p-4 md:w-2/3">
			{#each imageArray as { id, url, name, summary }}
				<Motion let:motion whileTap={{scale:1.03, transition: {duration: 0.0001}}} whileHover={{scale:1.03, transition: {duration: 0.25}}}>
					<img
						use:motion
						on:click={(event) => (inspo_text = summary)}
						loading="lazy"
						src={url}
						alt={name}
						{id}
						class="h-full w-full
								object-cover rounded"
					/>
				</Motion>
			{/each}
		</div>
		<div class="flex h-40 p-4 md:h-fit md:w-1/3 md:m-auto">
			<p class="prose-slate font-space md:text-2xl">{inspo_text}</p>
		</div>
</div>
