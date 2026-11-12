import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta("Terms & Conditions | Rhythm Dreams Gatherings", "Review the terms for RDG service descriptions, partner coordination, WhatsApp enquiries and reservation confirmations."),
  component: TermsRoute,
});

function TermsRoute() { return <PolicyPage terms />; }