
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Instagram, 
  ArrowRight, 
  ExternalLink,
  Star,
  Globe,
  Quote,
  Zap,
  Layout,
  Code,
  Smartphone,
  CheckCircle,
  Menu,
  X,
  MapPin,
  Microscope,
  Terminal,
  Cpu,
  Layers,
  Database,
  BrainCircuit,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, NAV_LINKS, PROCESS_STEPS, EDUCATION, RESEARCH, SKILLS } from './constants';
import theaashayPic from "./theaashay.png";


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Explicitly typing variants to avoid easing string type mismatch
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative selection:bg-[#FF5C00] selection:text-white">
      {/* Dynamic Background */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FF5C00]/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF5C00]/5 blur-[150px] rounded-full" />
      </motion.div>

      {/* Modern Top Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF5C00] to-orange-400 flex items-center justify-center font-bold text-black text-xl">
              A
            </div>
            <span className="text-lg font-bold tracking-tight font-outfit uppercase hidden sm:block">Aashay Chahande</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-[#FF5C00] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5C00] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-[#FF5C00] hover:text-white transition-all">
              Let's Talk
            </a>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Open for new AI projects</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold font-outfit leading-[0.9] tracking-tighter mb-8"
          >
            AI ARCHITECT<br />
            <span className="text-gradient">& DEVELOPER</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed px-4">
            AI/ML Specialist & Published Researcher. Founder of <span className="text-white font-bold">SENECA</span>. 
            Building production-grade intelligent systems across mobile and web.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#work" className="group relative px-10 py-5 bg-[#FF5C00] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">VIEW SELECTED WORK <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></span>
            </a>
            <a href="#about" className="px-10 py-5 glass hover:bg-white/10 rounded-full font-bold transition-all">
              ABOUT ME
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#FF5C00] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FF5C00]/20 blur-[100px] rounded-full" />
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 glass h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px] group w-full">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Personal Motto overlay at the top */}
              <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-8 pt-8 md:pt-10 text-left">
                <p
                  className="font-outfit font-bold uppercase tracking-tighter text-white/90 mb-4 leading-tight"
                  style={{
                    fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
                    textShadow: '0 2px 24px rgba(0,0,0,0.95), 0 1px 6px rgba(0,0,0,0.9)'
                  }}
                >
                  BRILLIANCE IS NOT<br />
                  ABOUT KNOWING EVERYTHING.<br />
                  <span className="text-[#FF5C00]">IT IS ABOUT KNOWING</span><br />
                  EXACTLY WHAT MATTERS<br />
                  AND BUILDING THAT.
                </p>
              </div>
              {/* Centered large image */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img 
                  src={theaashayPic} 
                  alt="Aashay Chahande" 
                  className="w-[140%] sm:w-[130%] max-w-none object-contain filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <p className="font-outfit font-bold text-xl md:text-2xl">Aashay Chahande</p>
                <p className="text-[#FF5C00] font-bold text-xs md:text-sm tracking-widest uppercase mb-2">AI Specialist & Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6 tracking-tighter leading-none">
              ENGINEERING<br />
              <span className="text-gray-500">INTELLIGENT SYSTEMS</span>
            </h2>
            
            <p className="text-[#FF5C00] font-bold text-xs sm:text-base mb-8 uppercase tracking-widest leading-relaxed">
              ML Specialist • Mobile Engineer • Technical Educator • Published Researcher
            </p>

            <div className="space-y-6 text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
              <p>
                I am an AI/ML Specialist and published researcher. My work spans the full spectrum of intelligent systems — from designing and training deep learning models to deploying production-grade applications on mobile and web platforms. 
              </p>
              <p>
                Currently pursuing a B.Tech in Mechanical Engineering at SVPCET, Nagpur, I combine mechanical engineering principles with cutting-edge machine learning to build systems that are not just technically sound but practically impactful.
              </p>
              <p>
                I'm the Founder of <span className="text-white font-bold">SENECA</span>, architecting custom AI automation tools and system-level solutions. Previously, I founded <span className="text-white font-bold">Phoenix Algo</span> to help students move from theory to real-world application through practical teaching.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
              <div className="glass p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-l-2 border-l-[#FF5C00]">
                <div className="text-2xl md:text-3xl font-bold font-outfit text-white mb-1">50+</div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">Real World Projects</p>
              </div>
              <div className="glass p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-l-2 border-l-[#FF5C00]">
                <div className="text-2xl md:text-3xl font-bold font-outfit text-white mb-1">4+</div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">Years Freelance</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="#contact" className="px-6 md:px-8 py-3 md:py-4 bg-[#FF5C00] text-white font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center gap-2 text-xs md:text-sm">
                <Mail size={16} /> Let's Connect
              </a>
              <a href="https://github.com/theaashaychahande" target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-3 md:py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center gap-2 text-xs md:text-sm border border-white/5 hover:border-[#FF5C00]/30">
                <Github size={16} /> GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Entrepreneurship</span>
          <h2 className="text-4xl md:text-7xl font-bold font-outfit tracking-tighter">VENTURES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 group hover:bg-white/5 transition-all"
          >
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h3 className="text-3xl md:text-4xl font-bold font-outfit">SENECA</h3>
              <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest">Active</div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              An early-stage SaaS startup architecting custom AI automation tools, web/mobile applications, and system-level solutions for global clients.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <span className="text-[10px] md:text-xs font-bold text-gray-500 border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">AI Automation</span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">SaaS</span>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 group hover:bg-white/5 transition-all"
          >
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h3 className="text-3xl md:text-4xl font-bold font-outfit">Phoenix Algo</h3>
              <div className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-500 text-[10px] font-bold uppercase tracking-widest">Concluded</div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              A technical education initiative that ran structured cohorts and workshops on AI/ML, programming, and app development for students.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <span className="text-[10px] md:text-xs font-bold text-gray-500 border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">Education</span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">Workshops</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Grid - Visual Heavy */}
      <section id="work" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-8xl font-bold font-outfit tracking-tighter">SELECTED WORK</h2>
          </div>
          <p className="max-w-xs text-gray-500 leading-relaxed text-sm">
            Focusing on real-world AI applications that solve complex business logic with elegant design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {(showAllProjects ? PROJECTS : PROJECTS.slice(0, 6)).map((project, idx) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.1 }}
              className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 hover:border-[#FF5C00]/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#FF5C00]/10 text-[#FF5C00] text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </div>
                  <a 
                    href="https://github.com/theaashaychahande" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3">{project.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-medium text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 md:px-10 py-3.5 md:py-4 glass hover:bg-white/10 rounded-full font-bold transition-all border border-white/5 hover:border-[#FF5C00]/30 group text-sm"
          >
            <span className="flex items-center gap-2">
              {showAllProjects ? 'SHOW LESS PROJECTS' : 'SEE ALL THE PROJECTS'}
              <ArrowRight className={`transition-transform duration-300 ${showAllProjects ? '-rotate-90' : 'rotate-90'}`} size={18} />
            </span>
          </button>
        </div>
      </section>

      {/* Skills - Categorized Grid */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-8xl font-bold font-outfit tracking-tighter">TECHNICAL STACK</h2>
          </div>
          <p className="max-w-xs text-gray-500 leading-relaxed text-sm">
            A comprehensive overview of my technical capabilities and the tools I use to build intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skillGroup, idx) => {
            const icons: Record<string, React.ReactNode> = {
              "Languages": <Terminal size={20} />,
              "AI & Machine Learning": <BrainCircuit size={20} />,
              "Mobile & Web": <Layout size={20} />,
              "Data Science": <Database size={20} />,
              "Design & Tools": <Layers size={20} />
            };

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-10 hover:border-[#FF5C00]/30 transition-all group ${
                  idx === 0 || idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#FF5C00]/10 flex items-center justify-center text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-500">
                    {icons[skillGroup.category] || <Cpu size={20} />}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold font-outfit uppercase tracking-wider text-sm">{skillGroup.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all border border-transparent group-hover:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Services - Grid Layout */}
      <section id="services" className="py-24 md:py-32 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Services</span>
              <h2 className="text-4xl md:text-7xl font-bold font-outfit mb-8 md:mb-12 tracking-tight">DELIVERING BESPOKE DIGITAL EXPERIENCES</h2>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { icon: <Layout />, title: "UI/UX Design", desc: "Crafting intuitive and aesthetically pleasing interfaces with a focus on user experience." },
                  { icon: <Smartphone />, title: "App Development", desc: "Building high-performance cross-platform mobile apps using Flutter and Dart." },
                  { icon: <Code />, title: "AI/ML Solutions", desc: "Integrating intelligent features like computer vision and predictive analytics into your software." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl glass flex items-center justify-center text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-500">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{s.title}</h4>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-square border border-white/10 group">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover filter grayscale opacity-50 transition-all group-hover:grayscale-0 group-hover:opacity-100 duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5C00]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 p-6 md:p-10 glass rounded-[1.5rem] md:rounded-[2rem] max-w-xs">
                 <p className="text-[10px] text-[#FF5C00] font-bold uppercase mb-2">Next Gen Tech</p>
                 <p className="font-bold text-lg md:text-xl">Future-proofing your business with cutting edge AI stacks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Research - Split Layout */}
      <section id="education" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Education */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Academic Path</span>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8 md:mb-12 tracking-tighter">EDUCATION</h2>
            <div className="space-y-6 md:space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border-l-4 border-l-[#FF5C00]"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <h4 className="text-lg md:text-xl font-bold">{edu.school}</h4>
                    <span className="text-[10px] font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 whitespace-nowrap">{edu.period}</span>
                  </div>
                  <p className="text-[#FF5C00] font-medium text-sm md:text-base mb-2">{edu.degree}</p>
                  {edu.details && <p className="text-xs md:text-sm text-gray-500 mb-2">{edu.details}</p>}
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">CGPA: {edu.cgpa}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Publications</span>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8 md:mb-12 tracking-tighter">RESEARCH</h2>
            <div className="space-y-6 md:space-y-8">
              {RESEARCH.map((res, idx) => (
                <motion.div 
                  key={res.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF5C00]/10 flex items-center justify-center mb-6 text-[#FF5C00]">
                    <Microscope size={20} />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#FF5C00] transition-colors">{res.title}</h4>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{res.publisher}</p>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">{res.description}</p>
                  <a href={res.link} className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5C00] hover:gap-4 transition-all">
                    READ PAPER <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience - Clean Timeline */}
      <section id="experience" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">CAREER TRAJECTORY</h2>
          <p className="text-gray-500 text-sm md:text-base px-4">A journey through innovation and technical leadership.</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 hover:border-[#FF5C00]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center font-bold text-[#FF5C00] text-sm md:text-base">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#FF5C00] transition-colors">{exp.company}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{exp.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="text-[10px] md:text-xs font-bold bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full uppercase tracking-widest text-gray-400 border border-white/5">
                  {exp.period}
                </span>
                <p className="text-[10px] md:text-xs text-gray-600">Location: {exp.location || 'Remote / Studio'}</p>
              </div>
              
              {/* Added description list */}
              <div className="w-full mt-2 md:hidden group-hover:block transition-all">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-[10px] md:text-xs text-gray-500 flex items-start gap-2 leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-[#FF5C00] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section - Bold & High Impact */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-[#111] to-black p-8 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF5C00]/5 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF5C00] mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-8xl font-bold font-outfit mb-8 md:mb-12 tracking-tighter leading-none">CONTACT<br />FOR WORK</h2>
              
              <div className="space-y-6 md:space-y-8">
                <a href="mailto:aashaychahande1717@gmail.com" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center group-hover:bg-[#FF5C00] transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                    <p className="text-base md:text-xl font-medium break-all sm:break-normal">aashaychahande1717@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+917507666700" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center group-hover:bg-[#FF5C00] transition-colors">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Call Me</p>
                    <p className="text-base md:text-xl font-medium">+91 7507666700</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-base md:text-xl font-medium">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 md:space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-500 ml-4">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 outline-none focus:border-[#FF5C00] transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-500 ml-4">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 outline-none focus:border-[#FF5C00] transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 ml-4">Tell me about your project</label>
                <textarea rows={5} placeholder="Hello Aashay, I have an idea..." className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] px-6 md:px-8 py-4 md:py-6 outline-none focus:border-[#FF5C00] transition-all resize-none text-sm"></textarea>
              </div>
              <button className="w-full py-4 md:py-6 bg-[#FF5C00] text-white font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-base md:text-lg">
                SEND MESSAGE <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF5C00] flex items-center justify-center font-bold text-black text-sm">
              A
            </div>
            <span className="text-lg font-bold font-outfit uppercase tracking-tighter">Aashay Chahande</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="flex gap-4">
            {[
              { Icon: Github, href: "https://github.com/theaashaychahande" },
              { Icon: Linkedin, href: "https://linkedin.com/in/aashaychahande-6928b1310" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" }
            ].map(({ Icon, href }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#FF5C00] hover:border-[#FF5C00]/30 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-12 text-center text-[10px] text-gray-600 uppercase tracking-[0.4em] px-4">
          © {new Date().getFullYear()} AASHAY CHAHANDE — CRAFTED WITH PASSION
        </div>
      </footer>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-black p-10 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl uppercase tracking-tighter">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 rounded-full glass flex items-center justify-center">
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold font-outfit tracking-tighter hover:text-[#FF5C00] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex gap-8">
               <a href="https://github.com/theaashaychahande" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                 <Github size={24} />
               </a>
               <a href="https://linkedin.com/in/aashaychahande-6928b1310" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                 <Linkedin size={24} />
               </a>
               <a href="mailto:aashaychahande1717@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                 <Mail size={24} />
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
