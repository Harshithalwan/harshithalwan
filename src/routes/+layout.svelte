<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import Header from '$lib/components/Header.svelte';

  onMount(() => {
    document.documentElement.classList.toggle('dark', $theme === 'dark');
  });
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="flex-1">
    <slot />
  </main>

  <footer class="border-t border-[var(--color-border)] py-8 mt-16">
    <div class="container-narrow text-center text-[var(--color-text-muted)] text-sm">
      <p>&copy; {new Date().getFullYear()} Harshit Halwan. Built with Svelte & Tailwind.</p>
    </div>
  </footer>
</div>
