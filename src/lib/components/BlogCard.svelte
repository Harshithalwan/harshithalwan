<script lang="ts">
  export let title: string;
  export let excerpt: string;
  export let date: string;
  export let slug: string;
  export let tags: string[] = [];

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<a href="/blogs/{slug}" class="card group block hover:shadow-lg">
  <h3 class="text-xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">
    {title}
  </h3>
  <p class="text-[var(--color-text-muted)] text-sm mb-3">
    {formatDate(date)}
  </p>
  <p class="text-[var(--color-text)] leading-relaxed mb-4">
    {excerpt}
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
