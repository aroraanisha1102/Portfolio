export const profile = {
  name: "Anisha Arora",
  role: "Business Operations Lead",
  tagline:
    "Business operations leader for scaling teams — P&L ownership, 3.3× revenue growth, and AI-powered operating systems.",
  intro:
    "Business Operations Lead at Reframe (YC S21). 5 years across startups and enterprise tech — owning P&L, scaling MRR 3.3×, launching new revenue lines, and building the systems that let a company grow without breaking.",
  email: "aroraanisha1102@gmail.com",
  linkedin: "https://www.linkedin.com/in/aroraanisha1102",
  linkedinHandle: "aroraanisha1102",
  location: "Open to relocating to NYC · Atlanta, GA",
  relocation: "Open to NYC",
  base: "Atlanta, GA",
  resumeUrl: "/Anisha_Arora_Resume.pdf",
};

export const companies = [
  "Reframe · YC S21",
  "Salesforce",
  "Hewlett Packard Enterprise",
  "New York University",
  "CREDDnet",
];

export const stats = [
  { value: "3.3×", label: "MRR growth", caption: "$45K → $150K+ in 7 months, as P&L owner" },
  { value: "33%+", label: "Profit margin", caption: "Up from 22% via pricing, retention & forecasting" },
  { value: "18→12%", label: "Refund rate", caption: "Cut in 4 months by rebuilding customer success" },
  { value: "40K+", label: "AI product users", caption: "Melody, a 0→1 Gemini coaching product" },
  { value: "60+", label: "Coaches operated", caption: "KPIs, performance management & payroll" },
  { value: "135%", label: "Of sales target", caption: "Top regional performer at HPE; 120% at Salesforce" },
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
    note: "YC S21 · 6M+ downloads",
    role: "Business Operations Lead",
    location: "Atlanta, GA",
    period: "2025 — Now",
    line: "Promoted to lead company-wide operations, partnering directly with the founder — while keeping P&L ownership of the coaching business.",
    metric: "3.3×",
    metricLabel: "MRR in 7 months",
    details: [
      "Lead company-wide operations as the founder's operating partner — promoted from Business Operations Manager in July 2026.",
      "Own P&L for the coaching business: scaled MRR from $45K to $150K+ (3.3×) in 7 months and expanded profit margins from 22% to 33%+ through pricing, retention, and forecasting.",
      "Lead customer success — set KPIs and targets, cut refund rate from 18% to 12% in 4 months, and introduced AI automation across support workflows.",
      "Launched the Reframe Store and Reframe Ring — owned GTM across Shopify and brand partnerships to open a new e-commerce revenue line, plus a UGC creator program to drive conversion.",
      "Launched Melody, a 0→1 AI coaching product (Gemini) serving 40K+ users, and built AI-powered Amplitude dashboards that give leadership real-time insight.",
      "Run operations for 60+ coaches (KPIs, performance, payroll), full-cycle hiring across engineering, product, and marketing, and PR & branding agency relationships.",
    ],
    skills: ["P&L ownership", "Customer success", "New revenue lines", "AI automation", "Hiring"],
  },
  {
    id: "creddnet",
    company: "CREDDnet",
    note: "Private credit platform",
    role: "Product Operations Manager",
    location: "New York, NY",
    period: "2025",
    line: "Rebuilt CRM infrastructure from scratch and wired an LLM into it to automate pipeline reporting.",
    metric: "78%",
    metricLabel: "faster follow-up cycles",
    details: [
      "Redesigned the CRM in Airtable and integrated an LLM to auto-generate pipeline summaries, follow-ups, and reminders — cutting partner follow-up cycles from 14 days to 3.",
      "Turned market research and client engagement data into product priorities that shaped investor updates and strategic planning.",
    ],
    skills: ["RevOps", "CRM architecture", "AI-assisted ops"],
  },
  {
    id: "nyu",
    company: "New York University",
    role: "Program Manager · Tech Platforms",
    location: "New York, NY",
    period: "2024",
    line: "Led enterprise technology programs across 7 schools for 300+ faculty and 10,000+ users.",
    metric: "85%+",
    metricLabel: "platform adoption",
    details: [
      "Aligned engineering, IT, vendors, and senior leadership to deliver digital platforms across 7 NYU schools.",
      "Owned the end-to-end LMS rollout to 85%+ adoption, building the full enablement program — website, user guides, and training sessions.",
    ],
    skills: ["Program management", "Change management", "Stakeholder alignment"],
  },
  {
    id: "salesforce",
    company: "Salesforce",
    role: "Account Executive · MuleSoft",
    location: "Mumbai, India",
    period: "2022 — 23",
    line: "Full-cycle enterprise sales across Fortune 500 accounts, selling to C-level buyers.",
    metric: "120%",
    metricLabel: "of quota, $8M+ pipeline",
    details: [
      "Achieved 120% of quota managing an $8M+ enterprise pipeline across Fortune 500 accounts.",
      "Drove complex deal cycles through C-level engagement and co-sell partnerships — including launching the first MuleSoft × KPMG partnership.",
    ],
    skills: ["Enterprise GTM", "Executive selling", "Partnerships"],
  },
  {
    id: "hpe",
    company: "Hewlett Packard Enterprise",
    role: "Enterprise Sales Consultant",
    location: "Bengaluru, India",
    period: "2021 — 22",
    line: "Owned a $4M portfolio end to end — strategy, solution design, pricing, and negotiation.",
    metric: "135%",
    metricLabel: "of FY22 target",
    details: [
      "Managed a $4M SMB portfolio across hybrid cloud and infrastructure; achieved 135% of FY22 targets and top regional performance recognition.",
      "Cut sales cycle time by 50% through pipeline optimization and CRM forecasting, and enabled 70+ channel partners.",
    ],
    skills: ["Sales strategy", "Pricing", "Forecasting", "Partner enablement"],
  },
];

