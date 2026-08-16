<script lang="ts">
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<header>
  <nav aria-label="Main navigation">
    <div class="nav-shell container-narrow">
      <a href="/" class="brand" aria-label="Harshit Halwan — home">
        <Logo alt="Harshit Halwan monogram" className="h-11 w-11" />
      </a>

      <div class="links">
        <a href="/#journey">JOURNEY</a>
        <a href="/blogs">BLOG</a>
        <a href="/papers">PAPERS</a>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</header>

<style>
  header { position: sticky; top: 0; z-index: 50; height: 4.25rem; background: var(--color-header); border-bottom: 1px solid var(--color-border); backdrop-filter: blur(18px); transition: background .3s, border-color .3s; }
  nav { height: 100%; }
  .nav-shell { height: 100%; display: flex; align-items: center; justify-content: space-between; }
  .brand { display: flex; align-items: center; color: var(--color-text); }
  .links { display: flex; align-items: center; gap: clamp(.75rem, 2.5vw, 2rem); }
  .links :global(a) { color: var(--color-text-muted); font-size: .68rem; font-weight: 700; letter-spacing: .12em; transition: color .2s; }
  .links :global(a:hover) { color: var(--color-text); }
  @media (max-width: 560px) {
    header { height: 4rem; }
    .links :global(a:first-child) { display: none; }
    .links { gap: 1rem; }
  }
</style>
