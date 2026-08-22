<script lang="ts">
  import NumberTile from "$lib/components/NumberTile.svelte";
  let step = 0;
  const equations = [
    { carry: "C₀", formula: "0", substitution: "0", result: "0" },
    { carry: "C₁", formula: "G₀ + P₀C₀", substitution: "1 + 0·0", result: "1" },
    {
      carry: "C₂",
      formula: "G₁ + P₁G₀ + P₁P₀C₀",
      substitution: "0 + 1·1 + 1·0·0",
      result: "1",
    },
    {
      carry: "C₃",
      formula: "G₂ + P₂G₁ + P₂P₁G₀ + P₂P₁P₀C₀",
      substitution: "0 + 0·0 + 0·1·1 + 0·1·0·0",
      result: "0",
    },
  ];
  function next() {
    step = step === equations.length ? 0 : step + 1;
  }
</script>

<section class="equation-demo not-prose" aria-label="Carry lookahead equations">
  <div class="equation-heading">
    <div>
      <p class="eyebrow">Carry logic, expanded</p>
      <p>Every carry is calculated from the P and G flags in parallel.</p>
    </div>
    <button on:click={next}
      >{step === equations.length ? "Reset" : "Reveal next carry"}</button
    >
  </div>
  <div class="flag-key">
    <span class="propagate">P = 1, 0, 1, 0</span><span class="generate"
      >G = 0, 0, 0, 1</span
    ><span class="hint">(left → right)</span>
  </div>
  <div class="equations">
    {#each equations as equation, index}
      <div class:visible={step > index} class="equation-row">
        <NumberTile value={equation.carry} small done={step > index} /><code
          >{equation.formula}</code
        ><span class="equals">=</span><code class="substitution"
          >{equation.substitution}</code
        ><span class="equals">=</span><strong>{equation.result}</strong>
      </div>
    {/each}
  </div>
</section>

<style>
  .equation-demo {
    --demo-accent: #1c7183;
    --demo-soft: #dff2f3;
    margin: 1.5rem 0 2rem;
    padding: 2rem;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }
  .equation-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
  .eyebrow {
    margin: 0 0 0.25rem;
    color: var(--color-text-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .equation-heading p:not(.eyebrow) {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 0.85rem;
  }
  .equation-heading button {
    border: 1px solid var(--demo-accent);
    border-radius: 0;
    background: transparent;
    color: var(--demo-accent);
    padding: 0.45rem 0.65rem;
    white-space: nowrap;
    font:
      600 0.75rem "Space Grotesk",
      sans-serif;
    cursor: pointer;
  }
  .flag-key {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1rem 0;
    font:
      600 0.72rem ui-monospace,
      monospace;
  }
  .flag-key span {
    padding: 0;
  }
  .propagate {
    color: #126172;
  }
  .generate {
    color: #914016;
  }
  .hint {
    color: var(--color-text-muted);
  }
  .equations {
    display: grid;
    gap: 0.48rem;
  }
  .equation-row {
    display: grid;
    grid-template-columns: 2rem minmax(7rem, auto) auto minmax(7rem, auto) auto 1rem;
    align-items: center;
    gap: 0.45rem;
    opacity: 0.22;
    transform: translateX(-4px);
    transition:
      opacity 0.28s,
      transform 0.28s;
    font-size: 0.78rem;
  }
  .equation-row.visible {
    opacity: 1;
    transform: none;
  }
  .equation-row code {
    color: var(--color-text);
    padding: 0.35rem 0;
    overflow-x: auto;
    white-space: nowrap;
  }
  .equation-row .substitution {
    color: var(--demo-accent);
  }
  .equals {
    color: var(--color-text-muted);
  }
  .equation-row strong {
    color: var(--demo-accent);
    font:
      700 1rem ui-monospace,
      monospace;
  }
  @media (max-width: 600px) {
    .equation-heading {
      display: block;
    }
    .equation-heading button {
      margin-top: 0.75rem;
    }
    .equation-row {
      grid-template-columns: 1.7rem 1fr auto;
    }
    .equation-row .substitution,
    .equation-row .equals:nth-of-type(2) {
      display: none;
    }
  }
</style>
