import type { PhaseId } from "./phases";

export type ProjectImage = {
  /** Path under /public, e.g. "/projects/pizza-press/01.jpg". Omit to show a placeholder. */
  src?: string;
  alt: string;
  caption: string;
  /** "wide" spans two columns in the gallery. */
  size?: "wide" | "tall" | "square";
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
    cover: { alt: "Pizza Press restaurant interior", caption: "Flagship interior", size: "wide" },
    gallery: [
      { alt: "Storefront", caption: "Storefront at grand opening", size: "wide" },
      { alt: "Test-fit layout", caption: "Preliminary test-fit layout", size: "square" },
      { alt: "Construction progress", caption: "Mid-construction site visit", size: "tall" },
      { alt: "Finished dining room", caption: "Finished dining room", size: "square" },
      { alt: "Open for business", caption: "Opening day", size: "wide" },
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
      "To scale franchise development, every aspect of the build-out process needed to live in one place. I led the six-month creation of the Construction Guidebook in partnership with a national architectural firm — a 210-page standard that can be handed to any contractor or architect in the country and result in a successful restaurant.",
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
    cover: { alt: "Construction Guidebook spread", caption: "Guidebook cover & spreads", size: "wide" },
    gallery: [
      { alt: "Guidebook cover", caption: "Cover", size: "tall" },
      { alt: "Detail pages", caption: "Typical detail sheets", size: "wide" },
      { alt: "Spec pages", caption: "Equipment & spec pages", size: "square" },
    ],
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
    cover: { alt: "Vet pantry installation", caption: "Vet pantry inside a hospital lobby", size: "wide" },
    gallery: [
      { alt: "Modular components", caption: "Prefabricated components", size: "square" },
      { alt: "Installed pantry", caption: "Completed pantry", size: "tall" },
      { alt: "Layout configurations", caption: "Layout configurations", size: "wide" },
    ],
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
    cover: { alt: "JustFoodForDogs retail store", caption: "Stand-alone kitchen storefront", size: "wide" },
    gallery: [
      { alt: "Store interior", caption: "Retail floor", size: "wide" },
      { alt: "Kitchen", caption: "Open kitchen", size: "square" },
      { alt: "Exterior", caption: "Exterior", size: "tall" },
    ],
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
    cover: { alt: "Veterinary hospital exterior", caption: "New hospital exterior", size: "wide" },
    gallery: [
      { alt: "Lobby", caption: "Reception & lobby", size: "wide" },
      { alt: "Treatment area", caption: "Treatment ward", size: "square" },
      { alt: "Construction", caption: "Framing complete", size: "tall" },
      { alt: "Exam room", caption: "Exam room", size: "square" },
    ],
  },
  {
    slug: "bose-qc20-pop-ups",
    title: "Bose QC20 Global Pop-Ups",
    client: "Bose · via Sandbox Marketing",
    sector: "Experiential",
    location: "England · Australia · USA",
    blurb:
      "Modular displays shipped overseas and open-air demo stations that drove $1.2M+ in revenue.",
    overview:
      "I coordinated three-week pop-up shops in England and Australia introducing the QC20 noise-cancelling in-ear headphones, plus a large retail-style activation at the US Open of Surf. Displays were designed and fabricated to be modular and meet international shipping specs, with listening stations that let consumers try the Bose line-up in public spaces.",
    role: "Project coordinator & designer",
    scope: ["Pop-up retail", "Fabrication", "International logistics", "Event activation"],
    stats: [
      { value: "$1.2M+", label: "revenue generated" },
      { value: "3", label: "countries" },
      { value: "3 wk", label: "pop-up run" },
    ],
    phases: {
      design: "Designed modular displays and the overall customer-felt experience with Bose retail and marketing.",
      bid: "Managed fabrication and shipping to international specs.",
      build: "Installed and operated open-air listening stations.",
      open: "Supported activations through their run.",
    },
    keyAreas: [
      {
        title: "Modular fabrication",
        body: "Displays built to ship overseas and reassemble anywhere.",
      },
      {
        title: "Experience design",
        body: "Graphics, messaging and layout designed as one customer journey.",
      },
    ],
    cover: { alt: "Bose pop-up display", caption: "Open-air listening stations", size: "wide" },
    gallery: [
      { alt: "Display", caption: "Modular display", size: "square" },
      { alt: "US Open of Surf", caption: "US Open of Surf activation", size: "wide" },
      { alt: "Listening station", caption: "Listening station", size: "tall" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
export const sectors = Array.from(new Set(projects.map((p) => p.sector)));
