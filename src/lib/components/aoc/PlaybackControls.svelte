<script lang="ts">
  let {
    currentIndex = $bindable(0),
    length,
    speed = $bindable(100)
  }: {
    currentIndex?: number;
    length: number;
    speed?: number;
  } = $props();
  let isPlaying = $state(false);
  let intervalId: ReturnType<typeof setInterval> | undefined;
  function play() {
    if (currentIndex >= length - 1) reset();
    isPlaying = true;
    intervalId = setInterval(() => {
      if (currentIndex >= length - 1) {
        pause();
      } else {
        currentIndex++;
      }
    }, speed);
  }
  function pause() {
    isPlaying = false;
    clearInterval(intervalId);
  }
  function step() {
    if (currentIndex < length - 1) currentIndex++;
  }
  function reset() {
    pause();
    currentIndex = 0;
  }

  $effect(() => {
    return () => clearInterval(intervalId);
  });
</script>

<div class="controls">
  <button onclick={isPlaying ? pause : play}>{isPlaying ? 'Pause' : 'Play'}</button>
  <button onclick={step} disabled={isPlaying || currentIndex >= length - 1}>Step</button>
  <button onclick={reset}>Reset</button>
  <label for="speedRange">
    Speed
    <input id="speedRange" type="range" min="10" max="500" step="10" bind:value={speed} />
  </label>
</div>

<style>
  .controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
