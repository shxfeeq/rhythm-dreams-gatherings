import { createFileRoute } from "@tanstack/react-router";
import { ReelsPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/reels")({
  head: () => pageMeta("Instant Reels | RDG Kumbakonam", "Ask Rhythm Dreams Gatherings about on-site short-form event capture and same-event reel editing in Kumbakonam."),
  component: ReelsPage,
});