<script module lang="ts">
	// We need to configure highlight.js for Javascript, and then alias the
	// exports to match the function signatures that `CodeJar` Component expects
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';

	hljs.registerLanguage('javascript', javascript);

	// `highlight` takes the input code and returns the highlighted HTML markup
	const highlight = (code: string, syntax: string) =>
		hljs.highlight(code, {
			language: syntax
		}).value;
</script>

<script lang="ts">
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AsciiSpinner from './AsciiSpinner.svelte';
	import 'highlight.js/styles/github.css';
	let output: string[] = $state([]);
	let isOpen = $state(false);
	let isLoading = $state(false);

	let codeItems: { name: string; content: string }[] = [
		{
			name: 'FibSeq',
			content: `let fib = fn(x) {
	if (x == 0) {0} else {
		if (x==1) {
			1
		} else {
			fib(x-1) + fib(x-2);
		}
	}
};
puts(fib(4));`
		},
		{
			name: 'BinSort',
			content: ``
		},
		{
			name: 'BinSearch',
			content: `code here`
		}
	];
	let selectedName = $state(codeItems[0].name);
	let code;
	run(() => {
		code = codeItems[0].content;
	});

	async function sendData(code: string) {
		try {
			isLoading = true;
			const response = await fetch('api/main', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ code: code })
			});
			if (response.ok) {
				const result = await response.json();
				output = result.message.split('\n');
			} else {
				console.error('Error', response.status);
			}
		} catch (error) {
			console.log(error);
			console.error('Error', error);
		} finally {
			isLoading = false;
		}
	}

	// **NOTE:** Since `onMount` is only called on the client, we can just
	// make our import there. And assign to our Component's scope
	let CodeJar: any = $state();
	onMount(async () => {
		hljs.highlightAll();
		({ CodeJar } = await import('@novacbn/svelte-codejar'));
	});
</script>

{#if CodeJar}
	<div class="relative flex h-full w-full font-mono">
		<span class="absolute -bottom-1 left-1 h-full w-full rounded-2xl bg-neutral-700"></span>
		<div class=" z-10 flex h-full w-full flex-col rounded-2xl border-2 border-black bg-white">
			<div class="relative flex flex-row justify-between border-b-2 border-black px-1 py-2 text-sm">
				<div class="flex">
					Code:
					<button
						disabled
						class="underline disabled:text-gray-300"
						onclick={() => (isOpen = !isOpen)}
					>
						{selectedName}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="m-0 inline-block h-3 w-3 p-0 {isOpen
								? 'rotate-180'
								: ''} transition-all duration-150 ease-in-out"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
					{#if isOpen}
						<div
							class="absolute left-0 flex-nowrap overflow-hidden rounded-lg border border-black bg-white text-xs"
						>
							{#each codeItems as { name, content }}
								<button
									onclick={() => ((isOpen = !isOpen), (selectedName = name), (code = content))}
									class=" content-start-['&nbsp'] w-full px-3 py-2 text-left text-gray-800 hover:bg-sky-200"
								>
									{name}
								</button>
							{/each}
						</div>
					{/if}
				</div>
				<p class="flex">🚧 Work in Progress 🚧</p>
				<p class="flex"></p>
			</div>
			<CodeJar
				class="flex-1 scroll-smooth px-1 py-2 text-sm font-medium"
				syntax="javascript"
				{highlight}
				addClosing={true}
				bind:value={code}
			/>
			<div class="text-mono flex w-full flex-col border-t-2 border-black py-2 text-xs">
				<div
					class="inline-flex w-full scroll-smooth px-1 {output.length > 5
						? 'overflow-y-scroll'
						: ''}"
				>
					..src/scripts:&thinsp;
					<button
						disabled
						class=" text-green-600 underline disabled:cursor-not-allowed disabled:text-red-300"
						onclick={() => sendData(code)}
					>
						run
					</button>

					<AsciiSpinner {isLoading} />
				</div>
				<div class="flex flex-col pl-4">
					{#each output as out}
						<p in:fly|global={{ y: 5 }}>
							{#if out != ''}
								> {out}
							{/if}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
{:else}
	<!--
			**NOTE:** Normally the `CodeJar` Svelte handles fall through for us, and
		renders / syntax highlights without an editor during SSR / non-JS enabled clients
	-->
	<!-- <pre><code>{code}</code></pre> -->
{/if}

<style>
	/* ::-webkit-scrollbar {
		height: 2px;
		widows: 20px;
		border-radius: 20px;
	}

	::-webkit-scrollbar-track {
		background-color: #555;
	}

	::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 2px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	} */
</style>
