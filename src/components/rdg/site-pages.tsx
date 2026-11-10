import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink, ImagePlus, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { rdgAssets } from "@/lib/rdg-assets";
import { RDG, serviceCatalog, workItems } from "@/lib/rdg-data";
import { PageFrame } from "./page-frame";
import { SmartImage } from "./media";

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <header className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>
    </header>
  );
}

function PageSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-[1400px] px-5 py-14 md:px-10 md:py-20 ${className}`}>{children}</section>;
}

function PageShell({ children }: { children: ReactNode }) {
  return <PageFrame>{children}</PageFrame>;
}

export function AboutPage() {
  return (
    <PageShell>
      <PageSection>
        <PageIntro eyebrow="About RDG" title="Celebrations, thoughtfully brought together." copy="Rhythm Dreams Gatherings is a Kumbakonam-based event management and creative services company. We coordinate experiences for celebrations, businesses and individuals." />
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>From an early conversation to the final event details, our approach is to understand the brief, shape a clear plan and coordinate the services that bring it to life.</p>
            <p>Our work spans event management, photography and videography, production arrangements, photo printing and frames, printing solutions coordinated through external partners, and creative design.</p>
            <p>We value creativity, trust, professionalism, attention to detail and memorable experiences. Every gathering has its own people, place and priorities; our process begins by listening.</p>
          </div>
          <SmartImage src={rdgAssets.eventStrip} alt="A collection of RDG event and photography moments" className="aspect-[2.2/1] w-full" imgClassName="object-cover" />
        </div>
      </PageSection>
      <PageSection className="border-y border-border bg-card/50">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["Our vision", "Create considered experiences that people can return to in memory, photographs and film."],
            ["Our mission", "Listen closely, coordinate the right services and carry the details through with care."],
            ["Our values", "Creativity, trust, professionalism and attention to detail guide the way we work."],
          ].map(([heading, text]) => <article key={heading} className="border-t border-champagne pt-5"><h2 className="font-display text-2xl">{heading}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </PageSection>
      <PageSection>
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow mb-4">A connected approach</p><h2 className="font-display text-3xl sm:text-4xl">One brief, carefully coordinated.</h2></div>
          <p className="leading-relaxed text-muted-foreground">We bring planning, photography, film, production arrangements, design and partner coordination into one conversation, so the plan reflects what matters most to you.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group flex items-center justify-between border-t border-border py-5 hover:text-champagne"><span className="font-display text-xl">{service.title}</span><ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>)}
        </div>
        <div className="mt-12 flex flex-wrap gap-3"><Button asChild><Link to="/leadership">Meet our Managing Director</Link></Button><Button variant="outline" asChild><Link to="/booking">Start an enquiry</Link></Button></div>
      </PageSection>
    </PageShell>
  );
}

export function LeadershipPage() {
  return (
    <PageShell>
      <PageSection>
        <PageIntro eyebrow="Leadership" title="A personal commitment to the details." copy="Meet Mr. Siva Sankar S., Managing Director of Rhythm Dreams Gatherings." />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <SmartImage src={rdgAssets.director} alt="Mr. Siva Sankar S., Managing Director of Rhythm Dreams Gatherings" className="mx-auto aspect-[4/5] w-full max-w-xl" imgClassName="object-cover object-center" />
          <div className="py-4">
            <p className="eyebrow mb-4">Managing Director</p>
            <h2 className="font-display text-4xl sm:text-5xl">Mr. Siva Sankar S.</h2>
            <p className="mt-3 text-muted-foreground">Managing Director · Rhythm Dreams Gatherings</p>
            <p className="mt-8 border-l border-champagne pl-5 text-lg leading-relaxed">MBA in Event Management</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">His role at RDG is centered on bringing a customer’s brief into focus, coordinating the relevant services and keeping the event plan attentive to the details.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">Further professional biography and a personal leadership message can be added when provided.</p>
            <div className="mt-8 inline-flex max-w-full flex-col gap-3 bg-popover p-4">
              <span className="text-xs uppercase text-muted-foreground">Official signature</span>
              <img src={rdgAssets.signature} alt="Handwritten signature of Mr. Siva Sankar S." className="h-auto max-h-24 w-full max-w-sm object-contain object-left" />
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-3"><Button asChild><Link to="/booking">Discuss your event</Link></Button><Button variant="outline" asChild><Link to="/about">About RDG</Link></Button></div>
      </PageSection>
    </PageShell>
  );
}

export function ServicesPage() {
  return (
    <PageShell>
      <PageSection>
        <PageIntro eyebrow="Services" title="A considered team for every kind of occasion." copy="Explore the services RDG can arrange and coordinate. Tell us about your requirements and we’ll review the right options with you." />
        <div className="space-y-6">
          {serviceCatalog.map((service, index) => (
            <article key={service.slug} className="grid overflow-hidden border-y border-border md:grid-cols-[0.85fr_1.15fr]">
              <Link to="/services/$slug" params={{ slug: service.slug }} className="group relative block min-h-64 overflow-hidden md:min-h-80">
                <SmartImage src={service.image} alt={service.title} className="absolute inset-0 h-full w-full" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-background px-3 py-1 text-xs text-foreground">{String(index + 1).padStart(2, "0")}</span>
              </Link>
              <div className="flex flex-col justify-center px-1 py-7 md:px-10 md:py-10">
                <p className="eyebrow mb-3">{service.category}</p>
                <h2 className="font-display text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">{service.items.slice(0, 4).map((item) => <li key={item} className="flex gap-2"><span className="text-champagne">—</span><span>{item}</span></li>)}</ul>
                <div className="mt-7 flex flex-wrap gap-3"><Button variant="outline" asChild><Link to="/services/$slug" params={{ slug: service.slug }}>Explore details</Link></Button><Button asChild><Link to="/booking" search={{ service: service.slug }}>Enquire about this</Link></Button></div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = serviceCatalog.find((item) => item.slug === slug);
  if (!service) return <PageShell><PageSection><PageIntro eyebrow="Service details" title="Service not found" copy="Choose a service from the RDG catalogue." /><Button asChild><Link to="/services">View services</Link></Button></PageSection></PageShell>;
  const related = serviceCatalog.filter((item) => item.slug !== service.slug).slice(0, 3);
  return (
    <PageShell>
      <PageSection>
        <Link to="/services" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-champagne"><ArrowLeft className="size-4" /> All services</Link>
        <PageIntro eyebrow={service.category} title={service.title} copy={service.description} />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <SmartImage src={service.image} alt={service.title} className="aspect-[4/3] w-full" />
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-2xl">What we can arrange</h2>
            <ul className="mt-6 space-y-4">{service.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-champagne" /><span>{item}</span></li>)}</ul>
            <p className="mt-8 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">Options depend on your brief, venue, date and partner availability. RDG will review your requirements and share a quotation; no prices or dates are confirmed until discussed.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Button asChild><Link to="/booking" search={{ service: service.slug }}>Book this service</Link></Button><Button variant="outline" asChild><Link to="/contact">Ask a question</Link></Button></div>
          </div>
        </div>
        <div className="mt-16"><h2 className="font-display text-2xl">Related services</h2><div className="mt-4 grid gap-3 sm:grid-cols-3">{related.map((item) => <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="border-t border-border py-4 font-display text-lg hover:text-champagne">{item.title}<ArrowRight className="ml-2 inline size-4" /></Link>)}</div></div>
      </PageSection>
    </PageShell>
  );
}

export function WorkPage() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const categories = ["All", ...Array.from(new Set(workItems.map((item) => item.category)))];
  const items = workItems.filter((item) => category === "All" || item.category === category);
  return (
    <PageShell>
      <PageSection>
        <PageIntro eyebrow="Our work" title="Moments from the RDG lens." copy="A selection of photographs supplied by RDG. Categories describe the subject of each image; no unverified project details are implied." />
        <div className="mb-8 flex flex-wrap gap-2">{categories.map((item) => <Button key={item} variant={category === item ? "default" : "outline"} size="sm" aria-pressed={category === item} onClick={() => { setCategory(item); setActive(null); }}>{item}</Button>)}</div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map((item, index) => <button key={item.src} type="button" onClick={() => setActive(index)} className="group relative block overflow-hidden text-left focus-visible:outline focus-visible:outline-ring"><SmartImage src={item.src} alt={item.title} className="aspect-[4/3] w-full" imgClassName="transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 bg-ink/75 p-4 text-sm text-foreground">{item.title}</span></button>)}</div>
        {active !== null && items[active] && <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4" onClick={() => setActive(null)}><Button variant="outline" size="icon" aria-label="Close image" className="absolute right-4 top-4" onClick={() => setActive(null)}>×</Button><figure className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}><SmartImage src={items[active].src} alt={items[active].title} className="mx-auto max-h-[78vh] w-full" imgClassName="object-contain" /><figcaption className="mt-3 text-center text-sm text-foreground">{items[active].title} · {items[active].category}</figcaption><div className="mt-4 flex justify-center gap-3"><Button variant="outline" onClick={() => setActive((active - 1 + items.length) % items.length)}>Previous</Button><Button variant="outline" onClick={() => setActive((active + 1) % items.length)}>Next</Button></div></figure></div>}
      </PageSection>
    </PageShell>
  );
}

export function ReelsPage() {
  return <PageShell><PageSection><PageIntro eyebrow="Instant Reels" title="Your event, ready to share." copy="RDG offers on-site event capture and same-event short-form editing. No approved video clips have been added to this page yet." /><div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><SmartImage src={rdgAssets.photos[3].src} alt="Live performance at an event" className="aspect-[4/3] w-full" /><div><h2 className="font-display text-2xl">A quick-turn creative service</h2><p className="mt-4 leading-relaxed text-muted-foreground">Discuss the event, venue, coverage and delivery expectations with RDG. Service availability and arrangements are confirmed after reviewing your requirements.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild><Link to="/booking" search={{ service: "photography-videography" }}>Enquire about reels</Link></Button><Button variant="outline" asChild><a href={RDG.youtube} target="_blank" rel="noreferrer">Visit YouTube <ExternalLink /></a></Button></div></div></div></PageSection></PageShell>;
}

export function ExperiencesPage() {
  return <PageShell><PageSection><PageIntro eyebrow="Experiences" title="Different occasions. One thoughtful approach." copy="RDG coordinates celebrations and creative services for individuals, families, businesses and communities." /><div className="grid gap-6 md:grid-cols-2">{[
    ["Weddings & family celebrations", rdgAssets.photos[4].src, "Weddings, receptions, engagements, anniversaries, birthdays and family occasions."],
    ["Live and cultural events", rdgAssets.photos[3].src, "College events, cultural programs, performances and gatherings."],
    ["Photography & films", rdgAssets.photos[6].src, "Portraits and event coverage shaped around the people and place."],
    ["Creative coordination", rdgAssets.photos[1].src, "A brief-led approach bringing planning, design and partner services together."],
  ].map(([title, image, copy]) => <article key={title} className="grid gap-4 border-t border-border pt-4 sm:grid-cols-[0.85fr_1.15fr]"><SmartImage src={image} alt={title} className="aspect-[4/3] w-full" /><div><h2 className="font-display text-2xl">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p><Button variant="link" asChild className="mt-3 h-auto px-0"><Link to="/booking">Discuss your occasion <ArrowRight /></Link></Button></div></article>)}</div><div className="mt-14 border-t border-border pt-8"><h2 className="font-display text-2xl">Customer experiences</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">Verified customer testimonials will be published here with permission. We do not display unverified reviews or ratings.</p></div></PageSection></PageShell>;
}

export function PartnersPage() {
  const partners = ["SASTRA University", "Team Emulsion", "Purple Rah Events", "SRI Trophy"];
  const logos = ["/assets/images/partners/sastra.png", "/assets/images/partners/emulsion.png", "/assets/images/partners/purple-rah.png", "/assets/images/partners/sri-trophy.png"];
  return <PageShell><PageSection><PageIntro eyebrow="Partners" title="Collaboration makes the work possible." copy="A selection of organizations and creative collaborators listed by RDG." /><div className="grid border-y border-border sm:grid-cols-2">{partners.map((name, index) => <article key={name} className="flex items-center gap-6 border-b border-border px-2 py-8 last:border-b-0 sm:even:border-l sm:even:pl-8"><SmartImage src={logos[index] ?? ""} alt={`${name} logo`} className="h-16 w-28 shrink-0 bg-transparent" imgClassName="object-contain" /><h2 className="font-display text-xl">{name}</h2></article>)}</div><p className="mt-6 text-xs text-muted-foreground">Displayed names and images are the collaboration entries currently provided by RDG.</p></PageSection></PageShell>;
}

const eventCategories = ["Wedding", "Reception", "Engagement", "Birthday", "Anniversary", "Baby shower", "Naming ceremony", "Corporate event", "College event", "Cultural event", "Private celebration", "Other"];
const serviceChoices = [
  { group: "Event Management", items: ["Event planning and management", "Wedding and reception", "Engagement ceremony", "Birthday or anniversary", "Baby shower or naming ceremony", "Corporate event", "College or cultural event", "Private or customized event"] },
  { group: "Photography & Videography", items: ["Traditional photography", "Candid photography", "Wedding photography", "Wedding cinematography", "Pre-wedding photography", "Pre-wedding film", "Drone photography / videography", "Corporate photography", "Event coverage", "Live streaming", "Cinematic highlights", "Short-form reels", "Photo album"] },
  { group: "Event Production", items: ["Stage decoration", "Lighting arrangements", "Sound system", "LED screens", "Event production", "Special effects", "Event coordination", "Customized arrangements"] },
  { group: "Photo Studio & Frames", items: ["Photo printing", "Passport / ID photographs", "Photo enlargements", "Custom photo frames", "Wooden / collage / acrylic frame", "Canvas print", "Personalized photo gift", "Wedding album", "Photo restoration inquiry"] },
  { group: "Printing Services", items: ["Wedding invitations", "Visiting / business cards", "Brochure / flyer / poster", "Flex banner", "Stickers / labels", "Certificates / stationery", "Digital / offset printing coordination", "Other printing requirement"] },
  { group: "Creative Design", items: ["Digital invitation", "Wedding invitation design", "Event poster", "Social media creative", "Branding", "Promotional design", "Customized graphic design"] },
];

type BookingForm = Record<string, string | string[]>;
const initialBooking: BookingForm = { eventCategory: "", eventType: "", date: "", alternativeDate: "", startTime: "", endTime: "", duration: "", eventDays: "", venue: "", address: "", city: "", setting: "", guests: "", eventDetails: "", services: [], photographyType: "", photographerCount: "", coverageDuration: "", albumRequirement: "", videoRequirement: "", cinematicHighlights: "", droneRequirement: "", productionNeeds: "", printingType: "", printDimensions: "", printQuantity: "", printMaterial: "", printColour: "", printDesign: "", deliveryLocation: "", requiredDeliveryDate: "", frameType: "", frameSize: "", frameQuantity: "", frameMaterial: "", photoAvailability: "", customization: "", name: "", phone: "", alternatePhone: "", email: "", preferredContact: "WhatsApp", callbackTime: "", extraRequirements: "", referenceFiles: "", budget: "", package: "", additionalServices: "", specialRequests: "", notes: "" };
const fieldLabels: Record<string, string> = { eventCategory: "Event category", eventType: "Specific event", date: "Event date", alternativeDate: "Alternative event date", startTime: "Start time", endTime: "End time", duration: "Event duration", eventDays: "Number of event days", venue: "Venue name", address: "Full event address", city: "City or town", setting: "Indoor or outdoor", guests: "Expected guest count", eventDetails: "Additional event information", photographyType: "Traditional or candid", photographerCount: "Number of photographers", coverageDuration: "Photography coverage duration", albumRequirement: "Album requirement", videoRequirement: "Video requirement", cinematicHighlights: "Cinematic highlights", droneRequirement: "Drone requirement", productionNeeds: "Decoration, stage, lighting, sound, LED, coordination and other production needs", printingType: "Printing type", printDimensions: "Printing dimensions", printQuantity: "Printing quantity", printMaterial: "Printing material", printColour: "Colour requirements", printDesign: "Design availability", deliveryLocation: "Delivery location", requiredDeliveryDate: "Required delivery date", frameType: "Frame type", frameSize: "Frame size", frameQuantity: "Frame quantity", frameMaterial: "Material preference", photoAvailability: "Photograph availability", customization: "Customization details", name: "Full name", phone: "WhatsApp number", alternatePhone: "Alternative phone number", email: "Email address", preferredContact: "Preferred contact method", callbackTime: "Preferred callback time", extraRequirements: "Additional requirements", budget: "Estimated budget range", package: "Preferred package", additionalServices: "Additional services", specialRequests: "Special requests", notes: "Notes" };
const phoneSchema = z.string().trim().min(8).max(20).regex(/^[+\d\s().-]+$/, "Enter a valid phone number.");
const emailSchema = z.string().trim().email("Enter a valid email address.").max(255);
const steps = ["Event details", "Services", "Your details", "Review"];

function valueOf(form: BookingForm, key: string) { const value = form[key]; return Array.isArray(value) ? value.join(", ") : value ?? ""; }

export function BookingPage() {
  const search = useSearch({ from: "/booking" });
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<BookingForm>(initialBooking);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);
  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem("rdg-booking-draft");
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) setForm({ ...initialBooking, ...(parsed as BookingForm) });
      }
    } catch { window.sessionStorage.removeItem("rdg-booking-draft"); }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) window.sessionStorage.setItem("rdg-booking-draft", JSON.stringify(form)); }, [form, ready]);
  useEffect(() => {
    const slug = search.service;
    if (!slug) return;
    const service = serviceCatalog.find((item) => item.slug === slug);
    if (!service) return;
    const suggestion = service.category === "Printing Services" ? "Wedding invitations" : service.category === "Photo Studio & Photo Frames" ? "Photo printing" : service.category === "Creative Design" ? "Digital invitation" : service.category === "Event Production" ? "Event production" : service.category === "Photography & Videography" ? "Event coverage" : "Event planning and management";
    setForm((current) => ({ ...current, services: Array.from(new Set([...(Array.isArray(current.services) ? current.services : []), suggestion])) }));
  }, [search.service]);
  const selectedServices = Array.isArray(form.services) ? form.services : [];
  const currentSummary = useMemo(() => Object.entries(form).filter(([key, value]) => key !== "services" && typeof value === "string" && value.trim()).map(([key, value]) => [fieldLabels[key] ?? key, value] as const), [form]);
  const update = (key: string, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const toggleService = (name: string) => setForm((current) => { const active = Array.isArray(current.services) ? current.services : []; return { ...current, services: active.includes(name) ? active.filter((item) => item !== name) : [...active, name] }; });
  const fieldClass = "mt-2 w-full min-w-0 border border-border bg-background px-3 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const field = (key: string, label: string, type = "text", placeholder?: string, required = false) => <label key={key} className="block min-w-0 text-sm text-muted-foreground">{label}{required && <span className="ml-1 text-champagne" aria-hidden="true">*</span>}<input required={required} type={type} value={valueOf(form, key)} onChange={(event) => update(key, event.target.value)} placeholder={placeholder} className={fieldClass} /></label>;
  const area = (key: string, label: string, required = false) => <label key={key} className="block text-sm text-muted-foreground">{label}{required && <span className="ml-1 text-champagne" aria-hidden="true">*</span>}<textarea required={required} rows={3} value={valueOf(form, key)} onChange={(event) => update(key, event.target.value)} className={fieldClass} /></label>;
  const select = (key: string, label: string, values: string[], required = false) => <label key={key} className="block min-w-0 text-sm text-muted-foreground">{label}{required && <span className="ml-1 text-champagne" aria-hidden="true">*</span>}<select required={required} value={valueOf(form, key)} onChange={(event) => update(key, event.target.value)} className={fieldClass}><option value="">Choose one</option>{values.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;

  const next = () => {
    setError("");
    if (step === 0 && (!valueOf(form, "eventCategory") || !valueOf(form, "eventType").trim())) { setError("Choose an event category and add the specific event type."); return; }
    if (step === 1 && selectedServices.length === 0) { setError("Select at least one service to continue."); return; }
    if (step === 2) {
      const phone = phoneSchema.safeParse(valueOf(form, "phone"));
      if (valueOf(form, "name").trim().length < 2) { setError("Enter your full name to continue."); return; }
      if (!phone.success) { setError("Enter a valid WhatsApp number."); return; }
      if (valueOf(form, "email") && !emailSchema.safeParse(valueOf(form, "email")).success) { setError("Enter a valid email address or leave it blank."); return; }
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };
  const createWhatsAppMessage = () => {
    const customer = currentSummary.filter(([label]) => ["Full name", "WhatsApp number", "Alternative phone number", "Email address", "Preferred contact method", "Preferred callback time"].includes(label));
    const event = currentSummary.filter(([label]) => ["Event category", "Specific event", "Event date", "Alternative event date", "Start time", "End time", "Event duration", "Number of event days", "Venue name", "Full event address", "City or town", "Indoor or outdoor", "Expected guest count", "Additional event information"].includes(label));
    const specs = currentSummary.filter(([label]) => !customer.some(([n]) => n === label) && !event.some(([n]) => n === label) && !["Estimated budget range", "Preferred package", "Additional services", "Special requests", "Notes"].includes(label));
    const lines = (entries: readonly (readonly [string, string])[]) => entries.length ? entries.map(([label, value]) => `${label}: ${value}`).join("\n") : "Not provided";
    const message = ["Hello RDG Team!", "", "I would like to enquire about your services.", "", "CUSTOMER INFORMATION", lines(customer), "", "EVENT INFORMATION", lines(event), "", "SERVICES REQUIRED:", selectedServices.length ? selectedServices.map((name) => `• ${name}`).join("\n") : "Not selected", "", "SERVICE SPECIFICATIONS:", lines(specs), "", "BUDGET:", `${valueOf(form, "budget") || "Not specified"}${valueOf(form, "package") ? ` · ${valueOf(form, "package")}` : ""}`, "", "ADDITIONAL REQUIREMENTS:", [valueOf(form, "additionalServices"), valueOf(form, "specialRequests"), valueOf(form, "notes")].filter(Boolean).join("\n") || "None provided", fileNames.length ? "\nREFERENCE FILES:\nI have selected reference files and will attach them manually after WhatsApp opens: " + fileNames.join(", ") : "", "", "Please contact me to discuss availability, requirements and quotation.", "", "Thank you!", "RDG Website Enquiry."].join("\n");
    return `${RDG.whatsapp}?text=${encodeURIComponent(message)}`;
  };
  const openWhatsApp = () => {
    const url = createWhatsAppMessage();
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PageShell>
      <PageSection>
        <PageIntro eyebrow="Booking enquiry" title="Tell us what you’re planning." copy="Share the details that are ready. Your information stays in this browser until you choose to open WhatsApp and send the message yourself." />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <form onSubmit={(event) => { event.preventDefault(); if (step < 3) next(); else openWhatsApp(); }} className="min-w-0">
            <ol aria-label="Enquiry steps" className="mb-8 grid grid-cols-4 border-y border-border">{steps.map((label, index) => <li key={label} aria-current={step === index ? "step" : undefined} className={`min-w-0 border-b-2 px-1 py-3 text-center text-[0.65rem] sm:px-2 sm:text-xs ${index === step ? "border-champagne text-foreground" : "border-transparent text-muted-foreground"}`}><span className="block text-xs">{String(index + 1).padStart(2, "0")}</span><span className="mt-1 block truncate">{label}</span></li>)}</ol>
            <div className="min-h-80 space-y-5">
              {step === 0 && <><h2 className="font-display text-2xl">Event details</h2><div className="grid gap-4 sm:grid-cols-2">{select("eventCategory", "Event category", eventCategories, true)}{field("eventType", "Specific event", "text", "For example, reception or product launch", true)}{field("date", "Event date", "date")}{field("alternativeDate", "Alternative date", "date")}{field("startTime", "Start time", "time")}{field("endTime", "End time", "time")}{field("duration", "Event duration", "text", "For example, 6 hours")}{field("eventDays", "Number of event days", "number", "1")}{field("venue", "Venue name")}{field("city", "City or town")}{select("setting", "Setting", ["Indoor", "Outdoor", "Both", "Not decided"])}{field("guests", "Expected guest count", "number")}</div>{area("address", "Full event address")}{area("eventDetails", "Additional event information")}</>}
              {step === 1 && <><h2 className="font-display text-2xl">Services required</h2><p className="text-sm text-muted-foreground">Choose any that apply. RDG will review your requirements with you.</p>{serviceChoices.map((group) => <fieldset key={group.group} className="border-t border-border pt-4"><legend className="mb-3 font-display text-lg">{group.group}</legend><div className="grid gap-2 sm:grid-cols-2">{group.items.map((item) => <label key={item} className="flex min-w-0 items-start gap-3 py-1 text-sm text-muted-foreground"><input type="checkbox" checked={selectedServices.includes(item)} onChange={() => toggleService(item)} className="mt-0.5 size-4 shrink-0 accent-primary" /><span>{item}</span></label>)}</div></fieldset>)}{selectedServices.some((item) => /photography|videography|film|reel|live streaming|album|cinematic/i.test(item)) && <div className="space-y-4 border-t border-border pt-5"><h3 className="font-display text-lg">Photography & video specifications</h3><div className="grid gap-4 sm:grid-cols-2">{select("photographyType", "Traditional or candid", ["Traditional", "Candid", "Both", "Not decided"])}{field("photographerCount", "Number of photographers", "number")}{field("coverageDuration", "Coverage duration")}{select("albumRequirement", "Album requirement", ["Yes", "No", "Discuss"])}{select("videoRequirement", "Video requirement", ["Yes", "No", "Discuss"])}{select("cinematicHighlights", "Cinematic highlights", ["Yes", "No", "Discuss"])}{select("droneRequirement", "Drone requirement", ["Yes, subject to permissions", "No", "Discuss"] )}</div></div>}{selectedServices.some((item) => /stage|lighting|sound|led|production|decoration|coordination|special effects/i.test(item)) && <div className="border-t border-border pt-5"><h3 className="mb-4 font-display text-lg">Event production specifications</h3>{area("productionNeeds", "Decoration, stage, lighting, sound, LED screens, venue coordination and other arrangements")}</div>}{selectedServices.some((item) => /invitation|printing|business cards|brochure|flyer|poster|banner|sticker|label|certificate|stationery|offset/i.test(item)) && <div className="space-y-4 border-t border-border pt-5"><h3 className="font-display text-lg">Printing specifications</h3><div className="grid gap-4 sm:grid-cols-2">{field("printingType", "Printing type")}{field("printDimensions", "Dimensions")}{field("printQuantity", "Quantity", "number")}{field("printMaterial", "Material")}{field("printColour", "Colour requirements")}{select("printDesign", "Design available?", ["Yes", "No, design required", "In progress"])}{field("deliveryLocation", "Delivery location")}{field("requiredDeliveryDate", "Required date", "date")}</div><p className="text-xs leading-relaxed text-muted-foreground">Printing orders are coordinated through external production partners. RDG does not operate an in-house printing press.</p></div>}{selectedServices.some((item) => /frame|canvas|photo gift|enlargement/i.test(item)) && <div className="space-y-4 border-t border-border pt-5"><h3 className="font-display text-lg">Photo frame specifications</h3><div className="grid gap-4 sm:grid-cols-2">{field("frameType", "Frame type")}{field("frameSize", "Size")}{field("frameQuantity", "Quantity", "number")}{field("frameMaterial", "Material preference")}{select("photoAvailability", "Photograph available?", ["Yes", "No", "Need help choosing"])}{field("customization", "Customization details")}</div></div>}</>}
              {step === 2 && <><h2 className="font-display text-2xl">Your details</h2><div className="grid gap-4 sm:grid-cols-2">{field("name", "Full name", "text", "Your name", true)}{field("phone", "WhatsApp number", "tel", "+91", true)}{field("alternatePhone", "Alternative phone number", "tel")}{field("email", "Email address", "email")}{select("preferredContact", "Preferred contact method", ["WhatsApp", "Phone call", "Email"])}{field("callbackTime", "Preferred callback time")}</div>{area("extraRequirements", "Additional requirements") /* preserved and included in the review */}<label className="flex cursor-pointer items-center gap-3 border border-dashed border-border p-4 text-sm text-muted-foreground"><ImagePlus className="size-5 shrink-0 text-champagne" /><span>Choose reference images (you’ll attach them manually in WhatsApp)</span><input type="file" accept="image/*" multiple className="sr-only" onChange={(event) => setFileNames(Array.from(event.target.files ?? []).map((file) => file.name))} /></label>{fileNames.length > 0 && <p className="text-xs text-muted-foreground">Selected: {fileNames.join(", ")}</p>}</>}
              {step === 3 && <><h2 className="font-display text-2xl">Review & budget</h2><div className="grid gap-4 sm:grid-cols-2">{select("budget", "Estimated budget range", ["Not decided", "Under ₹50,000", "₹50,000–₹1 lakh", "₹1–₹3 lakh", "₹3–₹5 lakh", "Above ₹5 lakh", "Prefer to discuss"])}{field("package", "Preferred package, if applicable")}</div>{area("additionalServices", "Additional services")}{area("specialRequests", "Special requests")}{area("notes", "Notes")}{area("extraRequirements", "Additional requirements")}</>}
            </div>
            {error && <p role="alert" className="mt-5 border-l-2 border-destructive pl-3 text-sm text-destructive">{error}</p>}
            <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-border pt-5">{step > 0 ? <Button type="button" variant="outline" onClick={() => { setError(""); setStep((current) => current - 1); }}><ArrowLeft /> Back</Button> : <span />}{step < 3 ? <Button type="submit">Next <ArrowRight /></Button> : <Button type="submit"><MessageCircle /> Open WhatsApp to send</Button>}</div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">This is an enquiry, not a confirmed reservation. WhatsApp opens with your message filled in; you must press Send. RDG does not receive it until you send it.</p>
            {whatsappUrl && <p className="mt-3 text-sm">If WhatsApp did not open, <a className="font-medium text-champagne underline" href={whatsappUrl} target="_blank" rel="noreferrer">continue to WhatsApp</a>. Your enquiry is not sent until you press Send there.</p>}
          </form>
          <aside className="h-fit border-t border-border pt-5 lg:sticky lg:top-28"><h2 className="font-display text-2xl">Your enquiry</h2><p className="mt-2 text-sm text-muted-foreground">Step {step + 1} of {steps.length}</p><div className="mt-5 space-y-4">{selectedServices.length > 0 && <div><p className="text-xs uppercase text-muted-foreground">Selected services</p><ul className="mt-2 space-y-1 text-sm">{selectedServices.map((item) => <li key={item}>{item}</li>)}</ul></div>}{currentSummary.slice(0, 8).map(([label, value]) => <div key={label} className="border-t border-border pt-3"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 break-words text-sm">{value}</p></div>)}{currentSummary.length > 8 && <p className="text-xs text-muted-foreground">More details are included in the WhatsApp message.</p>}{currentSummary.length === 0 && selectedServices.length === 0 && <p className="text-sm text-muted-foreground">Your answers will appear here as you complete the form.</p>}</div><div className="mt-8 border-t border-border pt-5"><p className="text-xs uppercase text-muted-foreground">Need help?</p><a href={`tel:${RDG.phone}`} className="mt-3 flex items-center gap-2 text-sm hover:text-champagne"><Phone className="size-4" />{RDG.phoneDisplay}</a></div></aside>
        </div>
      </PageSection>
    </PageShell>
  );
}

export function ContactPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RDG.address)}`;
  return <PageShell><PageSection><PageIntro eyebrow="Contact" title="Let’s begin with a conversation." copy="Share what you’re planning, and RDG can discuss requirements, availability and a quotation with you." /><div className="grid gap-12 lg:grid-cols-2"><div className="space-y-7"><a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-4 border-t border-border py-5 hover:text-champagne"><MapPin className="mt-1 size-5 shrink-0 text-champagne" /><span><span className="block text-xs uppercase text-muted-foreground">Visit or get directions</span><span className="mt-2 block leading-relaxed">{RDG.address}</span><span className="mt-2 inline-flex items-center gap-2 text-sm">Open directions <ExternalLink className="size-4" /></span></span></a><a href={`tel:${RDG.phone}`} className="flex items-center gap-4 border-t border-border py-5 hover:text-champagne"><Phone className="size-5 text-champagne" /><span><span className="block text-xs uppercase text-muted-foreground">Call</span><span className="mt-1 block">{RDG.phoneDisplay}</span></span></a><a href={`mailto:${RDG.email}`} className="flex items-center gap-4 border-t border-border py-5 hover:text-champagne"><span className="grid size-5 place-items-center text-champagne">@</span><span><span className="block text-xs uppercase text-muted-foreground">Email</span><span className="mt-1 block break-all">{RDG.email}</span></span></a><a href={RDG.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 border-t border-border py-5 hover:text-champagne"><MessageCircle className="size-5 text-champagne" /><span><span className="block text-xs uppercase text-muted-foreground">WhatsApp</span><span className="mt-1 block">{RDG.phoneDisplay}</span></span></a><div className="flex flex-wrap gap-4 border-t border-border pt-5 text-sm"><a href={RDG.instagram} target="_blank" rel="noreferrer" className="hover:text-champagne">Instagram</a><a href={RDG.youtube} target="_blank" rel="noreferrer" className="hover:text-champagne">YouTube</a><a href={RDG.facebook} target="_blank" rel="noreferrer" className="hover:text-champagne">Facebook</a></div></div><div className="flex flex-col justify-center border-t border-border pt-7"><h2 className="font-display text-2xl">Plan your enquiry</h2><p className="mt-3 leading-relaxed text-muted-foreground">The booking form helps gather event details and service requirements. When you’re ready, it opens a pre-filled WhatsApp message for you to send.</p><Button asChild className="mt-6 w-fit"><Link to="/booking">Start booking enquiry <ArrowRight /></Link></Button><p className="mt-4 text-xs leading-relaxed text-muted-foreground">No enquiry is delivered until you press Send in WhatsApp; no reservation is confirmed through the form.</p></div></div></PageSection></PageShell>;
}

