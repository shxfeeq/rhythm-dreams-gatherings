import { createFileRoute } from "@tanstack/react-router";
import { ExperiencesPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experiences")({
  head: () => pageMeta("Events & Customer Experiences | RDG", "Explore weddings, family celebrations, live events, photography and creative coordination with Rhythm Dreams Gatherings."),
  component: ExperiencesPage,
});