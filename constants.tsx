
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
    title: "Arjuna",
    category: "AI Compliance Assistant",
    description: "AI Compliance Assistant by SENECA — instant GST and tax guidance for Indian shopkeepers via WhatsApp",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "AI", "WhatsApp API"],
    link: "https://github.com/theaashaychahande/arjuna"
  },
  {
    id: 2,
    title: "Project_unnat",
    category: "GovTech System",
    description: "Hackathon Project (Rank 5th) — CRM GovTech System Architecture",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "CRM", "GovTech"],
    link: "#"
  },
  {
    id: 3,
    title: "resolve.exe",
    category: "AI Document Extraction",
    description: "Context-Aware AI Document Extraction System — extracts user-defined specific data from physical and handwritten documents into clean structured format",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "AI", "OCR"],
    link: "https://github.com/theaashaychahande/resolve.exe"
  },
  {
    id: 4,
    title: "descam_sandbox",
    category: "Cybersecurity",
    description: "Behavioral malware analysis and risk management system",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Malware Analysis", "Security"],
    link: "#"
  },
  {
    id: 5,
    title: "stvincent_sys_app",
    category: "Mobile App",
    description: "Comprehensive all-in-one mobile application (Android & iOS) for students, faculty and staff of SVPCET",
    image: "https://images.unsplash.com/photo-1526406915844-3cbaefcdff7c?auto=format&fit=crop&q=80&w=800",
    tags: ["Dart", "Flutter", "Mobile"],
    link: "#"
  },
  {
    id: 6,
    title: "Sikander",
    category: "Asset Management",
    description: "Portfolio Risk & Asset Management Analyst Dashboard",
    image: "https://images.unsplash.com/photo-1611974714024-4607a507ae21?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Finance", "Analysis"],
    link: "https://github.com/theaashaychahande/sikander"
  },
  {
    id: 7,
    title: "civic_lens",
    category: "Civic Tech",
    description: "Mobile civic engagement platform by SENECA — empowers citizens to participate in improving their city",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    tags: ["Dart", "SENECA", "Civic"],
    link: "#"
  },
  {
    id: 8,
    title: "Project_Drishti",
    category: "Computer Vision",
    description: "Real-time Flutter mobile vision app — object recognition and textual sign reading",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "Computer Vision", "Mobile"],
    link: "https://github.com/theaashaychahande/drishti"
  },
  {
    id: 9,
    title: "Clinic_management_suite",
    category: "Healthcare SaaS",
    description: "Complete clinic workflow and business management system designed for Indian doctors and clinics",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    tags: ["SaaS", "Healthcare", "Business"],
    link: "#"
  },
  {
    id: 10,
    title: "datacleaner (CleanFrame)",
    category: "Data Library",
    description: "One-command data cleaning library — auto-cleans messy datasets, fixes emails, phones, dates with zero setup",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Data Cleaning", "Library"],
    link: "https://github.com/theaashaychahande/datacleaner"
  },
  {
    id: 11,
    title: "prototype_model",
    category: "Management System",
    description: "Restaurant Management & Booking System with customer-facing and admin functionalities",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Full Stack", "Restaurant"],
    link: "#"
  },
  {
    id: 12,
    title: "Sign_lang_detector",
    category: "AI / ML",
    description: "Streamlit app for live sign language detection and image recognition",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Streamlit", "AI"],
    link: "#"
  },
  {
    id: 13,
    title: "real_estate_app",
    category: "Mobile App",
    description: "A Flutter real estate company application",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    tags: ["Dart", "Flutter", "Real Estate"],
    link: "#"
  },
  {
    id: 14,
    title: "obj_identifier_arch",
    category: "System Architecture",
    description: "Microscale Autonomous Sorting Conveyor Mechanism — System Architecture",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Architecture", "Robotics"],
    link: "#"
  },
  {
    id: 15,
    title: "Doctor-Clinic-Management-Suite",
    category: "Healthcare",
    description: "Doctor and clinic management suite (full system)",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Healthcare", "Management"],
    link: "#"
  },
  {
    id: 16,
    title: "Drishtii",
    category: "System Architecture",
    description: "Physical Data Extraction System Architecture",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["C", "Architecture", "Data Extraction"],
    link: "#"
  },
  {
    id: 17,
    title: "financial_portfolio_analyzer",
    category: "FinTech",
    description: "Financial data analysis and recommendation system",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FinTech", "Analysis"],
    link: "#"
  },
  {
    id: 18,
    title: "api_calling",
    category: "Developer Tool",
    description: "Open source tool to test API keys securely without storing them",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "API", "Security"],
    link: "#"
  },
  {
    id: 19,
    title: "Printo",
    category: "SaaS Platform",
    description: "Modern minimal SaaS platform for managing public-specific operational challenges",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "SaaS", "Operations"],
    link: "#"
  },
  {
    id: 20,
    title: "vyapar_demo",
    category: "Inventory App",
    description: "Inventory management demo app",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e671c85?auto=format&fit=crop&q=80&w=800",
    tags: ["Dart", "Inventory", "Demo"],
    link: "#"
  },
  {
    id: 21,
    title: "carbon_calculator",
    category: "Mobile App",
    description: "Carbon footprint calculator mobile app (4th Semester micro project)",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    tags: ["Dart", "Sustainability", "Mobile"],
    link: "#"
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
    category: "Languages",
    items: ["Python", "Java", "C", "C++", "Flutter", "Dart", "Golang", "TypeScript", "JavaScript", "HTML", "CSS", "Rust"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Google Colab", "Transformers", "Data Training", "TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV", "MediaPipe", "spaCy", "Hugging Face", "Model Fine-Tuning", "Prompt Engineering", "Adversarial Defense"]
  },
  {
    category: "Mobile & Web",
    items: ["Golang", "Java", "Mobile Architecture", "Flutter", "Android", "iOS", "Firebase", "Google ML Kit", "TypeScript", "Node.js", "Streamlit", "REST APIs"]
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
