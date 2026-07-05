export const profile = {
  name: "Anisha Arora",
  role: "Strategy & Ops · AI-GTM",
  tagline: "AI-first operator turning messy problems into systems that grow revenue.",
  intro:
    "Strategy & Operations and AI-GTM operator. I turn ambiguity into systems that grow revenue — and treat AI as a default tool, not an afterthought.",
  heroDescription:
    "I turn messy, ambiguous problems into systems that grow revenue; treating AI as a default tool, not an afterthought. My path so far: enterprise sales floors in India, program rooms at NYU, and now the engine room of a venture-backed AI startup in the US. Bias for action. Zero fluff. Always shipping.",
  rotating: [
    "Strategy & Ops",
    "AI-Native GTM",
    "0 → 1 Builder",
    "Revenue Systems",
    "AI Product Ops",
    "Growth Experiments",
    "Messy-to-Systematic",
    "AI-First Operator",
    "Cross-Functional Execution",
    "Ship Fast, Ship Smart",
  ],
  email: "Aroraanisha1102@gmail.com",
  linkedin: "https://www.linkedin.com/in/aroraanisha1102",
  linkedinHandle: "aroraanisha1102",
  location: "Atlanta, GA",
  resumeUrl: "/Anisha_Arora_Resume.pdf",
};

export type Stop = {
  id: string;
  icon: string;
  title: string;
  company: string;
  note?: string;
  location: string;
  period: string;
  challenge: string;
  contribution: string;
  impact: string;
  coreSkills: string[];
  accent: "coral" | "amber" | "teal" | "indigo" | "berry";
  // Position on the mountain (x 0..100, y 0..100 where y=100 is the base)
  x: number;
  y: number;
};

// Order = base of mountain (oldest) -> near summit (most recent)
export const stops: Stop[] = [
  {
    id: "hpe",
    icon: "🧭",
    title: "Enterprise Sales Consultant",
    company: "Hewlett Packard Enterprise",
    location: "Bengaluru, India",
    period: "Jul 2021 – Oct 2022",
    challenge: "Win in a crowded hybrid-cloud market with slow, complex enterprise cycles.",
    contribution:
      "Owned strategy, pricing & solution design; rebuilt the pipeline and armed channel partners.",
    impact: "135% of target · sales cycle cut ~50% · top regional performer.",
    coreSkills: ["Enterprise GTM", "Pricing", "Forecasting", "Partner enablement"],
    accent: "coral",
    x: 24,
    y: 90,
  },
  {
    id: "salesforce",
    icon: "📈",
    title: "Account Executive",
    company: "Salesforce",
    location: "Mumbai, India",
    period: "Oct 2022 – Apr 2023",
    challenge: "Break MuleSoft into Fortune 500 accounts locked up by incumbents.",
    contribution: "Ran full-cycle GTM with C-suite buyers and orchestrated co-sell motions.",
    impact: "120% quota on an $8M+ pipeline · closed a first-of-its-kind KPMG partnership.",
    coreSkills: ["Full-cycle GTM", "Exec selling", "Co-sell", "Pipeline strategy"],
    accent: "amber",
    x: 72,
    y: 72,
  },
  {
    id: "nyu",
    icon: "🛠️",
    title: "Program Manager · Tech Platforms",
    company: "New York University",
    note: "New country, new game — moved to the US.",
    location: "New York, NY",
    period: "Sep 2023 – Dec 2024",
    challenge: "Ship enterprise platforms across 7 schools with tangled stakeholders & legacy tech.",
    contribution: "Led cross-functional programs, built exec dashboards, and drove adoption.",
    impact: "10,000+ users reached · 85%+ adoption on a new platform rollout.",
    coreSkills: ["Program mgmt", "Stakeholder alignment", "Analytics / BI", "Change mgmt"],
    accent: "teal",
    x: 24,
    y: 54,
  },
  {
    id: "creddnet",
    icon: "🤖",
    title: "Strategy & Operations",
    company: "CREDDnet",
    note: "Platform modernizing private credit & alternative financing",
    location: "New York, NY (Remote)",
    period: "Dec 2024 – May 2025",
    challenge: "A fragmented CRM and manual reporting process was slowing the team down.",
    contribution:
      "Rebuilt the CRM from scratch in Airtable and built an AI-powered dashboard using Claude Code to automate pipeline summaries and follow-ups. Synthesized market research to inform product and investor strategy.",
    impact: "Follow-up cycles cut from 14 days → 3 days · manual reporting eliminated.",
    coreSkills: ["AI-Assisted Ops", "CRM Architecture", "Market Research", "Investor Reporting"],
    accent: "indigo",
    x: 72,
    y: 37,
  },
  {
    id: "reframe",
    icon: "🚀",
    title: "Strategy & Operations Lead",
    company: "Reframe",
    note: "YC S21 · 5M+ downloads",
    location: "Atlanta, GA",
    period: "May 2025 – Now",
    challenge: "Scale a startup from scrappy to systematic — revenue, ops & product together.",
    contribution:
      "Built the operating system across onboarding, pricing & retention; ran rapid experiments; worked on a Chatbot (AI Coach) for personalized, proactive coaching.",
    impact: "MRR $45K → $150K+ · margins 22% → 31% · AI Coach serving 40K+ users.",
    coreSkills: ["GTM execution", "RevOps", "Experimentation", "AI product & automation"],
    accent: "berry",
    x: 34,
    y: 21,
  },
];

