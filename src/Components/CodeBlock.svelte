<script context="module" lang="ts">
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
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AsciiSpinner from './AsciiSpinner.svelte';
	import 'highlight.js/styles/github.css';
	let output: string[] = [];
	let isOpen = false;
	let isLoading = false;

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
	let selectedName = codeItems[0].name;
	$: code = codeItems[0].content;

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
	let CodeJar: any;
	onMount(async () => {
		hljs.highlightAll();
		({ CodeJar } = await import('@novacbn/svelte-codejar'));
	});
</script>

{#if CodeJar}
	<div class="flex relative font-mono w-full h-full">
		<span class="absolute -bottom-1 left-1 rounded-2xl bg-neutral-700 w-full h-full" />
		<div class=" bg-white z-10 rounded-2xl w-full h-full border-2 border-black flex flex-col">
			<div class="relative border-b-2 border-black py-2 px-1 text-sm">
				Code:
				<button class="cursor-pointer underline" on:click={() => (isOpen = !isOpen)}>
					{selectedName}<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-3 h-3 m-0 p-0 inline-block {isOpen
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
						class="absolute left-0 bg-white rounded-lg border border-black text-xs flex-nowrap overflow-hidden"
					>
						{#each codeItems as { name, content }}
							<button
								on:click={() => ((isOpen = !isOpen), (selectedName = name), (code = content))}
								class=" px-3 py-2 w-full text-left text-gray-800 hover:bg-sky-200 content-start-['&nbsp']"
							>
								{name}
							</button>
						{/each}
					</div>
				{/if}
			</div>
			<CodeJar
				class="px-1 scroll-smooth text-sm font-medium py-2 flex-1"
				syntax="javascript"
				{highlight}
				addClosing={true}
				bind:value={code}
			/>
			<div class="text-mono py-2 text-xs w-full flex flex-col border-t-2 border-black">
				<div
					class="px-1 inline-flex w-full scroll-smooth {output.length > 5
						? 'overflow-y-scroll'
						: ''}"
				>
					..src/scripts:&thinsp;<button
						class=" text-green-600 underline"
						on:click={() => sendData(code)}
						>run
					</button>

					<AsciiSpinner {isLoading} />
				</div>
				<div class="flex flex-col pl-4">
					{#each output as out}
						<p in:fly={{ y: 5 }}>
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
