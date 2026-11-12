import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/partners")({
  head: () => pageMeta("Partners & Collaborations | Rhythm Dreams Gatherings", "Organizations and creative collaborators listed by Rhythm Dreams Gatherings in Kumbakonam, Tamil Nadu."),
  component: PartnersPage,
});