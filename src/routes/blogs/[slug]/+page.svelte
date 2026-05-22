<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const blogModules = import.meta.glob('/src/content/blogs/*.md', { eager: true }) as Record<
    string,
    {
      default: any;
    }
  >;

  $: blog = data.blog;
  $: content = blogModules[`/src/content/blogs/${blog.slug}.md`]?.default;

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{blog.title} - Harshit Halwan</title>
</svelte:head>

<div class="container-narrow py-12">
  <article>
    <header class="mb-12">
      <a href="/blogs" class="text-primary-600 dark:text-primary-400 text-sm mb-4 inline-block hover:underline">
        ← Back to Blog
      </a>
      <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">
        {blog.title}
      </h1>
      <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
        <time datetime={blog.date}>
          {formatDate(blog.date)}
        </time>
        {#if blog.tags && blog.tags.length > 0}
          <div class="flex gap-2">
            {#each blog.tags as tag}
              <span class="px-2 py-1 bg-[var(--color-card)] rounded">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </header>

    <div class="prose prose-lg dark:prose-invert max-w-none">
      <svelte:component this={content} />
    </div>
  </article>
</div>
