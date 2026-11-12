import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => pageMeta("Event, Photography & Printing Services | RDG Kumbakonam", "Explore RDG event management, photography, videography, event production, photo frames, printing coordination and creative design services in Kumbakonam."),
  component: ServicesPage,
});