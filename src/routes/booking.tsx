import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BookingPage } from "@/components/rdg/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/booking")({
  validateSearch: z.object({ service: z.string().max(80).optional() }),
  head: () => pageMeta("Booking Enquiry | Rhythm Dreams Gatherings", "Tell RDG about your event and requested services in a guided booking enquiry. Review your details and send them manually through WhatsApp."),
  component: BookingPage,
});