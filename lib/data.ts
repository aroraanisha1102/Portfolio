export const profile = {
  name: "Anisha Arora",
  role: "Strategy & Ops · AI GTM",
  tagline: "AI-first operator who turns messy problems into systems that grow revenue.",
  intro:
    "Strategy & Operations and AI-GTM operator. I go from zero to system fast — building the revenue engine, running the experiments, and shipping AI into the workflow.",
  rotating: ["Strategy & Ops", "AI GTM", "AI-first operator", "0 → 1 builder"],
  email: "Aroraanisha1102@gmail.com",
  linkedin: "https://www.linkedin.com/in/aroraanisha1102",
  linkedinHandle: "aroraanisha1102",
  location: "Atlanta, GA",
};

export type Stop = {
  id: string;
  step: number;
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
  x: number; // 0..100
  y: number; // 0..1000
};

// The road runs top -> bottom, gently winding left/right.
export const stops: Stop[] = [
  {
    id: "hpe",
    step: 1,
    title: "Enterprise Sales Consultant",
    company: "Hewlett Packard Enterprise",
    location: "Bengaluru, India",
    period: "2021 – 2022",
    challenge: "Win in a crowded hybrid-cloud market with slow, complex enterprise cycles.",
    contribution:
      "Owned strategy, pricing & solution design; rebuilt the pipeline and armed channel partners.",
    impact: "135% of target · sales cycle cut ~50% · top regional performer.",
    coreSkills: ["Enterprise GTM", "Pricing", "Forecasting", "Partner enablement"],
    accent: "coral",
    x: 26,
    y: 128,
  },
  {
    id: "salesforce",
    step: 2,
    title: "Account Executive",
    company: "Salesforce",
    location: "Mumbai, India",
    period: "2022 – 2023",
    challenge: "Break MuleSoft into Fortune 500 accounts locked up by incumbents.",
    contribution: "Ran full-cycle GTM with C-suite buyers and orchestrated co-sell motions.",
    impact: "120% quota on an $8M+ pipeline · closed a first-of-its-kind KPMG partnership.",
    coreSkills: ["Full-cycle GTM", "Exec selling", "Co-sell", "Pipeline strategy"],
    accent: "amber",
    x: 72,
    y: 300,
  },
  {
    id: "nyu",
    step: 3,
    title: "Program Manager · Tech Platforms",
    company: "New York University",
    note: "New country, new game — moved to the US.",
    location: "New York, NY",
    period: "2023 – 2024",
    challenge: "Ship enterprise platforms across 7 schools with tangled stakeholders & legacy tech.",
    contribution: "Led cross-functional programs, built exec dashboards, and drove adoption.",
    impact: "10,000+ users reached · 85%+ adoption on a new platform rollout.",
    coreSkills: ["Program mgmt", "Stakeholder alignment", "Analytics / BI", "Change mgmt"],
    accent: "teal",
    x: 26,
    y: 476,
  },
  {
    id: "foundersquare",
    step: 4,
    title: "Partnerships Manager",
    company: "Founder Square",
    location: "New York, NY",
    period: "2024 – 2025",
    challenge: "Turn a scattered founder network into an engaged, high-signal community.",
    contribution: "Built partnerships, ran events end-to-end, and stood up the CRM & ops.",
    impact: "10+ events (150–500 each) · 300+ network · 70+ founders onboarded.",
    coreSkills: ["Partnerships", "Community GTM", "Ops systems", "CRM"],
    accent: "indigo",
    x: 72,
    y: 650,
  },
  {
    id: "reframe",
    step: 5,
    title: "Strategy & Operations Lead",
    company: "Reframe",
    note: "YC S21 · 5M+ downloads",
    location: "Atlanta, GA",
    period: "2025 – Now",
    challenge: "Scale a startup from scrappy to systematic — revenue, ops & product together.",
    contribution:
      "Built the operating system across onboarding, pricing & retention; ran rapid experiments; worked on a Chatbot (AI Coach) for personalized, proactive coaching.",
    impact: "MRR $45K → $150K+ · margins 22% → 31% · AI Coach serving 40K+ users.",
    coreSkills: ["GTM execution", "RevOps", "Experimentation", "AI product & automation"],
    accent: "berry",
    x: 44,
    y: 828,
  },
];

// Road geometry anchors (same 0..100 x, 0..1000 y space as stops)
export const roadStart = { x: 50, y: 18 };
export const roadFinish = { x: 52, y: 958 };

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
    blurb: "Automates the boring ops — onboarding, reporting, reconciliations.",
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
    items: ["GTM strategy", "RevOps", "P&L", "Pricing", "KPIs / OKRs", "Forecasting"],
  },
  {
    label: "AI & Data",
    items: [
      "LLM workflows",
      "Agentic automation",
      "Prompt engineering",
      "SQL",
      "Python",
      "A/B testing",
      "Cohort analysis",
    ],
  },
  {
    label: "Tools",
    items: ["Salesforce", "HubSpot", "Amplitude", "Power BI", "Notion", "Jira"],
  },
];
