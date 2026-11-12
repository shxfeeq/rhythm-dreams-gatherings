import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () => pageMeta("RDG Event Photography & Gallery | Kumbakonam", "Browse photographs supplied by Rhythm Dreams Gatherings, with wedding, live event, celebration and photography categories."),
  component: WorkPage,
});