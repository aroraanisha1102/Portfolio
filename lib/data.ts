export const profile = {
  name: "Anisha Arora",
  role: "Strategy, Operations & GTM",
  tagline: "I turn ambiguity into operating systems that move revenue.",
  intro:
    "Strategy & Ops leader with 5+ years across enterprise tech and high-growth startups — scaling revenue systems, GTM execution, and data-driven decisions. Now building at the intersection of operations and AI.",
  location: "Atlanta, GA",
  email: "Aroraanisha1102@gmail.com",
  phone: "+1 646 899 8120",
  linkedin: "https://www.linkedin.com/in/aroraanisha1102",
  linkedinHandle: "aroraanisha1102",
};

export const heroStats = [
  { value: "5+", label: "Years in strategy & ops" },
  { value: "3", label: "Countries → cities on the map" },
  { value: "$150K+", label: "MRR scaled from $45K" },
];

export type Stop = {
  id: string;
  region: "India" | "New York" | "Atlanta";
  flag: string;
  city: string;
  org: string;
  note?: string;
  role: string;
  period: string;
  summary: string;
  skills: string[];
  results: string[];
  // position on the 1000 x 560 map canvas
  x: number;
  y: number;
};

export const stops: Stop[] = [
  {
    id: "hpe",
    region: "India",
    flag: "🇮🇳",
    city: "Bengaluru, India",
    org: "Hewlett Packard Enterprise",
    role: "Enterprise Sales Consultant",
    period: "Jul 2021 – Oct 2022",
    summary:
      "Where it started: owning a portfolio end-to-end and learning how enterprise revenue really moves.",
    skills: ["Enterprise sales", "Solution design", "Pricing & contracts", "Forecasting"],
    results: [
      "Exceeded FY22 targets by 135% — top regional performer",
      "Cut sales-cycle time 50% via CRM-driven forecasting",
      "Enabled 70+ channel partners across the ecosystem",
    ],
    x: 838,
    y: 250,
  },
  {
    id: "salesforce",
    region: "India",
    flag: "🇮🇳",
    city: "Mumbai, India",
    org: "Salesforce",
    role: "Account Executive",
    period: "Oct 2022 – Apr 2023",
    summary:
      "Scaling into Fortune 500 deals and full-cycle GTM before making the leap abroad.",
    skills: ["Full-cycle GTM", "C-suite selling", "Channel co-sell", "Pipeline strategy"],
    results: [
      "120% quota on an $8M+ enterprise pipeline",
      "Closed the first MuleSoft × KPMG partnership",
      "Drove multi-product adoption across strategic accounts",
    ],
    x: 792,
    y: 292,
  },
  {
    id: "nyu",
    region: "New York",
    flag: "🇺🇸",
    city: "New York, NY",
    org: "New York University",
    note: "MS, IT Project Management — with Distinction",
    role: "Program Manager, Tech Platforms",
    period: "Sep 2023 – Dec 2024",
    summary:
      "A new country and a shift from selling systems to building them — across an entire university.",
    skills: ["Program management", "Stakeholder alignment", "Power BI dashboards", "Change enablement"],
    results: [
      "Platform initiatives across 7 schools, 10,000+ users",
      "85%+ adoption on a new cloud LMS rollout",
      "Bridged technical & business teams with exec dashboards",
    ],
    x: 300,
    y: 158,
  },
  {
    id: "foundersquare",
    region: "New York",
    flag: "🇺🇸",
    city: "New York, NY",
    org: "Founder Square",
    note: "5K+ founder network",
    role: "Partnerships Manager",
    period: "Sep 2024 – May 2025",
    summary:
      "Plugging into the NYC startup ecosystem — partnerships, community, and GTM in the wild.",
    skills: ["Partnerships", "Community GTM", "CRM systems", "Event execution"],
    results: [
      "Ran 10+ events, 150–500 attendees each",
      "Built a 300+ founder/investor CRM in Airtable",
      "Onboarded 70+ founders via 1:1 outreach",
    ],
    x: 258,
    y: 132,
  },
  {
    id: "reframe",
    region: "Atlanta",
    flag: "🇺🇸",
    city: "Atlanta, GA",
    org: "Reframe",
    note: "YC S21 · 5M+ downloads",
    role: "Strategy & Operations Lead",
    period: "May 2025 – Present",
    summary:
      "The full picture: strategy, ops, and AI — scaling a startup's core operating system from the ground up.",
    skills: ["GTM execution", "Operating systems", "Experimentation", "AI product"],
    results: [
      "Scaled MRR from $45K → $150K+ in 7 months",
      "Built Melody, an AI coach serving 40K+ users",
      "Lifted profit margins from 22% → 31%",
    ],
    x: 236,
    y: 302,
  },
];

export const impactMetrics = [
  { value: 150, prefix: "$", suffix: "K+", label: "MRR scaled from $45K at Reframe" },
  { value: 135, suffix: "%", label: "Peak target attainment (FY22, HPE)" },
  { value: 40, suffix: "K+", label: "Users served by the AI coach I built" },
  { value: 10000, suffix: "+", label: "Users impacted across NYU platforms", compact: true },
];

export const skillGroups = [
  {
    title: "Strategy & GTM",
    accent: "indigo",
    items: [
      "Go-to-market strategy",
      "Financial modeling",
      "P&L management",
      "Revenue optimization",
      "KPI / OKR design",
      "Pricing experimentation",
      "Forecasting",
    ],
  },
  {
    title: "Analytics & Experimentation",
    accent: "cyan",
    items: [
      "SQL",
      "Python",
      "A/B testing",
      "Cohort & retention analysis",
      "Funnel optimization",
      "Root-cause analysis",
      "Hypothesis-driven testing",
    ],
  },
  {
    title: "Product & Tools",
    accent: "amber",
    items: [
      "Product analytics",
      "AI workflow automation",
      "Salesforce",
      "HubSpot",
      "Amplitude",
      "Power BI",
      "Jira",
      "Notion",
    ],
  },
];

export const marqueeItems = [
  "Go-to-market",
  "Revenue operations",
  "Experimentation",
  "AI-enabled workflows",
  "P&L ownership",
  "Data-driven strategy",
  "0→1 operating systems",
  "Cross-functional execution",
];
