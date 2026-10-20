export type Role = {
  company: string;
  title: string;
  /** Add real dates here — shown next to the role when present. */
  period?: string;
  location?: string;
  sector: string;
  summary: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
};

/**
 * Ordered most recent first. Content is drawn from the resume doc; dates are
 * intentionally left blank until confirmed against LinkedIn.
 */
export const experience: Role[] = [
  {
    company: "Companion Pet Partners",
    title: "Construction Management Director",
    period: "Present",
    sector: "Veterinary",
    summary:
      "Lead strategy and execution of new builds, remodels and acquisitions across a multi-state veterinary portfolio — from due diligence through grand opening — working alongside executive, operations and clinical leadership.",
    highlights: [
      "Led 4 hospital replications into new state-of-the-art facilities",
      "Delivered 5 mid-to-major hospital improvement projects ($500K remodels up to a $2.5M new build)",
      "Directed architects on site plans and interiors tailored to each hospital's specialties and local market",
      "Partnered with the acquisitions team — 8 new locations secured, growing the portfolio to 32 hospitals",
      "Run dozens of smaller improvement projects with direct ROI so teams can see more patients",
    ],
    metrics: [
      { value: "32", label: "hospitals in portfolio" },
      { value: "$2.5M", label: "largest new build" },
      { value: "4", label: "hospital replications" },
    ],
  },
  {
    company: "JustFoodForDogs",
    title: "Construction & Retail Expansion",
    sector: "Retail · Food",
    summary:
      "Expanded the retail footprint across stand-alone kitchens, in-store shop-in-shops and veterinary “pantry” integrations, managing projects from initial design through turnover while holding to health, safety and food-production standards.",
    highlights: [
      "Simplified 10 early concepts into a modular, prefabricated vet-pantry system that fit any footprint",
      "Delivered 75 vet pantries nationwide, saving $4K–$6K per build-out on average",
      "Negotiated nationwide pricing and required equipment partners to hold inventory for growth",
      "Led lease coordination and contractor review for stand-alone retail — 3 built, 4 more in development",
      "Supported Petco partnership layout standards across 175 locations, with 50 more planned",
    ],
    metrics: [
      { value: "75", label: "vet pantries delivered" },
      { value: "$4–6K", label: "saved per build-out" },
      { value: "175", label: "Petco locations supported" },
    ],
  },
  {
    company: "The Pizza Press",
    title: "Director of Project Management",
    period: "3 years",
    sector: "Restaurant · QSR",
    summary:
      "Franchisor-side owner of every corporate and franchise build, taking restaurants from lease to launch. From the day a franchisee signed, I was involved in every single step until they opened for business.",
    highlights: [
      "Grew the system from 2 company restaurants and 0 franchises to 30 new locations opened plus 1 relocation",
      "Opened across Northern & Southern California, Washington, Nevada, Colorado, Texas, North Carolina and Florida",
      "Authored the 210-page Construction Guidebook with a national architecture firm — usable by any contractor or architect in the country",
      "Produced test-fit layouts faster than architects, cutting plan-set time and rounds of revisions",
      "Ran RFPs with multiple bids on every project and weekly/bi-weekly OAC meetings",
      "Led the sister equipment company, generating an additional $2.5M in revenue",
    ],
    metrics: [
      { value: "30", label: "locations opened" },
      { value: "210", label: "page Construction Guidebook" },
      { value: "$2.5M", label: "sister company revenue" },
    ],
  },
  {
    company: "Sandbox Marketing",
    title: "Experiential & Design",
    sector: "Experiential · Brand",
    summary:
      "Supported a small team with graphic design while building customer experiences for global brands — pop-ups, retail activations and event installations.",
    highlights: [
      "Bose — 3-week pop-up shops in England and Australia for the QC20 launch; modular displays built to ship internationally",
      "Bose — US Open of Surf retail-style activation; campaigns generated $1.2M+ in revenue",
      "Schwarzkopf Professional / Osis / Got2b — pop-up retail and free styling at events including Coachella",
      "Behr Paint — multi-site MLS stadium activations and 120 Home Depot locations nationwide",
    ],
    metrics: [
      { value: "$1.2M+", label: "Bose campaign revenue" },
      { value: "120", label: "Home Depot activations" },
    ],
  },
];
