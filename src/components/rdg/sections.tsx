import { useEffect, useState } from "react";
import { ArrowRight, Instagram, MapPin, MessageCircle, Phone, Play, X, ChevronLeft, ChevronRight, ArrowUpRight, Youtube, Facebook } from "lucide-react";
import { SmartImage } from "./media";
import {
  RDG,
  collaborations,
  experiences,
  instagramGallery,
  services,
  whyRDG,
  workItems,
} from "@/lib/rdg-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { rdgAssets } from "@/lib/rdg-assets";

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
        <SmartImage src={rdgAssets.photos[5].src} alt="Newlyweds sharing a quiet moment" className="h-full w-full" imgClassName="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_6%,oklch(0.12_0.005_250/0.55)_55%,oklch(0.12_0.005_250/0.75))]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <p className="eyebrow reveal">Kumbakonam · Tamil Nadu · India</p>
        <h1 className="reveal mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
          Every Celebration
          <span className="block text-champagne">Deserves to Be Extraordinary.</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          From unforgettable celebrations to timeless photographs and creative experiences, RDG brings your vision to life.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3">
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[0.7rem] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Plan your event <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 text-[0.7rem] uppercase text-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            Explore services
          </Link>
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
          <h2 className="max-w-xl font-display text-3xl leading-tight sm:text-4xl">
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
              ["Kumbakonam", "Our home"],
              ["Creative", "Event experiences"],
              ["By brief", "Tailored services"],
            ].map(([a, b]) => (
              <div key={b}>
                <p className="font-display text-xl text-champagne md:text-2xl">{a}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <SmartImage
          src={rdgAssets.eventStrip}
          alt="A selection of genuine RDG family, wedding and event photographs"
          className="reveal aspect-[4/5] w-full"
        />
      </div>
    </Section>
  );
}

