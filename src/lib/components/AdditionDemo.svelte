<script lang="ts">
  import { onDestroy } from "svelte";
  import NumberTile from "$lib/components/NumberTile.svelte";

  export let mode: "decimal" | "ripple" | "lookahead" = "ripple";

  const configurations = {
    decimal: {
      title: "How we add by hand",
      a: [3, 4, 7],
      b: [1, 8, 5],
      sum: [5, 3, 2],
      carries: [1, 1, ""],
      accent: "#a65d2d",
      totalSteps: 3,
    },
    ripple: {
      title: "Ripple-carry adder",
      a: [1, 0, 1, 1],
      b: [0, 0, 0, 1],
      sum: [1, 1, 0, 0],
      carries: [0, 1, 1, 0],
      accent: "#397740",
      totalSteps: 4,
    },
    lookahead: {
      title: "Carry-lookahead adder",
      a: [1, 0, 1, 1],
      b: [0, 0, 0, 1],
      sum: [1, 1, 0, 0],
      carries: [0, 1, 1, 0],
      accent: "#1c7183",
      totalSteps: 3,
    },
  };

  let step = 0;
  let playing = false;
  let timer: ReturnType<typeof setInterval> | undefined;
  $: config = configurations[mode];
  $: isLookahead = mode === "lookahead";
  $: digits = config.a.length;
  $: status =
    mode === "decimal"
      ? step === 0
        ? "Start at the ones column"
        : step === config.totalSteps
          ? "Finished: 347 + 185 = 532"
          : `Column ${step} of 3`
      : mode === "ripple"
        ? ["Ready", "Add bit 0", "Add bit 1", "Add bit 2", "Add bit 3"][step]
        : ["Ready", "Find P and G", "Calculate carries", "Add all bits"][step];
  $: counterLabel = mode === "decimal" ? "Step" : "CPU cycle";

  function stop() {
    playing = false;
    if (timer) clearInterval(timer);
    timer = undefined;
  }
  function next() {
    if (step < config.totalSteps) step += 1;
    else stop();
  }
  function togglePlay() {
    if (playing) return stop();
    if (step === config.totalSteps) step = 0;
    playing = true;
    timer = setInterval(next, 1100);
    next();
  }
  function reset() {
    stop();
    step = 0;
  }
  function isActive(index: number) {
    return !isLookahead && step > 0 && index === digits - step;
  }
  function sumDone(index: number) {
    return isLookahead ? step >= 3 : step > digits - 1 - index;
  }
  function carryDone(index: number) {
    if (isLookahead) return step >= 2;
    const rightmost = digits - 1;
    if (index === rightmost) return mode === "ripple";
    return step >= digits - 1 - index;
  }
  function carryValue(value: string | number, index: number) {
    if (index === digits - 1 && mode === "decimal") return "";
    return carryDone(index) ? value : "";
  }
  function bitIsPropagated(index: number) {
    return config.a[index] ^ config.b[index];
  }
  function bitIsGenerated(index: number) {
    return config.a[index] & config.b[index];
  }
  onDestroy(stop);
</script>

<section
  class:lookahead={isLookahead}
  class="addition-demo not-prose"
  style:--demo-accent={config.accent}
  style:--digits={digits}
  aria-label={config.title}
