import { useState, useEffect } from 'react';

export function useDarkMode() {
  // 1) Determinar el tema inicial:
  const [theme, setTheme] = useState(() => {
    // Si hay preferencia guardada, úsala...
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // ...si no, usa la preferencia del sistema:
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // 2) Efecto: sincroniza clase y localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
