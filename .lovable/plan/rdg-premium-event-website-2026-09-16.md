# RDG Premium Event Website

## Goal
Build a complete, responsive, cinematic website for Rhythm Dreams Gatherings that clearly presents services, work, collaborations, and fast contact paths.

## What I’ll build
- A full-screen media-led home experience with graceful video-to-image fallbacks, premium typography, motion, sticky navigation, fullscreen mobile menu, scroll progress, and desktop custom cursor.
- Editorial About, interactive Services, prominent Instant Reels, filtered Work gallery with fullscreen lightbox, video showcase, Experiences, College Events, Special Guests, Collaborations, Why RDG, editable Testimonials, Instagram gallery, contact call-to-action, enquiry form, and footer.
- Working WhatsApp, call, Instagram, navigation, filters, lightbox, mobile menu, and validated WhatsApp enquiry generation.
- Reusable data-driven sections so portfolio items, services, associations, and contact details are straightforward to update.
- Accessible keyboard controls, focus states, reduced-motion behavior, responsive layouts, lazy media loading, and polished fallbacks for every replaceable asset.
- Route-specific SEO metadata and local EventPlanner structured data without unsupported claims.

## Visual direction
- Charcoal-black cinematic foundation, warm off-white type, restrained champagne accent, and electric lime used sparingly for Instant Reels.
- Large editorial display typography paired with clean geometric body copy.
- Sharp, composed panels rather than generic rounded cards; restrained glass effects and subtle grain.
- Motion focused on reveals, depth, and feedback—not constant decoration.

## Technical details
- TanStack Start, React 19, TypeScript, Tailwind CSS v4, Lucide icons, and lightweight CSS/IntersectionObserver motion.
- A shared configuration module will hold RDG contact links and content collections.
- Missing images and videos will resolve to branded RDG fallback visuals without broken media icons.
- All requested media paths will be prepared under `public/assets/` with a replacement guide; placeholders will remain intentionally easy to swap.

## Validation
- Check compilation and runtime logs.
- Exercise desktop and mobile navigation, CTAs, form validation and generated WhatsApp URL, portfolio filters, lightbox keyboard controls, media fallbacks, and responsive layouts in the browser.
- Verify metadata, semantic headings, accessible labels, focus behavior, and absence of horizontal overflow or console errors.
