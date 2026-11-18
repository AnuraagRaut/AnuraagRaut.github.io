
import { motion } from 'motion/react'
import './App.css'
import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import heroAbstract from './assets/images/hero-abstract.png'


const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]


const expertise = [
  {
    number: '01',
    title: 'Mobile Engineering',
    description:
      'Building cross-platform applications for Android and iOS using React Native and TypeScript.',
  },
  {
    number: '02',
    title: 'Performance & Architecture',
    description:
      'Creating maintainable application structures, improving app performance and handling complex workflows.',
  },
  {
    number: '03',
    title: 'Real-world Products',
    description:
      'Experience across digital banking, FinTech and GovTech products, including offline-first mobile experiences.',
  },
]

const experience = [
  {
    type: 'INDEPENDENT WORK',
    role: 'Freelance React Native Developer',
    company: 'Independent · No Bias Media',
    period: 'May 2026 – Present',
    location: 'Remote',
    description:
      'Independently developing a React Native news application with end-to-end ownership of mobile engineering.',
    highlights: [
      'Planning and implementing mobile features, application architecture and API integrations.',
      'Building modular architecture with reusable components and centralized state management.',
      'Integrating REST APIs using Axios, interceptors and structured error handling.',
      'Exploring Socket.IO for real-time content updates and AI-powered article experiences.',
      'Using AI-assisted workflows for implementation planning, debugging, refactoring and test creation.',
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
      'Designed and delivered end-to-end digital banking features.',
      'Implemented biometric authentication, IVR customer flows, JWT token management and encrypted local storage.',
      'Improved performance by 30–35% through targeted optimization.',
      'Reduced production crash rates by 20–25%.',
      'Coordinated with development and testing teams across TCS and Infosys.',
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
      'Took end-to-end ownership of the product after transition from a 20+ engineer external vendor team.',
      'Led architecture decisions, feature development and production releases.',
      'Led migration of a legacy Vue.js application into the main React Native platform.',
      'Reduced app startup time by 40% and APK size from 67 MB to 45 MB.',
      'Sustained 98%+ crash-free sessions.',
      'Improved API response times by 60–80% for agents working in low-network environments.',
      'Mentored developers and introduced modular architecture and code-review standards.',
      'Used Firebase Analytics and field feedback to drive UX improvements.',
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
    name: 'AhaVera',
    category: 'INDEPENDENT PRODUCT',
    description:
      'An adaptive personal growth application designed to help people clear their minds, build better habits and move forward. Built with a modular, Android-first architecture and iOS compatibility.',
    technologies: [
      'React Native',
      'TypeScript',
      'React Native CLI',
      'Redux',
      'Mappls',
    ],
    highlights: [
      'Building reusable, modular architecture for a multi-feature mobile product.',
      'Developing meditation, assessments and creative expression experiences.',
      'Designing Pathik, an integrated travel companion with map-based journey planning.',
      'Prioritizing performance, maintainability and a consistent cross-platform experience.',
    ],
    status: 'In development',
  },
  {
    number: '02',
    name: 'No Bias Media',
    category: 'INDEPENDENT PRODUCT',
    description:
      'A React Native news application focused on timely content, real-time updates and AI-assisted content exploration through a modular, API-driven architecture.',
    technologies: [
      'React Native',
      'TypeScript',
      'Axios',
      'Socket.IO',
      'Claude AI',
    ],
    highlights: [
      'Owning mobile feature planning, architecture and end-to-end implementation.',
      'Integrating REST APIs with centralized request handling and error management.',
      'Exploring real-time content updates using Socket.IO.',
      'Exploring AI-powered article summaries and conversational article assistance.',
    ],
    status: 'In development',
  },
  {
    number: '03',
    name: 'Enterprise Digital Banking',
    category: 'PROFESSIONAL CASE STUDY',
    description:
      'Contributed to a large-scale digital banking application, delivering secure mobile banking capabilities across Android and iOS in an enterprise environment.',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux',
      'JWT',
      'Secure Storage',
      'REST APIs',
    ],
    highlights: [
      'Implemented Face ID and Touch ID authentication flows.',
      'Worked on secure API integrations, JWT authentication and encrypted local data.',
      'Delivered banking features involving IVR and backend service integrations.',
      'Contributed to 30–35% performance improvement and a 20–25% reduction in production crash rates.',
    ],
    status: 'Production experience',
  },
  {
    number: '04',
    name: 'Haqdarshak Benefits Platform',
    category: 'PROFESSIONAL CASE STUDY',
    description:
      'Helped evolve a government benefits discovery and application platform used by field agents, with a focus on offline reliability, performance and long-term mobile application ownership.',
    technologies: [
      'React Native',
      'TypeScript',
      'Realm',
      'Redux',
      'Firebase',
      'REST APIs',
    ],
    highlights: [
      'Took ownership of the mobile application following its transition from an external development vendor.',
      'Reduced APK size from 67 MB to 45 MB.',
      'Improved application startup time by approximately 40%.',
      'Maintained 98%+ crash-free performance and improved API response times by 60–80%.',
      'Mentored junior developers and improved application maintainability.',
    ],
    status: 'Production experience',
  },
]



