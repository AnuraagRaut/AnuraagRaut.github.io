import { motion } from 'motion/react'
import './App.css'
import { useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Download,
  Gauge,
  Mail,
  MapPin,
  Menu,
  PlugZap,
  Rocket,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wrench,
  X,
} from 'lucide-react'

const resumeUrl = '/Anurag-Raut-Resume.pdf'

const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const impactMetrics = [
  {
    icon: Gauge,
    value: '30–35%',
    label: 'Performance improvement',
    detail: 'Digital banking client app',
  },
  {
    icon: ShieldCheck,
    value: '98%+',
    label: 'Crash-free sessions',
    detail: 'GovTech field application',
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Faster app startup',
    detail: 'Legacy app migration',
  },
  {
    icon: CheckCircle2,
    value: '67→45 MB',
    label: 'Smaller APK',
    detail: 'Mobile footprint reduction',
  },
]

const expertise = [
  {
    number: '01',
    title: 'Mobile Product Engineering',
    description:
      'Production-ready Android and iOS applications with React Native, TypeScript and a strong focus on reliability.',
  },
  {
    number: '02',
    title: 'Architecture & Ownership',
    description:
      'From planning to production: modular architecture, API integration, performance work and release ownership.',
  },
  {
    number: '03',
    title: 'AI-Assisted Delivery',
    description:
      'Practical use of AI workflows for planning, debugging, refactoring and test creation, plus LLM feature exploration.',
  },
]

