import { useCallback, useEffect, useState } from 'react';
import type { Theme } from '../types';

const THEME_KEY = 'vitaring_theme';

/**
 * Custom hook to manage dark/light theme with localStorage persistence.
 * Applies the `data-theme` attribute on `<html>` for CSS variable switching.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const isDark = theme === 'dark';

  return { theme, isDark, toggleTheme } as const;
}
