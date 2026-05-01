<script lang="ts">
  export let title: string;
  export let authors: string;
  export let year: number;
  export let excerpt: string;
  export let slug: string;
  export let paperUrl: string = '';
  export let tags: string[] = [];

  function truncateExcerpt(text: string, maxLength: number = 150): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
</script>

<a href="/papers/{slug}" class="card group block hover:shadow-lg">
  <div class="mb-2">
    <span class="text-xs text-[var(--color-text-muted)] font-medium">{authors} ({year})</span>
  </div>
  <h3 class="text-xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">
    {title}
  </h3>
  {#if paperUrl}
    <p class="text-sm text-primary-600 dark:text-primary-400 mb-3">
      <a href={paperUrl} target="_blank" rel="noopener noreferrer" on:click|stopPropagation>
        Read Original Paper →
      </a>
    </p>
  {/if}
  <p class="text-[var(--color-text)] leading-relaxed mb-4">
    {truncateExcerpt(excerpt)}
  </p>
  {#if tags.length > 0}
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
        <span class="px-2 py-1 text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded">
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</a>
