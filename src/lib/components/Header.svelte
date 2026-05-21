<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  import { theme } from '$lib/stores/theme';
</script>

<header class="sticky top-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
  <nav class="container-narrow">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="flex items-center gap-3 text-[var(--color-text)] hover:text-primary-600 transition-colors">
        <img src={$theme === 'dark' ? '/logos/logo_dark.png' : '/logos/logo_light.png'} alt="Site logo" class="h-16 w-auto" />
        <span class="sr-only">Home</span>
      </a>

      <div class="flex items-center gap-8">
        <a href="/" class="nav-link text-sm font-medium">About</a>
        <a href="/blogs" class="nav-link text-sm font-medium">Blog</a>
        <a href="/papers" class="nav-link text-sm font-medium">Papers</a>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</header>
