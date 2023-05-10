<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let title: string = 'No Title Provided';
	export let description: string = 'No description provided.';
	export let link: string = 'No link provided';
</script>

<div
	class="flex flex-col rounded-md ring-1 ring-gray-200 md:shadow-md md:ring-2 md:ring-gray-200 gap-2 md:rounded-xl p-4"
>
	<div class="flex flex-row justify-between">
		<h2 class="flex text-2xl text-gray-800 md:text-2xl">{title}</h2>
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
	<div class="flex flex-col border-t ">
		<div class="flex flex-row align-middle justify-between">
			<div class="flex flex-col gap-4">
				<p class="pt-4 pl-4 text-xs md:text-sm text-gray-600">Written With</p>
				<div class="flex flex-col gap-4 items-start">
					<slot>No icons provided</slot>
				</div>
			</div>
			<div class="flex flex-col w-1/2 lg:w-2/3 items-center">
				<p
					class="flex text-right font-light align-middle justify-center text-sm md:text-base lg:text-lg md:font-normal pt-4 pb-4 text-gray-700"
				>
					{description}
				</p>
			</div>
		</div>
	</div>
</div>
