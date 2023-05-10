<script lang="ts">
	import { Motion } from 'svelte-motion';
	import linkedInLogo from '$lib/Icons/linkedin-48.svg';
	import githubLogo from '$lib/Icons/octocat-48.svg';

	let copy_email = 'kade.pitsch@gmail.com';
</script>

<footer class="flex border-t-2 border-black p-2 pb-4">
	<div class="grid grid-cols-3 w-screen justify-center">
		<div class="grid grid-cols-2 items-end">
			<a
				href="https://github.com/KadeR-jpg"
				class="flex align-middle justify-center hover:scale-110 transition-transform ease-in-out duration-150"
			>
				<img src={githubLogo} alt="Github Logo" class=" h-12 md:h-full" />
			</a>
			<a
				href="https://www.linkedin.com/in/kade-pitsch-compsci/"
				class="flex align-middle justify-center hover:scale-110 transition-transform ease-in-out duration-150"
			>
				<img src={linkedInLogo} alt="linkedin logo" class=" h-12 md:h-full " />
			</a>
		</div>
		<div class="grid col-span-2 justify-center pointer-events-auto">
			<div class="font-light text-xs text-center">Copy to Clipboard</div>
			<div class="relative pt-2">
				<div class="relative">
					<span
						class="absolute -bottom-1  -left-1 rounded-lg md:rounded-2xl  bg-black w-full h-full"
					/>
					<button
						class=" text-xs md:text-sm px-2 py-3  relative border-2 border-black bg-white rounded-lg md:rounded-2xl p-1 transition-transform duration-75 hover:translate-y-1 hover:-translate-x-1"
						>kade.pitsch@gmail.com
					</button>
				</div>
			</div>
		</div>
	</div>
</footer>
