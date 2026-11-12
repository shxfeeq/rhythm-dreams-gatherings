import { rdgAssets } from "@/lib/rdg-assets";

export const RDG = {
  name: "Rhythm Dreams Gatherings",
  shortName: "RDG",
  founder: "S. Sivasankar",
  designation: "Founder & Event Manager, RDG Event Company",
  phoneDisplay: "+91 73975 66818",
  phone: "+917397566818",
  whatsapp: "https://wa.me/917397566818",
  instagram: "https://www.instagram.com/rhythm_dreams_gatherings?stkn=NmVkaWcyZW55cWl6",
  instagramHandle: "@rhythm_dreams_gatherings",
  location: "Kumbakonam, Tamil Nadu, India",
  address: "Behind Venkataramana Sweet Bakery & Hotel, Near New Bus Stand, Kumbakonam – 612001, Tamil Nadu, India",
  email: "rhythmdreamgathering@gmail.com",
  youtube: "https://www.youtube.com/@rhythmdreamgathering",
  facebook: "https://share.google/TD2CYN3KVe8pBGrEL",
} as const;

export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Our Work", "/work"],
  ["Experiences", "/experiences"],
  ["Partners", "/partners"],
  ["Contact", "/contact"],
] as const;

export const serviceCatalog = [
  { slug: "event-management", title: "Event Management", category: "Event Management", image: rdgAssets.photos[4].src, description: "Thoughtful coordination for weddings, receptions, engagements, birthdays, anniversaries, baby showers, naming ceremonies, corporate and college events, cultural festivals, private and customized celebrations.", items: ["Weddings and receptions", "Engagement ceremonies", "Birthdays and anniversaries", "Baby showers and naming ceremonies", "Corporate, college and cultural events", "Private and customized celebrations"] },
  { slug: "photography-videography", title: "Photography & Videography", category: "Photography & Videography", image: rdgAssets.photos[5].src, description: "Photography and film coverage shaped around the people, rituals and atmosphere of your event.", items: ["Traditional and candid photography", "Wedding photography and cinematography", "Pre-wedding photography and films", "Drone photography and videography, subject to venue permissions", "Corporate and event coverage", "Live streaming coordination", "Cinematic highlights and short-form reels", "Professional photo albums"] },
  { slug: "event-production", title: "Event Production", category: "Event Production", image: rdgAssets.photos[3].src, description: "Production arrangements coordinated with suitable vendors and partners for your venue and brief.", items: ["Stage decoration", "Lighting arrangements", "Sound systems", "LED screens", "Event production and coordination", "Special effects, subject to venue and safety approval", "Customized event arrangements"] },
  { slug: "photo-studio-frames", title: "Photo Studio & Frames", category: "Photo Studio & Photo Frames", image: rdgAssets.photos[0].src, description: "Photo printing, framing and personalized keepsakes coordinated for family moments and celebrations.", items: ["Photo printing and passport or ID photographs", "Photo enlargements", "Custom, wooden, collage and acrylic frames", "Canvas prints and personalized photo gifts", "Wedding albums", "Photo restoration, where available"] },
  { slug: "printing-solutions", title: "Printing Solutions", category: "Printing Services", image: rdgAssets.photos[2].src, description: "RDG accepts your printing brief and coordinates production through external printing vendors and partners. RDG does not own or operate printing machinery or an in-house press.", items: ["Wedding invitations, visiting cards and business cards", "Brochures, flyers, posters and flex banners", "Stickers, labels, certificates and business stationery", "Digital and offset printing coordination", "Customized printing requirements", "Process: share requirements → RDG reviews specifications → coordinates with print partners → shares a quotation → customer confirms the order"] },
  { slug: "creative-design", title: "Creative Design", category: "Creative Design", image: rdgAssets.photos[1].src, description: "Visual design support for invitations, events, social channels and promotional communication.", items: ["Digital and wedding invitations", "Event posters", "Social media creatives", "Branding", "Promotional designs", "Customized graphic design"] },
] as const;

