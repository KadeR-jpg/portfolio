<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import NowPlaying from '$lib/components/NowPlaying.svelte';
  import Arrow from 'phosphor-svelte/lib/ArrowUp';
  import Logo from '$lib/Icons/Logo.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  let { children } = $props();

  const links = [
    {
      title: '/Home',
      highlightColor: 'from-green-300',
      path: '/'
    },
    {
      title: '/Blog',
      highlightColor: 'from-amber-300',
      path: '/blog'
    },
    {
      title: '/Projects',
      highlightColor: 'from-blue-300',
      path: '/projects'
    },
    {
      title: '/Resume',
      highlightColor: 'from-violet-300',
      path: '/resume'
    }
  ];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<main class="h-screen">
  <header class="font-xs font-manrope flex justify-center p-2 text-xs text-stone-500 md:text-base">
    <a href="/" class="self-center" id="Home">
      <Logo />
    </a>
  </header>
  <div class="grid md:grid-cols-6">
    <nav
      class="sticky top-0 z-50 flex h-fit translate-x-0 flex-row justify-evenly border-b bg-stone-100 py-2 font-hedvig md:justify-start md:border-0 dark:bg-stone-800"
    >
      <div
        class="flex flex-row gap-2 px-2 text-xs font-light antialiased *:text-stone-700 md:flex-col md:gap-2 md:text-lg *:dark:text-stone-100"
      >
        {#each links as { title, highlightColor, path } (title)}
          <a
            href={path}
            class="self-start rounded-full bg-transparent {highlightColor} via-stone-100 hover:bg-radial dark:via-stone-800"
          >
            {title}
          </a>
        {/each}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/KadeR-jpg"
          class="group inline-flex items-center"
        >
          <Arrow
            class="size-4 rotate-45 fill-stone-700 transition-all duration-100 ease-out group-hover:rotate-90 dark:fill-stone-100"
          />Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kade-pitsch/"
          class="group inline-flex items-center"
        >
          <Arrow
            class="size-4 rotate-45 fill-stone-700 transition-all duration-100 ease-out group-hover:rotate-90 dark:fill-stone-100"
          />LinkedIn
        </a>
        <!-- <ThemeToggle /> -->
      </div>
    </nav>
    <div class="grid justify-items-center p-4 md:col-span-4 md:pt-0">
      {@render children()}
    </div>
    <aside class="hidden place-items-start md:grid">
      <NowPlaying />
    </aside>
  </div>
</main>
