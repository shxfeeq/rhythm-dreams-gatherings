import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/rdg/nav";
import {
  About,
  Contact,
  FounderPreview,
  FAQ,
  Experiences,
  Footer,
  FloatingActions,
  Hero,
  InstagramStrip,
  InstantReels,
  Partners,
  Services,
  Testimonials,
  WhyRDG,
  Work,
} from "@/components/rdg/sections";
import { useReveal } from "@/hooks/use-reveal";
import { RDG } from "@/lib/rdg-data";

const title = "Rhythm Dreams Gatherings | Event Management in Kumbakonam";
const description =
  "RDG plans, produces and films weddings, college fests, corporate events and celebrations across Tamil Nadu — with same-event Instant Reels.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: RDG.name,
  alternateName: RDG.shortName,
  telephone: RDG.phone,
  address: { "@type": "PostalAddress", addressLocality: "Kumbakonam", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  sameAs: [RDG.instagram],
  areaServed: "Tamil Nadu, India",
};

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <About />
        <FounderPreview />
        <Services />
        <InstantReels />
        <Work />
        <Experiences />
        <WhyRDG />
        <Partners />
        <Testimonials />
        <FAQ />
        <InstagramStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
