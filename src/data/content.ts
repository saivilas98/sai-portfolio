export const profile = {
  name: "Sai Vilas Gurram",
  role: "Product Manager",
  location: "Hyderabad · Bangalore · Gurgaon / Remote",
  status: "Open to PM Roles",
  tagline: "I find myself drawn to small problems.",
  email: "saivilas4198@gmail.com",
  linkedin: "https://linkedin.com/in/saivilas98",
  instagram: "https://instagram.com/saivilas98",
  resumeUrl:
    "https://drive.google.com/file/d/1GoY-9TB3OpKe9NmCbeIgI5zFSML3xnBb/view?usp=sharing",
};

export type HeroMetric = { value: string; label: string };

export const heroMetrics: HeroMetric[] = [
  { value: "10+", label: "products built" },
  { value: "50+", label: "customer conversations" },
  { value: "5+", label: "PRDs shipped at Ola" },
];

export type HeroTimelineEntry = { label: string; text: string };

export const hero = {
  lead: "simple enough to solve, easy enough to ignore, quietly important if you actually do something about them.",
  timeline: [
    {
      label: "Weekdays",
      text: "Data Analytics Manager at Accordion Partners, one dashboard at a time.",
    },
    {
      label: "Weekends",
      text: "Shipping consumer apps. Sitting on ideas feels worse than building them.",
    },
    {
      label: "Previously",
      text: "PM internship at Ola Electric: benchmarking competitors, talking to real customers, watching where things quietly broke. Felt completely natural.",
    },
  ] as HeroTimelineEntry[],
};

export type HeroEducationEntry = { institution: string; detail: string };

export const heroEducation: HeroEducationEntry[] = [
  { institution: "IIT Indore", detail: "B.Tech, Mechanical Engineering | 2015 – 2019" },
  { institution: "IIM Calcutta", detail: "MBA | 2023 – 2025" },
];

export type JourneyIcon = "graduation-cap" | "briefcase" | "rocket" | "bar-chart-3" | "target";

export type JourneyEntry = {
  icon: JourneyIcon;
  title: string;
  detail: string;
};

