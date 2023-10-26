<script lang="ts">
	import AsciiSpinner from './AsciiSpinner.svelte';
	export let image_url: string;
	export let title: string;
	export let subtitle: string;
	export let subsubtitle: string;
	export let link_url: string;
	export let is_playing: boolean;
	export let is_loading: boolean;
</script>

{#if is_loading}
	<div class="flex flex-col rounded-3xl justify-center items-center text-2xl h-80 w-80">
		<AsciiSpinner {is_loading} />
	</div>
{:else}
	<div class="flex flex-col text-xs md:text-base w-80">
		<div class="flex flex-col justify-start">
			<div
				class="flex flex-col justify-center items-center relative my-4 border-2 border-black p-4 rounded-t-3xl rounded-b"
			>
				<p class="text-center text-xs pb-2 text-neutral-600">
					{is_playing ? 'Somewhere currently listening to' : 'I was listening to'}
				</p>
				<img
					src={image_url}
					alt="cover art"
					class="flex rounded-full w-60 {is_playing
						? ''
						: 'blur-sm opacity-20 hover:blur-none hover:opacity-100'} transition-all duration-300 ease-in"
					style="animation: {is_playing ? 'spin 50s infinite linear' : 'none'};"
				/>
			</div>
			<div class="flex flex-col font-plex">
				<div class="border-2 border-black p-4 rounded-b-3xl rounded-t">
					<a href={link_url} rel="noopener noreferrer" target="_blank" {title}>
						<p class="underline text-lg line-clamp-2">
							{title}
						</p>
					</a>
					<p class="overflow-hidden whitespace-nowrap text-neutral-700 text-ellipsis text-base">
						{subtitle}
					</p>
					<p class="text-xs text-neutral-400 overflow-hidden line-clamp-2">
						{subsubtitle}
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes -global-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