export const services = [
  { number: "01", title: "Event Management", description: "From the first brief to the final cue, we bring every moving part into one considered production.", features: ["Complete Event Planning", "Event Coordination", "On-ground Execution", "Venue Management", "Guest Management", "Production Coordination"], image: "/assets/images/work-01.jpg" },
  { number: "02", title: "Wedding Events", description: "Meaningful celebrations shaped with visual detail, cultural sensitivity and seamless execution.", features: ["Wedding Planning", "Wedding Photography", "Candid Photography", "Wedding Videography", "Cinematic Wedding Films", "Reception Events", "Traditional Functions", "Wedding Entertainment"], image: "/assets/images/weddings.jpg" },
  { number: "03", title: "Photography & Videography", description: "Honest frames, cinematic movement and films that let every atmosphere live beyond the event.", features: ["Candid Photography", "Traditional Photography", "Cinematic Videography", "Event Photography", "Event Videography", "Highlight Films", "After Movies"], image: "/assets/images/work-03.jpg" },
  { number: "04", title: "Instant Reels", description: "Your event. Your moment. Your reel — before the function ends.", features: ["Live event capture", "On-site editing", "Social-ready format", "Same-event delivery"], image: "/assets/images/instant-reel.jpg", featured: true },
  { number: "05", title: "DJ & Entertainment", description: "Sound, light and performance planned to move the room and hold its energy.", features: ["DJ", "Sound", "Lighting", "Live Entertainment", "Dance Performances", "Music Events", "College DJ Nights", "Celebration Entertainment"], image: "/assets/images/entertainment.jpg" },
  { number: "06", title: "Stage & Decoration", description: "Immersive stages and thoughtful environments built around your event’s identity.", features: ["Stage Design", "Wedding Stage Decoration", "Event Decor", "LED Walls", "Lighting Design", "Themed Setups"], image: "/assets/images/work-06.jpg" },
  { number: "07", title: "College & Youth Events", description: "High-energy experiences built for campus culture, participation and unforgettable moments.", features: ["College Cultural Events", "Symposiums", "Fests", "DJ Nights", "Celebrity Events", "Celebrity Management", "Photography", "Videography", "After Movies", "Social Media Content"], image: "/assets/images/college-events.jpg" },
  { number: "08", title: "Corporate Events", description: "Clear, polished productions that bring teams, brands and audiences together.", features: ["Corporate Events", "Brand Activations", "Product Launches", "Corporate Celebrations", "Conferences", "Award Functions", "Promotional Events"], image: "/assets/images/corporate.jpg" },
  { number: "09", title: "Celebrity Management", description: "Considered coordination for artists and special guests, from invitation through on-ground handling.", features: ["Celebrity Invitations", "Celebrity Coordination", "Artist Coordination", "Guest Management", "Celebrity Event Handling", "On-ground Coordination"], image: "/assets/images/work-07.jpg" },
  { number: "10", title: "Creative Media", description: "Campaign-ready visual content that gives every event a life before, during and after the day.", features: ["Event Posters", "Invitation Videos", "Promo Videos", "Social Media Reels", "Highlight Videos", "AI Memory / Tribute Videos", "Digital Event Content"], image: "/assets/images/work-08.jpg" },
] as const;

export const workItems = [
  { src: rdgAssets.photos[4].src, title: "Wedding ceremony", category: "Weddings", location: "Kumbakonam" },
  { src: rdgAssets.photos[5].src, title: "A quiet wedding moment", category: "Weddings", location: "Kumbakonam" },
  { src: rdgAssets.photos[6].src, title: "Couple portrait", category: "Photography", location: "Kumbakonam" },
  { src: rdgAssets.photos[3].src, title: "On stage", category: "Live Events", location: "Kumbakonam" },
  { src: rdgAssets.photos[2].src, title: "Classical performance", category: "Live Events", location: "Kumbakonam" },
  { src: rdgAssets.photos[0].src, title: "Family celebration", category: "Celebrations", location: "Kumbakonam" },
  { src: rdgAssets.photos[1].src, title: "A thoughtful moment", category: "Celebrations", location: "Kumbakonam" },
] as const;

export const experiences = [
  ["Weddings", "Tradition, emotion and a celebration built around you.", "/assets/images/weddings.jpg"],
  ["College Fests", "Big-stage energy for the moments campus remembers.", "/assets/images/college-events.jpg"],
  ["Corporate Events", "Sharp productions with purpose and polish.", "/assets/images/corporate.jpg"],
  ["Celebrations", "Personal milestones made beautifully memorable.", "/assets/images/work-05.jpg"],
  ["Entertainment", "Sound, light and performances that move a crowd.", "/assets/images/entertainment.jpg"],
  ["Celebrity Events", "Professional guest and artist coordination.", "/assets/images/work-07.jpg"],
  ["Cultural Events", "Rich traditions presented with contemporary craft.", "/assets/images/work-02.jpg"],
  ["Brand Events", "Audience-first experiences that bring ideas to life.", "/assets/images/work-03.jpg"],
] as const;

export const collaborations = [
  ["SASTRA University", "/assets/images/partners/sastra.png"],
  ["Team Emulsion", "/assets/images/partners/emulsion.png"],
  ["Purple Rah Events", "/assets/images/partners/purple-rah.png"],
  ["SRI Trophy", "/assets/images/partners/sri-trophy.png"],
] as const;
export const whyRDG = [
  ["Full-service team", "Planning, production, photography, film and entertainment under one roof."],
  ["Same-event delivery", "Instant Reels edited on site and handed over before the function ends."],
  ["Campus specialists", "Trusted with fests, symposiums and celebrity nights across Tamil Nadu."],
  ["Detail obsessed", "Stage, light, sound and schedule rehearsed long before your guests arrive."],
] as const;

export const testimonials = [
  ["Customer experiences will be shared here after they are verified and approved for publication.", "Experiences", "Coming soon"],
] as const;

export const instagramGallery = [
  "/assets/images/work-02.jpg",
  "/assets/images/instant-reel.jpg",
  "/assets/images/entertainment.jpg",
  "/assets/images/work-05.jpg",
  "/assets/images/college-events.jpg",
  "/assets/images/work-07.jpg",
] as const;

export const reels = [
  ["/assets/videos/reel-01.mp4", "/assets/images/work-04.jpg"],
  ["/assets/videos/reel-02.mp4", "/assets/images/instant-reel.jpg"],
  ["/assets/videos/reel-03.mp4", "/assets/images/work-02.jpg"],
] as const;
