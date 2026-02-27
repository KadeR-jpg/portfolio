<script lang="ts">
  import Tape from '../visualizers/Tape.svelte';
  import PlaybackControls from '../PlaybackControls.svelte';
  let { input }: { input: string } = $props();
  let currentIndex = $state(0);
  let floorHistory = $derived.by(() => {
    const history = [0];
    let floor = 0;
    for (const char of input) {
      floor += char === '(' ? 1 : -1;
      history.push(floor);
    }
    return history;
  });
  let currentFloor = $derived(floorHistory[currentIndex]);
</script>

<PlaybackControls bind:currentIndex length={input.length} />
<Tape {input} {currentIndex} />
<p>Floor: {currentFloor}</p>
