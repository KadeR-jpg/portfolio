<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { PUBLIC_DEV_URL } from '$env/static/public';
  import MediaItem from '$lib/components/MediaItem.svelte';

  interface NowPlayingResponse {
    is_playing: boolean;
    podcast?: boolean;
    cover_art: string;
    title: string;
    album?: string;
    artist?: string;
    host?: string;
    publisher?: string;
    link: string;
  }

  interface MediaItemProps {
    image_url: string;
    title: string;
    subtitle: string;
    subsubtitle: string;
    link_url: string;
    is_playing: boolean;
  }

  const baseUrl = dev ? PUBLIC_DEV_URL : 'https://www.kadepitsch.com';

  let currentAudio: NowPlayingResponse | null = $state(null);
  let lastPlayingItem: NowPlayingResponse | null = $state(null);
  let isLoading = $state(true);
  let intervalId: ReturnType<typeof setInterval>;

  function toMediaItemProps(item: NowPlayingResponse, isPlaying: boolean): MediaItemProps {
    return {
      image_url: item.cover_art,
      title: item.title,
      subtitle: item.podcast ? (item.host ?? '') : (item.album ?? ''),
      subsubtitle: item.podcast ? (item.publisher ?? '') : (item.artist ?? ''),
      link_url: item.link,
      is_playing: isPlaying
    };
  }

  let mediaItemProps: MediaItemProps | undefined = $derived.by(() => {
    if (currentAudio?.is_playing) {
      return toMediaItemProps(currentAudio, true);
    }
    if (lastPlayingItem) {
      return toMediaItemProps(lastPlayingItem, false);
    }
    return undefined;
  });

  async function fetchNowPlaying() {
    try {
      const resp = await fetch(`${baseUrl}/api/now-playing`);
      if (!resp.ok) return;

      const data: NowPlayingResponse = await resp.json();
      currentAudio = data;

      if (data.is_playing) {
        lastPlayingItem = data;
        localStorage.setItem('last_playing_item', JSON.stringify(data));
      }
    } catch (err) {
      console.error('Error fetching now playing:', err);
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    const stored = localStorage.getItem('last_playing_item');
    if (stored) {
      lastPlayingItem = JSON.parse(stored);
    }

    fetchNowPlaying();
    intervalId = setInterval(fetchNowPlaying, 2500);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

{#if mediaItemProps}
  <MediaItem is_loading={isLoading} {...mediaItemProps} />
{/if}