const experience = [
  {
    type: 'FREELANCE ENGAGEMENT',
    role: 'Senior Mobile Engineer',
    company: 'Independent Client Engagement',
    product: 'Cross-platform News Product',
    period: 'May 2026 – Present',
    location: 'Remote',
    description:
      'Own mobile planning, architecture, implementation and integration for an independent news product.',
    highlights: [
      'Designing modular, feature-based architecture with reusable components and centralized state management.',
      'Building news feeds, category browsing, article discovery and content navigation workflows.',
      'Integrating REST APIs with Axios interceptors and centralized error handling.',
      'Using Socket.IO for timely content updates and exploring AI article summarization.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'Senior React Native Developer',
    company: 'iBridge Tech Soft Pvt. Ltd. · Client: TCS',
    product: 'Gulf International Bank — Branchless Digital Banking',
    period: 'Nov 2025 – May 2026',
    location: 'Chennai',
    description:
      'Delivered end-to-end features for a secure branchless digital banking application.',
    highlights: [
      'Owned feature delivery from technical planning through production release.',
      'Implemented biometric authentication with Face ID and Touch ID, plus IVR customer workflows.',
      'Strengthened security with JWT management, encrypted local storage and secure API integrations.',
      'Improved application performance by 30–35% through targeted engineering optimizations.',
      'Reduced production crash rates by 20–25% and partnered with QA teams across TCS and Infosys.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'Senior React Native Developer | Mobile App Lead',
    company: 'Haqdarshak Empowerment Solutions (HESPL)',
    product: 'Government Scheme Discovery & Application',
    period: 'Oct 2023 – Jun 2025',
    location: 'Pune',
    description:
      'Led mobile architecture and delivery for a field-use GovTech platform after vendor handover.',
    highlights: [
      'Took end-to-end ownership following transition from an external team of 20+ engineers.',
      'Led migration of a legacy Vue.js application into the primary React Native platform.',
      'Reduced startup time by 40% and APK size from 67 MB to 45 MB.',
      'Maintained 98%+ crash-free sessions and improved API response times by 60–80%.',
      'Mentored developers and established modular architecture and code-review practices.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'React Native Developer',
    company: 'No Borders Technologies Private Limited',
    product: 'Blockchain & FinTech · NFT Marketplace',
    period: 'Jan 2023 – May 2023',
    location: 'Indore',
    description:
      'Built cross-platform marketplace features for users across five countries.',
    highlights: [
      'Delivered React Native features with reusable components and modular architecture.',
      'Implemented multilingual support with i18n.',
      'Integrated Firebase Crashlytics, Analytics and push notifications.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'React Native Developer',
    company: 'Skiarotech Cybernetics Private Limited',
    product: 'Mobile Commerce & Consumer Applications',
    period: 'Nov 2020 – Nov 2022',
    location: 'Nagpur',
    description:
      'Delivered mobile and web features across client commerce applications.',
    highlights: [
      'Built end-to-end features across React Native apps and React.js web applications.',
      'Integrated PCI-compliant payment gateways across Android, iOS and web.',
      'Improved rendering, navigation, API interactions and code consistency.',
    ],
  },
]

const projects = [
  {
    number: '01',
    name: 'Branchless Digital Banking',
    category: 'SHIPPED · CONFIDENTIAL CLIENT',
    client: 'iBridge Tech Soft · TCS engagement',
    description:
      'Secure mobile banking product built for branchless customer operations and assisted workflows.',
    technologies: [
      'React Native',
      'TypeScript',
      'Biometrics',
      'JWT',
      'Encrypted Storage',
      'REST APIs',
    ],
    highlights: [
      'Owned feature delivery from planning through production release.',
      'Implemented Face ID, Touch ID and IVR-assisted customer workflows.',
      'Secured local data and API communication with JWT and encrypted storage.',
      'Delivered 30–35% performance gains and 20–25% fewer production crashes.',
    ],
    status: 'Shipped',
  },
  {
    number: '02',
    name: 'Government Scheme Discovery',
    category: 'SHIPPED · GOVTECH',
    client: 'Haqdarshak Empowerment Solutions',
    description:
      'Field-use mobile platform helping agents discover, explain and apply for government schemes.',
    technologies: [
      'React Native',
      'Vue Migration',
      'Offline-first',
      'Firebase',
      'REST APIs',
      'Mentoring',
    ],
    highlights: [
      'Took ownership after handover from a 20+ engineer vendor team.',
      'Migrated the legacy Vue.js app into the primary React Native platform.',
      'Cut startup time 40% and APK size from 67 MB to 45 MB.',
      'Held 98%+ crash-free sessions and improved API response times by 60–80%.',
    ],
    status: 'Shipped',
  },
  {
    number: '03',
    name: 'Blockchain & FinTech Marketplace',
    category: 'SHIPPED · FINTECH',
    client: 'No Borders Technologies',
    description:
      'Cross-platform NFT marketplace experience supporting users across five countries.',
    technologies: [
      'React Native',
      'i18n',
      'Firebase',
      'Reusable UI',
      'API Integration',
    ],
    highlights: [
      'Delivered React Native features for a five-country user base.',
      'Built reusable components and modular architecture.',
      'Added multilingual support with i18n.',
      'Integrated Crashlytics, Analytics and push notifications.',
    ],
    status: 'Shipped',
  },
  {
    number: '04',
    name: 'AI-Assisted News Application',
    category: 'INDEPENDENT · IN DEVELOPMENT',
    client: 'Self-initiated product',
    description:
      'Cross-platform news product exploring real-time updates and AI-assisted reading.',
    technologies: [
      'React Native',
      'TypeScript',
      'Axios',
      'Socket.IO',
      'LLM Exploration',
    ],
    highlights: [
      'Designed modular, feature-based architecture with centralized state management.',
      'Built news feeds, category browsing and article discovery workflows.',
      'Created a centralized REST API layer with interceptors and error handling.',
      'Exploring Socket.IO updates and AI article summarization.',
    ],
    status: 'In development',
  },
]

const technicalExpertise = [
  {
    number: '01',
    title: 'Mobile Architecture & System Design',
    description:
      'Modular, maintainable app architecture with reliable data flows and production-ready structure.',
    skills: [
      'React Native Architecture',
      'Modular Architecture',
      'Feature-based Design',
      'State Management',
      'Offline-first Systems',
      'Realm',
      'Application Scalability',
    ],
  },
  {
    number: '02',
    title: 'Modern Mobile Engineering',
    description:
      'Android and iOS delivery with React Native and TypeScript, tuned for speed, security and stability.',
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
    number: '03',
    title: 'Backend Integration & Reliability',
    description:
      'Secure API communication, resilient error handling and production reliability for mobile clients.',
    skills: [
      'REST APIs',
      'Axios',
      'JWT',
      'Socket.IO',
      'Firebase',
      'API Interceptors',
      'Crashlytics',
      'Debugging',
    ],
  },
  {
    number: '04',
    title: 'AI-Assisted Engineering',
    description:
      'Practical AI workflows for faster delivery, plus hands-on exploration of LLM-powered mobile features.',
    skills: [
      'AI-assisted Development',
      'Claude',
      'GitHub Copilot',
      'LLM Concepts',
      'Prompt Engineering',
      'Agentic AI Concepts',
      'AI-powered UX',
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

        <div className="nav-actions">
          <a
            className="nav-resume"
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
          >
            <Download size={15} />
            Résumé
          </a>

          <a
            className="nav-contact"
            href="mailto:anuragraut.developer@gmail.com?subject=Senior%20Mobile%20Engineer%20Opportunity"
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>

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

          <a
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
          >
            Download résumé
            <Download size={16} />
          </a>
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
            OPEN TO SENIOR REACT NATIVE & MOBILE ENGINEER ROLES
          </div>

          <div className="hero-location">
            <MapPin size={14} />
            India · UTC+5:30 · Open to remote and hybrid teams
          </div>

          <div className="hero-identity">
            <span>SENIOR MOBILE ENGINEER</span>
            <span>5+ YEARS PRODUCTION EXPERIENCE</span>
            <span>ANDROID · iOS · REACT NATIVE</span>
          </div>

          <h1>
            Senior React Native engineer
            <br />
            <span>for products that scale.</span>
          </h1>

          <p className="hero-description">
            5+ years shipping production Android and iOS apps across digital
            banking, FinTech and GovTech. I own architecture, performance and
            delivery — from first commit to production release.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#experience">
              View experience <ArrowUpRight size={17} />
            </a>

            <a
              className="text-button"
              href={resumeUrl}
              download="Anurag-Raut-Resume.pdf"
            >
              <Download size={16} />
              Download résumé
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
              SENIOR MOBILE ENGINEER
              <span className="showcase-version">01 / 05</span>
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
                    <span>MOBILE / ARCHITECTURE</span>
                    <span className="phone-status-dot" />
                  </div>

                  <div className="phone-intro">
                    <small>BUILT FOR PRODUCTION</small>
                    <h3>
                      Mobile
                      <br />
                      products<span>.</span>
                    </h3>
                    <p>Architecture. Performance. Delivery.</p>
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
                      <span>Fast · Reliable</span>
                    </div>
                    <ArrowUpRight size={17} />
                  </div>

                  <div className="phone-feature">
                    <div className="feature-icon">03</div>
                    <div>
                      <strong>Delivery</strong>
                      <span>Owned · Shipped</span>
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
              <span className="float-label">STARTUP IMPROVEMENT</span>
              <strong>40%</strong>
              <span className="float-description">Faster app launch</span>
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

      <section className="proof-section" aria-label="Measured engineering impact">
        <div className="container">
          <div className="proof-heading">
            <span>MEASURED IMPACT ACROSS RECENT ROLES</span>
            <span>5+ YEARS · PRODUCTION MOBILE</span>
          </div>

          <div className="proof-grid">
            {impactMetrics.map((metric) => (
              <div className="proof-item" key={metric.label}>
                <span className="proof-icon">
                  <metric.icon size={17} strokeWidth={1.9} />
                </span>
                <strong>{metric.value}</strong>
                <span className="proof-label">{metric.label}</span>
                <span className="proof-detail">{metric.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-padding" id="experience">
        <div className="container">
          <motion.div
            className="experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">01 / EXPERIENCE</span>
            <h2>
              Shipped work.
              <br />
              <span>Owned outcomes.</span>
            </h2>
            <p>
              5+ years across digital banking, FinTech, GovTech and consumer
              apps. I take features from planning to production and stay
              accountable for performance, stability and delivery.
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
                transition={{ duration: 0.6, delay: 0.04 }}
              >
                <div className="experience-meta">
                  <span className="experience-type">{item.type}</span>
                  <span className="experience-period">{item.period}</span>
                </div>

                <div className="experience-details">
                  <div className="experience-title-row">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="experience-company">{item.company}</p>
                    </div>

                    <span className="experience-location">
                      {item.location}
                    </span>
                  </div>

                  {item.product && (
                    <p className="experience-product">{item.product}</p>
                  )}

                  {item.description && (
                    <p className="experience-description">{item.description}</p>
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

          <div className="experience-footer">
            <a
              href={resumeUrl}
              download="Anurag-Raut-Resume.pdf"
              className="text-button"
            >
              <Download size={16} />
              Download full résumé
            </a>
            <span>References and detailed project context available on request.</span>
          </div>
        </div>
      </section>

      <section className="projects-section section-padding" id="work">
        <div className="container">
          <motion.div
            className="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">02 / SELECTED WORK</span>
            <h2>
              Products, not
              <br />
              <span>just screens.</span>
            </h2>
            <p>
              A closer look at shipped products and one independent build —
              with the engineering decisions and measurable results behind them.
            </p>
          </motion.div>

          <div className="projects-list">
            {projects.map((project) => (
              <motion.article
                className="project-item"
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

                <div className="project-content">
                  <div className="project-main">
                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <p className="project-client">{project.client}</p>

                    <p className="project-description">{project.description}</p>
                  </div>

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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section section-padding" id="skills">
        <div className="container">
          <motion.div
            className="expertise-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">03 / TECHNICAL EXPERTISE</span>
            <h2>
              Deep in mobile.
              <br />
              <span>Broad enough to own the product.</span>
            </h2>
            <p>
              The tools and engineering practices I use to build dependable
              mobile products — from architecture and performance to secure
              integrations and AI-assisted delivery.
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

      <section className="about-section section-padding" id="about">
        <div className="container">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">04 / ABOUT ME</span>
            <h2>
              Engineer who
              <br />
              <span>owns the outcome.</span>
            </h2>
          </motion.div>

          <div className="about-content">
            <div className="about-description">
              <p className="about-lead">
                I'm a Senior Mobile Engineer with 5+ years building and
                evolving production Android and iOS applications with React
                Native.
              </p>

              <p>
                My experience spans digital banking, FinTech and GovTech —
                secure transactions, offline-first apps, complex integrations
                and performance-critical mobile workflows.
              </p>

              <p>
                I take ownership beyond implementation: translating
                requirements into technical solutions, shaping architecture,
                improving reliability and shipping through production.
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
            <span className="eyebrow">05 / SERVICES</span>
            <h2>
              Also available for
              <span> focused product engagements.</span>
            </h2>
            <p>
              Alongside full-time roles, I help founders and teams turn ideas
              into reliable mobile products — from first build to scaling an
              existing app.
            </p>
          </motion.div>

          <div className="services-grid">
            {[
              {
                number: '01',
                icon: Smartphone,
                title: 'Mobile App Development',
                description:
                  'Custom Android and iOS apps with React Native, TypeScript and scalable architecture.',
              },
              {
                number: '02',
                icon: Rocket,
                title: 'MVP & Product Development',
                description:
                  'Turn an idea into a working mobile product with practical architecture and room to grow.',
              },
              {
                number: '03',
                icon: Gauge,
                title: 'Performance & Optimization',
                description:
                  'Improve startup time, stability, responsiveness and overall user experience.',
              },
              {
                number: '04',
                icon: PlugZap,
                title: 'API & Backend Integration',
                description:
                  'Connect apps with REST APIs, authentication, payments, real-time services and third-party platforms.',
              },
              {
                number: '05',
                icon: BrainCircuit,
                title: 'AI-powered Mobile Features',
                description:
                  'Add intelligent assistants, summarization and conversational capabilities to mobile products.',
              },
              {
                number: '06',
                icon: Wrench,
                title: 'Maintenance & Support',
                description:
                  'Modernize existing React Native apps, resolve technical issues and improve maintainability.',
              },
            ].map((service, index) => (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
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
        </div>
      </section>

      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">06 / LET'S TALK</span>

            <h2>
              Looking for a senior
              <br />
              <span>mobile engineer?</span>
            </h2>

            <p>
              I'm open to Senior React Native and Mobile Engineer roles, and I
              also take on focused product engagements. Tell me what you're
              building — or what you need help shipping.
            </p>

            <div className="contact-options">
              <a
                href="mailto:anuragraut.developer@gmail.com?subject=Senior%20Mobile%20Engineer%20Opportunity"
                className="contact-option"
              >
                <span className="contact-option-label">FOR RECRUITERS & TEAMS</span>
                <strong>Let's talk about the role</strong>
                <span className="contact-option-action">
                  Explore opportunities <ArrowUpRight size={17} />
                </span>
              </a>

              <a
                href="mailto:anuragraut.developer@gmail.com?subject=Mobile%20App%20Project%20Enquiry"
                className="contact-option"
              >
                <span className="contact-option-label">FOR FOUNDERS & CLIENTS</span>
                <strong>Let's build your product</strong>
                <span className="contact-option-action">
                  Discuss a project <ArrowUpRight size={17} />
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
                  href={resumeUrl}
                  download="Anurag-Raut-Resume.pdf"
                >
                  Résumé <Download size={14} />
                </a>

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
              <span>React Native · Architecture · Performance · Delivery.</span>
            </div>

            <div className="footer-navigation">
              <span className="footer-label">EXPLORE</span>
              <div className="footer-links">
                {navigation.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-connect">
              <span className="footer-label">LET'S CONNECT</span>
              <a href="mailto:anuragraut.developer@gmail.com">
                Email me <ArrowUpRight size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/anuragraut-developer/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={15} />
              </a>
              <a
                href="https://github.com/AnuraagRaut"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
              <a href={resumeUrl} download="Anurag-Raut-Resume.pdf">
                Résumé <Download size={15} />
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
