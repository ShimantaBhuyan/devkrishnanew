/**
 * Skills, grouped. The Skills page renders every group in order.
 * To add a skill: add a string to the right group's `items`.
 * To add a group: add a new { name, items } object.
 */

export type SkillGroup = {
  name: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python", "C#", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend & mobile",
    items: ["React", "Next.js", "React Native", "Expo", "Remix", "Redux", "Tailwind CSS", "Payload CMS"],
  },
  {
    name: "Backend & data",
    items: ["Node.js", "Fastify", "PostgreSQL", "Row-level security", "Zero-downtime migrations", "DynamoDB", "REST", "Webhooks"],
  },
  {
    name: "AI & agents",
    items: [
      "LLM orchestration",
      "Multi-model routing",
      "Agent harnesses",
      "Deep research",
      "MCP & OAuth 2.1",
      "Evals",
      "Diffusion models",
      "Claude Code",
    ],
  },
  {
    name: "Cloud & infrastructure",
    items: [
      "AWS (ECS, RDS, S3, CloudFront, Lambda, SES, KMS, Cognito)",
      "Cloudflare (Workers, Durable Objects, R2, D1)",
      "Terraform",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    name: "Payments & trust",
    items: ["Stripe (Billing, Connect, Tax)", "RevenueCat", "C2PA / Content Credentials", "SOC 2", "Multi-tenancy"],
  },
  {
    name: "Observability",
    items: ["Sentry", "Langfuse", "Grafana", "Prometheus", "ELK"],
  },
];