// The aspirational goal at the very top of the mountain (not a real role)
export const summit = {
  icon: "🚩",
  label: "Next chapter",
  title: "AI-Native Strategy & Ops",
  x: 62,
  y: 6,
};

// Bottom of the trail (where the climb begins)
export const trailBase = { x: 50, y: 99 };

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  status: "Building" | "Prototype" | "Soon" | "Idea" | "Live";
  accent: "coral" | "amber" | "teal" | "indigo" | "berry";
};

export const projects: Project[] = [
  {
    title: "GTM Copilot",
    blurb: "Turns raw CRM signals into ready-to-send account plans & outbound in one click.",
    tags: ["LLM agents", "RevOps", "Automation"],
    status: "Building",
    accent: "coral",
  },
  {
    title: "Churn Radar",
    blurb: "Spots at-risk users from behavior and recommends the next best move.",
    tags: ["ML", "Retention", "Product analytics"],
    status: "Prototype",
    accent: "teal",
  },
  {
    title: "Ops Autopilot",
    blurb:
      "Automates the boring parts of ops — onboarding, reporting, reconciliations — so humans focus on judgment calls.",
    tags: ["AI workflows", "Agents", "Ops"],
    status: "Building",
    accent: "indigo",
  },
  {
    title: "Pricing Lab",
    blurb: "A sandbox to run pricing & packaging experiments and read results fast.",
    tags: ["Experimentation", "Pricing", "Analytics"],
    status: "Soon",
    accent: "amber",
  },
  {
    title: "Deck Doctor",
    blurb: "Drop in a rough deck, get a sharper story back.",
    tags: ["LLM", "Storytelling", "Prompting"],
    status: "Idea",
    accent: "berry",
  },
];

export const toolkit = [
  {
    label: "Strategy & Ops",
    items: [
      "GTM Strategy",
      "RevOps",
      "P&L",
      "Pricing",
      "KPIs / OKRs",
      "Forecasting",
      "Experimentation Design",
    ],
  },
  {
    label: "AI & Data",
    items: [
      "LLM Workflows",
      "Agentic Automation",
      "Prompt Engineering",
      "SQL",
      "Python",
      "A/B Testing",
      "Cohort Analysis",
      "Claude Code",
    ],
  },
  {
    label: "Tools",
    items: ["Salesforce", "HubSpot", "Amplitude", "Power BI", "Notion", "Jira", "Airtable", "Cursor"],
  },
];

export const values = [
  {
    title: "Bias for Action",
    body: "I'd rather ship an imperfect version and iterate than wait for a perfect plan. Momentum beats perfection.",
    accent: "coral" as const,
  },
  {
    title: "Ownership",
    body: "If it's broken and no one's fixing it, I will. I don't wait for permission to solve a problem that's in front of me.",
    accent: "amber" as const,
  },
  {
    title: "Honesty",
    body: "Direct feedback, real numbers, no spin. I'd rather tell you the hard truth early than the comfortable one late.",
    accent: "teal" as const,
  },
  {
    title: "Growth",
    body: "I'm always the least experienced person in the room on purpose — that's where I learn fastest.",
    accent: "indigo" as const,
  },
];
