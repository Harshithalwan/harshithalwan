<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let slug = $page.params.slug || '';
  let paper: any = null;
  let content: any = null;
  let loading = true;
  let notFound = false;

  $: slug = $page.params.slug;

  $: if (slug) {
    loadPaper();
  }

  async function loadPaper() {
    loading = true;
    notFound = false;
    
    try {
      const allPaperModules = import.meta.glob('/src/content/papers/*.md');
      const path = `/src/content/papers/${slug}.md`;
      
      if (!allPaperModules[path]) {
        notFound = true;
        loading = false;
        return;
      }

      const mod = await allPaperModules[path]() as any;
      paper = {
        slug,
        ...mod.metadata
      };
      content = mod.default;
    } catch (e) {
      notFound = true;
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>{paper?.title || 'Loading...'} - Harshit Halwan</title>
</svelte:head>

<div class="container-narrow py-12">
  {#if loading}
    <div class="animate-pulse">
      <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
      <div class="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div class="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  {:else if notFound}
    <h1 class="text-3xl font-bold mb-4">404 - Paper Not Found</h1>
    <a href="/papers" class="text-primary-600 hover:underline">← Back to Papers</a>
  {:else if paper}
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
  {/if}
</div>