export function ReelsHeroImage() { return <SmartImage src={rdgAssets.photos[3].src} alt="RDG event performance" className="aspect-video w-full" />; }

export function PolicyPage({ terms = false }: { terms?: boolean }) {
  return <PageShell><PageSection className="max-w-4xl"><PageIntro eyebrow={terms ? "Terms and conditions" : "Privacy policy"} title={terms ? "Clear expectations for every enquiry." : "Your information, handled with care."} copy={terms ? "These terms describe the current website enquiry experience." : "This page explains what happens to information you enter on the RDG website."} />{terms ? <div className="space-y-8 text-sm leading-relaxed text-muted-foreground"><section><h2 className="font-display text-xl text-foreground">Enquiries and reservations</h2><p className="mt-3">Submitting the website form prepares an enquiry message and opens WhatsApp. It is not a reservation, booking confirmation, quotation or guarantee of availability. You must review and send the message in WhatsApp; RDG will discuss availability, requirements and quotation separately.</p></section><section><h2 className="font-display text-xl text-foreground">Services and partner coordination</h2><p className="mt-3">Services, options and production arrangements depend on your brief, venue, availability and any relevant partner requirements. Printing production is coordinated with external vendors and partners; RDG does not operate an in-house printing press. No prices or delivery timelines are guaranteed on this site.</p></section><section><h2 className="font-display text-xl text-foreground">Website content</h2><p className="mt-3">Photographs are presented as supplied RDG imagery. Service descriptions outline possible arrangements; they do not confirm a specific service, vendor or completed project. Please contact RDG with questions before making arrangements.</p></section><section><h2 className="font-display text-xl text-foreground">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="text-champagne underline" href={`mailto:${RDG.email}`}>{RDG.email}</a>.</p></section></div> : <div className="space-y-8 text-sm leading-relaxed text-muted-foreground"><section><h2 className="font-display text-xl text-foreground">Information you enter</h2><p className="mt-3">The booking enquiry form collects the event, service and contact details you choose to provide. The form draft is stored in your browser session so you can move between steps without losing what you entered.</p></section><section><h2 className="font-display text-xl text-foreground">WhatsApp handoff</h2><p className="mt-3">When you choose to continue, the site prepares a message and opens WhatsApp. Information is not sent to RDG by the site; you must press Send in WhatsApp. If you select reference images, you need to attach them manually in WhatsApp.</p></section><section><h2 className="font-display text-xl text-foreground">Theme preference</h2><p className="mt-3">Your system, light or dark theme choice is saved in local browser storage so it can be remembered on this device.</p></section><section><h2 className="font-display text-xl text-foreground">Contact</h2><p className="mt-3">For privacy questions, contact <a className="text-champagne underline" href={`mailto:${RDG.email}`}>{RDG.email}</a>.</p></section></div>}</PageSection></PageShell>;
}