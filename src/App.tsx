
import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
} from 'lucide-react'
import './App.css'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
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
      'An adaptive personal growth application designed to help people clear their minds, build better habits and move forward.',
    technologies: [
      'React Native',
      'TypeScript',
      'React Native CLI',
      'Redux',
      'Mappls',
    ],
    highlights: [
      'Building an Android-first, iOS-compatible mobile application.',
      'Developing modular experiences for meditation, assessments and creative expression.',
      'Designing Pathik, an integrated travel companion experience.',
      'Building reusable architecture with a focus on performance and scalability.',
    ],
    status: 'In development',
  },
  {
    number: '02',
    name: 'No Bias Media',
    category: 'INDEPENDENT PROJECT',
    description:
      'A React Native news application focused on delivering timely content through a modular, API-driven mobile experience.',
    technologies: [
      'React Native',
      'TypeScript',
      'Axios',
      'Socket.IO',
      'Claude AI',
    ],
    highlights: [
      'Taking ownership of mobile feature planning, architecture and implementation.',
      'Integrating REST APIs with centralized request handling and error management.',
      'Exploring real-time content updates using Socket.IO.',
      'Exploring AI-powered article summaries and conversational article assistance.',
    ],
    status: 'In development',
  },
]

const technicalExpertise = [
  {
    number: '01',
    title: 'Mobile Engineering',
    description:
      'Building reliable, cross-platform mobile applications.',
    skills: [
      'React Native',
      'TypeScript',
      'JavaScript',
      'Android',
      'iOS',
      'React.js',
    ],
  },
  {
    number: '02',
    title: 'Architecture & State',
    description:
      'Designing maintainable application structures and data flows.',
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
      'Connecting mobile experiences with secure and real-time services.',
    skills: [
      'REST APIs',
      'Axios',
      'JWT',
      'Socket.IO',
      'Firebase',
      'API Interceptors',
    ],
  },
  {
    number: '04',
    title: 'Engineering & AI',
    description:
      'Improving delivery through performance engineering and AI-assisted workflows.',
    skills: [
      'Performance Optimization',
      'Debugging',
      'Git',
      'CI/CD',
      'Claude',
      'GitHub Copilot',
    ],
  },
]

function App() {
  return (
    <main>
      <header className="navbar container">
        <a className="brand" href="#home">
          ANURAG<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="mailto:anuragraut.developer@gmail.com">
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button className="mobile-menu" aria-label="Menu">
          <Menu size={22} />
        </button>
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
            SENIOR REACT NATIVE DEVELOPER
          </div>

          <h1>
            Building mobile
            <br />
            experiences that
            <br />
            <span>move people forward.</span>
          </h1>

          <p className="hero-description">
            I'm Anurag Raut, a mobile engineer focused on building reliable,
            scalable and high-performance applications for Android and iOS.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a className="text-button" href="#contact">
              Let's connect <ArrowRight size={17} />
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
          <div className="portrait-placeholder">
            <span>YOUR</span>
            <span>PHOTO</span>
          </div>

          <div className="visual-caption">
            <span>BASED IN INDIA</span>
            <span>MOBILE ENGINEERING · PRODUCT THINKING</span>
          </div>

          <div className="floating-mark">
            <ArrowDown size={20} />
          </div>
        </motion.div>
      </section>

      <section className="intro-strip">
        <div className="container intro-inner">
          <p>
            Turning complex requirements into thoughtful mobile experiences.
          </p>
          <span>SCROLL TO EXPLORE ↓</span>
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
                I'm a React Native developer with 4.7 years of experience
                building mobile applications that solve practical problems.
              </p>

              <p>
                My work spans digital banking, FinTech and GovTech products.
                I've worked on everything from secure financial workflows to
                offline-first applications designed for challenging network
                conditions.
              </p>

              <p>
                I enjoy taking ownership of engineering challenges, improving
                application quality and collaborating with teams to turn
                product requirements into dependable mobile experiences.
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
      </section>

     
    </main>
  )
}

export default App
