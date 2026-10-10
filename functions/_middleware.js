// Cloudflare Pages Functions Middleware
// Implements content negotiation for AI agents requesting `Accept: text/markdown`

const FALLBACK_MARKDOWN = `# Sirwagya Shekhar — Full Stack & AI Developer

> Product Engineer & AI Developer based in Pune, India. Building intelligent products, distributed backend infrastructure, and polished digital experiences.

- **Website:** https://sirwagya.dev/
- **Email:** sirwxgya@gmail.com
- **GitHub:** https://github.com/Sirwagya
- **LinkedIn:** https://www.linkedin.com/in/sirwxgya/
- **Status:** Open to new full stack and AI engineering opportunities

---

## About Me

Full-stack and AI developer working where high-reliability engineering meets thoughtful product design. Focused on the complete system loop: model inference latency, robust event outboxes, fault-tolerant media pipelines, and sub-frame interface response.

### Core Technical Competencies

- **AI Systems & Media Pipelines:** Multimodal AI, computer vision scoring, video frame processing, and streaming LLM inference architectures.
- **Distributed Backend Architecture:** High-concurrency APIs in Rust (Axum) and Python (FastAPI), asynchronous RabbitMQ queues, Redis state engines, and PostgreSQL persistence.
- **Frontend Craft & Motion Engineering:** Responsive web applications powered by React 19, TypeScript, and hardware-accelerated GSAP motion systems.
- **System Integrity & Invariants:** Auditable systems with SHA-256 tamper-evident ledgers, Primavera P6 XML exports, and fault-tolerant pipeline checkpointing.

---

## Selected Work & Case Studies

### 1. NEXORA AI — Construction Site Intelligence
- **Category:** AI Systems • Distributed Architecture • Computer Vision
- **GitHub:** https://github.com/urvashislash/nexora-ai
- **Live Demo:** https://nexora-ai.uspali212.workers.dev
- **Technologies:** Rust (Axum), FastAPI, React 19, PostgreSQL, RabbitMQ, Redis, Supabase, RapidFuzz, Sentence-Transformers, Oracle Primavera P6 XML.
- **Overview:** Turning fragmented construction evidence into auditable project intelligence. EPC construction projects suffer from fragmented field reports, spreadsheets, photos, and voice memos. NEXORA AI normalizes messy site observations, matches them to activity schedules using hybrid AI, and provides an auditable trust-plane with Oracle Primavera P6 export capabilities.

### 2. OnceUponMe Video Engine — Cinematic Reel Automation
- **Category:** AI Pipelines • Media Engineering
- **GitHub:** https://github.com/Sirwagya/OnceUponMe-Video-Engine
- **Technologies:** Python, OpenCV, FFmpeg, Remotion (Node.js), Gemini AI, ElevenLabs, MongoDB.
- **Overview:** An automated, production-ready video engineering pipeline that converts full-length movies into personalized, cinematic children's reels. Operates with zero generative video hallucination — all visual frames are deterministically extracted, scored, and orchestrated from real movie footage.

### 3. Campus Connect — Campus Operating System
- **Category:** Full Stack • Real-Time Systems • WebSockets
- **GitHub:** https://github.com/Sirwagya/campus-connect
- **Technologies:** Next.js 16, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Framer Motion, GitHub API, LeetCode API.
- **Overview:** A campus operating system for students replacing fragmented university groups, notice boards, and student chats. Connects verified student identity, gamified developer reputation, campus-wide event orchestration, and peer collaboration.

### 4. Crave Check — Real-Time Food Intelligence
- **Category:** AI • Performance • Personalization
- **GitHub:** https://github.com/Sirwagya/Crave-Check
- **Technologies:** Next.js, FastAPI, OpenCV, Gemini Vision, Cache-Control Streaming.
- **Overview:** A mobile-first food intelligence application engineered to decode dense ingredient labels and whole foods in seconds. Uses progressive NDJSON streaming and intelligent multi-tier caching to deliver real-time personalized health ratings.

---

## Data Structures & Algorithms

450+ solved algorithmic problems with competitive rankings across platforms:
- **LeetCode:** https://leetcode.com/u/sirwagya
- **CodeChef:** https://www.codechef.com/users/sirwagya
- **Codeforces:** https://codeforces.com/profile/sirwagya
- **Codolio:** https://codolio.com/profile/sirwagya

---

## Profiles & Contact

- **Website:** https://sirwagya.dev/
- **Email:** sirwxgya@gmail.com
- **GitHub:** https://github.com/Sirwagya
- **LinkedIn:** https://www.linkedin.com/in/sirwxgya/
`;

export async function onRequest(context) {
  const request = context.request;
  const accept = request.headers.get("Accept") || "";

  // Content negotiation: check for text/markdown preference
  if (accept.includes("text/markdown")) {
    const url = new URL(request.url);
    // Serve Markdown for the root or HTML pages
    if (url.pathname === "/" || url.pathname === "" || url.pathname.endsWith(".html")) {
      let markdown = FALLBACK_MARKDOWN;

      if (context.env && context.env.ASSETS) {
        try {
          const mdUrl = new URL("/index.md", request.url);
          const assetRes = await context.env.ASSETS.fetch(mdUrl);
          if (assetRes.ok) {
            markdown = await assetRes.text();
          }
        } catch {
          // Keep FALLBACK_MARKDOWN on error
        }
      }

      const tokens = Math.ceil(markdown.length / 4);

      return new Response(markdown, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Vary": "Accept",
          "x-markdown-tokens": String(tokens),
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    }
  }

  // Continue to default static asset delivery (HTML for browsers)
  const response = await context.next();

  // Ensure downstream caches know HTML response varies by Accept header
  const headers = new Headers(response.headers);
  const existingVary = headers.get("Vary");
  if (!existingVary) {
    headers.set("Vary", "Accept");
  } else if (!existingVary.includes("Accept")) {
    headers.set("Vary", `${existingVary}, Accept`);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
