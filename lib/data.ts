export const profile = {
  name: "Anisha Arora",
  role: "Strategy & Operations · AI-native",
  tagline: "The operator founders lean on — turning ambiguity into revenue systems, shipped AI products, and operating cadence that scales.",
  intro:
    "AI-first Strategy & Operations and Chief of Staff. I turn ambiguous, cross-functional problems into revenue systems and working products — from Fortune 500 sales floors to the engine room of a YC-backed startup.",
  email: "aroraanisha1102@gmail.com",
  linkedin: "https://www.linkedin.com/in/aroraanisha1102",
  linkedinHandle: "aroraanisha1102",
  location: "Atlanta, GA",
  resumeUrl: "/Anisha_Arora_Resume.pdf",
};

export const stats = [
  {
    value: "3.3×",
    label: "MRR growth driven in 7 months at a YC-backed startup",
  },
  {
    value: "40K+",
    label: "users reached by an AI coaching product I built 0→1",
  },
  {
    value: "$12M+",
    label: "enterprise pipeline owned across Salesforce & HPE",
  },
  {
    value: "78%",
    label: "faster ops cycles after wiring an LLM into the CRM",
  },
];

export type Chapter = {
  id: string;
  company: string;
  note?: string;
  role: string;
  location: string;
  period: string;
  line: string;
  metric: string;
  metricLabel: string;
  details: string[];
  skills: string[];
};