export function FounderPreview() {
  return (
    <Section className="border-t border-border bg-card/40">
      <div className="grid items-center gap-9 md:grid-cols-[0.65fr_1.35fr] md:gap-14">
        <SmartImage src={rdgAssets.director} alt="S. Sivasankar, Founder and Event Manager at RDG Event Company" className="mx-auto aspect-[4/5] w-full max-w-sm" imgClassName="object-cover object-center" />
        <div>
          <Eyebrow>Founder & Event Manager</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl">S. Sivasankar</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Rhythm Dreams Gatherings was founded around creativity, thoughtful planning and memorable experiences. S. Sivasankar focuses on event planning, coordination, creative production, team management and client relationships.</p>
          <div className="mt-5 space-y-1 text-sm text-muted-foreground"><p>B.Com · SASTRA University</p><p>Event Management Course · VELS University</p><p>Distinction Certificate in Event Management</p></div>
          <img src={rdgAssets.signature} alt="Official handwritten signature of S. Sivasankar" className="mt-5 h-auto max-h-14 w-full max-w-xs object-contain object-left" />
          <Link to="/leadership" className="mt-5 inline-flex items-center gap-2 text-sm text-champagne hover:underline">Meet the founder <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <Section id="services" className="border-t border-border">
      <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Services</h2>
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
            src={current.image}
            alt={current.title}
            className="aspect-video w-full"
          />
          <h3 className="mt-6 font-display text-2xl">{current.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{current.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {current.features.map((f) => (
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
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Your reel, before the function ends.
          </h2>
          <p className="mt-6 text-muted-foreground">
            We shoot, cut and colour on site — so your highlight reel is on your phone and your
            story while your guests are still on the floor.
          </p>
          <Link
            to="/reels"
            className="mt-8 inline-flex items-center gap-3 border border-lime px-8 py-4 text-[0.7rem] uppercase text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            Book Instant Reels <MessageCircle className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {rdgAssets.photos.slice(2, 5).map((photo) => (
            <SmartImage key={photo.src} src={photo.src} alt={photo.alt} className="aspect-[9/16] w-full" />
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
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">The Gallery</h2>
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

      <div className="mt-8"><Button asChild variant="outline"><Link to="/work">Explore all photographs <ArrowRight /></Link></Button></div>

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
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
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
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
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
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Teams we have worked with
        </h2>
      </div>
      <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
        {collaborations.map(([name]) => <p key={name} className="border-b border-border py-6 font-display text-lg sm:px-5 lg:border-b-0 lg:border-r last:border-r-0">{name}</p>)}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Names shown from RDG’s provided collaboration list; partner logos are not displayed until verified originals are supplied.</p>
      <Link to="/partners" className="mt-5 inline-flex items-center gap-2 text-sm text-champagne hover:underline">Partner details <ArrowRight className="size-4" /></Link>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section className="border-t border-border bg-card/40">
      <div className="reveal mb-12">
        <Eyebrow>Kind words</Eyebrow>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          What clients say
        </h2>
      </div>
      <p className="max-w-2xl border-t border-border pt-6 leading-relaxed text-muted-foreground">Verified customer testimonials will be added here once provided and approved for publication. RDG does not display invented customer reviews or ratings.</p>
    </Section>
  );
}

export function InstagramStrip() {
  return (
    <Section className="border-t border-border">
      <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>On Instagram</Eyebrow>
          <h2 className="break-all font-display text-2xl sm:text-3xl">{RDG.instagramHandle}</h2>
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
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
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
            <li><a href={`mailto:${RDG.email}`} className="inline-flex items-start gap-3 break-all hover:text-champagne">{RDG.email}</a></li>
            <li className="inline-flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4 text-champagne" aria-hidden /> {RDG.location}
            </li>
            <li><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RDG.address)}`} target="_blank" rel="noreferrer" className="inline-flex items-start gap-3 hover:text-champagne"><MapPin className="size-4 shrink-0 text-champagne" aria-hidden />{RDG.address}</a></li>
          </ul>
        </div>
        <div className="reveal flex flex-col justify-center border-t border-border pt-7">
          <h3 className="font-display text-2xl">Tell us what you’re planning.</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Share your event details, services and preferences in a guided enquiry. Your message opens in WhatsApp for you to review and send.</p>
          <Button asChild className="mt-7 w-fit"><Link to="/booking">Start a booking enquiry</Link></Button>
          <Button asChild variant="outline" className="mt-3 w-fit"><Link to="/contact">Full contact details</Link></Button>
        </div>
      </div>
    </Section>
  );
}

export function FAQ() {
  const questions = [
    ["How do I enquire about an event?", "Use the booking enquiry form to share your event, services and contact details. It opens WhatsApp with your message for you to review and send."],
    ["Does the enquiry confirm my booking?", "No. It is an enquiry only. RDG will discuss availability, requirements and a quotation with you separately."],
    ["Does RDG provide printing services?", "RDG reviews printing requirements and coordinates production through external printing vendors and partners. RDG does not operate its own printing press."],
    ["Can I include reference images?", "You can select images in the form, then attach them manually after WhatsApp opens. The files are not transferred automatically."],
  ];
  return <Section className="border-t border-border"><div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]"><div><Eyebrow>Common questions</Eyebrow><h2 className="font-display text-3xl sm:text-4xl">Before you enquire</h2></div><div className="divide-y divide-border">{questions.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg marker:hidden"><span>{question}</span><span className="text-champagne transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></Section>;
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <Link to="/" aria-label="RDG home"><img src={rdgAssets.logo} alt="RDG Event Entertainments" className="h-14 w-14 object-contain" /></Link>
          <div>
          <p className="mt-2 text-xs text-muted-foreground">
            {RDG.name} · {RDG.location}
          </p>
          <p className="mt-1 max-w-md text-xs text-muted-foreground">Event management, photography, videography and creative services in Kumbakonam.</p>
          </div>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground">
          {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Our Work", "/work"], ["Experiences", "/experiences"], ["Partners", "/partners"], ["Contact", "/contact"], ["Book Now", "/booking"], ["Privacy", "/privacy"], ["Terms", "/terms"]].map(([label, to]) => <Link key={to} to={to} className="hover:text-champagne">{label}</Link>)}
        </nav>
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
      <a href={RDG.youtube} target="_blank" rel="noreferrer" aria-label="RDG on YouTube" className="inline-flex size-11 items-center justify-center border border-border hover:border-champagne hover:text-champagne"><Youtube className="size-4" /></a>
      <a href={RDG.facebook} target="_blank" rel="noreferrer" aria-label="RDG on Facebook" className="inline-flex size-11 items-center justify-center border border-border hover:border-champagne hover:text-champagne"><Facebook className="size-4" /></a>
        </div>
        <div className="w-full border-t border-border pt-5 text-xs text-muted-foreground"><p>© {new Date().getFullYear()} {RDG.name}</p><p className="mt-2">{RDG.address} · <a href={`tel:${RDG.phone}`} className="hover:text-champagne">{RDG.phoneDisplay}</a> · <a href={`mailto:${RDG.email}`} className="hover:text-champagne">{RDG.email}</a></p></div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-lg sm:inset-x-auto sm:bottom-5 sm:right-5 sm:flex sm:flex-col sm:border-0 sm:bg-transparent sm:pb-0 sm:shadow-none">
      <a
        href={RDG.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-background text-sm text-foreground transition-colors hover:text-champagne sm:size-13 sm:rounded-full sm:border sm:border-border sm:shadow-lg"
      >
        <MessageCircle className="size-5" /><span className="sm:hidden">WhatsApp</span>
      </a>
      <Link to="/booking" aria-label="Book RDG" className="inline-flex min-h-12 items-center justify-center gap-2 border-x border-border bg-primary text-sm text-primary-foreground sm:hidden"><span>Book Now</span></Link>
      <a
        href={`tel:${RDG.phone}`}
        aria-label="Call RDG"
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-background text-sm text-foreground transition-colors hover:text-champagne sm:size-13 sm:rounded-full sm:border sm:border-border sm:shadow-lg"
      >
        <Phone className="size-5" /><span className="sm:hidden">Call</span>
      </a>
    </div>
  );
}

export { Play };
