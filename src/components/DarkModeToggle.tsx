import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("domous_theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("domous_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("domous_theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-card border-2 border-border shadow-card hover:shadow-domous transition-smooth flex items-center justify-center"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};

export default DarkModeToggle;
