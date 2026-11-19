export type ProjectCategory = 
  | "All"
  | "Short-form Content"
  | "YouTube Long-form"
  | "Cinematic Teasers"
  | "Brand & Promotional Videos";

export interface Project {
  id: string;
  title: string;
  category: "Short-form Content" | "YouTube Long-form" | "Cinematic Teasers" | "Brand & Promotional Videos";
  clientLabel: string;
  duration: string;
  year: string;
  shortDescription: string;
  overview: string;
  role: string[];
  editingApproach: string[];
  results?: string;
  toolsUsed: string[];
  thumbnailUrl: string;
  videoUrl: string;
  aspectRatio: "16:9" | "9:16";
  featured?: boolean;
  isPlaceholder?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: "Zap" | "Tv" | "Film" | "Sparkles";
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface WorkflowStep {
  step: string;
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  instagram: string;
  instagramUrl: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  availability: string;
}

export interface PortfolioConfig {
  personalName: string;
  brandTagline: string;
  eyebrowHero: string;
  heroHeadline: string;
  heroDescription: string;
  showreel: {
    title: string;
    label: string;
    duration: string;
    videoUrl: string;
    thumbnailUrl: string;
    description: string;
  };
  stats: StatItem[];
  services: Service[];
  projects: Project[];
  about: {
    eyebrow: string;
    headline: string;
    introduction: string;
    philosophyTitle: string;
    philosophyText: string;
    approachTitle: string;
    approachPoints: string[];
    experienceTitle: string;
    experienceText: string;
    softwareToolkit: string[];
    portraitPlaceholderUrl: string;
  };
  workflow: {
    eyebrow: string;
    headline: string;
    steps: WorkflowStep[];
  };
  contact: ContactInfo;
}