// Newest first
export const chapters: Chapter[] = [
  {
    id: "reframe",
    company: "Reframe",
    note: "YC S21 · 5M+ downloads",
    role: "Strategy & Operations Manager",
    location: "Atlanta, GA",
    period: "2025 — Now",
    line: "Running the growth engine of a neuroscience-based health app — and shipping AI product alongside it.",
    metric: "3.3×",
    metricLabel: "MRR in 7 months",
    details: [
      "Built and launched Melody, a 0→1 AI coaching product — prompt architecture and conversation logic serving 40K+ users, prototyped and shipped in 3 weeks.",
      "Scaled MRR from $45K to $150K+ by building the operating systems behind onboarding, pricing, retention, and coach performance.",
      "Improved profit margins from 22% to 31% through cohort analysis, A/B testing, and executive-ready recommendations.",
      "Stood up recruiting, onboarding, and payroll systems for a 60+ person coach network, with AI-powered performance dashboards replacing manual reporting.",
    ],
    skills: ["GTM execution", "RevOps", "AI product 0→1", "Experimentation"],
  },
  {
    id: "creddnet",
    company: "CREDDnet",
    note: "Private credit platform",
    role: "Product Operations Manager",
    location: "New York, NY",
    period: "2025",
    line: "Rebuilt CRM infrastructure from scratch and wired an LLM into it to automate pipeline reporting.",
    metric: "14→3",
    metricLabel: "days per follow-up cycle",
    details: [
      "Redesigned the CRM in Airtable and integrated an LLM via Claude Code to auto-generate pipeline summaries, follow-ups, and reminders — cutting partner follow-up cycles by 78%.",
      "Synthesized market research and client engagement data into product prioritization that shaped investor updates and strategic planning.",
    ],
    skills: ["AI-assisted ops", "CRM architecture", "Market research"],
  },
  {
    id: "nyu",
    company: "New York University",
    role: "Program Manager · Tech Platforms",
    location: "New York, NY",
    period: "2024",
    line: "Drove enterprise platform rollouts across 7 schools — new country, new game.",
    metric: "10K+",
    metricLabel: "users, 85%+ adoption",
    details: [
      "Managed cross-functional stakeholders — engineering, IT, vendors, leadership — to deliver digital systems for 300+ faculty and 10,000+ users.",
      "Owned end-to-end rollout of a cloud-based LMS to 85%+ adoption, with Power BI executive dashboards bridging technical and business teams.",
    ],
    skills: ["Program management", "Stakeholder alignment", "Analytics & BI"],
  },
  {
    id: "salesforce",
    company: "Salesforce",
    role: "Account Executive",
    location: "Mumbai, India",
    period: "2022 — 23",
    line: "Full-cycle GTM for MuleSoft across Fortune 500 accounts, selling to C-level buyers.",
    metric: "120%",
    metricLabel: "quota on $8M+ pipeline",
    details: [
      "Led complex enterprise deal cycles from prospecting to close, engaging C-level and VP stakeholders on digital transformation.",
      "Accelerated growth through channel partner-led GTM and co-sell motions — including the first MuleSoft × KPMG partnership.",
    ],
    skills: ["Enterprise GTM", "Executive selling", "Partnerships"],
  },
  {
    id: "hpe",
    company: "Hewlett Packard Enterprise",
    role: "Enterprise Sales Consultant",
    location: "Bengaluru, India",
    period: "2021 — 22",
    line: "Owned a $4M portfolio end to end — strategy, solution design, pricing, negotiation.",
    metric: "135%",
    metricLabel: "of target, top regional performer",
    details: [
      "Drove adoption of HPE GreenLake and ProLiant by aligning solutions to cost-optimization and infrastructure transformation goals.",
      "Cut sales cycle time by 50% through pipeline optimization and CRM-driven forecasting; enabled 70+ channel partners.",
    ],
    skills: ["Sales strategy", "Pricing", "Forecasting", "Partner enablement"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  status: "Building" | "Prototype" | "Soon" | "Idea" | "Live";
};

export const projects: Project[] = [
  {
    title: "Coach Performance Dashboard",
    blurb:
      "Live metrics for Reframe's 60+ coach network — response times, client outcomes, and engagement — replacing manual reporting with one source of truth.",
    tags: ["Ops analytics", "Dashboards", "Reframe"],
    status: "Live",
  },
  {
    title: "Arc",
    blurb:
      "A habit tracker that connects what you do to how you feel — spot the patterns between your habits and your energy, focus, and growth over time.",
    tags: ["Consumer app", "Data viz", "Personal build"],
    status: "Building",
  },
  {
    title: "Pipeline Copilot",
    blurb:
      "An LLM wired into the CRM that auto-drafts pipeline summaries, follow-ups, and reminders — built at a private-credit startup, cut follow-up cycles by 78%.",
    tags: ["LLM", "RevOps", "Claude Code"],
    status: "Live",
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Strategy & Operations",
    body: "The machinery that makes revenue predictable — pricing, forecasting, KPIs, and operating systems that scale past founder intuition.",
    tags: ["GTM strategy", "P&L", "Pricing", "KPIs / OKRs", "Forecasting"],
  },
  {
    index: "02",
    title: "Chief of Staff",
    body: "The right hand who turns strategic intent into execution — operating cadence, board and investor prep, and ownership of the problems that fall between functions.",
    tags: ["Operating cadence", "Board & investor prep", "Decision quality", "Cross-functional"],
  },
  {
    index: "03",
    title: "AI & Product",
    body: "0→1 AI products and agentic workflows shipped to real users — prompt architecture, LLM integration, and tools that replace manual work.",
    tags: ["LLM integration", "Prompt engineering", "Claude Code", "0→1 builds"],
  },
  {
    index: "04",
    title: "Revenue & GTM",
    body: "Full-cycle go-to-market, from Fortune 500 enterprise deals to startup growth loops — pipeline, partnerships, and experiments that compound.",
    tags: ["Enterprise sales", "RevOps", "A/B testing", "Partnerships"],
  },
];

export const principles = [
  {
    title: "Bias for action",
    body: "Ship the imperfect version, learn, iterate. Momentum beats perfection.",
  },
  {
    title: "Ownership",
    body: "If it's broken and no one's fixing it, it's mine now.",
  },
  {
    title: "Honesty",
    body: "Real numbers, direct feedback, no spin — the hard truth early beats the comfortable one late.",
  },
  {
    title: "Growth",
    body: "Deliberately the least experienced person in the room. That's where learning is fastest.",
  },
];

export const credentials = [
  { label: "MS, IT Project Management", detail: "New York University · with distinction" },
  { label: "MBA, Technology Management", detail: "NMIMS, Mumbai" },
  { label: "BS, Computer Engineering", detail: "NMIMS, Mumbai" },
  { label: "Certifications", detail: "PMP · Google PM · Anthropic AI Fluency" },
];
