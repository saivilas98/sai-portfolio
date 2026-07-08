export const profile = {
  name: "Sai Vilas Gurram",
  shortName: "Sai",
  role: "Product Manager",
  location: "Hyderabad · Bangalore · Gurgaon / Remote",
  status: "Open to PM Roles",
  tagline: "I find myself drawn to small problems.",
  email: "saivilas4198@gmail.com",
  linkedin: "https://linkedin.com/in/saivilas98",
  instagram: "https://instagram.com/saivilas98",
  resumeUrl:
    "https://drive.google.com/file/d/1vKCkQwqbsCUgAeoc3tGdfXmC7jo75ywl/view?usp=sharing",
};

export type HeroMetric = { value: string; label: string };

export const heroMetrics: HeroMetric[] = [
  { value: "3", label: "consumer apps shipped" },
  { value: "50+", label: "customer conversations" },
  { value: "15+", label: "PRDs shipped at Ola" },
  { value: "6", label: "products planned" },
];

export const hero = {
  paragraphs: [
    "simple enough to solve, easy enough to ignore, quietly important if you actually do something about them.",
    "Weekdays: Data Analytics Manager at Accordion Partners, helping clients make sense of their data, one dashboard at a time.",
    "Weekends: shipping consumer apps, because sitting on ideas feels worse than building them.",
    "A while back I did a PM internship at Ola Electric, benchmarking competitors, sitting with real customers, understanding where things quietly broke down. That process felt completely natural. That told me something.",
  ],
};

export type JourneyEntry = {
  emoji: string;
  title: string;
  detail: string;
};

export const journey: { context: string; foundation: JourneyEntry[]; pivot: JourneyEntry[] } = {
  context:
    "Not a straight line to Product Management. But every turn taught me something, and all of them point to the same place.",
  foundation: [
    {
      emoji: "🎓",
      title: "IIT Indore · Mechanical Engineering",
      detail: "Built a strong foundation. Just didn't know what I'd build on top of it yet.",
    },
    {
      emoji: "💼",
      title: "Capgemini · Tech Consulting",
      detail: "First real job. Learned how corporates work, and how slowly they move.",
    },
    {
      emoji: "💼",
      title: "Deloitte · Tech Consulting",
      detail: "Bigger clients, bigger problems. Still felt like something was missing.",
    },
    {
      emoji: "🎓",
      title: "IIM Calcutta · MBA",
      detail: "Took a deliberate step back. Wanted to find work that actually felt like mine.",
    },
  ],
  pivot: [
    {
      emoji: "🚀",
      title: "Ola Electric · PM Intern",
      detail: "Felt like this was the answer. The reason I came to IIMC in the first place.",
    },
    {
      emoji: "📊",
      title: "Accordion Partners · Data & Analytics Manager",
      detail: "Where I landed after campus placements. Skilling up, learning, growing, and staying ready.",
    },
    {
      emoji: "🎯",
      title: "Next Stop · Product Manager",
      detail: "The destination I've been working toward. Time to begin the real journey.",
    },
  ],
};

export type ProjectDetail = {
  eyebrow: string;
  paragraphs: string[];
  cut?: string;
  kept?: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  toggleLabel: string;
  detail: ProjectDetail;
  images: { src: string; alt: string }[];
  url: string;
};

export const projects: Project[] = [
  {
    id: "runforge",
    name: "Run Forge",
    tagline: "A daily activity tracker for every kind of movement, not just running.",
    toggleLabel: "The idea · What I cut · What I learned",
    detail: {
      eyebrow: "The idea",
      paragraphs: [
        "Started as a running app. But the more I thought about it, the more I realised the real problem wasn't about running: it was about staying active, consistently, whatever form that takes. Gym on Monday, run on Wednesday, dance on Friday: it all counts.",
        "So Run Forge became a daily activity tracker. One streak, one calendar, one place.",
      ],
      cut: "Sport-specific stats · Social features · Complex dashboards",
      kept: "Daily activity logging · Weekly planning · Streak · Calendar",
    },
    images: [
      { src: "/projects/runforge/1.png", alt: "Run Forge today's plan and streak dashboard" },
      { src: "/projects/runforge/2.png", alt: "Run Forge monthly progress calendar" },
      { src: "/projects/runforge/3.png", alt: "Run Forge weekly plan settings" },
    ],
    url: "https://forge-run.vercel.app/",
  },
  {
    id: "hydroforge",
    name: "Hydro Forge",
    tagline: "Track water. No lectures. No guilt.",
    toggleLabel: "The problem · Features · What I learned",
    detail: {
      eyebrow: "The problem",
      paragraphs: [
        "Hydration apps nag too much or do too little. Most people quit in a week.",
        "The question I kept returning to: how do you show someone a bad week without making them feel bad about it? The app just doesn't make a thing of it.",
      ],
      kept: "Water tracking · Dashboard · Calendar · Day-wise history",
    },
    images: [
      { src: "/projects/hydroforge/1.png", alt: "Hydro Forge daily intake progress ring" },
      { src: "/projects/hydroforge/2.png", alt: "Hydro Forge today stats and monthly calendar" },
      { src: "/projects/hydroforge/3.png", alt: "Hydro Forge goal settings" },
    ],
    url: "https://forge-hydro.vercel.app/",
  },
  {
    id: "moneyforge",
    name: "Money Forge",
    tagline: "One question: how much do I actually have left?",
    toggleLabel: "The problem · Features · What I learned",
    detail: {
      eyebrow: "The problem",
      paragraphs: [
        "Finance apps show charts. Most people just want their remaining balance, clearly and quickly. That's weirdly hard to do with existing tools.",
        "Said no to: Categories · Investment tracking · Bill splitting, all reasonable, all for a different product.",
      ],
      kept: "Expense logging (UPI / Card / Cash) · Salary & EMI tracking · Remaining balance always visible · Calendar history",
    },
    images: [
      { src: "/projects/moneyforge/1.png", alt: "Money Forge EMI and income settings" },
      { src: "/projects/moneyforge/2.png", alt: "Money Forge available money dashboard" },
      { src: "/projects/moneyforge/3.png", alt: "Money Forge spending summary and calendar" },
    ],
    url: "https://forge-money-tau.vercel.app/",
  },
];

