import logo from "@/assets/rdg/rdg-official-logo.png.asset.json";
import eventStrip from "@/assets/rdg/rdg-event-strip.png.asset.json";
import photo2 from "@/assets/rdg/rdg-event-2.jpg.asset.json";
import photo3 from "@/assets/rdg/rdg-event-3.jpg.asset.json";
import photo4 from "@/assets/rdg/rdg-event-4.jpg.asset.json";
import photo5 from "@/assets/rdg/rdg-event-5.jpg.asset.json";
import photo6 from "@/assets/rdg/rdg-event-6.jpg.asset.json";
import photo7 from "@/assets/rdg/rdg-event-7.jpg.asset.json";
import photo8 from "@/assets/rdg/rdg-event-8.jpg.asset.json";
import signature from "@/assets/rdg/rdg-md-signature.png.asset.json";
import director from "@/assets/rdg/rdg-managing-director.png.asset.json";

export const rdgAssets = {
  logo: logo.url,
  eventStrip: eventStrip.url,
  signature: signature.url,
  director: director.url,
  photos: [
    { src: photo2.url, title: "A family celebration", category: "Celebrations", alt: "Young child at an outdoor family celebration" },
    { src: photo3.url, title: "A thoughtful moment", category: "Celebrations", alt: "Two people sharing a celebratory bouquet" },
    { src: photo4.url, title: "Classical performance", category: "Live Events", alt: "Classical dancer in traditional costume" },
    { src: photo5.url, title: "On stage", category: "Live Events", alt: "Performer addressing a live audience" },
    { src: photo6.url, title: "Wedding ceremony", category: "Weddings", alt: "Couple celebrating their wedding with family" },
    { src: photo7.url, title: "A quiet wedding moment", category: "Weddings", alt: "Newlyweds sharing a quiet moment together" },
    { src: photo8.url, title: "Couple portrait", category: "Photography", alt: "Couple photographed outdoors in Kumbakonam" },
  ],
} as const;