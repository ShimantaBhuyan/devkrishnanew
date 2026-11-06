/**
 * Work history, newest first. The Work page and the homepage read from this list.
 *
 * To add a role: copy one entry, put it at the top, and fill it in.
 * - `end` left out (or undefined) means "Present".
 * - `highlights` is a flat bullet list; use `groups` instead when a role needs sub-sections.
 * - `shape` is the word the homepage particles form when "Work" is hovered (only the first entry's is used).
 *   Use "\n" for a line break. Keep it short: 4–10 characters per line reads best.
 */

export type ExperienceGroup = {
  title: string;
  link?: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  url?: string;
  start: string;
  end?: string;
  summary?: string;
  highlights?: string[];
  groups?: ExperienceGroup[];
  stack?: string[];
  shape?: string;
};

export const experience: Experience[] = [
  {
    company: "Original Pictures",
    role: "Founding Engineer",
    url: "https://originalpictures.com",
    start: "August 2026",
    shape: "ORIGINAL\nPICTURES",
    summary:
      "Original Pictures builds trustworthy-media (C2PA) and AI products. I'm the main engineer on the company's flagship product, a multi-LLM assistant and media-generation app on iOS, Android and web. I took it from a single-tenant consumer app to a multi-tenant B2B and white-label platform in production, and built the team's internal AI-agent platform alongside it.",
    groups: [
      {
        title: "Flagship AI assistant: from consumer app to white-label platform",
        items: [
          "Wrote 58% of merged PRs (275 of 471) on the company's main product, more than any other contributor, and owned weekly releases, hotfixes, OTA updates and incident response.",
          "Designed and built the move to a multi-tenant B2B and white-label platform, phase by phase behind feature flags. It shipped to production in about six weeks, with no downtime for existing users.",
          "Tenant isolation with forced Postgres row-level security on about 95 tables, a request-scoped tenant context on every query, and a cross-tenant leak test suite.",
          "Platform RBAC with 5 roles: all 72 admin routes declare a permission, and the server refuses to boot if one is untagged. Append-only audit log, step-up re-auth and break-glass tooling.",
          "Business organisations with seats, invitations, per-member limits and a wallet-based credit ledger. Stripe Connect, tenant-owned Stripe accounts, Stripe Tax and EN 16931 e-invoices.",
          "Per-tenant native iOS and Android apps from one Expo codebase, custom domains with DNS verification, CloudFront multi-tenant edge routing, and the first regional data cell (Canada).",
          "A staff Control Center with 87 database-backed feature flags (per-user and percentage targeting, applied without redeploys), plus live admin stats exposed as an MCP tool.",
          "Bring-your-own-key AI providers per tenant: encrypted keys, no fallback to the platform key, and separate circuit breakers per tenant.",
        ],
      },
      {
        title: "Agentic and AI features",
        items: [
          "Designed and built agent harness v2, and replaced E2B with on-demand Cloudflare Workers sandboxes.",
          "Artifact generation for websites and documents, with streaming code previews and follow-ups that finish apps cut off by token limits.",
          "Multi-phase deep research with citations, model choice per phase and fallback between model families.",
          "A multi-intent router that runs chained requests (\"search the web, then make an infographic\") as an ordered plan with per-step credit settlement, and a unified capability router across 23 task types, backed by an eval.",
          "Migrated generative UI off a third-party service to the in-house LLM gateway before that service shut down, with no downtime.",
        ],
      },
      {
        title: "Trust, safety and provenance",
        items: [
          "Shipped content moderation on every generation path, which got the app reinstated on Google Play.",
          "C2PA Content Credentials: opt-in creator attribution and a public verify page that reads C2PA in the browser with WASM.",
          "Drove the C2PA platform replatform plan and Phase 0: creator identity stored only as a pointer, with encrypted PII and GDPR erasure, and an adaptive video-watermark strength ladder that removed visible artefacts.",
        ],
      },
      {
        title: "Reliability and incidents",
        items: [
          "Found a silent Stripe API change that had stopped subscription renewals from granting credits, fixed video billing that overcharged up to 20×, and compensated affected users.",
          "Wrote the incident report and hotfix for an S3 connection-pool incident, and tracked down a stray production API that was causing database lock contention.",
          "Restructured the repo so humans and AI agents can both work in it (27 root docs down to 5, one canonical AGENTS.md, a CI hygiene guard), and redesigned the app on design system v2.",
        ],
      },
      {
        title: "Internal AI-agent platform for the team",
        items: [
          "Sole author. Each teammate runs their own agent in an isolated Cloudflare container that sleeps when idle and wakes on demand, built on Workers, Durable Objects, R2 and D1.",
          "Shared team tools are connected once by an admin and brokered per tool, so credentials never reach a workspace. Launched to the team in November 2026.",
        ],
      },
      {
        title: "White-label marketing site",
        items: [
          "Named, built and launched the marketing site for the white-label offering on Next.js 16 and Payload CMS 3, with a static export to S3 and CloudFront that redeploys when the CMS publishes.",
          "A live \"your brand\" playground with WCAG contrast checks and RTL support, plus a serverless demo-request backend (Lambda, DynamoDB, SES).",
        ],
      },
      {
        title: "Leadership and compliance",
        items: [
          "Scoped and led SOC 2 readiness, ran a production security audit, and reviewed 90 PRs across the org.",
          "Set the no-direct-push-to-main rule, coached a new contributor, and built most of this with Claude Code as my main tool.",
        ],
      },
    ],
    stack: [
      "TypeScript",
      "Fastify",
      "React Native / Expo",
      "Next.js",
      "Payload CMS",
      "PostgreSQL",
      "AWS",
      "Cloudflare",
      "Stripe",
      "MCP",
      "C2PA",
      "LLM orchestration",
    ],
  },
  {
    company: "Sprinto",
    role: "Senior Fullstack Engineer",
    url: "https://sprinto.com",
    start: "June 2025",
    end: "August 2026",
    highlights: [
      "Built the AI-native compliance and risk management platform for enterprises and SMBs.",
      "Made the platform more robust and scalable as part of the platform team.",
      "Part of the SpecialOps team, solving direct customer issues and urgent requests first.",
      "Built in-house AI automations for the Accounts Payable (finance) team's day-to-day work.",
    ],
  },
  {
    company: "Tunnel Platforms",
    role: "Founding Engineer",
    url: "https://viatunnel.com",
    start: "July 2023",
    end: "June 2025",
    shape: "TUNNEL",
    highlights: [
      "Built the simplest accounts payable automation platform, with an alpha launch to select customers in Q1 2024.",
      "Built scalable payment facilitation services that processed over $2M in payments in a week.",
      "Designed and built the whole system: a React SPA, backend services in Go and C#, and infrastructure on AWS and DigitalOcean.",
      "Built an ERP connector that syncs on-premise ERP data to Tunnel, and tools that turn ERP data into CSV, flat-file and EDI payment files for banks.",
      "Built a generic in-browser file mapper that converts any CSV or Excel file into a configurable destination dataset.",
      "Set up SOC 2 Type 2 compliant infrastructure and processes for the company.",
      "Refactored the backend to a clean architecture with unit tests covering about 80% of the codebase.",
      "Supported customers with custom integrations and onboarding, set up engineering handbooks, and mentored a backend intern.",
    ],
  },
  {
    company: "tellmeaboutyourself",
    role: "Founder (acquired)",
    url: "https://drive.google.com/file/d/1fM4TGBCTc3NSbOEXJYezQTInrJk7s_DA/view?usp=sharing",
    start: "February 2023",
    end: "February 2023",
    highlights: [
      "An interview prep assistant for behavioral interviews, powered by GPT-3.5 Turbo.",
      "Users generated 100+ reports before it was acquired.",
    ],
  },
  {
    company: "Jupiter Money",
    role: "SDE 2",
    start: "May 2022",
    end: "October 2022",
    highlights: [
      "Led the personal finance vertical and revamped the money tab in Remix, as a web app inside the React Native app, for a million-strong customer base.",
      "Introduced the Remix and React Native stack at the company.",
      "Improved load times and other performance metrics of the web app by 22%.",
    ],
  },
  {
    company: "Swiggy",
    role: "SDE 1",
    start: "February 2021",
    end: "April 2022",
    highlights: [
      "Co-owned partner.swiggy.com, the restaurant partner web app serving millions.",
      "Built a headless CMS dashboard powering the owner app homepage for about 80% of partner users.",
      "Led the migration from AngularJS and React Native to a single React Native for Web monorepo.",
      "Improved Lighthouse scores by 15% with a focus on accessibility, and received an MVP award for the migration.",
    ],
  },
  {
    company: "AVEVA",
    role: "Associate Software Development Engineer",
    start: "July 2019",
    end: "January 2021",
    highlights: [
      "Shipped a modern UI for the enterprise product's major release on an older framework, ahead of the promised date.",
      "Built new features and rewrote key ones, raising code coverage by 12% and cutting load time by 11%.",
    ],
  },
];

export const currentRole = experience[0];

/** "July 2019" -> 2019 */
export const startYear = (e: Experience) => e.start.match(/\d{4}/)?.[0] ?? "";

export const firstYear = startYear(experience[experience.length - 1]);
