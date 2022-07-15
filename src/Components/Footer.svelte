<script lang="ts">
	import { Motion } from 'svelte-motion';
	import linkedInLogo from '$lib/Icons/linkedin-48.svg';
	import githubLogo from '$lib/Icons/octocat-48.svg';
</script>

<footer class="flex bottom-0 bg-gray-100 p-2">
	<div class="grid grid-cols-3 w-screen divide-x-2 md:divide-x-0">
		<div class="grid grid-cols-2 justify-around divide-x-2 md:divide-x-0">
			<a href="https://github.com/KadeR-jpg" class="flex align-middle justify-center hover:scale-110 transition-transform ease-in-out duration-150">
				<img src={githubLogo} alt="Github Logo" class="scale-75" />
			</a>
			<a
				href="https://www.linkedin.com/in/kade-pitsch-compsci/"
				class="flex align-middle justify-center hover:scale-110 transition-transform ease-in-out duration-150"
			>
				<img src={linkedInLogo} alt="linkedin logo" class="scale-75" />
			</a>
		</div>
		<div class="grid col-span-2 gap-1 content-center justify-center pointer-events-auto">
			<div class="flex font-light text-xs border-b border-slate-400 m-auto border-spacing-1">
				Contact Me
			</div>
			<a href="mailto:kade.pitsch@gmail.com">
				<button
					class="flex rounded font-light bg-slate-200 p-2 hover:scale-105 hover:bg-slate-300 transition-all duration-300"
				>
					kade.pitsch@gmail.com
				</button>
			</a>
		</div>
	</div>
</footer>
