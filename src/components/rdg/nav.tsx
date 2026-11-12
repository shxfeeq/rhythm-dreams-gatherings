import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { rdgAssets } from "@/lib/rdg-assets";
import { RDG, navigation } from "@/lib/rdg-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors", scrolled && "border-border bg-background/95 backdrop-blur-md")}>
        <nav aria-label="Main navigation" className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between lg:px-10">
          <Link to="/" aria-label="Rhythm Dreams Gatherings home" className="flex min-w-0 items-center gap-3">
            <img src={rdgAssets.logo} alt="RDG Event Entertainments" className="h-11 w-11 shrink-0 object-contain" />
            <span className="min-w-0 truncate font-display text-sm text-foreground sm:text-base">Rhythm Dreams Gatherings</span>
          </Link>
          <ul className="hidden items-center gap-5 xl:flex">
            {navigation.map(([label, to]) => <li key={to}><Link to={to} activeProps={{ className: "text-champagne" }} inactiveProps={{ className: "text-muted-foreground" }} activeOptions={{ exact: to === "/" }} className="text-[0.68rem] uppercase transition-colors hover:text-champagne">{label}</Link></li>)}
            <li><Link to="/leadership" className="text-[0.68rem] uppercase text-muted-foreground transition-colors hover:text-champagne">Founder</Link></li>
            <li><Link to="/reels" className="text-[0.68rem] uppercase text-muted-foreground transition-colors hover:text-champagne">Instant Reels</Link></li>
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button asChild><Link to="/booking">Book Now</Link></Button>
          </div>
          <Button type="button" variant="outline" size="icon" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="size-10 lg:hidden">
            {open ? <X /> : <Menu />}
          </Button>
        </nav>
      </header>

      <div className={cn("fixed inset-0 z-40 flex flex-col bg-background pt-20 transition-transform duration-300 xl:hidden", open ? "translate-x-0" : "pointer-events-none translate-x-full")} aria-hidden={!open}>
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="text-xs uppercase text-muted-foreground">Choose a page</span>
          <ThemeToggle />
        </div>
        <ul className="flex-1 overflow-y-auto px-6 py-5">
          {[...navigation, ["Founder", "/leadership"] as const, ["Instant Reels", "/reels"] as const, ["Booking", "/booking"] as const].map(([label, to]) => (
            <li key={to} className="border-b border-border"><Link to={to} onClick={() => setOpen(false)} className="block py-4 font-display text-2xl text-foreground hover:text-champagne">{label}</Link></li>
          ))}
          <li className="flex gap-4 py-5 text-xs"><Link to="/privacy" onClick={() => setOpen(false)} className="text-muted-foreground">Privacy</Link><Link to="/terms" onClick={() => setOpen(false)} className="text-muted-foreground">Terms</Link></li>
        </ul>
        <div className="grid grid-cols-3 border-t border-border pb-[env(safe-area-inset-bottom)]">
          <a href={RDG.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 text-xs"><MessageCircle className="size-4" /> WhatsApp</a>
          <Link to="/booking" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 bg-primary py-4 text-xs text-primary-foreground"><CalendarDays className="size-4" /> Book Now</Link>
          <a href={`tel:${RDG.phone}`} className="flex items-center justify-center gap-2 py-4 text-xs"><Phone className="size-4" /> Call</a>
        </div>
      </div>
    </>
  );
}