<script lang="ts">
  import PaperCard from '$lib/components/PaperCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Technical Papers - Harshit Halwan</title>
</svelte:head>

<div class="container-narrow py-12">
  <section class="mb-12">
    <h1 class="text-4xl font-serif font-bold mb-4">Technical Papers</h1>
    <p class="text-lg text-[var(--color-text-muted)]">
      In-depth analysis and summaries of research papers I'm reading.
    </p>
  </section>

  {#if data.papers.length === 0}
    <div class="text-center py-12">
      <p class="text-[var(--color-text-muted)]">No papers analyzed yet. Check back soon!</p>
    </div>
  {:else}
    <div class="grid gap-6">
      {#each data.papers as paper}
        <PaperCard
          title={paper.title}
          authors={paper.authors}
          year={paper.year}
          excerpt={paper.excerpt}
          slug={paper.slug}
          paperUrl={paper.paperUrl}
          tags={paper.tags}
        />
      {/each}
    </div>
  {/if}
</div>