export const process = [
  {
    title: "Diagnose",
    body: "Start in the data and the front line — where is revenue leaking, what's breaking, what's manual that shouldn't be.",
  },
  {
    title: "Define the metrics",
    body: "Set the KPIs and targets that make the problem measurable, so every team knows what winning looks like.",
  },
  {
    title: "Build the system",
    body: "Pricing, processes, dashboards, and owners — designed to run without me in every meeting.",
  },
  {
    title: "Automate with AI",
    body: "Replace repetitive work with AI and tooling so the team spends time on judgment, not busywork.",
  },
  {
    title: "Run the cadence",
    body: "Weekly reviews, forecasting, and clear reporting to leadership — so decisions get made on real numbers.",
  },
  {
    title: "Scale & hand off",
    body: "Hire, document, and hand over a working machine — then move to the next highest-leverage problem.",
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  status: "Building" | "Prototype" | "Soon" | "Idea" | "Live";
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Melody",
    blurb:
      "A 0→1 AI coaching product on Gemini serving 40K+ Reframe users — led cross-functional execution from prototype to launch.",
    tags: ["AI product", "Gemini", "Reframe"],
    status: "Live",
  },
  {
    title: "Coach Performance Dashboard",
    blurb:
      "AI-powered Amplitude dashboards for Reframe's 60+ coach network — automated reporting that gives leadership real-time insight.",
    tags: ["Ops analytics", "Amplitude", "Reframe"],
    status: "Live",
  },
  {
    title: "Pipeline Copilot",
    blurb:
      "An LLM wired into the CRM that drafts pipeline summaries, follow-ups, and reminders — cut follow-up cycles by 78%.",
    tags: ["LLM", "RevOps", "Claude Code"],
    status: "Live",
  },
  {
    title: "Arc",
    blurb:
      "A habit tracker that connects what you do to how you feel — a weekend build to spot patterns between habits and energy.",
    tags: ["Consumer app", "Data viz", "Personal build"],
    status: "Live",
    href: "https://grow-with-arc.vercel.app/",
  },
];

export const capabilities = [
  {
    title: "P&L & Revenue Growth",
    body: "Own the numbers end to end — pricing, retention, forecasting, and margin.",
    tags: ["P&L management", "Pricing", "Forecasting", "Unit economics"],
  },
  {
    title: "Go-to-Market & New Revenue",
    body: "Launch new lines and channels, from e-commerce stores to enterprise partnerships.",
    tags: ["GTM strategy", "Shopify", "Partnerships", "Creator programs"],
  },
  {
    title: "Customer Success & Retention",
    body: "Set the KPIs, coach the team, and fix the root causes behind churn and refunds.",
    tags: ["CS leadership", "KPI design", "Refund reduction", "Retention"],
  },
  {
    title: "People & Team Operations",
    body: "Hire, onboard, and run performance for distributed teams and contractor networks.",
    tags: ["Full-cycle hiring", "Performance mgmt", "Payroll", "Vendors"],
  },
  {
    title: "AI & Automation",
    body: "Ship AI products and automate the busywork so the team scales without headcount.",
    tags: ["Gemini", "Claude Code", "Prompt engineering", "Workflow automation"],
  },
  {
    title: "Analytics & Reporting",
    body: "Build the dashboards and reviews leadership actually uses to make decisions.",
    tags: ["SQL", "Python", "Amplitude", "Power BI", "A/B testing"],
  },
];

export const faqs = [
  {
    q: "What roles are you looking for?",
    a: "Business Operations, Strategy & Operations, and BizOps roles on scaling teams — from high-growth startups to large tech companies — wherever operating rigor is what turns growth into durable results.",
  },
  {
    q: "What would you own in the first 90 days?",
    a: "I'd learn the business through its numbers and its front line, pick the one or two problems with the biggest revenue or efficiency impact, and ship measurable wins — while setting up the KPIs and cadence the team can keep running.",
  },
  {
    q: "Why does your sales background matter for an ops role?",
    a: "Three years carrying enterprise quota at Salesforce and HPE taught me how revenue is actually made — pipeline, pricing, negotiation, and partner motions. It's why I build ops systems that tie back to revenue, not just process.",
  },
  {
    q: "How do you use AI in operations?",
    a: "As leverage, not a buzzword: I've shipped a Gemini coaching product to 40K+ users, automated customer-success and reporting workflows, and wired LLMs into CRMs. I build with Claude Code, SQL, and Python myself.",
  },
  {
    q: "What's your background?",
    a: "Computer engineering and an MBA in Technology Management from NMIMS, an MS in IT Project Management from NYU (with distinction), and PMP and Google Project Management certifications.",
  },
];

export const credentials = [
  { label: "MS, IT Project Management", detail: "New York University · with distinction" },
  { label: "MBA, Technology Management", detail: "NMIMS, Mumbai" },
  { label: "BS, Computer Engineering", detail: "NMIMS, Mumbai" },
  { label: "Certifications", detail: "PMP · Google Project Management" },
];
