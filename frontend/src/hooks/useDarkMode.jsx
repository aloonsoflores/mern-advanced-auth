import { useState, useEffect, useCallback } from 'react';

export function useDarkMode() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'light'; // SSR fallback
    
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  });

  // Escuchar cambios en el tema del sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  // Wrap setTheme con useCallback para optimizar
  const setTheme = useCallback((newTheme) => {
    if (newTheme) {
      localStorage.setItem('theme', newTheme);
      setThemeState(newTheme);
    } else {
      localStorage.removeItem('theme');
      setThemeState(window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light');
    }
  }, []);

  // Sincronizar con el DOM
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  return [theme, setTheme];
}