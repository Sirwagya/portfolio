export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  attribution: string;
  myContribution?: string;
  repoUrl: string;
  liveUrl?: string;
  overview: string;
  architectureHighlights: string[];
  techStack: string[];
  pipelineSteps?: { step: string; label: string; desc: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "nexora-ai",
    number: "01",
    title: "NEXORA AI",
    tagline: "Turning fragmented construction evidence into auditable project intelligence.",
    category: "AI SYSTEMS / DISTRIBUTED ARCHITECTURE",
    isFlagship: true,
    attribution: "Team Kasukabe (Sirwagya Shekhar, Shravanee Yadav, Urvashi Pali, Divyanshi Mewara, Aditya Shende, Avika Mishra)",
    myContribution: "Engineered full-stack integration, evidence-to-schedule hybrid matching algorithms, RabbitMQ async outbox architecture, and the responsive planner operations console.",
    repoUrl: "https://github.com/urvashislash/nexora-ai",
    liveUrl: "https://nexora-ai.uspali212.workers.dev",
    overview: "EPC construction projects suffer from fragmented field reports, spreadsheets, photos, and voice memos. NEXORA AI normalizes messy site observations, matches them to activity schedules using hybrid AI, and provides an auditable trust-plane with Oracle Primavera P6 export capabilities.",
    architectureHighlights: [
      "React 19 operations console with Gantt variance, dependency graphs, and keyboard accessibility",
      "FastAPI AI ingestion service accepting PDFs, images, Excel sheets, and audio voice logs",
      "Hybrid matching engine combining RapidFuzz lexical scoring with sentence-transformer embeddings",
      "Rust Axum trust-plane enforcing schema-compliant Oracle Primavera P6 XML exports & SHA-256 chained audit logs",
      "Asynchronous RabbitMQ queue (nexora.jobs direct exchange) with Python workers and Redis job-state caching",
      "PostgreSQL persistence with connection pooling and Supabase object storage"
    ],
    techStack: [
      "Rust (Axum)",
      "FastAPI",
      "React 19",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "Supabase",
      "RapidFuzz",
      "Sentence-Transformers",
      "Primavera P6 XML"
    ],
    pipelineSteps: [
      { step: "01", label: "Evidence Ingestion", desc: "Field logs, voice notes, PDFs, and photos uploaded to Supabase storage." },
      { step: "02", label: "Multi-modal AI", desc: "FastAPI extracts activity milestones, physical percentages, and constraints." },
      { step: "03", label: "Hybrid Matching", desc: "RapidFuzz lexical scoring + sentence-transformer embeddings map observations to schedule tasks." },
      { step: "04", label: "Async Outbox", desc: "RabbitMQ dispatches jobs to isolated Python AI workers with Redis state tracking." },
      { step: "05", label: "Rust Trust-Plane", desc: "Axum API verifies invariant validation, SHA-256 audit logs, and outputs Primavera P6 XML." }
    ]
  },
  {
    id: "onceuponme",
    number: "02",
    title: "OnceUponMe Video Engine",
    tagline: "An automated pipeline for generating personalized cinematic reels from movie footage.",
    category: "AI PIPELINES / MEDIA ENGINEERING",
    isFlagship: false,
    attribution: "Core Architecture & Pipeline Development (Sirwagya Shekhar)",
    repoUrl: "https://github.com/Sirwagya/OnceUponMe-Video-Engine",
    overview: "An automated, production-ready video engineering pipeline that converts full-length movies into personalized, cinematic children's reels. Operates with zero generative video hallucination — all visual frames are deterministically extracted, scored, and orchestrated from real movie footage.",
    architectureHighlights: [
      "Video Understanding & Cleaning layer with automated scene boundary analysis",
      "Deterministic segment selection and OpenCV visual scoring algorithms",
      "Gemini AI for emotional story pacing and context-aware narrative scripting",
      "ElevenLabs voice synthesis with precise timing and audio mastering",
      "FFmpeg frame/clip extraction coupled with Remotion (Node.js) for programmatic 60fps reel rendering",
      "Fault-tolerant checkpointing with MongoDB state persistence and webhook status notifications"
    ],
    techStack: [
      "Python",
      "OpenCV",
      "FFmpeg",
      "Remotion",
      "Node.js",
      "Gemini AI",
      "ElevenLabs",
      "MongoDB"
    ],
    pipelineSteps: [
      { step: "01", label: "Movie Understanding", desc: "Inspects full movie frames and runs automated scene segmentation." },
      { step: "02", label: "OpenCV Scoring", desc: "Calculates visual dynamism, clarity, and pacing thresholds per segment." },
      { step: "03", label: "Gemini Scripting", desc: "Generates tailored narrative scripts personalized to the child's identity." },
      { step: "04", label: "Voice Narration", desc: "ElevenLabs synthesizes studio-grade cinematic narration with precise timestamps." },
      { step: "05", label: "Remotion Render", desc: "Node.js Remotion engine stitches video, transitions, and audio into delivery reels." }
    ]
  },
  {
    id: "campus-connect",
    number: "03",
    title: "Campus Connect",
    tagline: "A campus operating system for students.",
    category: "FULL STACK / CAMPUS OS",
    isFlagship: false,
    attribution: "Team Hackathon Project",
    repoUrl: "https://github.com/Sirwagya/campus-connect",
    overview: "A unified platform built to replace fragmented university groups, notice boards, and student chats. Connects verified student identity, gamified developer reputation, campus-wide event orchestration, and peer collaboration in one high-performance interface.",
    architectureHighlights: [
      "Next.js 16 App Router with server-side rendering and optimistic UI updates",
      "Supabase PostgreSQL with Row Level Security (RLS) and real-time WebSocket subscriptions",
      "Gamified student profile engine with XP mechanics synced to external coding profiles",
      "Live integrations fetching GitHub contribution graphs, LeetCode, Codeforces, and HackerRank stats",
      "End-to-end team registration workflows for hackathons and campus competitions",
      "Real-time social discussions, event announcements, and administrative moderation tools"
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub API",
      "LeetCode API"
    ],
    pipelineSteps: [
      { step: "01", label: "Identity & XP", desc: "Students build verified profiles with gamified coding milestones and platform ratings." },
      { step: "02", label: "Realtime Hub", desc: "Campus-wide activity stream powered by Supabase WebSocket channels." },
      { step: "03", label: "Event Management", desc: "Solo & team registrations with automated leader invitations and role approvals." },
      { step: "04", label: "Peer Collaboration", desc: "Dedicated workspace for cross-disciplinary project matchmaking and team creation." }
    ]
  },
  {
    id: "crave-check",
    number: "04",
    title: "Crave Check",
    tagline: "Making food intelligence instant.",
    category: "AI / PERFORMANCE / PERSONALIZATION",
    isFlagship: false,
    attribution: "Team Kasukabe Hackathon Project (Urvashi Pali, Sirwagya Shekhar, Shravanee Yadav, Aditya Shende)",
    repoUrl: "https://github.com/Sirwagya/Crave-Check",
    overview: "A mobile-first food intelligence application engineered to decode dense ingredient labels and whole foods in seconds. Uses progressive NDJSON streaming and intelligent multi-tier caching to deliver real-time personalized health ratings before the complete AI response finishes.",
    architectureHighlights: [
      "Progressive NDJSON streaming delivering stage-by-stage analysis to the client UI",
      "Sub-second multi-tier caching: in-memory cachetools + persistent MongoDB hash cache",
      "Gemini Vision integration for OCR label decoding and whole-food classification",
      "RapidFuzz fuzzy matching fallback for instant lookup of recognized additives and allergens",
      "Personalized health scoring mapped against user medical conditions and dietary profiles",
      "Resilient production backend with Tenacity retry policies and SlowAPI rate limiting"
    ],
    techStack: [
      "FastAPI",
      "React",
      "Gemini Vision",
      "MongoDB",
      "RapidFuzz",
      "Cachetools",
      "Tenacity",
      "SlowAPI"
    ],
    pipelineSteps: [
      { step: "01", label: "Capture & Hash", desc: "Mobile client captures label photo; backend computes image hash for instant cache check." },
      { step: "02", label: "Vision Extraction", desc: "Gemini Vision reads micro-ingredients and flags chemical preservatives." },
      { step: "03", label: "Fuzzy Lookup", desc: "RapidFuzz cross-references ingredients with localized nutritional databases." },
      { step: "04", label: "Personalized Score", desc: "Matches allergen hazards to user profile and streams warnings via NDJSON." }
    ]
  }
];
