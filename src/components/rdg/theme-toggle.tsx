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
  const resolved = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeChoice = theme;
  document.documentElement.style.colorScheme = resolved;
  window.localStorage.setItem("rdg-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeChoice>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("rdg-theme");
    const initial = saved === "light" || saved === "dark" ? saved : "system";
    setTheme(initial);
    applyTheme(initial);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => { if (initial === "system") applyTheme("system"); };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
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