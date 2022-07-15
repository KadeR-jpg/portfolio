<script lang="ts">
	import { Motion } from 'svelte-motion';
	export let title: string = 'No Title Provided';
	export let description: string = 'No description provided.';
</script>

<Motion let:motion whileHover={{ translateY: -5 }}>
	<div use:motion class="flex flex-col border shadow-inner gap-2 rounded p-4">
		<div class="flex flex-row">
			<h2 class="text-2xl font-light justify-center m-auto">{title}</h2>
		</div>
		<div class="flex flex-row justify-center content-center">
			<Motion let:motion whileHover={{}}>
				<div use:motion class="container object-contain">
					<slot>
						<em>No Content Was Provided</em>
					</slot>
				</div>
			</Motion>
			<p class="flex">{description}</p>
		</div>
	</div>
</Motion>
