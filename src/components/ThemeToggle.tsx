import { useEffect, useState } from "react";

function initialDark(): boolean {
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-ink/15 dark:border-white/20 px-3 py-1.5 text-sm hover:bg-accent-soft dark:hover:bg-white/10 transition-colors"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
