<script lang="ts">
  import { type Tags, tagClasses } from '$lib/types/PostType';
  interface Props {
    title: string;
    date: string;
    description: string;
    link: string;
    tags: Tags[];
  }

  let { title, date, description, link, tags }: Props = $props();
</script>

<div
  class="prose flex flex-col border-b border-stone-300 pt-1 prose-stone first:pt-0 last:border-0 dark:prose-invert"
>
  <hgroup class="not-prose inline-flex justify-between align-baseline font-hedvig">
    <a href={link}>
      <h1 class="text-pretty underline hover:no-underline md:text-2xl">{title}</h1>
    </a>
    <p class="text-stone-400 dark:text-stone-500">{date}</p>
  </hgroup>
  <span class="inline-flex gap-2 py-1">
    {#each tags as tag, i (i)}
      <small class="px-1 text-stone-400 dark:text-stone-500">
        #{tag}
      </small>
    {/each}
  </span>
  <article class="pb-2 text-stone-700">
    {description}
  </article>
</div>
