<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { error } from '@sveltejs/kit';

  let slug = $page.params.slug || '';
  let blog: any = null;
  let content: any = null;
  let loading = true;
  let notFound = false;

  $: slug = $page.params.slug;

  $: if (slug) {
    loadBlog();
  }

  async function loadBlog() {
    loading = true;
    notFound = false;
    
    try {
      const allBlogModules = import.meta.glob('/src/content/blogs/*.md');
      const path = `/src/content/blogs/${slug}.md`;
      
      if (!allBlogModules[path]) {
        notFound = true;
        loading = false;
        return;
      }

      const mod = await allBlogModules[path]() as any;
      blog = {
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

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{blog?.title || 'Loading...'} - Harshit Halwan</title>
</svelte:head>

<div class="container-narrow py-12">
  {#if loading}
    <div class="animate-pulse">
      <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
      <div class="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div class="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  {:else if notFound}
    <h1 class="text-3xl font-bold mb-4">404 - Blog Not Found</h1>
    <a href="/blogs" class="text-primary-600 hover:underline">← Back to Blog</a>
  {:else if blog}
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
  {/if}
</div>
