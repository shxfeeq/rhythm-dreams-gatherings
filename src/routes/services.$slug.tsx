import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/rdg/site-pages";
import { serviceCatalog } from "@/lib/rdg-data";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = serviceCatalog.find((item) => item.slug === params.slug);
    return pageMeta(service ? `${service.title} in Kumbakonam | RDG` : "RDG Service Details", service ? service.description : "Explore event and creative services from Rhythm Dreams Gatherings in Kumbakonam, Tamil Nadu.");
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  return <ServiceDetailPage slug={slug} />;
}