/** Shields.io GitHub badges a project can show, keyed by their frontmatter name. */
export const shields = {
  stars: { path: "github/stars", href: "/stargazers", alt: "GitHub stars" },
  forks: { path: "github/forks", href: "/forks", alt: "GitHub forks" },
  contributors: {
    path: "github/contributors",
    href: "/graphs/contributors",
    alt: "GitHub contributors",
  },
  license: { path: "github/license", href: "/", alt: "License" },
  release: {
    path: "github/v/release",
    href: "/releases",
    alt: "Latest release",
  },
  "last-commit": {
    path: "github/last-commit",
    href: "/commits",
    alt: "Last commit",
  },
} as const;

export type ShieldName = keyof typeof shields;

export const shieldNames = Object.keys(shields) as [
  ShieldName,
  ...ShieldName[],
];
