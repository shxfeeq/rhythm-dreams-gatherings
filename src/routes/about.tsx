import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About RDG | Rhythm Dreams Gatherings", "Learn about Rhythm Dreams Gatherings, our creative approach, values and event services in Kumbakonam, Tamil Nadu."),
  component: AboutPage,
});