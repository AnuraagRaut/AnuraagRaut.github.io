
import { motion } from 'motion/react'
import './App.css'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  BrainCircuit,
Gauge,
PlugZap,
Rocket,
Smartphone,
Wrench,
} from 'lucide-react'


const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Engineering', href: '#future-engineering' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]



const expertise = [
  {
    number: '01',
    title: 'Mobile Product Engineering',
    description:
      'Building production-ready Android and iOS applications with React Native, TypeScript and a focus on dependable user experiences.',
  },
  {
    number: '02',
    title: 'Architecture & Engineering Ownership',
    description:
      'Taking features from technical planning to production through modular architecture, API integration, performance optimization and reliability improvements.',
  },
  {
    number: '03',
    title: 'AI & Emerging Technologies',
    description:
      'Exploring LLM-powered mobile experiences, AI-assisted development, agentic workflows and intelligent product capabilities.',
  },
]

const experience = [
  {
    type: 'FREELANCE ENGAGEMENT',
    role: 'Senior Mobile Engineer',
    company: 'Independent Client Engagement',
    period: 'May 2026 – Present',
    location: 'Remote',
    description:
      'Independently developing a cross-platform React Native news application, taking ownership of mobile feature planning, architecture, implementation and integration.',
    highlights: [
      'Designing modular, feature-based architecture with reusable components and centralized state management.',
      'Developing mobile workflows for news feeds, category-based browsing, article discovery and content navigation.',
      'Integrating REST APIs using Axios, with centralized request handling, interceptors and error management.',
      'Using Claude-assisted workflows for implementation planning, debugging, code explanation, refactoring and test creation.',
      'Working with Socket.IO to support timely content updates.',
      'Exploring AI-powered experiences, including article summarization and conversational article assistance.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'Senior React Native Developer',
    company: 'iBridge Tech Soft Pvt. Ltd. · Client: TCS',
    product: 'Gulf International Bank — Branchless Digital Banking',
    period: 'Nov 2025 – May 2026',
    location: 'Chennai',
    highlights: [
      'Owned the development and delivery of end-to-end features for a branchless digital banking application.',
      'Implemented biometric authentication using Face ID and Touch ID, alongside IVR customer workflows.',
      'Strengthened mobile security through JWT token management, encrypted local storage and secure API integrations.',
      'Improved application performance by 30–35% through targeted engineering optimizations.',
      'Reduced production crash rates by 20–25%, contributing to a more reliable banking experience.',
      'Collaborated with cross-functional engineering and QA teams across TCS and Infosys in Dubai, Pune and Chennai.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'Senior React Native Developer | Mobile App Lead',
    company: 'Haqdarshak Empowerment Solutions (HESPL)',
    product: 'Government Scheme Discovery & Application',
    period: 'Oct 2023 – Jun 2025',
    location: 'Pune',
    highlights: [
      'Assumed end-to-end ownership of the mobile product following its transition from an external vendor team of 20+ engineers.',
      'Drove mobile architecture decisions, feature delivery, technical improvements and production releases.',
      'Led the migration of a legacy Vue.js application into the primary React Native platform.',
      'Reduced application startup time by 40% and APK size from 67 MB to 45 MB.',
      'Maintained 98%+ crash-free sessions, improving application stability for field users.',
      'Improved API response times by 60–80%, supporting agents operating in low-network environments.',
      'Mentored developers and established modular architecture and code-review practices.',
      'Used Firebase Analytics and field feedback to identify usability issues and drive UX improvements.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'React Native Developer',
    company: 'No Borders Technologies Private Limited',
    product: 'Blockchain & FinTech · NFT Marketplace',
    period: 'Jan 2023 – May 2023',
    location: 'Indore',
    highlights: [
      'Developed React Native features for a platform serving users across five countries.',
      'Built reusable UI components and modular architecture.',
      'Implemented multilingual support using i18n.',
      'Integrated Firebase Crashlytics, Analytics and push notifications.',
      'Optimized rendering, API integration and application stability.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'React Native Developer',
    company: 'Skiarotech Cybernetics Private Limited',
    product: 'Mobile Commerce & Consumer Applications',
    period: 'Nov 2020 – Nov 2022',
    location: 'Nagpur',
    highlights: [
      'Delivered end-to-end features across React Native mobile apps and React.js web applications.',
      'Integrated PCI-compliant payment gateway functionality across Android, iOS and web.',
      'Built reusable components and optimized rendering, navigation and API interactions.',
      'Improved application responsiveness and code consistency across client projects.',
    ],
  },
]



const projects = [
  {
    number: '01',
    name: 'Confidential Product',
    category: 'PRIVATE BUILD',
    description:
      'An independent product initiative focused on shaping a purposeful mobile experience, exploring product direction, engineering architecture and implementation.',
    technologies: [
      'React Native',
      'TypeScript',
      'Mobile Architecture',
      'Product Engineering',
    ],
    highlights: [
      'Exploring product requirements and translating ideas into technical direction.',
      'Structuring the application for maintainability and future feature growth.',
      'Developing the product experience with a focus on usability and engineering quality.',
    ],
    status: 'In development',
  },
  {
    number: '02',
    name: 'News Application',
    category: 'INDEPENDENT MOBILE PRODUCT',
    description:
      'An independently developed cross-platform news application, covering mobile product planning, feature architecture, implementation and backend integration.',
    technologies: [
      'React Native',
      'TypeScript',
      'REST APIs',
      'Axios',
      'Socket.IO',
      'AI Integration Exploration',
    ],
    highlights: [
      'Designing a modular, feature-based architecture with reusable components and centralized state management.',
      'Building news feeds, category-based discovery, article browsing and content navigation workflows.',
      'Integrating REST APIs through centralized Axios configuration, interceptors and error handling.',
      'Working with Socket.IO for real-time content update capabilities.',
      'Exploring AI-powered article summarization and conversational article assistance.',
      'Using AI-assisted development workflows for planning, debugging, refactoring and test creation.',
    ],
    status: 'In development',
  },
]




const technicalExpertise = [
  {
    number: '01',
    title: 'Mobile Architecture & System Design',
    description:
      'Designing modular mobile applications with maintainable architecture, reliable data flows and a growing focus on system design principles.',
    skills: [
      'React Native Architecture',
      'Modular Architecture',
      'Feature-based Design',
      'State Management',
      'Offline-first Systems',
      'Realm',
      'Application Scalability',
      'System Design',
    ],
  },
  {
    number: '02',
    title: 'AI Engineering & Exploration',
    description:
      'Applying AI-assisted development workflows and exploring LLM-powered capabilities, intelligent mobile experiences and agentic concepts.',
    skills: [
      'AI-assisted Development',
      'Claude',
      'GitHub Copilot',
      'LLM Concepts',
      'AI Workflows',
      'Prompt Engineering',
      'Agentic AI Concepts',
      'AI-powered UX',
    ],
  },
  {
    number: '03',
    title: 'Modern Mobile Engineering',
    description:
      'Building production-ready Android and iOS applications with React Native, TypeScript and a focus on performance, security and maintainability.',
    skills: [
      'React Native',
      'TypeScript',
      'JavaScript',
      'Android & iOS',
      'Native Integrations',
      'Performance Engineering',
      'Mobile Security',
      'CI/CD',
    ],
  },
  {
    number: '04',
    title: 'Backend Integration & Reliability',
    description:
      'Integrating mobile applications with backend services while maintaining secure communication, robust error handling and production reliability.',
    skills: [
      'REST APIs',
      'Axios',
      'JWT',
      'Socket.IO',
      'Firebase',
      'API Interceptors',
      'Crashlytics',
      'Debugging',
      'Production Reliability',
    ],
  },
]






function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <main>
       <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={() => setIsMenuOpen(false)}
        >
          ANURAG<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-contact"
          href="mailto:anuragraut.developer@gmail.com"
        >
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      </header>

      <section className="hero container" id="home">
      
      <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="availability">
            <span className="availability-dot" />
            OPEN TO ENGINEERING OPPORTUNITIES & PROJECTS
          </div>

          <div className="hero-identity">
  <span>SENIOR MOBILE ENGINEER</span>
  <span>5+ YEARS EXPERIENCE</span>
  <span>ANDROID · iOS · AI ENGINEERING</span>
</div>
   
<h1>
  Engineering mobile products
  <br />
  <span>for what’s next.</span>
</h1>

<p className="hero-description">
  Senior Mobile Engineer with 5+ years of experience building
  scalable Android and iOS applications. Focused on mobile
  architecture, system design, performance engineering and
  AI-powered development workflows.
</p>

<div className="hero-actions">
  <a className="primary-button" href="#projects">
    Explore my work <ArrowUpRight size={17} />
  </a>

  <a className="text-button" href="#future-engineering">
    Explore my engineering approach <ArrowRight size={17} />
  </a>
</div>


          <div className="hero-socials">
            <a
              href="https://github.com/AnuraagRaut"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.32 3.64 1.62.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.53.4.34.76 1.02.76 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/anuragraut-developer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.94V9.02h2.99v9.48ZM6.44 7.72a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19.06 18.5h-2.99v-4.61c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.69H9.78V9.02h2.87v1.3h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.53 2 3.53 4.6v5.12Z" />
              </svg>
            </a>

            <a href="mailto:anuragraut.developer@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
  className="hero-visual"
  initial={{ opacity: 0, scale: 0.94, y: 18 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
>
  <div className="hero-showcase">
    <div className="showcase-glow" />

    <div className="showcase-heading">
      <span className="showcase-dot" />
      MOBILE ENGINEERING
      <span className="showcase-version">01 / 04</span>
    </div>

    <motion.div
      className="showcase-phone"
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="phone-frame">
        <div className="phone-island" />

        <div className="phone-screen">
          <div className="phone-topline">
            <span>ENGINEERING / SYSTEMS</span>
            <span className="phone-status-dot" />
          </div>

          <div className="phone-intro">
            <small>BUILDING FOR SCALE</small>
            <h3>
              Mobile
              <br />
              experiences<span>.</span>
            </h3>
            <p>Reliable by design. Built to perform.</p>
          </div>

          <div className="phone-feature">
            <div className="feature-icon">01</div>
            <div>
              <strong>Architecture</strong>
              <span>Modular · Scalable</span>
            </div>
            <ArrowUpRight size={17} />
          </div>

          <div className="phone-feature">
            <div className="feature-icon">02</div>
            <div>
              <strong>Performance</strong>
              <span>Optimized · Reliable</span>
            </div>
            <ArrowUpRight size={17} />
          </div>

          <div className="phone-feature">
            <div className="feature-icon">03</div>
            <div>
              <strong>AI experiences</strong>
              <span>Intelligent · Emerging</span>
            </div>
            <ArrowUpRight size={17} />
          </div>

          <div className="phone-bottom">
            <span>ANDROID</span>
            <span>•</span>
            <span>iOS</span>
            <span>•</span>
            <span>REACT NATIVE</span>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="showcase-float showcase-float-top"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="float-label">ENGINEERING IMPACT</span>
      <strong>40%</strong>
      <span className="float-description">Faster app startup</span>
    </motion.div>

    <motion.div
      className="showcase-float showcase-float-bottom"
      animate={{ y: [0, 7, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="float-indicator" />
      <div>
        <strong>98%+</strong>
        <span>Crash-free sessions</span>
      </div>
    </motion.div>

    <div className="showcase-footer">
      <span>BUILDING</span>
      <span>SHIPPING</span>
      <span>IMPROVING</span>
    </div>
  </div>
</motion.div>
      </section>

    
   

      <section className="impact-section section-padding" id="impact">
  <div className="container">
    <div className="impact-heading-row">
      <div className="impact-intro">
        <span className="eyebrow">ENGINEERING CAPABILITIES / 01—08</span>
        <h2>
          More than mobile screens.
          <br />
          <span>End-to-end product engineering.</span>
        </h2>
        <p>
          I think beyond individual features — building mobile products
          that are scalable, reliable, secure and ready for real users.
        </p>
      </div>

      <span className="impact-scroll-hint">
        EXPLORE CAPABILITIES <ArrowRight size={15} />
      </span>
    </div>

    <div className="impact-track">
      {[
        {
          number: '01',
          icon: '◈',
          title: 'Scalable Architecture',
          description:
            'Modular, maintainable application architecture designed to grow with product complexity.',
          tags: 'System Design · Reusability',
        },
        {
          number: '02',
          icon: '↗',
          title: 'Performance Engineering',
          description:
            'Fast startup, smooth interactions, optimized rendering and efficient resource usage.',
          tags: 'Optimization · Responsiveness',
        },
        {
          number: '03',
          icon: '◎',
          title: 'Engaging User Experiences',
          description:
            'Intuitive interfaces, thoughtful interactions and seamless user journeys that keep products easy to use.',
          tags: 'UX · Interaction · Accessibility',
        },
        {
          number: '04',
          icon: '⬡',
          title: 'Secure Mobile Systems',
          description:
            'Authentication, protected local data, secure API communication and dependable application workflows.',
          tags: 'JWT · Biometrics · Security',
        },
        {
          number: '05',
          icon: '⌁',
          title: 'Offline-first Reliability',
          description:
            'Mobile experiences that handle unstable networks, local persistence and dependable data synchronization.',
          tags: 'Realm · Caching · Sync',
        },
        {
          number: '06',
          icon: '⌘',
          title: 'Backend & Real-time Integration',
          description:
            'Connecting mobile applications with REST APIs, real-time services and intelligent backend workflows.',
          tags: 'Axios · Socket.IO · APIs',
        },
        {
          number: '07',
          icon: '↑',
          title: 'Production & Deployment',
          description:
            'Taking features through testing, release preparation, deployment and continuous improvement.',
          tags: 'CI/CD · Android · iOS',
        },
        {
          number: '08',
          icon: '✳',
          title: 'AI-powered Experiences',
          description:
            'Exploring LLM integration, intelligent assistants and AI-driven capabilities for modern products.',
          tags: 'LLMs · AI Workflows · Agents',
        },
      ].map((item) => (
        <article className="impact-capability-card" key={item.number}>
          <div className="capability-card-top">
            <span>{item.number} / 08</span>
            <span className="capability-icon">{item.icon}</span>
          </div>

          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <div className="capability-tags">{item.tags}</div>

          <span className="capability-card-arrow">
            <ArrowUpRight size={19} />
          </span>
        </article>
      ))}
    </div>

    <div className="impact-track-footer">
      <span>ENGINEERED FOR REAL-WORLD PRODUCTS</span>
      <span>ANDROID <i /> iOS <i /> REACT NATIVE <i /> AI</span>
    </div>
  </div>
</section>




      <section className="about-section section-padding" id="about">
        <div className="container">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">01 / ABOUT ME</span>
            <h2>
              Engineering with
              <br />
              <span>purpose and perspective.</span>
            </h2>
          </motion.div>

          <div className="about-content">
          <div className="about-description">
  <p className="about-lead">
    I'm a Senior Mobile Engineer with 5+ years of experience
    building and evolving production-ready Android and iOS
    applications using React Native.
  </p>

  <p>
    My experience spans digital banking, FinTech and GovTech,
    where I've worked on secure transactions, offline-first
    applications, complex integrations and performance-critical
    mobile experiences.
  </p>

  <p>
    I take ownership beyond implementation — translating
    requirements into technical solutions, shaping application
    architecture, integrating APIs, improving reliability and
    delivering features through production.
  </p>

  <p>
    I'm also expanding into AI-native engineering, exploring
    LLM-powered mobile experiences, agentic workflows and
    intelligent automation while strengthening my foundations
    in system design and scalable software architecture.
  </p>
</div>

            <div className="about-expertise">
              {expertise.map((item) => (
                <motion.article
                  className="expertise-item"
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="expertise-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </motion.article>
              ))}
            </div>
          </div>
        </div>

     
      <section
        className="projects-section section-padding"
        id="projects"
      >
        <div className="container">
          <motion.div
            className="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">03 / SELECTED PROJECTS</span>
            <h2>
              Ideas turned into
              <br />
              <span>real products.</span>
            </h2>
            <p>
  Selected mobile engineering work, independent builds and
  product experiences shaped through thoughtful engineering.
</p>
          </motion.div>

     

          <div className="projects-list">
  {projects.map((project) => (
    <motion.article
      className={`project-item ${project.number === '01' ? 'project-item--private' : ''}`}
      key={project.number}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-topline">
        <span>{project.category}</span>
        <span>/{project.number}</span>
      </div>

      {project.number === '01' && (
        <div className="private-project-preview">
          <div className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <div className="preview-block preview-block-large" />
              <div className="preview-block preview-block-medium" />
              <div className="preview-block preview-block-small" />
              <div className="preview-cards">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="preview-overlay">
              <span className="preview-loader" />
              <span>Something is taking shape</span>
              <small>PRIVATE BUILD · COMING SOON</small>
            </div>
          </div>
        </div>
      )}

      <div className="project-content">
        <div className="project-main">
          <div className="project-title-row">
            <h3>{project.name}</h3>
            <span className="project-status">{project.status}</span>
          </div>

          <p className="project-description">
            {project.description}
          </p>
        </div>

        {project.highlights.length > 0 && (
          <div className="project-details">
            <span className="project-details-label">
              ENGINEERING CONTRIBUTIONS
            </span>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies.length > 0 && (
          <div className="project-technologies">
            <span className="project-details-label">
              TECHNOLOGY & CAPABILITIES
            </span>
            <div className="project-tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  ))}
</div>


        </div>
      </section>

   
      </section>

      <section
        className="expertise-section section-padding"
        id="expertise"
      >
        <div className="container">
          <motion.div
            className="expertise-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">04 / TECHNICAL EXPERTISE</span>
            <h2>
              Strong foundations.
              <br />
              <span>Thoughtful engineering.</span>
            </h2>
            <p>
              The technologies, tools and engineering practices I use
              to build dependable mobile products.
            </p>
          </motion.div>

          <div className="expertise-grid">
            {technicalExpertise.map((group) => (
              <motion.article
                className="expertise-card"
                key={group.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="expertise-card-top">
                  <span>{group.number}</span>
                  <span className="expertise-card-line" />
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="expertise-skills">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


<section className="future-section section-padding" id="future-engineering">
  <div className="container">
    <motion.div
      className="future-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">05 / ENGINEERING BEYOND MOBILE</span>
      <h2>
        Building for the
        <br />
        <span>next era of software.</span>
      </h2>
      <p>
        Mobile engineering is evolving. I am expanding beyond
        traditional app development into AI-native products,
        intelligent workflows and scalable software systems.
      </p>
    </motion.div>

    <div className="future-grid">
      {[
        {
          number: '01',
          title: 'AI-Native Development',
          description:
            'Integrating LLM capabilities into mobile experiences and using AI-assisted workflows to accelerate engineering.',
          tags: ['LLMs', 'AI Integration', 'AI Workflows'],
        },
        {
          number: '02',
          title: 'Agentic Systems & Automation',
          description:
            'Exploring intelligent agents, tool calling, workflow orchestration and automation for software engineering.',
          tags: ['AI Agents', 'Tool Calling', 'Orchestration'],
        },
        {
          number: '03',
          title: 'System Design & Scalability',
          description:
            'Thinking beyond individual screens: designing reliable architectures, distributed systems and scalable applications.',
          tags: ['System Design', 'Architecture', 'Scalability'],
        },
        {
          number: '04',
          title: 'Next-Generation Mobile',
          description:
            'Bringing together mobile platforms, real-time systems and intelligent experiences to create more capable applications.',
          tags: ['React Native', 'Real-time Systems', 'Intelligent UX'],
        },
      ].map((item) => (
        <motion.article
          className="future-card"
          key={item.number}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="future-number">{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="future-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>



      <section className="services-section section-padding" id="services">
        <div className="container">
          <motion.div
            className="services-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">HOW I CAN HELP</span>
            <h2>
              From an idea to a
              <span> production-ready product.</span>
            </h2>
            <p>
              I help founders, businesses and teams turn ideas into reliable
              mobile experiences — from the first build to scaling an existing
              application.
            </p>
          </motion.div>

          <div className="services-grid">
            {[
              {
                number: '01',
                icon: Smartphone,
                title: 'Mobile App Development',
                description:
                  'Custom Android and iOS applications built with React Native, TypeScript and scalable architecture.',
              },
              {
                number: '02',
                icon: Rocket,
                title: 'MVP & Product Development',
                description:
                  'Turn your product idea into a working mobile experience, with practical architecture and room to grow.',
              },
              {
                number: '03',
                icon: Gauge,
                title: 'Performance & Optimization',
                description:
                  'Improve app speed, stability, startup time, responsiveness and overall user experience.',
              },
              {
                number: '04',
                icon: PlugZap,
                title: 'API & Backend Integration',
                description:
                  'Connect mobile apps with REST APIs, authentication, payments, real-time services and third-party platforms.',
              },
              {
                number: '05',
                icon: BrainCircuit,
                title: 'AI-powered Mobile Experiences',
                description:
                  'Integrate AI capabilities such as intelligent assistants, content summarization and conversational features.',
              },
              {
                number: '06',
                icon: Wrench,
                title: 'Maintenance & Engineering Support',
                description:
                  'Modernize existing React Native apps, resolve technical issues and improve long-term maintainability.',
              },
            ].map((service, index) => (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="service-card-top">
                <span className="service-icon">
  <service.icon size={23} strokeWidth={1.8} />
</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow">↗</span>
              </motion.article>
            ))}
          </div>

          {/* <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h3>Let's build something meaningful.</h3>
              <p>
                Tell me what you're working on. Let's explore how I can help.
              </p>
            </div>
            <a href="#contact" className="services-cta-button">
              Work With Me <span>↗</span>
            </a>
          </motion.div> */}
        </div>
      </section>


      <section
        className="experience-section section-padding"
        id="experience"
      >
        <div className="container">
          <motion.div
            className="experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">02 / EXPERIENCE</span>
            <h2>
              Building products,
              <br />
              <span>solving real problems.</span>
            </h2>
            <p>
  5+ years of hands-on mobile engineering across digital
  banking, FinTech, GovTech, blockchain and consumer
  applications — building production products, owning
  complex features and improving performance, reliability
  and user experiences.
</p>
          </motion.div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <motion.article
                className="experience-item"
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <div className="experience-meta">
                  <span className="experience-type">{item.type}</span>
                  <span className="experience-period">{item.period}</span>
                </div>

                <div className="experience-details">
                  <div className="experience-title-row">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="experience-company">
                        {item.company}
                      </p>
                    </div>

                    <span className="experience-location">
                      {item.location}
                    </span>
                  </div>

                  {item.product && (
                    <p className="experience-product">
                      {item.product}
                    </p>
                  )}

                  {item.description && (
                    <p className="experience-description">
                      {item.description}
                    </p>
                  )}

                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <span className="experience-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

   
      <section
        className="contact-section section-padding"
        id="contact"
      >
        <div className="container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">LET'S CONNECT</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it happen.</span>
            </h2>

            <p>
              Whether you're building a product, looking for an experienced
              mobile engineer, or exploring a new opportunity, I'd love to
              hear what you're working on.
            </p>

            <div className="contact-options">
              <a
                href="mailto:anuragraut.developer@gmail.com?subject=Mobile%20App%20Project%20Enquiry"
                className="contact-option"
              >
                <span className="contact-option-label">FOR CLIENTS & FOUNDERS</span>
                <strong>Let's build your product</strong>
                <span className="contact-option-action">
                  Discuss a project <ArrowUpRight size={17} />
                </span>
              </a>

              <a
                href="mailto:anuragraut.developer@gmail.com?subject=Career%20Opportunity"
                className="contact-option"
              >
                <span className="contact-option-label">FOR RECRUITERS & TEAMS</span>
                <strong>Let's work together</strong>
                <span className="contact-option-action">
                  Explore opportunities <ArrowUpRight size={17} />
                </span>
              </a>
            </div>

            <div className="contact-bottom">
              <a
                href="mailto:anuragraut.developer@gmail.com"
                className="contact-email-link"
              >
                anuragraut.developer@gmail.com
                <ArrowUpRight size={18} />
              </a>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/anuragraut-developer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://github.com/AnuraagRaut"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     
   
<footer className="site-footer">
  <div className="container footer-content">
    <div className="footer-main">
      <div className="footer-identity">
        <a className="brand footer-brand" href="#home">
          ANURAG<span>.</span>
        </a>
        <p>Senior Mobile Engineer</p>
        <span>Engineering thoughtful products for Android, iOS & beyond.</span>
      </div>

      <div className="footer-navigation">
        <span className="footer-label">EXPLORE</span>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#expertise">Engineering</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-connect">
        <span className="footer-label">LET'S CONNECT</span>
        <a href="mailto:anuragraut.developer@gmail.com">
          Email me <ArrowUpRight size={15} />
        </a>
        <a href="https://www.linkedin.com/in/anuragraut-developer/" target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={15} />
        </a>
        <a href="https://github.com/AnuraagRaut" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Anurag Raut. All rights reserved.</span>
      <a href="#home">Back to top ↑</a>
    </div>
  </div>
</footer>


    </main>
  )
}

export default App
