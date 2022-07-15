<script lang="ts">
	import { Motion } from 'svelte-motion';
	export let title: string = 'No Title Provided';
	export let description: string = 'No description provided.';
	export let link: string = 'No link provided';
</script>

<div
	class="flex flex-col rounded-md ring-1 ring-gray-200 md:shadow-md md:ring-2 md:ring-gray-200 md:hover:-translate-y-1 transition-translate ease-in-out duration-200 gap-2 md:rounded-xl p-4"
>
	<div class="flex flex-row justify-between">
		<h2 class="flex text-2xl text-gray-700 md:text-3xl">{title}</h2>
		<Motion
			let:motion
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
		>
			<button
				use:motion
				class="md:text-lg p-2 font-light md:font-normal rounded-md bg-gray-800 text-white"
				><a href={link}>View Project</a></button
			>
		</Motion>
	</div>
	<div class="flex flex-col border-t">
		<!-- <div class="flex justify-center">
			<slot>
				<em>No Content Was Provided</em>
			</slot>
		</div> -->
		<div class="flex flex-row">
			<div class="flex flex-col gap-4">
				<p class="pt-4 pl-4 text-xs text-gray-400">Written With</p>
				<div class="flex flex-col gap-4 content-center">
					<slot>No icons provided</slot>
				</div>
			</div>
			<p
				class="w-1/2 flex justify-center text-center m-auto font-light md:font-normal prose prose-sm md:prose-base prose-neutral"
			>
				{description}
			</p>
		</div>
	</div>
</div>
