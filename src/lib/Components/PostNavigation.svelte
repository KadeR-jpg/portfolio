<script lang="ts">
	export let prevPost: { slug: string } | null = null;
	export let nextPost: { slug: string } | null = null;

	console.log(prevPost);
</script>

<nav class="not-prose inline-flex w-full justify-between text-sm *:p-1">
	{#if prevPost}
		<a
			href={prevPost.slug}
			class="group inline-flex items-center text-blue-600 hover:text-blue-800"
		>
			<span
				class="inline-block transition-transform duration-150 ease-in-out group-hover:-translate-x-1"
			>
				&larr;
			</span>
			<span class="ml-1">Newer</span>
		</a>
	{/if}

	{#if nextPost}
		<a
			href={nextPost.slug}
			class="group inline-flex items-center text-blue-600 hover:text-blue-800"
		>
			<span class="mr-1">Older</span>
			<span
				class="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1"
			>
				&rarr;
			</span>
		</a>
	{/if}
</nav>