>
  <div class="demo-heading">
    <div>
      <p class="eyebrow">{config.title}</p>
      <p class="status">{status}</p>
    </div>
    <div class="control-bar">
      <p
        class="step-counter"
        aria-label={`${counterLabel} ${step} of ${config.totalSteps}`}
      >
        <span>{counterLabel}</span><strong
          >{step}<small> / {config.totalSteps}</small></strong
        >
      </p>
      <div class="controls">
        <button class="play-button" on:click={togglePlay}
          >{playing
            ? "Pause"
            : step === config.totalSteps
              ? "Replay"
              : "Play"}</button
        ><button on:click={next} disabled={step === config.totalSteps}
          >Step</button
        ><button
          class="reset-button"
          on:click={reset}
          aria-label="Reset animation">↺</button
        >
      </div>
    </div>
  </div>

  <div class="addition-stack" aria-label="Addition animation">
    <div class="number-row carry-row">
      <span>carry</span
      >{#each config.carries as carry, index}{#key `${step}-carry-${index}`}<NumberTile
            value={carryValue(carry, index)}
            small
            done={carryDone(index)}
            muted={!carryDone(index)}
          />{/key}{/each}
    </div>
    <div class="number-row">
      <span>A</span>{#each config.a as digit, index}<NumberTile
          value={digit}
          active={isActive(index)}
        />{/each}
    </div>
    <div class="number-row">
      <span>B</span>{#each config.b as digit, index}<NumberTile
          value={digit}
          active={isActive(index)}
        />{/each}
    </div>
    {#if isLookahead}
      <div class:shown={step >= 1} class="number-row signal-row propagate-row">
        <span>P</span>{#each config.a as _, index}<span class="number-tile small"
            >{bitIsPropagated(index)}</span
          >{/each}
      </div>
      <div class:shown={step >= 1} class="number-row signal-row generate-row">
        <span>G</span>{#each config.a as _, index}<span class="number-tile small"
            >{bitIsGenerated(index)}</span
          >{/each}
      </div>
    {/if}
    <div class="sum-rule"><span>+</span><i></i></div>
    <div class="number-row sum-row">
      <span>Σ</span
      >{#each config.sum as digit, index}{#key `${step}-sum-${index}`}<NumberTile
            value={sumDone(index) ? digit : "·"}
            done={sumDone(index)}
            muted={!sumDone(index)}
            active={isActive(index)}
          />{/key}{/each}
    </div>
  </div>

  <p class="explanation">
    {#if mode === "decimal"}{step === 0
        ? "Add 7 and 5 first. The empty carry box on the right means there is no incoming carry."
        : step === 1
          ? "7 + 5 makes 12: write 2 and carry 1."
          : step === 2
            ? "4 + 8 + 1 makes 13: write 3 and carry 1."
            : "3 + 1 + 1 makes 5. We are done."}
    {:else if mode === "ripple"}{step === 0
        ? "Each carry box is present from the start. The rightmost 0 is the carry-in to the first full adder."
        : step < 4
          ? "This full adder produces a carry, which the next position must wait to receive."
          : "Four full-adder delays later: 1011 + 0001 = 1100."}
    {:else}{step === 0
        ? "Every carry position is drawn up front; lookahead determines their values with logic."
        : step === 1
          ? "P and G flags are calculated for every bit at the same time."
          : step === 2
            ? "The carry values resolve together from those flags."
            : "With the carries known, every sum bit can resolve together."}{/if}
  </p>
</section>

<style>
  .addition-demo {
    --tile-size: clamp(3rem, 10vw, 5.2rem);
    margin: 2rem 0;
    padding: 1.25rem 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
  }
  .demo-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1.8rem;
  }
  .eyebrow {
    margin: 0 0 0.25rem;
    color: var(--color-text-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .status {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
  }
  .control-bar {
    display: flex;
    align-items: stretch;
    gap: 0.8rem;
  }
  .step-counter {
    min-width: 5.3rem;
    margin: 0;
    padding: 0.45rem 0.7rem 0.4rem;
    border: 1px solid var(--demo-accent);
    border-left-width: 4px;
    color: var(--color-text-muted);
    line-height: 1;
    text-align: center;
  }
  .step-counter span {
    display: block;
    margin-bottom: 0.24rem;
    font:
      700 0.58rem "Space Grotesk",
      sans-serif;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
  .step-counter strong {
    color: var(--demo-accent);
    font:
      700 1.55rem/1 ui-monospace,
      monospace;
  }
  .step-counter small {
    font:
      500 0.74rem ui-monospace,
      monospace;
  }
  .controls {
    display: flex;
    gap: 0.38rem;
  }
  .controls button {
    min-width: 3.1rem;
    border: 1px solid var(--demo-accent);
    border-radius: 0;
    background: transparent;
    color: var(--demo-accent);
    padding: 0.4rem 0.65rem;
    font:
      700 0.76rem "Space Grotesk",
      sans-serif;
    cursor: pointer;
  }
  .controls .play-button {
    min-width: 4.15rem;
    background: var(--demo-accent);
    color: var(--color-bg);
  }
  .controls .reset-button {
    min-width: 2.2rem;
    padding: 0;
    font-size: 1.1rem;
  }
  .controls button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .addition-stack {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 0.48rem;
  }
  .number-tile.small {
    display: grid;
    place-items: center;
  }
  .number-row {
    display: grid;
    grid-template-columns: 2rem repeat(var(--digits, 4), var(--tile-size));
    gap: 0.4rem;
    align-items: center;
  }
  .number-row > span:first-child {
    color: var(--color-text-muted);
    text-align: center;
    font:
      600 0.7rem "Space Grotesk",
      sans-serif;
  }
  .carry-row {
    --demo-accent: #a65d2d;
  }
  .sum-row {
    --demo-accent: #1c7183;
  }
  .lookahead .carry-row,
  .lookahead .sum-row {
    --demo-accent: #1c7183;
  }
  .signal-row {
    opacity: 0.15;
    transition: opacity 0.3s;
    min-height: 1.1rem;
  }
  .signal-row.shown {
    opacity: 1;
  }
  .propagate-row {
    color: #126172;
  }
  .generate-row {
    color: #a65d2d;
  }
  .sum-rule {
    display: grid;
    grid-template-columns: 2rem 1fr;
    align-items: center;
    gap: 0.4rem;
  }

  .sum-rule i {
    border-top: 1px solid var(--color-text);
  }
  .explanation {
    margin: 1.25rem 0 0;
    padding-left: 0.8rem;
    border-left: 2px solid var(--demo-accent);
    color: var(--color-text-muted);
    font-size: 0.88rem;
    line-height: 1.5;
  }
  @media (max-width: 560px) {
    .addition-demo {
      --tile-size: clamp(2.65rem, 12vw, 3.6rem);
    }
    .demo-heading {
      display: block;
    }
    .control-bar {
      margin-top: 0.9rem;
    }
    .number-row {
      grid-template-columns: 1.7rem repeat(var(--digits, 4), var(--tile-size));
      gap: 0.28rem;
    }
  }
</style>
