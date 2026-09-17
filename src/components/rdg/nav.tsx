import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { RDG, navigation } from "@/lib/rdg-data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled ? "bg-ink/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" className="group flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-[0.3em] text-foreground">RDG</span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              Rhythm Dreams Gatherings
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-champagne focus-visible:text-champagne"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={RDG.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 border border-champagne px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.25em] text-champagne transition-colors hover:bg-champagne hover:text-ink sm:inline-flex"
            >
              <MessageCircle className="size-3.5" aria-hidden />
              Enquire
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <Menu className="size-5 opacity-0" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        <div className="h-px w-full bg-border/60">
          <div className="h-px bg-champagne transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-xl tracking-[0.3em]">RDG</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 items-center justify-center border border-border"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
          {navigation.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-4xl text-foreground transition-colors hover:text-champagne"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 border-t border-border">
          <a href={`tel:${RDG.phone}`} className="flex items-center justify-center gap-2 py-5 text-xs uppercase tracking-[0.2em]">
            <Phone className="size-4" aria-hidden /> Call
          </a>
          <a
            href={RDG.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-champagne py-5 text-xs uppercase tracking-[0.2em] text-ink"
          >
            <MessageCircle className="size-4" aria-hidden /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
