<script lang="ts">
  export let value: string | number = "·";
  export let active = false;
  export let done = false;
  export let small = false;
  export let muted = false;
</script>

<div class:active class:done class:small class:muted class="number-tile">
  {value}
</div>

<style>
  .number-tile {
    width: 100%;
    aspect-ratio: 1;
    margin: 0;
    display: grid;
    place-items: center;
    border: 1px solid var(--color-border);
    border-bottom-width: 3px;
    border-right-width: 3px;
    border-radius: 8px;
    background: transparent;
    color: var(--color-text);
    box-shadow: 0 3px 3px color-mix(in srgb, var(--color-text) 16%, transparent);
    font:
      700 1.1rem/1 ui-monospace,
      SFMono-Regular,
      Menlo,
      monospace;
    transition:
      transform 0.28s ease,
      background 0.28s ease,
      border-color 0.28s ease,
      box-shadow 0.28s ease,
      color 0.28s ease;
  }
  .number-tile.active {
    transform: translateY(-4px);
    border-color: var(--demo-accent, var(--color-accent));
    color: var(--demo-accent, var(--color-accent));
    box-shadow: 0 6px 0
      color-mix(
        in srgb,
        var(--demo-accent, var(--color-accent)) 32%,
        transparent
      );
  }
  .number-tile.done {
    color: var(--demo-accent, var(--color-accent));
    border-color: var(--demo-accent, var(--color-accent));
  }
  .number-tile.small {
    justify-self: center;
    border-bottom-width: 2px;
    box-shadow: 0 2px 0 color-mix(in srgb, var(--color-text) 16%, transparent);
  }
  .number-tile.muted {
    color: var(--color-text-muted);
    opacity: 0.45;
  }
</style>
