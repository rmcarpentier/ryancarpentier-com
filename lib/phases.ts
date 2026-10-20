export type PhaseId =
  | "site"
  | "lease"
  | "design"
  | "permit"
  | "bid"
  | "build"
  | "open";

export type Phase = {
  id: PhaseId;
  index: string;
  title: string;
  short: string;
  summary: string;
  involvement: string[];
};

/**
 * The seven stages of a build. This is the spine of the whole site: every
 * project shows which of these phases Ryan personally owned.
 */
export const phases: Phase[] = [
  {
    id: "site",
    index: "01",
    title: "Site Selection",
    short: "Site",
    summary:
      "Walking properties with brokers and operators, testing each one against layout requirements and operational flow before anyone signs.",
    involvement: [
      "Site walks with brokers and franchisees",
      "Compatibility review against prototype & operational flow",
      "Go / no-go recommendations",
    ],
  },
  {
    id: "lease",
    index: "02",
    title: "Lease & Real Estate",
    short: "Lease",
    summary:
      "Making sure the lease actually supports the build — landlord work, exhibits, utilities, timelines and the elements the concept specifically requires.",
    involvement: [
      "Lease and landlord-work review",
      "Landlord & broker coordination",
      "Delivery conditions and build-out timelines",
    ],
  },
  {
    id: "design",
    index: "03",
    title: "Design & Layout",
    short: "Design",
    summary:
      "Fast test-fits and preliminary layouts, then close direction of architects through construction documents. A graphic design background means pivots happen in hours, not weeks.",
    involvement: [
      "Preliminary layouts & test-fits",
      "Architect direction and plan-set development",
      "Interior concept & finish selections",
    ],
  },
  {
    id: "permit",
    index: "04",
    title: "Permitting",
    short: "Permit",
    summary:
      "Plan submission and the back-and-forth with jurisdictions, expediters and health departments that decide whether a schedule holds.",
    involvement: [
      "Plan submission & tracking",
      "City, expediter and health-department coordination",
      "Comment response and resubmittal",
    ],
  },
  {
    id: "bid",
    index: "05",
    title: "Bidding & Procurement",
    short: "Bid",
    summary:
      "Running the RFP, always with multiple bids. Equipment, fixtures and long-lead items are negotiated at national volume so each project benefits from the whole portfolio.",
    involvement: [
      "Contractor vetting and RFP management",
      "Bid leveling and negotiation",
      "Equipment & vendor programs with guaranteed inventory",
    ],
  },
  {
    id: "build",
    index: "06",
    title: "Construction",
    short: "Build",
    summary:
      "Weekly or bi-weekly OAC meetings, budget tracking, field issue resolution and documentation that keeps owner, architect and contractor on the same page.",
    involvement: [
      "OAC meetings & field coordination",
      "Budget, schedule and change-order control",
      "Quality and prototype adherence",
    ],
  },
  {
    id: "open",
    index: "07",
    title: "Opening & Beyond",
    short: "Open",
    summary:
      "Turnover, punch, launch support — and then the part most PMs never see: keeping facilities performing with improvement projects that drive real ROI.",
    involvement: [
      "Punch list, turnover and grand opening",
      "Post-opening support",
      "Facility improvements & ongoing capital projects",
    ],
  },
];

export const phaseById = Object.fromEntries(phases.map((p) => [p.id, p])) as Record<
  PhaseId,
  Phase
>;
