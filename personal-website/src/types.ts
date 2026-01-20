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