export const projectLearnings: Record<string, string> = {
  runforge: "The hardest part wasn't building the tracker. It was resisting the urge to make it sport-specific.",
  hydroforge: "The screen after forgetting to drink for six hours matters more than any other screen in the app.",
  moneyforge: "Saying no to good ideas is harder than it sounds.",
};

export const caseStudy = {
  eyebrow: "Ola Electric · Case Study",
  meta: "Vehicle Software Product Team · PM Internship · Summer 2024",
  hook: "Came in knowing nothing about EVs. Left knowing I wanted to do this full time.",
  context: {
    heading: "The context",
    body: "Joined the Vehicle Software team, responsible for everything a rider sees on the scooter's HMI, MoveOS features, UI/UX, OTA flows, and upcoming features for Ola Bike and Ola Auto.",
  },
  workedOn: [
    "HMI themes and Indian display mood",
    "Cruise control UX and state communication",
    "OTA update screen animations",
    "ABS activation UX",
    "Traction control & eco mode nudges PRDs",
    "Charger fault handling",
    "Competitive benchmarking across feature areas",
    "Customer research: Ola owners, Care+ calls, Auto driver interviews",
  ],
  enjoyed: {
    heading: "The part I enjoyed most",
    body: "Calling real Ola Auto drivers. Sitting with customers. Finding the gap between what the product assumed and what users actually experienced.",
    punch: "That gap is where the real work lives.",
  },
  byTheEnd: [
    "15+ PRDs across features for MoveOS 4 & 5, Ola Bike, Ola Auto",
    "Cross-functional work with engineering, design, and business",
    "50+ customer calls for Ola Care+ research",
  ],
  moment: {
    heading: "A moment that stuck",
    quote:
      "An auto driver told me he never used reverse mode: he thought it would damage the motor. The feature existed. The trust didn't. That one conversation changed how I think about shipping.",
  },
};

export type ThinkingCategory = {
  emoji: string;
  title: string;
  description: string;
};

export const productThinking: { intro: string; categories: ThinkingCategory[] } = {
  intro: "Notes from using products and occasionally being wrong about them. Growing over time.",
  categories: [
    {
      emoji: "📡",
      title: "Product Teardowns",
      description: "Picking apart products I use: what's working, what feels off.",
    },
    {
      emoji: "🔍",
      title: "Feature Critiques",
      description: "Features that caught my attention and made me wonder about the decision behind them.",
    },
    {
      emoji: "👁",
      title: "UX Observations",
      description: "Small things noticed while using apps day to day.",
    },
    {
      emoji: "📐",
      title: "Strategy Notes",
      description: "How I think about tradeoffs and prioritisation.",
    },
  ],
};

export type BuildLogEntry = {
  label: string;
  status: "shipped" | "in-progress" | "coming";
};

export const buildLog: { entries: BuildLogEntry[]; shipped: number; total: number } = {
  entries: [
    { label: "Run Forge", status: "shipped" },
    { label: "Hydro Forge", status: "shipped" },
    { label: "Money Forge", status: "shipped" },
    { label: "Product #4", status: "in-progress" },
    { label: "Product #5", status: "coming" },
    { label: "Product #6", status: "coming" },
  ],
  shipped: 3,
  total: 6,
};

export type Belief = {
  statement: string;
  support: string;
};

export const beliefs: Belief[] = [
  {
    statement: "Ship it, then learn.",
    support: "A rough build in a week beats a month of thinking.",
  },
  {
    statement: "Questions > answers.",
    support: "I'd rather ask something obvious and be wrong than stay quietly confident.",
  },
  {
    statement: "Quiet problems matter.",
    support: "No complaint doesn't mean no friction.",
  },
  {
    statement: "Features aren't the point.",
    support: "Something either fits into someone's life or it doesn't.",
  },
  {
    statement: "Good design disappears.",
    support: "When it's working, you stop noticing it.",
  },
  {
    statement: "Toastmasters taught me to listen.",
    support: "Turns out that's more useful than speaking.",
  },
];

export const resume = {
  updated: "Updated June 2026",
  experience: [
    "🚀 PM Intern · Ola Electric",
    "📊 Data & Analytics Manager · Accordion Partners",
    "💼 Tech Consultant · Deloitte · Capgemini",
  ],
  education: ["🎓 IIM Calcutta · MBA", "🎓 IIT Indore · B.Tech, Mechanical Engineering"],
};

export const contact = {
  eyebrow: "Let's Talk",
  lines: [
    "Looking for a PM role. If you're building something interesting, I'd like to hear about it.",
    "And if you just want to talk about a product that frustrates you, that's fine too.",
  ],
};

export const footer = "Sai Vilas · 2026 · Still building.";

export const nav = [
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Case Study", href: "#case-study" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Contact", href: "#contact" },
];
