
import React from 'react';
import { 
  Globe, 
  Layers, 
  Code2, 
  Microscope, 
  Linkedin, 
  Mail,
  Search,
  Database,
  BrainCircuit,
  CheckCircle2
} from 'lucide-react';
import { Project, Experience, Education, Research, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Arjuna.ai",
    category: "AI Compliance Assistant",
    description: "Intelligent compliance assistant for Indian traders, delivering instant GST and tax guidance via WhatsApp.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "AI", "WhatsApp API"],
    link: "https://github.com/theaashaychahande/arjuna"
  },
  {
    id: 2,
    title: "Project Drishti",
    category: "Computer Vision Mobile App",
    description: "Flutter-based mobile app integrating real-time object detection, text recognition, and image classification using Google ML Kit.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Flutter", "TensorFlow", "Google ML Kit"],
    link: "https://github.com/theaashaychahande/drishti"
  },
  {
    id: 3,
    title: "Sikander",
    category: "Portfolio Risk Management",
    description: "Python-based portfolio analytics platform providing institutional-grade risk metrics and performance tracking.",
    image: "https://images.unsplash.com/photo-1611974714024-4607a507ae21?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Pandas", "Streamlit"],
    link: "https://github.com/theaashaychahande/sikander"
  },
  {
    id: 4,
    title: "Vyapar",
    category: "Inventory Management System",
    description: "Flutter inventory tracker for small retailers with automated stock monitoring and predictive reordering.",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e671c85?auto=format&fit=crop&q=80&w=800",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/theaashaychahande/vyapar"
  },
  {
    id: 5,
    title: "resolve.exe",
    category: "AI Document Extraction",
    description: "Context-aware AI system that extracts user-defined specific data from physical and handwritten documents.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "OCR", "AI"],
    link: "https://github.com/theaashaychahande/resolve.exe"
  },
  {
    id: 6,
    title: "CleanFrame",
    category: "Python Data Library",
    description: "Open-source Python library designed to automate and simplify the data cleaning process for ML pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Data Science", "Automation"],
    link: "https://github.com/theaashaychahande/datacleaner"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "DESCAM Cybersecurity LLP",
    role: "Machine Learning Intern | Technical Team Lead",
    period: "Dec 2025 – Mar 2026",
    location: "Nagpur, Maharashtra",
    description: [
      "Developed and deployed AI-driven threat intelligence solutions within a live cybersecurity ecosystem.",
      "Led the technical team in designing and building a scalable malware analysis platform from the ground up.",
      "Implemented automated reporting pipelines and real-time monitoring dashboards for SOC and IR teams."
    ]
  },
  {
    id: 2,
    company: "E-Cell SVPCET",
    role: "Operations & Management Head",
    period: "Feb 2026 – Present",
    location: "Nagpur, Maharashtra",
    description: [
      "Leading operational planning and management for E-Cell activities, including end-to-end execution of events and workshops.",
      "Streamlining workflows and improving internal processes across the organization.",
      "Supporting the planning of startup-focused competitions and technical initiatives."
    ]
  },
  {
    id: 3,
    company: "Microsoft Community",
    role: "AI Developer",
    period: "Nov 2024 – Dec 2024",
    location: "Maharashtra, India",
    description: [
      "Integrated TensorFlow for model building and used pandas and NumPy for data preprocessing workflows.",
      "Achieved a 15% improvement in prediction accuracy.",
      "Built an intelligent user interface powered by Python and OpenCV for AI-driven insights."
    ]
  },
  {
    id: 4,
    company: "Phoenix Algo",
    role: "Founder & Owner",
    period: "Feb 2025 – Jan 2026",
    location: "Nagpur, Maharashtra",
    description: [
      "Founded a learning initiative to make advanced technology accessible to students.",
      "Designed and delivered cohorts and workshops on AI/ML, programming, and app development.",
      "Taught over 50+ students through hands-on, application-based lessons."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    school: "St. Vincent Pallotti College of Engineering & Technology (SVPCET)",
    degree: "B.Tech in Mechanical Engineering",
    period: "Aug 2024 – Aug 2028",
    cgpa: "7.8"
  },
  {
    id: 2,
    school: "Indian Institute of Technology, Madras",
    degree: "BS in Data Science & Applications",
    period: "July 2023 – Oct 2025",
    details: "Dropped voluntarily in October 2025 to focus on applied engineering and entrepreneurship.",
    cgpa: "9.5"
  }
];

export const RESEARCH: Research[] = [
  {
    id: 1,
    title: "Evaluating Adversarial Training as a Defense Mechanism Against FGSM Attacks on ResNet50 for CIFAR-10 Classification",
    publisher: "Published on ResearchGate",
    description: "Examines the role of adversarial training as a defense strategy against FGSM attacks on ResNet50. Evaluates model robustness, accuracy under attack, and generalization performance.",
    link: "https://www.researchgate.net/profile/Aashay-Chahande"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV", "MediaPipe", "spaCy", "Hugging Face", "Model Fine-Tuning", "Prompt Engineering", "Adversarial Defense"]
  },
  {
    category: "Mobile & Web",
    items: ["Flutter", "Android", "iOS", "Firebase", "Google ML Kit", "TypeScript", "Node.js", "Streamlit", "REST APIs"]
  },
  {
    category: "Data Science",
    items: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Jupyter Notebook"]
  },
  {
    category: "Design & Tools",
    items: ["UI/UX Design", "Graphic Design", "Branding", "Git/GitHub", "Docker", "Kubernetes", "n8n Workflow Automation"]
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home', icon: <Globe className="w-5 h-5" /> },
  { name: 'Work', href: '#work', icon: <Layers className="w-5 h-5" /> },
  { name: 'Experience', href: '#experience', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Education', href: '#education', icon: <Microscope className="w-5 h-5" /> },
  { name: 'About', href: '#about', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Review The Brief",
    desc: "Understand project goals and client expectations deeply.",
    icon: <Search className="w-6 h-6 text-orange-500" />
  },
  {
    step: "02",
    title: "Data Processing",
    desc: "CleanFrame pipelines to ensure high quality training data.",
    icon: <Database className="w-6 h-6 text-orange-500" />
  },
  {
    step: "03",
    title: "Model Development",
    desc: "Architecting neural networks for optimal inference.",
    icon: <BrainCircuit className="w-6 h-6 text-orange-500" />
  },
  {
    step: "04",
    title: "Deployment & Scale",
    desc: "Final testing and shipping to production cloud environments.",
    icon: <CheckCircle2 className="w-6 h-6 text-orange-500" />
  }
];