const technicalExpertise = [
  {
    number: '01',
    title: 'Mobile Engineering',
    description:
      'Building production-ready cross-platform applications with a focus on user experience, reliability and performance.',
    skills: [
      'React Native',
      'TypeScript',
      'JavaScript',
      'Android',
      'iOS',
      'React.js',
      'React Native CLI',
    ],
  },
  {
    number: '02',
    title: 'Architecture & State',
    description:
      'Structuring maintainable applications with predictable state, modular boundaries and offline-first capabilities.',
    skills: [
      'Redux',
      'Context API',
      'Modular Architecture',
      'Feature-based Design',
      'Offline-first',
      'Realm',
    ],
  },
  {
    number: '03',
    title: 'APIs & Integrations',
    description:
      'Building dependable mobile integrations with secure authentication, centralized networking and real-time services.',
    skills: [
      'REST APIs',
      'Axios',
      'JWT',
      'Socket.IO',
      'Firebase',
      'API Interceptors',
      'Secure Storage',
    ],
  },
  {
    number: '04',
    title: 'Quality & Engineering',
    description:
      'Improving production reliability, optimizing application performance and streamlining engineering delivery.',
    skills: [
      'Performance Optimization',
      'Debugging',
      'Crashlytics',
      'Git',
      'CI/CD',
      'Code Reviews',
      'GitHub Copilot',
      'Claude',
    ],
  },
]





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <main>
        <header className="navbar container">
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

          <h1>
            I build mobile
            <br />
            products that
            <br />
            <span>make an impact.</span>
          </h1>

          <p className="hero-description">
            I'm Anurag Raut, a Senior React Native Engineer with 5+ years
            of experience building reliable, scalable Android and iOS
            applications across FinTech, digital banking and GovTech.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a className="text-button" href="#services">
              What I can build <ArrowRight size={17} />
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
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
  <img
  className="hero-abstract-image"
  src={heroAbstract}
  alt="Abstract illustration representing mobile engineering and technology"
/>

          <div className="visual-caption">
            <span>BASED IN INDIA</span>
            <span>MOBILE ENGINEERING · PRODUCT THINKING</span>
          </div>

          <div className="floating-mark">
            <ArrowDown size={20} />
          </div>
        </motion.div>
      </section>

    
      <section className="impact-strip" id="impact">
        <div className="container">
          <div className="impact-heading">
            <span className="eyebrow">ENGINEERING IMPACT</span>
            <p>Measurable improvements. Real-world engineering.</p>
          </div>

          <div className="impact-grid">
            <motion.div
              className="impact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <strong>40%</strong>
              <span>Faster app startup</span>
              {/* <small>Haqdarshak</small> */}
            </motion.div>

            <motion.div
              className="impact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <strong>67 → 45 MB</strong>
              <span>APK size reduction</span>
              {/* <small>Haqdarshak</small> */}
            </motion.div>

            <motion.div
              className="impact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>98%+</strong>
              <span>Crash-free performance</span>
              {/* <small>Haqdarshak</small> */}
            </motion.div>

            <motion.div
              className="impact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <strong>30–35%</strong>
              <span>Performance improvement</span>
              {/* <small>Digital Banking</small> */}
            </motion.div>
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
  I'm a Senior React Native Engineer with 5+ years of experience
  building and evolving mobile applications across Android and iOS.
</p>

<p>
  My experience spans digital banking, FinTech and GovTech, from
  secure financial workflows to offline-first applications built
  for challenging network conditions.
</p>

<p>
  I bring an ownership mindset to mobile engineering — taking
  features from requirements through architecture, implementation,
  performance optimization and production delivery.
</p>

<p>
  Beyond feature development, I care about scalable architecture,
  application reliability, maintainable code and building products
  that solve real user problems.
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
              Independent products where I explore product thinking,
              mobile architecture and emerging technologies.
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
                  <span>{project.number}</span>
                </div>

                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
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
                icon: '📱',
                title: 'Mobile App Development',
                description:
                  'Custom Android and iOS applications built with React Native, TypeScript and scalable architecture.',
              },
              {
                number: '02',
                icon: '🚀',
                title: 'MVP & Product Development',
                description:
                  'Turn your product idea into a working mobile experience, with practical architecture and room to grow.',
              },
              {
                number: '03',
                icon: '⚡',
                title: 'Performance & Optimization',
                description:
                  'Improve app speed, stability, startup time, responsiveness and overall user experience.',
              },
              {
                number: '04',
                icon: '🔌',
                title: 'API & Backend Integration',
                description:
                  'Connect mobile apps with REST APIs, authentication, payments, real-time services and third-party platforms.',
              },
              {
                number: '05',
                icon: '🤖',
                title: 'AI-powered Mobile Experiences',
                description:
                  'Integrate AI capabilities such as intelligent assistants, content summarization and conversational features.',
              },
              {
                number: '06',
                icon: '🛠️',
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
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow">↗</span>
              </motion.article>
            ))}
          </div>

          <motion.div
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
          </motion.div>
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
              A journey across mobile engineering, digital banking,
              FinTech and GovTech — from product teams to independent
              development.
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
          <a className="brand footer-brand" href="#home">
            ANURAG<span>.</span>
          </a>

          <p>
            Building thoughtful mobile experiences.
          </p>

     
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>


          <span className="footer-copyright">
            © {new Date().getFullYear()} Anurag Raut. All rights reserved.
          </span>
        </div>
      </footer>

    </main>
  )
}

export default App
