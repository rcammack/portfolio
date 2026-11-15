export const siteConfig = {
  links: {
    linkedIn: "https://www.linkedin.com/",
    email: "mailto:hello@example.com",
    resume: "https://example.com/placeholder-resume",
    github: "https://github.com/",
  },
  visibility: {
    resume: false,
    github: false,
  },
  themeStorageKey: "portfolio-theme",
} as const;

export type SiteConfig = {
  links: Record<keyof typeof siteConfig.links, string>;
  visibility: Record<keyof typeof siteConfig.visibility, boolean>;
  themeStorageKey: string;
};
