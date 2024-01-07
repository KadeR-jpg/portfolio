<script lang="ts">
	import linkedInLogo from '$lib/Icons/linkedin-48.svg';
	import githubLogo from '$lib/Icons/octocat-48.svg';
</script>

<footer class="flex border-t-2 border-black p-2 pb-4">
	<div class="grid w-screen grid-cols-3 justify-center">
		<div class="grid grid-cols-2 items-end">
			<a
				href="https://github.com/KadeR-jpg"
				class="flex justify-center align-middle transition-transform duration-150 ease-in-out hover:scale-110"
			>
				<img src={githubLogo} alt="Github Logo" class=" h-12 md:h-full" />
			</a>
			<a
				href="https://www.linkedin.com/in/kade-pitsch-compsci/"
				class="flex justify-center align-middle transition-transform duration-150 ease-in-out hover:scale-110"
			>
				<img src={linkedInLogo} alt="linkedin logo" class=" h-12 md:h-full" />
			</a>
		</div>
		<div class="pointer-events-auto col-span-2 grid justify-center">
			<div class="text-center text-xs font-light">Copy to Clipboard</div>
			<div class="relative pt-2">
				<div class="relative">
					<span
						class="absolute -bottom-1 -left-1 h-full w-full rounded-lg bg-black md:rounded-2xl"
					/>
					<button
						class=" relative rounded-lg border-2 border-black bg-white p-1 px-2 py-3 text-xs transition-transform duration-75 hover:-translate-x-1 hover:translate-y-1 md:rounded-2xl md:text-sm"
					>
						kade.pitsch@gmail.com
					</button>
				</div>
			</div>
		</div>
	</div>
</footer>
