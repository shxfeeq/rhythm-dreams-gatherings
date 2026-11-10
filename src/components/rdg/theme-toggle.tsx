import { useEffect, useState } from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeChoice = "system" | "light" | "dark";

const choices: { value: ThemeChoice; label: string; Icon: typeof Sun }[] = [
  { value: "system", label: "System theme", Icon: Laptop },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
];

function applyTheme(theme: ThemeChoice) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "system" ? "light dark" : theme;
  window.localStorage.setItem("rdg-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeChoice>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("rdg-theme");
    const initial = saved === "light" || saved === "dark" ? saved : "system";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    document.documentElement.style.colorScheme = initial === "system" ? "light dark" : initial;
  }, []);

  return (
    <div role="group" aria-label="Choose colour theme" className="flex items-center gap-1">
      {choices.map(({ value, label, Icon }) => (
        <Button
          key={value}
          type="button"
          variant="ghost"
          size="icon"
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
          onClick={() => {
            setTheme(value);
            applyTheme(value);
          }}
          className="size-10 rounded-none text-muted-foreground aria-pressed:text-champagne"
        >
          <Icon aria-hidden="true" className="size-4" />
        </Button>
      ))}
    </div>
  );
}