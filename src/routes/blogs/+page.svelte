<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Blog - Harshit Halwan</title>
</svelte:head>

<div class="container-narrow py-12">
  <section class="mb-12">
    <h1 class="text-4xl font-serif font-bold mb-4">Blog</h1>
    <p class="text-lg text-[var(--color-text-muted)]">
      Thoughts on software engineering, AI/ML, and technology.
    </p>
  </section>

  {#if data.blogs.length === 0}
    <div class="text-center py-12">
      <p class="text-[var(--color-text-muted)]">No blog posts yet. Check back soon!</p>
    </div>
  {:else}
    <div class="grid gap-6">
      {#each data.blogs as blog}
        <BlogCard
          title={blog.title}
          excerpt={blog.excerpt}
          date={blog.date}
          slug={blog.slug}
          tags={blog.tags}
        />
      {/each}
    </div>
  {/if}
</div>
