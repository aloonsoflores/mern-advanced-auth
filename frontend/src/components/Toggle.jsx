import { Sun, Moon } from 'lucide-react';
import { useEffect, useState, memo } from 'react';

const ThemeToggle = memo(({ theme, setTheme }) => {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detectar preferencia de reducción de movimiento
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (!mounted) return null;

  const animationClass = prefersReducedMotion 
    ? '' 
    : 'hover:rotate-12 transition-transform duration-300';

  return (
    <button
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      role="switch"
      aria-checked={theme === 'dark'}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className={`w-6 h-6 text-yellow-400 ${animationClass}`} />
      ) : (
        <Moon className={`w-6 h-6 text-gray-700 dark:text-gray-300 ${animationClass}`} />
      )}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle'; // Para mejor debugging en React DevTools

export default ThemeToggle;