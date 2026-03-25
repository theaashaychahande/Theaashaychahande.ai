export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  period: string;
  cgpa: string;
  details?: string;
}

export interface Research {
  id: number;
  title: string;
  publisher: string;
  description: string;
  link: string;
}

export interface Skill {
  category: string;
  items: string[];
}
