import { createFileRoute } from "@tanstack/react-router";
import { LeadershipPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/leadership")({
  head: () => pageMeta("S. Sivasankar | Founder & Event Manager at RDG", "Meet S. Sivasankar, Founder and Event Manager at Rhythm Dreams Gatherings, with verified event management education and a focus on thoughtful event coordination."),
  component: LeadershipPage,
});