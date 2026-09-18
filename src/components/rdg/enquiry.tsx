import { useState } from "react";
import { Send } from "lucide-react";
import { RDG } from "@/lib/rdg-data";

const eventTypes = [
  "Wedding",
  "College Event",
  "Corporate Event",
  "Celebration",
  "Instant Reels",
  "Other",
];

export function EnquiryForm() {
  type Form = { name: string; phone: string; type: string; date: string; message: string };
  const [form, setForm] = useState<Form>({ name: "", phone: "", type: eventTypes[0] ?? "", date: "", message: "" });
  type Errors = { name?: string; phone?: string };
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      `Hello ${RDG.shortName}, I'd like to enquire.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event: ${form.type}`,
      form.date ? `Date: ${form.date}` : "",
      form.message ? `Details: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${RDG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const field =
    "w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-champagne";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Name
          </label>
          <input id="name" className={field} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Phone
          </label>
          <input id="phone" inputMode="tel" className={field} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="type" className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Event type
          </label>
          <select id="type" className={field} value={form.type} onChange={(e) => set("type", e.target.value)}>
            {eventTypes.map((t) => (
              <option key={t} value={t} className="bg-card">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Event date
          </label>
          <input id="date" type="date" className={field} value={form.date} onChange={(e) => set("date", e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          Tell us about the event
        </label>
        <textarea id="message" rows={4} className={field} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Venue, guest count, what you have in mind…" />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-champagne px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-ink transition-opacity hover:opacity-90"
      >
        Send on WhatsApp <Send className="size-4" aria-hidden />
      </button>
    </form>
  );
}
