<script lang="ts">
  type Cell = {
    char: string | null;
    index: number;
    isCurrent: boolean;
  };
  let {
    input,
    currentIndex,
    windowSize = 5
  }: {
    input: string;
    currentIndex: number;
    windowSize?: number;
  } = $props();
  let visibleCells: Cell[] = $derived(
    Array.from({length: windowSize * 2 + 1}, (_, i) => {
      const index = currentIndex - windowSize + i;
      return {
        char: input[index] ?? null,
        index,
        isCurrent: index === currentIndex
      };
    })
  );
</script>

<div class="tape">
  {#each visibleCells as cell (cell.index)}
    <div class="cell" class:current={cell.isCurrent} class:empty={cell.char === null}>
      {cell.char ?? ''}
    </div>
    
  {/each}
</div>


<style>
  .tape {
    display: flex;
    font-family: monospace;
  }
  .cell {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }
  
  .current {
    outline: 2px solid blue;
  }
  
  .empty {
    opacity: 0.2;
  }
</style>