import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact RDG | Event Management in Kumbakonam", "Contact Rhythm Dreams Gatherings by WhatsApp, phone or email, or get directions to our Kumbakonam address."),
  component: ContactPage,
});