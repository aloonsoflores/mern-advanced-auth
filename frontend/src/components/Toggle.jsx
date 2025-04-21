import { Sun, Moon } from 'lucide-react';  // o cualquier icono

export default function Toggle({ theme, setTheme }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full focus:outline-none focus:ring"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}
