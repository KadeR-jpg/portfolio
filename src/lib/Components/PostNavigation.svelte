<script lang="ts">
	interface Props {
		prevPost?: { slug: string } | null;
		nextPost?: { slug: string } | null;
	}

	let { prevPost = null, nextPost = null }: Props = $props();
</script>

<nav
	class="not-prose inline-flex w-full justify-between border-t border-stone-200 text-sm *:p-1 dark:border-stone-600">
	{#if prevPost}
		<a
			href={prevPost.slug}
			class="group inline-flex items-center text-blue-600 hover:text-blue-800">
			<span
				class="inline-block transition-transform duration-150 ease-in-out group-hover:-translate-x-1">
				&larr;
			</span>
			<span class="ml-1">Newer</span>
		</a>
	{/if}
	<div></div>
	{#if nextPost}
		<a
			href={nextPost.slug}
			class="group flex items-center text-blue-600 hover:text-blue-800">
			<span class="mr-1">Older</span>
			<span
				class="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1">
				&rarr;
			</span>
		</a>
	{/if}
</nav>
