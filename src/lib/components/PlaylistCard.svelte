<script lang="ts">
  import { dev } from '$app/environment';
  import { PUBLIC_DEV_URL } from '$env/static/public';
  import { onMount } from 'svelte';
  import type { Playlist, SpotifyTrack } from '$lib/types/Playlist';

  interface Props {
    playlistId: string;
  }

  let { playlistId }: Props = $props();

  const baseUrl = dev ? PUBLIC_DEV_URL : 'https://www.kadepitsch.com';

  let playlist: Playlist | undefined = $state();
  let tracks: SpotifyTrack[] = $state([]);
  let loading = $state(true);
  let error: string | null = $state(null);

  interface CardTransform {
    rotation: number;
    offsetX: string;
    offsetY: string;
  }

  let transforms: CardTransform[] = $state([]);

  function generateTransforms(count: number): CardTransform[] {
    return Array.from({ length: count }, () => ({
      rotation: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.99 * 15,
      offsetX: `${Math.random() * 20 - 5}px`,
      offsetY: `${Math.random() * 20 - 5}px`
    }));
  }

  function nextTrack() {
    tracks = [...tracks.slice(1), tracks[0]];
    transforms = [...transforms.slice(1), transforms[0]];
  }

  async function fetchPlaylist(id: string) {
    try {
      const resp = await fetch(`${baseUrl}/api/playlists?id=${id}`);
      if (!resp.ok) {
        error = `API error: ${resp.status}`;
        console.error(error, await resp.text());
        return;
      }
      const data: Playlist = await resp.json();
      playlist = data;
      tracks = data.tracks;
      transforms = generateTransforms(data.tracks.length);
    } catch (e) {
      error = 'An error occurred while fetching the playlist';
      console.error(error, e);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    fetchPlaylist(playlistId);
  });
</script>

<div class="grid w-full">
  {#if loading}
    <p>Fetching playlist...</p>
  {:else if error}
    <p>{error}</p>
  {:else if playlist && tracks.length > 0}
    <div class="flex flex-col gap-8">
      <h2 class="font-hedvig text-xl font-extralight text-stone-700 dark:text-stone-300">
        capsule / <em>{playlist.name}</em>
      </h2>

      <div class="group relative flex size-32 md:size-52 lg:size-64">
        {#each tracks as track, idx (track.id)}
          <button
            style="
							transform: rotate({transforms[idx]?.rotation ?? 0}deg);
							top: {transforms[idx]?.offsetY ?? '0px'};
							left: {transforms[idx]?.offsetX ?? '0px'};
							z-index: {tracks.length - idx};"
            onclick={nextTrack}
            aria-label="Show next track"
            class="absolute inset-1 z-0 m-0 inline-flex size-32 items-center self-center border-none bg-transparent p-0 transition-transform duration-150 ease-in md:size-52 lg:size-64 {idx ===
            0
              ? 'hover:scale-105 active:scale-105'
              : 'cursor-default'}"
          >
            <img
              src={track.albumImg}
              alt="{track.name} album art"
              class="size-full object-cover antialiased"
            />
          </button>
        {/each}
      </div>
    </div>
    <div class="flex flex-col pt-4">
      <h3 class="font-base w-full font-hedvig text-sm font-light text-stone-700">
        <a
          class="font-base cursor-pointer text-sm text-stone-700 underline lg:text-lg dark:text-stone-300"
          target="_blank"
          rel="noopener noreferrer"
          href={tracks[0].spotify_link}
        >
          {tracks[0].name}
        </a>
      </h3>
      <p
        class="font-manrope w-full text-sm text-pretty text-stone-500 lg:text-base dark:text-stone-400"
      >
        >{tracks[0].artist}
      </p>
    </div>
  {/if}
</div>
