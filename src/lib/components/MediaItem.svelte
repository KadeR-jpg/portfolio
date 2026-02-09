<script lang="ts">
  import AsciiSpinner from './AsciiSpinner.svelte';

  interface Props {
    image_url: string;
    title: string;
    subtitle: string;
    subsubtitle: string;
    link_url: string;
    is_playing: boolean;
    is_loading: boolean;
  }

  let { image_url, title, subtitle, subsubtitle, link_url, is_playing, is_loading }: Props =
    $props();
  let isExpanded = $state(true);
  let imgEl: HTMLImageElement | undefined = $state();
  let prevImageUrl = $state(image_url);

  $effect(() => {
    if (image_url !== prevImageUrl && imgEl) {
      imgEl.style.opacity = '0';
      const img = new Image();
      img.onload = () => {
        imgEl!.src = image_url;
        imgEl!.style.opacity = '1';
        prevImageUrl = image_url;
      };
      img.src = image_url;
    }
  });
</script>

<div class="relative w-full">
  <button
    onclick={() => (isExpanded = !isExpanded)}
    class="inline-flex w-full items-center justify-end px-8 text-center text-xs text-stone-600 dark:text-stone-200"
    aria-label={isExpanded ? 'Collapse' : 'Expand'}
  >
    {isExpanded ? 'Collapse' : 'Expand'}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="size-5 transition-transform duration-100 ease-in {isExpanded ? '' : 'rotate-180'}"
    >
      <path
        fill-rule="evenodd"
        d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  {#if isExpanded}
    {#if is_loading}
      <div class="flex h-80 max-w-80 flex-col items-center justify-center rounded-3xl text-2xl">
        <AsciiSpinner />
      </div>
    {:else}
      <div class="grid max-w-80 overflow-hidden md:text-base">
        {#if is_playing}
          <div class="my-4 flex flex-col items-center p-4">
            <img
              bind:this={imgEl}
              src={image_url}
              alt="cover art"
              class="bg-conic-gradient-right w-40 rounded-full ring-1 ring-stone-800 md:w-60 dark:ring-stone-100"
              style="animation: spin 100s infinite linear; transition: opacity 200ms ease;"
            />
          </div>
        {:else}
          <div class="relative my-4 flex flex-col items-center p-4">
            <p class="pb-2 text-center text-xs text-stone-400">I was listening to</p>
          </div>
        {/if}

        <div class="flex flex-col text-left">
          <div class="px-4 pb-4">
            <a href={link_url} rel="noopener noreferrer" target="_blank" {title}>
              <p
                class="line-clamp-1 font-hedvig text-lg font-semibold text-pretty text-ellipsis underline {is_playing
                  ? 'text-stone-700 dark:text-stone-300'
                  : 'text-stone-700'}"
              >
                {title}
              </p>
            </a>
            <p
              class="font-manrope line-clamp-1 text-sm font-semibold {is_playing
                ? 'text-stone-500 dark:text-stone-400'
                : 'text-stone-500'}"
            >
              {subtitle}
            </p>
            <p
              class="font-manrope line-clamp-1 text-xs font-semibold {is_playing
                ? 'text-stone-500 dark:text-stone-400'
                : 'text-stone-400'}"
            >
              {subsubtitle}
            </p>
          </div>
        </div>
      </div>
    {/if}
  {/if}
</div>

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
