import type { PhaseId } from "./phases";

export type ProjectImage = {
  /** Path under /public, e.g. "/projects/pizza-press/01.jpg". Omit to show a placeholder. */
  src?: string;
  alt: string;
  caption: string;
  /** "wide" spans two columns in the gallery. */
  size?: "wide" | "tall" | "square";
  /** CSS object-position for cropping, e.g. "50% 20%" keeps the top of the photo in frame. */
  focus?: string;
  /** "contain" shows the whole image uncropped (for plans, pages and slides). */
  fit?: "cover" | "contain";
  /** Orientation of a document page; decides how wide its card is. */
  orientation?: "portrait" | "landscape";
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: "Restaurant" | "Veterinary" | "Retail" | "Experiential";
  location: string;
  year?: string;
  featured?: boolean;
  /** One line for cards. */
  blurb: string;
  /** Longer overview on the case study page. */
  overview: string;
  /** Ryan's role on this project. */
  role: string;
  scope: string[];
  stats: { value: string; label: string }[];
  /** Which lifecycle phases Ryan owned, and what he did in each. */
  phases: Partial<Record<PhaseId, string>>;
  /** The "key areas I was involved in" callouts. */
  keyAreas: { title: string; body: string }[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  /** Plans, spec pages, slides: shown uncropped in their own section. */
  documents?: ProjectImage[];
  documentsTitle?: string;
};

/**
 * HOW TO ADD A PROJECT
 * 1. Drop images in /public/projects/<slug>/ and set `src` on cover/gallery items.
 * 2. Copy any object below, change the slug, and fill in the details.
 * 3. Mark the phases you were involved in under `phases` — the timeline lights up automatically.
 */
export const projects: Project[] = [
  {
    slug: "pizza-press-franchise-rollout",
    title: "From 2 Restaurants to a National Franchise",
    client: "The Pizza Press",
    sector: "Restaurant",
    location: "CA · WA · NV · CO · TX · NC · FL",
    featured: true,
    blurb:
      "30 new locations and a relocation in three years — every one taken from lease to launch.",
    overview:
      "On the franchisor side of The Pizza Press, I owned construction for every corporate and franchise-owned restaurant. The system started with two stores and no franchisees. Over three years I opened 30 new locations and relocated one existing store across seven states, building a repeatable process that let franchisees open on time, on budget and on brand.",
    role: "Director of Project Management",
    scope: ["Franchise QSR", "New builds & relocation", "Corporate + franchisee owned", "7 states"],
    stats: [
      { value: "30", label: "locations opened" },
      { value: "1", label: "relocation" },
      { value: "7", label: "states" },
      { value: "$2.5M", label: "sister company revenue" },
    ],
    phases: {
      site: "Walked every property with franchisees and brokers, evaluating fit against layout requirements and operational flow before a lease was executed.",
      lease: "Reviewed lease terms and landlord work with the broker, making sure required restaurant elements were covered.",
      design: "Produced preliminary layouts and test-fits far faster than an architect, then directed the plan set to completion.",
      permit: "Managed plan submission and jurisdiction coordination across seven states.",
      bid: "Ran the RFP on every project — always multiple bids — and negotiated equipment pricing through the sister company.",
      build: "Led weekly and bi-weekly OAC meetings to hold budget and schedule.",
      open: "Supported every franchisee through opening day, and each store opened for business with me involved the entire way.",
    },
    keyAreas: [
      {
        title: "Test-fits at speed",
        body: "A graphic design background let me turn around layouts in a fraction of an architect's time, cutting revision rounds and plan-set cost.",
      },
      {
        title: "Always multiple bids",
        body: "Whether a franchisee brought their own contractor or relied on me, every project was vetted and competitively bid.",
      },
      {
        title: "Equipment leverage",
        body: "Negotiated rock-bottom pricing, warehouse-minimum guarantees and custom products through the sister company I also ran.",
      },
    ],
    cover: {
      src: "/projects/pizza-press-franchise-rollout/cover-order-here.jpg",
      alt: "Order counter with a \"Start your order here\" sign above the pizza line and conveyor oven",
      caption: "Ordering line at grand opening",
      size: "wide",
    },
    gallery: [
      {
        src: "/projects/pizza-press-franchise-rollout/storefront.jpg",
        alt: "Pizza Press storefront with black awning and brick facade",
        caption: "Storefront",
        size: "wide",
        focus: "50% 15%",
      },
      {
        src: "/projects/pizza-press-franchise-rollout/patio-storefront.jpg",
        alt: "Pizza Press storefront with outdoor patio seating behind a black metal railing",
        caption: "Storefront with patio",
        size: "square",
      },
      {
        src: "/projects/pizza-press-franchise-rollout/dining-room.jpg",
        alt: "Finished dining room with black bentwood chairs, pendant lights and an open kitchen",
        caption: "Dining room",
        size: "square",
      },
      {
        src: "/projects/pizza-press-franchise-rollout/banquette.jpg",
        alt: "Leather banquette seating under pendant lights and framed photography",
        caption: "Banquette seating",
        size: "square",
      },
      {
        src: "/projects/pizza-press-franchise-rollout/service-line.jpg",
        alt: "Glass-fronted service line with brass details beneath the kitchen hood",
        caption: "Service line",
        size: "square",
      },
      {
        src: "/projects/pizza-press-franchise-rollout/irvine-interior.jpg",
        alt: "Pizza Press interior looking toward the cook line",
        caption: "Irvine interior",
        size: "square",
      },
      {
        src: "/projects/pizza-press-franchise-rollout/eastvale-interior.jpg",
        alt: "Long dining room with leather banquettes and exposed white trusses",
        caption: "Eastvale interior",
        size: "wide",
      },
    ],
  },
  {
    slug: "construction-guidebook",
    title: "The 210-Page Construction Guidebook",
    client: "The Pizza Press",
    sector: "Restaurant",
    location: "National",
    featured: true,
    blurb:
      "Six months with a national architecture firm to document every element of a restaurant build-out.",
    overview:
      "To scale franchise development, every aspect of the build-out process needed to live in one place. I led the six-month creation of the Construction Guidebook in partnership with a national architectural firm — a 210-page standard that can be handed to any contractor or architect in the country and result in a successful restaurant. Version 1.0 of the Architectural Brand Standards was issued in October 2018.",
    role: "Program lead",
    scope: ["Standards & prototype", "Architect partnership", "National contractor enablement"],
    stats: [
      { value: "210", label: "pages" },
      { value: "6", label: "months to build" },
      { value: "Any", label: "contractor or architect, anywhere" },
    ],
    phases: {
      design: "Partnered with a national architecture firm to codify every design and detailing element.",
      bid: "Created bid-ready documentation so any contractor could price consistently.",
      build: "Gave field teams one source of truth for quality and prototype adherence.",
    },
    keyAreas: [
      {
        title: "One source of truth",
        body: "A single document replaced one-off answers and tribal knowledge across dozens of build-outs.",
      },
      {
        title: "Scales anywhere",
        body: "Written so a contractor or architect in any market could succeed without hand-holding.",
      },
    ],
    cover: {
      src: "/projects/construction-guidebook/cover.jpg",
      alt: "Cover of The Pizza Press Architectural Brand Standards",
      caption: "Architectural Brand Standards, v1.0",
      size: "wide",
    },
    gallery: [],
    documents: [
      {
        src: "/projects/construction-guidebook/page-7.jpg",
        alt: "Exterior design examples page showing completed Pizza Press storefronts",
        caption: "Exterior design examples",
        fit: "contain",
        orientation: "portrait",
      },
      {
        src: "/projects/construction-guidebook/page-12.jpg",
        alt: "Interior design page with annotated renderings of the dining room and cook line",
        caption: "Interior design, annotated",
        fit: "contain",
        orientation: "portrait",
      },
      {
        src: "/projects/construction-guidebook/page-15.jpg",
        alt: "Cookline plan with numbered callouts keyed to product pages",
        caption: "Cookline plan with callouts",
        fit: "contain",
        orientation: "portrait",
      },
      {
        src: "/projects/construction-guidebook/page-21.jpg",
        alt: "Elevation drawings of the POS area and pizza oven cook line",
        caption: "Cook line elevations",
        fit: "contain",
        orientation: "portrait",
      },
      {
        src: "/projects/construction-guidebook/page-48.jpg",
        alt: "Flooring systems specification sheet with finish details",
        caption: "Finish specification",
        fit: "contain",
        orientation: "portrait",
      },
      {
        src: "/projects/construction-guidebook/page-77.jpg",
        alt: "Equipment specification sheet for the conveyor pizza oven",
        caption: "Equipment specification",
        fit: "contain",
        orientation: "portrait",
      },
    ],
    documentsTitle: "Sample pages",
  },
  {
    slug: "vet-pantry-program",
    title: "75 Vet Pantries, Nationwide",
    client: "JustFoodForDogs",
    sector: "Retail",
    location: "Nationwide",
    featured: true,
    blurb:
      "A modular, prefabricated system that turned 10 bespoke concepts into a repeatable national rollout.",
    overview:
      "JustFoodForDogs set a target of 500 veterinary pantries in five years. I simplified the original ten concepts into a modular layout built from prefabricated components that adapt to the challenging footprints inside veterinary hospitals, then lined up a national contractor and equipment partners to support the growth trajectory. By the time the program was paused, 75 fully functional pantries were open.",
    role: "Design & execution lead",
    scope: ["Shop-in-shop", "Modular / prefab", "National contractor", "Vet hospitals"],
    stats: [
      { value: "75", label: "pantries delivered" },
      { value: "10→1", label: "concepts to one modular system" },
      { value: "$4–6K", label: "saved per build-out" },
    ],
    phases: {
      design: "Reduced ten concepts into one modular, prefabricated layout that flexes across footprints.",
      bid: "Negotiated nationwide pricing and required partners to maintain inventory for growth; engaged a national contractor.",
      build: "Coordinated installs across hospitals nationwide with operational constraints.",
      open: "Handed off fully functional pantries to hospital teams.",
    },
    keyAreas: [
      {
        title: "Modular by design",
        body: "Prefabricated components that work in multiple configurations kept every install predictable.",
      },
      {
        title: "Procurement as strategy",
        body: "Partners held inventory levels required for growth, so schedule never waited on product.",
      },
    ],
    cover: {
      src: "/projects/vet-pantry-program/pantry-sketch.jpg",
      alt: "Perspective sketch of a proposed pantry with freezers and shelving in a veterinary lobby",
      caption: "Proposed pantry perspective",
      size: "wide",
      focus: "50% 62%",
    },
    gallery: [],
    documents: [
      {
        src: "/projects/vet-pantry-program/plan-seattle.jpg",
        alt: "Proposed floor plan of a Seattle veterinary clinic with the pantry area in the lobby",
        caption: "Seattle clinic: proposed floor plan",
        fit: "contain",
        orientation: "landscape",
      },
      {
        src: "/projects/vet-pantry-program/plan-austin.jpg",
        alt: "Proposed floor plan of an Austin clinic lobby with pantry freezers and shelving",
        caption: "Austin clinic: proposed floor plan",
        fit: "contain",
        orientation: "landscape",
      },
    ],
    documentsTitle: "Plans and sketches",
  },
  {
    slug: "jffd-retail-kitchens",
    title: "Stand-Alone Retail Kitchens",
    client: "JustFoodForDogs",
    sector: "Retail",
    location: "United States",
    blurb:
      "Fresh-food retail stores built to health and food-production standards, coordinated from lease to turnover.",
    overview:
      "After the vet pantry freeze, I shifted to supporting real estate and execution on stand-alone stores. Working with the in-house broker and architect, I helped choose high-traffic locations, laid them out for operational efficiency and supported two mass-production facilities, then led lease coordination and contractor review. Three stores opened with four more in development before I moved on.",
    role: "Construction & retail expansion",
    scope: ["Stand-alone retail", "Food production", "Real estate partnership"],
    stats: [
      { value: "3", label: "stores built" },
      { value: "4", label: "in development" },
      { value: "175", label: "Petco locations supported" },
    ],
    phases: {
      site: "Partnered with the in-house broker to find high-exposure, high-traffic locations.",
      lease: "Coordinated everything leading to lease execution.",
      design: "Worked with the in-house architect on efficient layouts supporting production facilities.",
      bid: "Reviewed contractors for national build-outs.",
      build: "Managed construction to health, safety and food-production standards.",
    },
    keyAreas: [
      {
        title: "Real estate partnership",
        body: "Site criteria built around visibility, traffic yield and operational flow.",
      },
      {
        title: "Petco layout standards",
        body: "Worked with the B2B team to hold layout and customer experience standards across 175 stores.",
      },
    ],
    cover: {
      src: "/projects/jffd-retail-kitchens/cover.jpg",
      alt: "JustFoodForDogs stand-alone store with a glass pavilion on a city corner",
      caption: "Stand-alone store exterior",
      size: "wide",
    },
    gallery: [
      {
        src: "/projects/jffd-retail-kitchens/o-3.jpg",
        alt: "Store interior with refrigerated cases, a service counter and customers",
        caption: "Store interior",
        size: "wide",
      },
      {
        src: "/projects/jffd-retail-kitchens/o-2.jpg",
        alt: "Shelves of packaged dog food beside two-door freezers under a glass roof",
        caption: "Retail shelving and freezers",
        size: "square",
      },
      {
        src: "/projects/jffd-retail-kitchens/o-4.jpg",
        alt: "Wood shelving running along the glass wall of the store",
        caption: "Shelving along the glass",
        size: "square",
      },
      {
        src: "/projects/jffd-retail-kitchens/o-5.jpg",
        alt: "Open kitchen with stainless equipment behind the service counter",
        caption: "Open kitchen",
        size: "square",
      },
      {
        src: "/projects/jffd-retail-kitchens/o.jpg",
        alt: "Corner entrance beneath the lit JustFoodForDogs sign",
        caption: "Corner entrance",
        size: "square",
      },
    ],
    documents: [
      {
        src: "/projects/jffd-retail-kitchens/plan-dallas.jpg",
        alt: "Dallas pantry layout option 3 showing shelving, counters and rooms",
        caption: "Dallas pantry: layout option 3",
        fit: "contain",
        orientation: "landscape",
      },
    ],
    documentsTitle: "Plans",
  },
  {
    slug: "veterinary-hospital-replacements",
    title: "Hospital Replacements & New Builds",
    client: "Companion Pet Partners",
    sector: "Veterinary",
    location: "Multi-state",
    featured: true,
    blurb:
      "Four hospital replications and a $2.5M new build — each shaped around clinical workflow and the local market.",
    overview:
      "As Construction Management Director for a fast-growing veterinary platform, I lead new builds, remodels and acquisition integrations — from due diligence through grand opening. Projects have ranged from $500K remodels to a $2.5M new build, each designed with clinical and operations leadership to improve workflow, patient care and staff experience.",
    role: "Construction Management Director",
    scope: ["New builds", "Remodels", "Acquisitions", "Portfolio of 32 hospitals"],
    stats: [
      { value: "4", label: "hospital replications" },
      { value: "5", label: "major improvement projects" },
      { value: "$2.5M", label: "largest new build" },
      { value: "32", label: "hospitals in portfolio" },
    ],
    phases: {
      site: "Evaluated sites and buildings during diligence with the acquisitions team.",
      lease: "Aligned lease and ownership structure with project goals.",
      design: "Directed architects on site plans suited to each hospital's specialties, with interiors that speak to the local market.",
      permit: "Led plan submission, partnering with the city and an expediter to keep schedules moving.",
      bid: "Coordinated contractor selection and hiring.",
      build: "Managed budget, schedule and field decisions through completion.",
      open: "Continue managing the maintenance, care and ROI-driven improvements of each facility after opening.",
    },
    keyAreas: [
      {
        title: "Due diligence to grand opening",
        body: "One accountable lead from the first walk-through of an acquisition through the ribbon cutting.",
      },
      {
        title: "Working with clinicians",
        body: "Designs built around workflow so teams can see more patients and attract more doctors.",
      },
      {
        title: "Expediting plan review",
        body: "Hands-on partnership with municipalities and expediters to move plan sets swiftly.",
      },
    ],
    cover: {
      src: "/projects/veterinary-hospital-replacements/lobby.jpg",
      alt: "Hospital lobby with seating, reception desk and a retail shelf",
      caption: "Lobby and reception",
      size: "wide",
    },
    gallery: [
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2216.jpg",
        alt: "Treatment area with equipment and a glass-fronted passage",
        caption: "Treatment area",
        size: "wide",
      },
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2244.jpg",
        alt: "Exam room with built-in desk, bench seating and exam table",
        caption: "Exam room",
        size: "square",
      },
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2231.jpg",
        alt: "Surgery suite with surgical lights and monitoring equipment",
        caption: "Surgery suite",
        size: "square",
      },
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2230.jpg",
        alt: "Laboratory with cabinetry, analyzers and a workstation",
        caption: "Laboratory",
        size: "square",
      },
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2239.jpg",
        alt: "Bathing area with tiled wet wall and a lift table",
        caption: "Bathing and treatment",
        size: "square",
      },
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2243.jpg",
        alt: "Private office with built-in desk and storage",
        caption: "Doctor's office",
        size: "square",
      },
      {
        src: "/projects/veterinary-hospital-replacements/IMG_2227.jpg",
        alt: "Treatment ward with kennel banks and a central island",
        caption: "Treatment ward",
        size: "wide",
      },
    ],
  },
  {
    slug: "bose-qc20-pop-ups",
    title: "Bose QC20 Pop-Ups: England & Australia",
    client: "Bose · via Sandbox Marketing",
    sector: "Experiential",
    location: "England · Australia",
    blurb:
      "Three-week open-air pop-ups introducing the QC20, with modular displays built to ship overseas.",
    overview:
      "I coordinated three-week-running pop-up shops in England and Australia for the introduction of the QC20 noise-cancelling in-ear headphones. Displays were designed and fabricated to be modular and meet international shipping specifications, then installed in public spaces as open-air listening stations where consumers could try multiple products in the Bose line-up. I worked closely with the Bose retail and marketing team on graphics, messaging and the overall customer-felt experience. The kiosk system was pitched as tool-free to assemble, reconfigurable into X, T, V and linear layouts to suit each venue.",
    role: "Project coordinator & designer",
    scope: ["Pop-up retail", "Fabrication", "International logistics", "Open-air displays"],
    stats: [
      { value: "2", label: "countries" },
      { value: "3 wk", label: "pop-up run" },
      { value: "$1.2M+", label: "revenue across both Bose campaigns" },
    ],
    phases: {
      design: "Designed modular displays, graphics and messaging with the Bose retail and marketing team.",
      bid: "Managed fabrication and shipping to national and international specifications.",
      build: "Installed open-air listening stations in public spaces overseas.",
      open: "Supported the pop-ups through their three-week runs.",
    },
    keyAreas: [
      {
        title: "Modular by necessity",
        body: "Displays had to ship overseas and meet shipping specifications, so every component was designed to travel and reassemble.",
      },
      {
        title: "Experience design",
        body: "Graphics, messaging and layout designed as one customer journey with Bose's retail and marketing teams.",
      },
    ],
    cover: {
      src: "/projects/bose-qc20-pop-ups/cover.jpg",
      alt: "Bose pop-up kiosk beneath a latticed station roof in England",
      caption: "Bose pop-up, England",
      size: "wide",
      focus: "50% 82%",
    },
    gallery: [
      {
        src: "/projects/bose-qc20-pop-ups/DSC_2627.jpg",
        alt: "Bose kiosk with an illuminated sign on a rail station concourse",
        caption: "England: rail concourse pop-up",
        size: "wide",
      },
      {
        src: "/projects/bose-qc20-pop-ups/DSC_2663.jpg",
        alt: "Shoppers trying Bose headphones at a display",
        caption: "Trying the headphones",
        size: "square",
      },
      {
        src: "/projects/bose-qc20-pop-ups/Bose_Australia_img-35.jpg",
        alt: "Bose staff demonstrating headphones to a customer in Australia",
        caption: "Australia: demo",
        size: "square",
      },
      {
        src: "/projects/bose-qc20-pop-ups/DSC_2814.jpg",
        alt: "Brand ambassador explaining headphones at a product display",
        caption: "Product display",
        size: "square",
      },
      {
        src: "/projects/bose-qc20-pop-ups/Bose_Australia_img-28.jpg",
        alt: "Customers listening at a Bose \"Try them here\" kiosk in an Australian plaza",
        caption: "Australia: listening station",
        size: "square",
      },
      {
        src: "/projects/bose-qc20-pop-ups/DSC_2613.jpg",
        alt: "Overhead view of the Bose pop-up on a station concourse",
        caption: "England: overhead view",
        size: "square",
      },
      {
        src: "/projects/bose-qc20-pop-ups/Bose_Australia_img-32.jpg",
        alt: "Overhead view of Bose kiosks in a shopping plaza",
        caption: "Australia: plaza overview",
        size: "wide",
      },
    ],
    documents: [
      {
        src: "/projects/bose-qc20-pop-ups/deck-4.jpg",
        alt: "Pitch deck slide showing a modular kiosk that assembles without tools",
        caption: "Modular, tool-free kiosk",
        fit: "contain",
        orientation: "landscape",
      },
      {
        src: "/projects/bose-qc20-pop-ups/deck-6.jpg",
        alt: "Pitch deck slide with X-shape activation layout renderings",
        caption: "X-shape layout",
        fit: "contain",
        orientation: "landscape",
      },
      {
        src: "/projects/bose-qc20-pop-ups/deck-10.jpg",
        alt: "Pitch deck slide with satellite listening station and mobile sound shower concepts",
        caption: "Satellite listening station",
        fit: "contain",
        orientation: "landscape",
      },
      {
        src: "/projects/bose-qc20-pop-ups/deck-12.jpg",
        alt: "Pitch deck slide with the activation timeline across regions",
        caption: "Activation timeline",
        fit: "contain",
        orientation: "landscape",
      },
    ],
    documentsTitle: "From the pitch deck",
  },
  {
    slug: "bose-sound-shack-us-open-of-surf",
    title: "The Bose Sound Shack at the US Open of Surf",
    client: "Bose · via Sandbox Marketing",
    sector: "Experiential",
    location: "Huntington Beach, CA",
    year: "2014",
    blurb:
      "A beach-hut retail activation with custom skateboard-deck displays and multiple demo stations.",
    overview:
      "I designed and executed a large retail-style activation at the US Open of Surf: the Bose Sound Shack, a thatched beach hut with custom skateboard-deck displays and multiple stations where festival-goers could demo products from the Bose line-up. Together with the international pop-ups, the Bose campaigns generated over $1.2 million in revenue.",
    role: "Designer & project lead",
    scope: ["Event activation", "Custom build", "Experiential retail", "Demo stations"],
    stats: [
      { value: "$1.2M+", label: "revenue across both Bose campaigns" },
      { value: "2014", label: "US Open of Surf" },
    ],
    phases: {
      design: "Designed the Sound Shack, its custom displays and the overall guest experience.",
      build: "Built and installed the activation on the beach, including multiple demo stations.",
      open: "Ran the activation through the event.",
    },
    keyAreas: [
      {
        title: "Retail on the beach",
        body: "A themed beach hut turned a festival crowd into hands-on product demos.",
      },
      {
        title: "Custom skateboard displays",
        body: "Headphones mounted on painted skateboard decks tied the brand to the event's culture.",
      },
    ],
    cover: {
      src: "/projects/bose-sound-shack-us-open-of-surf/cover.jpg",
      alt: "Crowds at the Bose Sound Shack, a thatched beach hut at the US Open of Surf",
      caption: "The Bose Sound Shack",
      size: "wide",
    },
    gallery: [
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/training-3.jpg",
        alt: "Aerial view of the Bose Sound Shack among festival tents and crowds on the beach",
        caption: "The Sound Shack in the festival village",
        size: "wide",
      },
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/training-29.jpg",
        alt: "Headphones on custom painted skateboard-deck displays",
        caption: "Skateboard-deck displays",
        size: "square",
      },
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/training-68.jpg",
        alt: "Front of the Sound Shack with a queue of festival-goers",
        caption: "Front entrance",
        size: "square",
      },
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/listening.jpg",
        alt: "Guests trying Bose headphones at the Sound Shack",
        caption: "Guests trying the product",
        size: "square",
      },
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/demo.jpg",
        alt: "Bose team member demonstrating headphones to a guest",
        caption: "Product demos",
        size: "square",
      },
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/training-15.jpg",
        alt: "Brand ambassadors behind the Sound Shack counter",
        caption: "The team",
        size: "square",
      },
      {
        src: "/projects/bose-sound-shack-us-open-of-surf/training-72.jpg",
        alt: "Side view of the Sound Shack with palms, surfboards and a queue",
        caption: "Sound Shack side view",
        size: "wide",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
export const sectors = Array.from(new Set(projects.map((p) => p.sector)));
