import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta("Privacy Policy | Rhythm Dreams Gatherings", "Learn what information the RDG booking enquiry form uses and how your browser stores your draft and theme choice."),
  component: PrivacyRoute,
});

function PrivacyRoute() { return <PolicyPage />; }