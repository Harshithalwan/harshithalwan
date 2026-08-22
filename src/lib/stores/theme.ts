import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const getInitialTheme = (): Theme => {
    if (!browser) return 'light';

    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;

    // Default to light theme unless the user explicitly chose dark.
    return 'light';
  };

  const { subscribe, set, update } = writable<Theme>(getInitialTheme());

  return {
    subscribe,
    toggle: () => {
      update(current => {
        const newTheme = current === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
        return newTheme;
      });
    },
    set: (theme: Theme) => {
      if (browser) {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }
      set(theme);
    }
  };
}

export const theme = createThemeStore();
