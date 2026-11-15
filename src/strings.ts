export interface ProjectCopy {
  title: string;
  category: string;
  shortDescription: string;
  summary: string;
  role: string;
  contributions: string[];
  imageAlt: string;
  articleLabel?: string;
}

export const strings = {
  site: {
    name: "Your name",
    descriptor: "UX engineer & software engineer",
    skipToContent: "Skip to content",
    work: "Work",
    about: "About",
    contact: "Get in touch",
    linkedIn: "LinkedIn (placeholder)",
    email: "Email (placeholder)",
    resume: "Resume",
    github: "GitHub",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    footer: "Made with curiosity and care.",
  },
  home: {
    eyebrow: "Hello, nice to meet you!",
    heading: "Thoughtful experiences, built with a little delight.",
    introduction:
      "I’m a software engineer with seven years at Microsoft Xbox, working across console, PC app, and web experiences. I enjoy bringing design and engineering together.",
    viewWork: "Explore projects",
    projectEyebrow: "A little selection",
    projectHeading: "Selected work",
    placeholderNotice:
      "These fictional projects and visuals are placeholders, not descriptions of real work.",
    viewProject: "View project",
    aboutEyebrow: "A bit about me",
    aboutHeading: "Making the details feel human.",
    aboutText:
      "I care about useful, accessible interfaces and the collaboration that brings them to life. This starter is ready for real stories, screenshots, and a more personal introduction.",
  },
  project: {
    back: "All projects",
    overview: "The overview",
    role: "Role & contributions",
    visual: "A closer look",
    links: "Related links",
    placeholder: "Fictional placeholder project",
    notFound: "Project not found",
    notFoundText: "This project may have moved or does not exist.",
  },
  projects: {
    console: {
      title: "The Cozy Console",
      category: "Console · Xbox",
      shortDescription: "A fictional home for finding your next favorite game.",
      summary:
        "A placeholder concept for a calmer, more approachable console browsing experience.",
      role: "Fictional role: UX engineering",
      contributions: [
        "Explore a welcoming content hierarchy.",
        "Prototype navigation and accessible interaction patterns.",
      ],
      imageAlt:
        "Abstract illustration of a console interface with colorful cards.",
      articleLabel: "Example article (placeholder link)",
    },
    pc: {
      title: "Little Library",
      category: "PC app · Xbox",
      shortDescription: "A fictional collection that makes room for discovery.",
      summary:
        "A placeholder concept for organizing a PC game library with a friendly, flexible interface.",
      role: "Fictional role: software engineering",
      contributions: [
        "Explore ways to organize and filter a collection.",
        "Prototype layouts that adapt to different window sizes.",
      ],
      imageAlt:
        "Abstract illustration of a desktop app with a sidebar and cards.",
    },
    web: {
      title: "Good Things Guide",
      category: "Web",
      shortDescription: "A fictional guide to finding something new.",
      summary:
        "A placeholder web concept for helping people discover and save interesting things.",
      role: "Fictional role: UX engineering",
      contributions: [
        "Explore an easy-to-scan editorial layout.",
        "Prototype responsive, keyboard-friendly interactions.",
      ],
      imageAlt:
        "Abstract illustration of a website with a large feature and smaller cards.",
    },
    personal: {
      title: "Tiny Joys",
      category: "Personal project",
      shortDescription:
        "A fictional space for collecting everyday bright spots.",
      summary:
        "A placeholder side project concept for celebrating the little things.",
      role: "Fictional role: design and development",
      contributions: [
        "Imagine a playful visual language.",
        "Explore a simple, accessible way to collect notes.",
      ],
      imageAlt: "Abstract illustration of colorful notes and a smiling star.",
    },
  } satisfies Record<string, ProjectCopy>,
} as const;
