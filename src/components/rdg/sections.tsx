import { useEffect, useState } from "react";
import { ArrowRight, Instagram, MapPin, MessageCircle, Phone, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SmartImage, SmartVideo } from "./media";
import { EnquiryForm } from "./enquiry";
import {
  RDG,
  collaborations,
  experiences,
  instagramGallery,
  reels,
  services,
  testimonials,
  whyRDG,
  workItems,
} from "@/lib/rdg-data";
import { cn } from "@/lib/utils";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-5 py-24 md:px-10 md:py-32", className)}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative grain flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <SmartVideo src="/assets/videos/hero.mp4" poster="/assets/images/hero.jpg" className="h-full w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_6%,oklch(0.12_0.005_250/0.55)_55%,oklch(0.12_0.005_250/0.75))]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <p className="eyebrow reveal">Kumbakonam · Tamil Nadu · India</p>
        <h1 className="reveal mt-6 max-w-5xl font-display text-[clamp(2.6rem,9vw,7rem)] font-extrabold leading-[0.95]">
          Rhythm Dreams
          <span className="block text-champagne">Gatherings</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Event management, cinematic photography and creative experiences — planned with intent
          and executed with precision.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-champagne px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-ink transition-opacity hover:opacity-90"
          >
            Plan your event <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <Eyebrow>About RDG</Eyebrow>
          <h2 className="max-w-xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            We build events people keep talking about.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Rhythm Dreams Gatherings is an event management and creative production house based in
            Kumbakonam. We plan, design and run weddings, college fests, corporate productions and
            celebrations — and we film every one of them like it matters.
          </p>
          <p className="mt-4 text-muted-foreground">
            One team handles planning, stage, sound, light, entertainment, photography and film, so
            nothing falls between vendors and nothing gets lost on the day.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["10+", "Service verticals"],
              ["Same day", "Instant Reels"],
              ["Tamil Nadu", "Wherever you are"],
            ].map(([a, b]) => (
              <div key={b}>
                <p className="font-display text-xl text-champagne md:text-2xl">{a}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <SmartImage
          src="/assets/images/about.jpg"
          alt="RDG team producing a live event"
          className="reveal aspect-4/5 w-full"
        />
      </div>
    </Section>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <Section id="services" className="border-t border-border">
      <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">Services</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Ten verticals, one production team. Select a service to see exactly what is included.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ul className="reveal divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <li key={s.number}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className={cn(
                  "group flex w-full items-center gap-5 py-5 text-left transition-colors",
                  active === i ? "text-champagne" : "text-foreground hover:text-champagne",
                )}
              >
                <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">{s.number}</span>
                <span className="font-display text-xl md:text-2xl">{s.title}</span>
                {"featured" in s && s.featured ? (
                  <span className="ml-auto border border-lime px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-lime">
                    New
                  </span>
                ) : (
                  <ArrowRight className="ml-auto size-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="reveal">
          <SmartImage
            src={services[active].image}
            alt={services[active].title}
            className="aspect-video w-full"
          />
          <h3 className="mt-6 font-display text-2xl">{services[active].title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{services[active].description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {services[active].features.map((f) => (
              <li key={f} className="border border-border px-3 py-1.5 text-xs text-muted-foreground">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function InstantReels() {
  return (
    <Section className="border-t border-border bg-card/40">
      <div className="reveal grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-4 text-lime">Instant Reels</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            Your reel, before the function ends.
          </h2>
          <p className="mt-6 text-muted-foreground">
            We shoot, cut and colour on site — so your highlight reel is on your phone and your
            story while your guests are still on the floor.
          </p>
          <a
            href={RDG.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 border border-lime px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            Book Instant Reels <MessageCircle className="size-4" aria-hidden />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {reels.map(([src, poster]) => (
            <div key={src} className="aspect-9/16 overflow-hidden bg-secondary">
              <SmartVideo src={src} poster={poster} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Work() {
  const categories = ["All", ...Array.from(new Set(workItems.map((w) => w.category)))];
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = workItems.filter((w) => filter === "All" || w.category === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <Section id="work" className="border-t border-border">
      <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">The Gallery</h2>
        </div>
        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => {
                  setFilter(c);
                  setLightbox(null);
                }}
                aria-pressed={filter === c}
                className={cn(
                  "border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors",
                  filter === c
                    ? "border-champagne bg-champagne text-ink"
                    : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((w, i) => (
          <button
            key={w.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="reveal group relative block overflow-hidden text-left"
          >
            <SmartImage
              src={w.src}
              alt={w.title}
              className="aspect-4/5 w-full"
              imgClassName="group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,var(--ink),transparent)] p-5">
              <p className="font-display text-lg">{w.title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne">
                {w.category} · {w.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center border border-border text-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) - 1 + items.length) % items.length);
            }}
            className="absolute left-4 inline-flex size-11 items-center justify-center border border-border"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) + 1) % items.length);
            }}
            className="absolute right-4 inline-flex size-11 items-center justify-center border border-border"
          >
            <ChevronRight className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-full max-w-4xl">
            <SmartImage src={items[lightbox].src} alt={items[lightbox].title} className="max-h-[75vh] w-full" />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {items[lightbox].title} — {items[lightbox].category}
            </figcaption>
          </figure>
        </div>
      )}
    </Section>
  );
}

export function Experiences() {
  return (
    <Section id="experiences" className="border-t border-border bg-card/40">
      <div className="reveal mb-12">
        <Eyebrow>Experiences</Eyebrow>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          Every kind of gathering
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map(([title, copy, img]) => (
          <article key={title} className="reveal group relative overflow-hidden">
            <SmartImage src={img} alt={title} className="aspect-3/4 w-full" imgClassName="group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(to_top,var(--ink),transparent_70%)] p-5">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WhyRDG() {
  return (
    <Section className="border-t border-border">
      <div className="reveal mb-12">
        <Eyebrow>Why RDG</Eyebrow>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          Serious events need a serious team
        </h2>
      </div>
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {whyRDG.map(([title, copy]) => (
          <div key={title} className="reveal bg-background p-8">
            <h3 className="font-display text-lg text-champagne">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Partners() {
  return (
    <Section id="partners" className="border-t border-border">
      <div className="reveal mb-12">
        <Eyebrow>Collaborations</Eyebrow>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          Teams we have worked with
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {collaborations.map(([name, logo]) => (
          <div key={name} className="reveal flex flex-col items-center gap-4 bg-background p-10">
            <SmartImage src={logo} alt={name} className="h-16 w-full bg-transparent" imgClassName="object-contain" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section className="border-t border-border bg-card/40">
      <div className="reveal mb-12">
        <Eyebrow>Kind words</Eyebrow>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          What clients say
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map(([quote, name, role]) => (
          <blockquote key={name} className="reveal border border-border p-8">
            <p className="font-display text-lg leading-snug">“{quote}”</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-champagne">{name}</span> · {role}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

export function InstagramStrip() {
  return (
    <Section className="border-t border-border">
      <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>On Instagram</Eyebrow>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)]">{RDG.instagramHandle}</h2>
        </div>
        <a
          href={RDG.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 border border-border px-6 py-3 text-[0.65rem] uppercase tracking-[0.25em] transition-colors hover:border-champagne hover:text-champagne"
        >
          Follow <Instagram className="size-4" aria-hidden />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
        {instagramGallery.map((src, i) => (
          <a
            key={src + i}
            href={RDG.instagram}
            target="_blank"
            rel="noreferrer"
            className="reveal group block overflow-hidden"
          >
            <SmartImage src={src} alt="RDG event moment" className="aspect-square w-full" imgClassName="group-hover:scale-110" />
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border bg-card/40">
      <div className="grid gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Let’s plan something worth remembering.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tell us the date and the idea — we’ll come back with a plan, a team and a quote.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a href={`tel:${RDG.phone}`} className="inline-flex items-center gap-3 hover:text-champagne">
                <Phone className="size-4 text-champagne" aria-hidden /> {RDG.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={RDG.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-champagne">
                <MessageCircle className="size-4 text-champagne" aria-hidden /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={RDG.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-champagne">
                <Instagram className="size-4 text-champagne" aria-hidden /> {RDG.instagramHandle}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4 text-champagne" aria-hidden /> {RDG.location}
            </li>
          </ul>
        </div>
        <div className="reveal">
          <EnquiryForm />
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg tracking-[0.3em]">RDG</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {RDG.name} · {RDG.location}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={`tel:${RDG.phone}`}
            aria-label="Call RDG"
            className="inline-flex size-11 items-center justify-center border border-border hover:border-champagne hover:text-champagne"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={RDG.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp RDG"
            className="inline-flex size-11 items-center justify-center border border-border hover:border-champagne hover:text-champagne"
          >
            <MessageCircle className="size-4" />
          </a>
          <a
            href={RDG.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="RDG on Instagram"
            className="inline-flex size-11 items-center justify-center border border-border hover:border-champagne hover:text-champagne"
          >
            <Instagram className="size-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {RDG.name}</p>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={RDG.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex size-13 items-center justify-center rounded-full bg-champagne text-ink shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={`tel:${RDG.phone}`}
        aria-label="Call RDG"
        className="inline-flex size-13 items-center justify-center rounded-full border border-border bg-ink text-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}

export { Play };
