export interface Project {
  name: string;
  url: string;
  description: string;
  language: string;
  image?: string;
  altText?: string;
}

export interface Experience {
  title: string;
  company?: string;
  URL?: string;
  startDate?: string;
  endDate?: string;
  responsibilities?: string[];
}

export interface Intro {
  title: string;
  description: string;
}

export interface About {
  title: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  title: string;
  categories: SkillCategory[];
}

export interface ContactInfo {
  label: string;
  value: string;
}

export interface Contact {
  title: string;
  info: ContactInfo[];
}

export interface Profile {
  intro: Intro;
  about: About;
  skills: Skills;
  contact: Contact;
}