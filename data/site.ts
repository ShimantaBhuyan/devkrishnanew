import { currentRole, experience, firstYear } from "./experience";

/** Site-wide profile, homepage navigation and social links. */

export const profile = {
  name: "Shimanta",
  fullName: "Shimanta Krishna Bhuyan",
  /** Lines the homepage role scrambler cycles through. */
  roles: [
    `${currentRole.role} @ ${currentRole.company}`,
    "Serial product builder",
    `Ex-${experience[1].company} · Ex-${experience[2].company.split(" ")[0]}`,
  ],
};

export type NavItem = {
  label: string;
  href: string;
  note: string;
  /** What the homepage particles form when this item is hovered. "\n" splits lines. */
  shape: string;
};

export const nav: NavItem[] = [
  { label: "Work", href: "/space/work", note: `${firstYear} → now`, shape: currentRole.shape ?? currentRole.company.toUpperCase() },
  { label: "Projects", href: "/projects", note: "things I ship on weekends", shape: "SHIPPED" },
  { label: "Skills", href: "/space/skills", note: "the toolbox", shape: "</>" },
  { label: "Contact", href: "/space/contact", note: "say hi", shape: "HELLO" },
];

export const socials = [
  { label: "X / Twitter", handle: "@AllDevThings", href: "https://twitter.com/AllDevThings" },
  { label: "GitHub", handle: "ShimantaBhuyan", href: "https://github.com/ShimantaBhuyan" },
  { label: "LinkedIn", handle: "shimantabhuyan", href: "https://www.linkedin.com/in/shimantabhuyan" },
  { label: "Email", handle: "shimantakb@gmail.com", href: "mailto:shimantakb@gmail.com" },
  { label: "Pinterest", handle: "shimantabhuyan", href: "https://in.pinterest.com/shimantabhuyan/" },
];

/** Site-wide share metadata (search results, link previews). public/og.png is the share card. */
export const siteMeta = {
  url: "https://www.devkrishna.in",
  title: "Shimanta Bhuyan — devkrishna",
  description: `${profile.fullName}, ${currentRole.role} at ${currentRole.company} and serial product builder. Work, weekend projects, skills and how to say hi.`,
  image: "https://www.devkrishna.in/og.png",
  imageAlt: "Hello world, this is Shimanta. A particle portrait beside the devkrishna homepage headline.",
  twitter: "@AllDevThings",
};
