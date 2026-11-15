import { strings, type ProjectCopy } from "./strings";

export interface Project {
  id: string;
  copy: ProjectCopy;
  images: { src: string; alt: string }[];
  accent: "default" | "xbox";
  articleUrl?: string;
}

export const projects: Project[] = [
  {
    id: "cozy-console",
    copy: strings.projects.console,
    images: [
      { src: "images/console.svg", alt: strings.projects.console.imageAlt },
    ],
    accent: "xbox",
    articleUrl: "https://example.com/placeholder-article",
  },
  {
    id: "little-library",
    copy: strings.projects.pc,
    images: [{ src: "images/pc.svg", alt: strings.projects.pc.imageAlt }],
    accent: "xbox",
  },
  {
    id: "good-things-guide",
    copy: strings.projects.web,
    images: [{ src: "images/web.svg", alt: strings.projects.web.imageAlt }],
    accent: "default",
  },
  {
    id: "tiny-joys",
    copy: strings.projects.personal,
    images: [
      { src: "images/personal.svg", alt: strings.projects.personal.imageAlt },
    ],
    accent: "default",
  },
];