export const journey: { context: string; foundation: JourneyEntry[]; pivot: JourneyEntry[] } = {
  context:
    "Not a straight line to Product Management. But every turn taught me something, and all of them point to the same place.",
  foundation: [
    {
      icon: "graduation-cap",
      title: "IIT Indore · Mechanical Engineering",
      detail: "Built a strong foundation. Just didn't know what I'd build on top of it yet.",
    },
    {
      icon: "briefcase",
      title: "Capgemini · Tech Consulting",
      detail: "First real job. Learned how corporates work, and how slowly they move.",
    },
    {
      icon: "briefcase",
      title: "Deloitte · Tech Consulting",
      detail: "Bigger clients, bigger problems. Still felt like something was missing.",
    },
    {
      icon: "graduation-cap",
      title: "IIM Calcutta · MBA",
      detail: "Took a deliberate step back. Wanted to find work that actually felt like mine.",
    },
  ],
  pivot: [
    {
      icon: "rocket",
      title: "Ola Electric · PM Intern",
      detail: "Felt like this was the answer. The reason I came to IIMC in the first place.",
    },
    {
      icon: "bar-chart-3",
      title: "Accordion Partners · Data & Analytics Manager",
      detail: "Where I landed after campus placements. Skilling up, learning, growing, and staying ready.",
    },
    {
      icon: "target",
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

export type ProjectPMNotes = {
  persona: string;
  problem: string;
  approach: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  toggleLabel: string;
  why: string;
  category: string;
  status: "Live" | "Prototype" | "Experiment";
  detail: ProjectDetail;
  pm: ProjectPMNotes;
  images: { src: string; alt: string }[];
  url: string;
};

export const projects: Project[] = [
  {
    id: "runforge",
    name: "Run Forge",
    tagline: "A daily activity tracker for every kind of movement, not just running.",
    toggleLabel: "The idea · What I cut · What I learned",
    why: "Built to track movement without making running the only thing that counts.",
    category: "Consumer Product",
    status: "Live",
    detail: {
      eyebrow: "The idea",
      paragraphs: [
        "Started as a running app. But the more I thought about it, the more I realised the real problem wasn't about running: it was about staying active, consistently, whatever form that takes. Gym on Monday, run on Wednesday, dance on Friday: it all counts.",
        "So Run Forge became a daily activity tracker. One streak, one calendar, one place.",
      ],
      cut: "Sport-specific stats · Social features · Complex dashboards",
      kept: "Daily activity logging · Weekly planning · Streak · Calendar",
    },
    pm: {
      persona: "Someone who moves in more than one way during a week, gym one day, a run the next, dance on the weekend, and doesn't identify as 'a runner' or 'a gym person' strongly enough for a sport-specific app to feel like it's for them.",
      problem: "Fitness trackers assume you picked a sport. If your week doesn't fit one category, you either force your activity into the wrong app or juggle two or three trackers to cover it all, and most people just give up and track nothing.",
      approach: "Prioritized breadth over depth: one activity log that treats every kind of movement equally, instead of sport-specific stats for any single one. Social features and detailed dashboards were reasonable asks but cut early, they'd compete for attention with the one loop that actually builds the habit: log it, see the streak, come back tomorrow.",
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
    why: "Built to rethink hydration tracking without the guilt trip.",
    category: "Consumer Product",
    status: "Live",
    detail: {
      eyebrow: "The problem",
      paragraphs: [
        "Hydration apps nag too much or do too little. Most people quit in a week.",
        "The question I kept returning to: how do you show someone a bad week without making them feel bad about it? The app just doesn't make a thing of it.",
      ],
      kept: "Water tracking · Dashboard · Calendar · Day-wise history",
    },
    pm: {
      persona: "People who've already tried a hydration app, maybe more than one, and deleted it within a week because the constant push notifications felt like nagging rather than help.",
      problem: "Most hydration trackers optimize for reminders: buzz every hour, guilt you into logging. That treats the symptom (forgetting to drink water) without addressing why people quit (being reminded of failure feels worse than just not tracking).",
      approach: "Prioritized tone over feature count. The core loop stayed deliberately small, log, see today's ring, glance at the week, and the one design rule that mattered most was: a bad day should be visible, never shameful. No streak-loss guilt, no red alarm states. Just quiet, honest numbers.",
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
    why: "Built to answer one question clearly instead of showing charts nobody asked for.",
    category: "Consumer Product",
    status: "Live",
    detail: {
      eyebrow: "The problem",
      paragraphs: [
        "Finance apps show charts. Most people just want their remaining balance, clearly and quickly. That's weirdly hard to do with existing tools.",
        "Said no to: Categories · Investment tracking · Bill splitting, all reasonable, all for a different product.",
      ],
      kept: "Expense logging (UPI / Card / Cash) · Salary & EMI tracking · Remaining balance always visible · Calendar history",
    },
    pm: {
      persona: "Someone juggling a salary, a couple of EMIs, and daily UPI spending, who opens their banking app mid-month just to answer one question and has to dig through statements to get there.",
      problem: "Personal finance apps are built for analysis: category breakdowns, spending charts, investment tracking. But the question most people actually ask day to day is much simpler: how much do I actually have left, right now, after everything committed.",
      approach: "Scoped ruthlessly around a single hero number, remaining balance, always visible, always up to date. Categories, investment tracking, and bill-splitting all made the initial wishlist and all got cut, not because they're bad ideas, but because none of them serve the one job the app needed to do well before anything else.",
    },
    images: [
      { src: "/projects/moneyforge/1.png", alt: "Money Forge EMI and income settings" },
      { src: "/projects/moneyforge/2.png", alt: "Money Forge available money dashboard" },
      { src: "/projects/moneyforge/3.png", alt: "Money Forge spending summary and calendar" },
    ],
    url: "https://forge-money-tau.vercel.app/",
  },
  {
    id: "forgetodo",
    name: "Forge Todo",
    tagline: "A daily execution system built to help people finish what actually matters.",
    toggleLabel: "The idea · What I cut · What I learned",
    why: "Built to simplify daily execution instead of shipping another feature-heavy planner.",
    category: "Consumer Product",
    status: "Live",
    detail: {
      eyebrow: "The idea",
      paragraphs: [
        "Todo apps aren't hard to use: they're hard to stick with. Most people begin with good intentions, create long lists of tasks, and gradually stop opening the app because it becomes a reminder of everything they haven't completed. The real challenge isn't organizing tasks: it's deciding what truly deserves attention today.",
        "Forge Todo was designed as an execution-first planner, not another feature-heavy task manager. Every week starts with intentional planning, while every day is deliberately limited to just three meaningful priorities. When unexpected work appears, users can seamlessly replace a planned task and move it to another day instead of feeling like they've failed.",
      ],
      kept: "Weekly planning · Daily 3-priority limit · Flexible task rescheduling",
    },
    pm: {
      persona: "People who start Monday with a long, hopeful todo list, and by Wednesday have stopped opening the app because it's turned into a running record of everything they haven't done.",
      problem: "Most todo apps optimize for capture: add anything, organize it, tag it, sort it. But an unlimited list doesn't help anyone finish things, it just moves the real problem, deciding what deserves today's attention, further out of sight.",
      approach: "Constrained the daily view to exactly three priorities instead of an open-ended list, forcing the prioritization decision to happen upfront during weekly planning rather than being avoided every day. Rescheduling a task was deliberately designed as a normal, first-class action, not a failure state, so one missed day doesn't quietly break the whole system.",
    },
    images: [
      { src: "/projects/forgetodo/1.png", alt: "Forge Todo weekly planning view" },
      { src: "/projects/forgetodo/2.png", alt: "Forge Todo daily three-priority view" },
      { src: "/projects/forgetodo/3.png", alt: "Forge Todo monthly consistency calendar" },
    ],
    url: "https://todo-app-one-iota-15.vercel.app",
  },
];

export const projectLearnings: Record<string, string> = {
  runforge: "The hardest part wasn't building the tracker. It was resisting the urge to make it sport-specific.",
  hydroforge: "The screen after forgetting to drink for six hours matters more than any other screen in the app.",
  moneyforge: "Saying no to good ideas is harder than it sounds.",
  forgetodo: "This keeps planning flexible without sacrificing consistency.",
};

export const forgeSeries = {
  eyebrow: "The Forge Series",
  statement:
    "Same product philosophy, shipped four different ways: track the one number that matters, hide everything else. Running, hydration, money, and todos each got the same quiet treatment.",
};

export type ProjectStatus = "Live" | "Prototype" | "Experiment";

export type FeaturedExhibit = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: ProjectStatus;
  why: string;
  tech: string[];
  paragraphs: string[];
  images: { src: string; alt: string }[];
  /** "window" (default) for desktop apps, "phone" for mobile-first ones. */
  frame?: "window" | "phone";
  liveUrl?: string;
  githubUrl?: string;
};

export const featuredExhibits: FeaturedExhibit[] = [
  {
    id: "fragments",
    name: "Fragments",
    tagline: "A psychological puzzle experience told through reconstructed memories.",
    category: "Interactive Experience",
    status: "Live",
    why: "Built to see if a browser tab could hold a story, not just a tool.",
    tech: ["Vanilla JS", "Web Audio API", "CSS"],
    paragraphs: [
      "Fragments is a first-person, point-and-click memory puzzle: each chapter rebuilds a single room from a subject's past, and the player pieces together what happened there, one object, one code, one drawer at a time.",
      "No frameworks, no build step, no external assets. Just a design bible, a save system, an achievement layer, and a lot of care over what a single room can make someone feel.",
    ],
    images: [
      { src: "/projects/fragments/1-title.png", alt: "Fragments title screen" },
      { src: "/projects/fragments/2-room.png", alt: "Fragments: a first-person memory room with an inventory HUD" },
    ],
    liveUrl: "https://sai-escape.vercel.app",
    githubUrl: "https://github.com/saivilas98/fragments-game",
  },
  {
    id: "shadow-protocol",
    name: "Shadow Protocol",
    tagline: "A real-time multiplayer social-deduction game, built from scratch.",
    category: "Game",
    status: "Prototype",
    why: "Built to see if I could ship a real-time multiplayer game from scratch.",
    tech: ["Phaser 3", "Node.js", "Express", "Socket.IO"],
    paragraphs: [
      "Crewmates run tasks across an eight-room station while a Shadow sabotages systems and hunts in the dark: server-authoritative movement, a fog-of-war vision system, meetings, voting, and bots to fill empty seats when friends aren't around.",
      "The interesting part wasn't the game loop, it was the plumbing underneath it: room management, host migration, and a state machine that keeps everyone's screen honest in real time.",
    ],
    images: [
      { src: "/projects/shadow-protocol/1-title.png", alt: "Shadow Protocol title screen" },
      { src: "/projects/shadow-protocol/2-gameplay.png", alt: "Shadow Protocol gameplay with fog-of-war vision system" },
    ],
    githubUrl: "https://github.com/saivilas98/shadow-protocol",
  },
  {
    id: "number-hunt",
    name: "Number Hunt",
    tagline: "A minimalist deduction puzzle: guess the secret number, read the pips, narrow it down.",
    category: "Game",
    status: "Live",
    why: "Built to see how far a Mastermind-style puzzle could go with zero frameworks.",
    tech: ["Vanilla JS", "Web Audio API", "CSS custom properties"],
    paragraphs: [
      "Each round hides a secret number with no repeated digits. Every guess only tells you two things: how many digits are right, and how many are in the right place. The deduction is entirely on you.",
      "One HTML file, no build step, but shipped like a real product: keyboard-first play, auto-save mid-game, Wordle-style share text, sound synthesized with zero audio files, and full light/dark/system theming.",
    ],
    images: [
      { src: "/projects/number-hunt/1-menu.png", alt: "Number Hunt difficulty select screen" },
      { src: "/projects/number-hunt/2-gameplay.png", alt: "Number Hunt gameplay with guess history and feedback pips" },
    ],
    frame: "phone",
    liveUrl: "https://number-hunt-opal.vercel.app",
    githubUrl: "https://github.com/saivilas98/number-hunt",
  },
  {
    id: "shiba",
    name: "Shiba Desktop Pet",
    tagline: "An ambient companion that lives on your desktop, aware of its windows.",
    category: "Experimentation",
    status: "Prototype",
    why: "Built to experiment with an ambient desktop companion.",
    tech: ["Tauri", "React", "Pixi.js", "Rust"],
    paragraphs: [
      "A shiba puppy that walks across your screen, sits on your windows, and reacts to what you're doing, built on native window-awareness APIs so it can tell where your taskbar and open apps actually are, not just guess.",
      "The sprite pipeline alone has thirty-odd hand-tuned animations: idle, drag, sneeze, treasure-find. Most of it nobody will ever see head-on. That was kind of the point.",
    ],
    images: [{ src: "/projects/shiba/1-pet.png", alt: "Shiba Desktop Pet sprite, happy pose" }],
    githubUrl: "https://github.com/saivilas98/shiba-desktop-pet",
  },
];

export const projectsIntro = {
  eyebrow: "Things I've Built",
  title: "Products, experiments & interactive experiences.",
  description:
    "Over the past year, I've built 10+ digital products with Claude Code: consumer apps, browser games, and creative interfaces. These are the ones that best represent how I think, build, iterate, and learn.",
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
    "5+ PRDs across features for MoveOS 4 & 5, Ola Bike, Ola Auto",
    "Cross-functional work with engineering, design, and business",
    "50+ customer calls for Ola Care+ research",
  ],
  moment: {
    heading: "A moment that stuck",
    quote:
      "An auto driver told me he never used reverse mode: he thought it would damage the motor. The feature existed. The trust didn't. That one conversation changed how I think about shipping.",
  },
};

export type ThinkingIcon = "radar" | "search" | "eye" | "compass";

export type ThinkingCategory = {
  icon: ThinkingIcon;
  title: string;
  description: string;
};

export const productThinking: { intro: string; categories: ThinkingCategory[] } = {
  intro: "Notes from using products and occasionally being wrong about them. Growing over time.",
  categories: [
    {
      icon: "radar",
      title: "Product Teardowns",
      description: "Picking apart products I use: what's working, what feels off.",
    },
    {
      icon: "search",
      title: "Feature Critiques",
      description: "Features that caught my attention and made me wonder about the decision behind them.",
    },
    {
      icon: "eye",
      title: "UX Observations",
      description: "Small things noticed while using apps day to day.",
    },
    {
      icon: "compass",
      title: "Strategy Notes",
      description: "How I think about tradeoffs and prioritisation.",
    },
  ],
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
    "PM Intern · Ola Electric",
    "Data & Analytics Manager · Accordion Partners",
    "Consultant · Deloitte",
    "Associate Consultant · Capgemini",
  ],
  education: ["IIM Calcutta · MBA", "IIT Indore · B.Tech, Mechanical Engineering"],
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
