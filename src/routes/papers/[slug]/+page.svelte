<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const paperModules = import.meta.glob('/src/content/papers/*.md', { eager: true }) as Record<
    string,
    {
      default: any;
    }
  >;

  $: paper = data.paper;
  $: content = paperModules[`/src/content/papers/${paper.slug}.md`]?.default;
</script>

<svelte:head>
  <title>{paper.title} - Harshit Halwan</title>
</svelte:head>

<div class="container-narrow py-12">
  <article>
    <header class="mb-12">
      <a href="/papers" class="text-primary-600 dark:text-primary-400 text-sm mb-4 inline-block hover:underline">
        ← Back to Papers
      </a>
      <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">
        {paper.title}
      </h1>
      <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
        <span>{paper.authors} ({paper.year})</span>
        {#if paper.paperUrl}
          <a 
            href={paper.paperUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Read Original Paper →
          </a>
        {/if}
      </div>
      {#if paper.tags && paper.tags.length > 0}
        <div class="flex gap-2 mt-4">
          {#each paper.tags as tag}
            <span class="px-2 py-1 bg-[var(--color-card)] rounded text-sm">
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </header>

    <div class="prose prose-lg dark:prose-invert max-w-none">
      <svelte:component this={content} />
    </div>
  </article>
</div>
