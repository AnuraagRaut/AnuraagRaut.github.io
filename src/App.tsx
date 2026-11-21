import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import './App.css'
import { trackEvent } from './analytics'
import { useEffect, useRef, useState } from 'react'
import { bookingUrls } from './siteConfig'
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Gauge,
  Mail,
  MapPin,
  Menu,
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
  { label: 'Approach', href: '#engineering' },
  { label: 'Notes', href: '#notes' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Help', href: '#services' },
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

const heroFeatures = [
  { number: '01', title: 'Architecture', detail: 'Modular · Scalable' },
  { number: '02', title: 'Performance', detail: 'Fast · Reliable' },
  { number: '03', title: 'Security', detail: 'Secure · Resilient' },
  { number: '04', title: 'Delivery', detail: 'Shipped · Improved' },
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
    type: 'INDEPENDENT PROJECT',
    role: 'Senior React Native Engineer',
    company: 'No Bias Media',
    product: 'News Application',
    period: 'May 2026 – Present',
    location: 'Remote',
    description:
      'Own mobile feature planning, architecture, implementation and integration for an independent news product.',
    highlights: [
      'Designing modular, feature-based architecture with reusable components and centralized state management.',
      'Building news feeds, category browsing, article discovery and navigation workflows with centralized API handling.',
      'Using Claude-assisted workflows for planning, debugging, refactoring and test creation.',
    ],
  },
  {
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'Senior React Native Developer',
    company: 'iBridge Tech Soft Pvt. Ltd. · Client: Tata Consultancy Services',
    product: 'Gulf International Bank · Branchless Digital Banking · GCC Markets',
    period: 'Nov 2025 – May 2026',
    location: 'Chennai',
    description:
      'Designed and delivered end-to-end digital banking features for Gulf International Bank (GIB).',
    highlights: [
      'Implemented Face ID and Touch ID biometrics, IVR workflows, JWT, encrypted storage and secure APIs.',
      'Improved performance by 30–35% and reduced crashes by 20–25% through targeted optimization and debugging.',
      'Delivered hotfixes with 0 regressions while leading developers across TCS and Infosys.',
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
      'Took end-to-end ownership after handover from a 20+ engineer external vendor team.',
      'Reduced production incidents by 60–70% and led the legacy Vue.js migration into the main React Native platform.',
      'Cut startup 40%, APK 67→45 MB, sustained 98%+ crash-free sessions and improved API response 60–80%.',
      'Used Firebase Analytics and field visits to drive 6+ UX improvements; mentored developers.',
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
    name: 'Gulf International Bank — Meem',
    category: 'SHIPPED · BFSI · GCC MARKETS',
    client: 'iBridge Tech Soft · Tata Consultancy Services',
    description:
      'Secure branchless digital banking platform for GCC markets, with biometric authentication and assisted banking workflows.',
    challenge:
      'Branchless banking had to feel trustworthy and responsive on devices and networks outside the team’s control.',
    technologies: [
      'React Native',
      'TypeScript',
      'Biometrics',
      'JWT',
      'Encrypted Storage',
      'SSL Pinning',
      'REST APIs',
    ],
    highlights: [
      'Delivered end-to-end digital banking features across Android and iOS.',
      'Implemented biometrics, IVR flows, JWT, encrypted storage and secure APIs.',
      'Optimized performance and crashes through bottleneck analysis and production debugging.',
      'Led developers across TCS and Infosys through release cycles with 0 regressions.',
    ],
    outcome:
      '30–35% performance improvement, 20–25% fewer production crashes and more reliable assisted banking workflows.',
    status: 'Shipped',
  },
  {
    number: '02',
    name: 'Haqdarshak Agent App',
    category: 'SHIPPED · GOVTECH',
    client: 'Haqdarshak Empowerment Solutions',
    description:
      'Field-use mobile platform helping agents discover, explain and apply for government schemes for citizens and MSMEs.',
    challenge:
      'Field agents depended on the app daily, often on low-storage devices and low-network routes.',
    technologies: [
      'React Native',
      'Vue Migration',
      'Offline-first',
      'Firebase Analytics',
      'REST APIs',
      'Mentoring',
    ],
    highlights: [
      'Took ownership after handover from a 20+ engineer external vendor team.',
      'Reduced production incidents by 60–70% and led the legacy Vue.js migration.',
      'Optimized startup, APK size, rendering and API behaviour for real field conditions.',
      'Drove 6+ UX improvements from Firebase Analytics and field visits.',
    ],
    outcome:
      '40% faster startup, 67→45 MB APK, 98%+ crash-free sessions and 60–80% faster API responses.',
    status: 'Shipped',
  },
  {
    number: '03',
    name: 'Blockchain & FinTech Marketplace',
    category: 'SHIPPED · FINTECH',
    client: 'No Borders Technologies',
    description:
      'Cross-platform NFT marketplace experience supporting users across five countries.',
    challenge:
      'A marketplace expanding across five countries needed one consistent mobile experience across languages and devices.',
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
    outcome:
      'Delivered a reusable React Native foundation with multilingual support and Firebase-backed visibility.',
    status: 'Shipped',
  },
  {
    number: '04',
    name: 'No Bias Media — News Application',
    category: 'INDEPENDENT · IN DEVELOPMENT',
    client: 'No Bias Media',
    description:
      'Cross-platform news product exploring real-time updates and AI-assisted reading.',
    challenge:
      'An independent news product needed a clean base for real-time content and AI-assisted reading experiments.',
    technologies: [
      'React Native',
      'TypeScript',
      'Axios',
      'Socket.IO',
      'Claude-assisted Workflows',
      'LLM Exploration',
    ],
    highlights: [
      'Designed modular, feature-based architecture with centralized state management.',
      'Built news feeds, category browsing and article discovery workflows.',
      'Created a centralized REST API layer with interceptors and error handling.',
    ],
    outcome:
      'Modular architecture and centralized API layer are in place; real-time updates and summarization are being explored.',
    status: 'In development',
  },
]

const technicalExpertise = [
  {
    number: '01',
    title: 'React Native Internals & Architecture',
    description:
      'Hands-on with the new architecture and clean, modular systems built to survive feature growth.',
    skills: [
      'React Native Internals',
      'JSI',
      'Hermes',
      'Codegen',
      'Fabric',
      'TurboModules',
      'Clean Architecture',
      'Modular Architecture',
      'Feature-based Design',
      'Offline-first',
    ],
  },
  {
    number: '02',
    title: 'State, Storage & Data',
    description:
      'Predictable state and resilient local data for apps that work through unstable networks.',
    skills: [
      'Redux Toolkit',
      'Redux Saga',
      'Context API',
      'AsyncStorage',
      'SecureStore',
      'Realm',
      'SQLite',
      'REST APIs',
      'GraphQL',
      'Axios',
    ],
  },
  {
    number: '03',
    title: 'Performance, Security & Reliability',
    description:
      'Startup, rendering, memory and security work backed by production monitoring.',
    skills: [
      'Startup Optimization',
      'Rendering Optimization',
      'FlatList',
      'Memory Profiling',
      'JWT',
      'OAuth 2.0',
      'Biometrics',
      'Keychain / Keystore',
      'SSL Pinning',
      'Crashlytics',
    ],
  },
  {
    number: '04',
    title: 'Delivery, Testing & AI Tooling',
    description:
      'CI/CD, testing and AI-assisted workflows that keep releases safe and teams fast.',
    skills: [
      'GitHub Actions',
      'Bitbucket Pipelines',
      'CodePush',
      'Jest',
      'E2E Testing',
      'AI-assisted Development',
      'Claude',
      'GitHub Copilot',
      'Gen AI / RAG',
      'Agentic AI',
    ],
  },
]

const engineeringPrinciples = [
  {
    number: '01',
    title: 'Performance is a product feature',
    description:
      'A slow app feels broken. I care about startup time, rendering, memory, network behaviour and low-end devices.',
  },
  {
    number: '02',
    title: 'Architecture should reduce future cost',
    description:
      'Good structure is not about complexity. It is about making the next feature easier and safer to ship.',
  },
  {
    number: '03',
    title: 'Reliability is engineered',
    description:
      'Crash-free sessions, secure APIs, monitoring and release discipline matter as much as the feature itself.',
  },
  {
    number: '04',
    title: 'AI assists; judgment decides',
    description:
      'AI-assisted workflows help me move faster, but architecture, trade-offs and production decisions stay human.',
  },
]

const helpOptions = [
  {
    number: '01',
    icon: Smartphone,
    audience: 'FOR RECRUITERS & TEAMS',
    title: 'Join a product team',
    description:
      'Senior React Native engineering for teams that need architecture, feature delivery, performance and release ownership.',
    cta: 'Book a quick intro',
    href: bookingUrls.recruiter,
    eventName: 'Recruiter Booking Click',
  },
  {
    number: '02',
    icon: Rocket,
    audience: 'FOR FOUNDERS & LOCAL BUSINESSES',
    title: 'Build a mobile product',
    description:
      'Turn an idea into an Android or iOS app with practical architecture, clean integrations and production-ready foundations.',
    cta: 'Discuss a mobile project',
    href: bookingUrls.client,
    eventName: 'Client Booking Click',
  },
  {
    number: '03',
    icon: Wrench,
    audience: 'FOR TEAMS WITH A LIVE APP',
    title: 'Fix and scale an existing app',
    description:
      'Stabilize crashes, improve startup and responsiveness, untangle structure and make the app easier to maintain as it grows.',
    cta: 'Discuss your app',
    href: bookingUrls.appReview,
    eventName: 'App Review Booking Click',
  },
]

type EngineeringNote = {
  number: string
  slug: string
  title: string
  summary: string
  metric: string
  readTime: string
  tags: string[]
  sections: { heading: string; paragraphs: string[] }[]
  takeaway: string
}

const engineeringNotes: EngineeringNote[] = [
  {
    number: '01',
    slug: 'faster-app-launch',
    title: 'What a 40% faster app launch really takes',
    summary:
      'Startup speed is a product signal. This note looks at how to frame the problem before changing code, and how to make the gain survive future releases.',
    metric: '40% faster startup',
    readTime: '5 min read',
    tags: ['Performance', 'React Native'],
    sections: [
      {
        heading: 'Start with the user, not the profiler',
        paragraphs: [
          'Startup time is the first impression an app makes. A 40% improvement matters because it changes how the product feels from the first tap, not because a benchmark moved. Before touching code, I look at where time is actually going: cold start, initial render, navigation readiness and the work that happens before the first useful screen.',
        ],
      },
      {
        heading: 'Separate cold start from perceived start',
        paragraphs: [
          'Users do not experience CPU time. They experience waiting. A useful investigation separates process launch, JS initialization, native startup, first paint and time to interactive. That distinction prevents teams from optimizing the wrong layer.',
        ],
      },
      {
        heading: 'Fix the expensive paths first',
        paragraphs: [
          'My rule is simple: measure, change one thing, measure again. In React Native work that usually means looking at initialization work, rendering on the critical path, navigation setup and heavy libraries loaded too early. I only keep changes that show up in real builds and real device behaviour.',
        ],
      },
      {
        heading: 'Protect the gain',
        paragraphs: [
          'Performance regressions creep back in. The result only matters if it survives the next ten releases. That means treating the measured number as something the team watches, not a one-time cleanup task.',
        ],
      },
    ],
    takeaway:
      'A faster launch is not a one-time optimization. It is a product decision backed by measurement, restraint and release discipline.',
  },
  {
    number: '02',
    slug: 'crash-free-sessions',
    title: 'Engineering for 98%+ crash-free sessions',
    summary:
      'Reliability is not luck. This note connects crash-free sessions, fewer incidents and the release habits that make stability repeatable.',
    metric: '98%+ crash-free',
    readTime: '6 min read',
    tags: ['Reliability', 'Production'],
    sections: [
      {
        heading: 'Stability is a product metric',
        paragraphs: [
          'A crash is not just a technical event. It interrupts a task, breaks trust and creates support work. That is why I treat crash-free sessions as a product metric, not an engineering vanity number.',
        ],
      },
      {
        heading: 'Crash-free sessions make reliability visible',
        paragraphs: [
          'A number like 98%+ crash-free sessions gives a team a shared language. It turns reliability into something that can be discussed, improved and protected. The goal is not a perfect dashboard; the goal is fewer broken moments for real users.',
        ],
      },
      {
        heading: 'Fewer incidents come from tighter feedback loops',
        paragraphs: [
          'Reducing incidents by 60–70% is less about one heroic fix and more about shortening the loop between change, signal and learning. Monitoring, release discipline and regression awareness matter because they help teams see problems earlier and contain them faster.',
        ],
      },
      {
        heading: 'Reliability is a habit',
        paragraphs: [
          'Stable products are usually the result of small, repeated decisions: what gets measured before release, what is risky enough to stage, what gets watched after rollout and what the team learns when something breaks.',
        ],
      },
    ],
    takeaway:
      'Crash-free sessions are not the output of luck. They are the result of ownership across the full release lifecycle.',
  },
  {
    number: '03',
    slug: 'smaller-react-native-app',
    title: 'Taking a React Native app from 67 MB to 45 MB',
    summary:
      'App size is user experience. This note explains why a smaller shipped artifact matters and how to approach size work without destabilizing releases.',
    metric: '67 MB → 45 MB',
    readTime: '5 min read',
    tags: ['App Size', 'Android'],
    sections: [
      {
        heading: 'App size is user experience',
        paragraphs: [
          'A large app creates friction before the product even opens: longer downloads, more storage pressure and harder updates, especially on lower-end devices. Reducing an artifact from 67 MB to 45 MB is useful because it removes friction from the first interaction.',
        ],
      },
      {
        heading: 'Measure the shipped artifact',
        paragraphs: [
          'Size work starts with the real build, not assumptions. I look at what actually ships: assets, native additions, dependencies and build outputs. The point is not to remove everything; it is to understand what each part costs and what it gives back.',
        ],
      },
      {
        heading: 'Optimize with a release mindset',
        paragraphs: [
          'Any size change has to survive real releases. That means checking behaviour on target devices, watching for regressions and keeping the team able to maintain the result. A smaller app that is harder to ship is not a win.',
        ],
      },
      {
        heading: 'Smaller is easier to maintain',
        paragraphs: [
          'The long-term benefit is not only download size. A leaner app is often easier to reason about, easier to test and cheaper to keep stable as the product grows.',
        ],
      },
    ],
    takeaway:
      'App size is not a vanity metric. It is part of delivery quality, especially when users and devices are constrained.',
  },
]

function App() {
  const reduceMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [activeFeature, setActiveFeature] = useState(0)
  const [isFeaturePaused, setIsFeaturePaused] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<string[]>([])
  const [activeNote, setActiveNote] = useState<EngineeringNote | null>(null)
  const trackedSections = useRef(new Set<string>())

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.32
      let current = ''

      navigation.forEach((item) => {
        const section = document.getElementById(item.href.slice(1))
        if (!section) return

        const top = section.getBoundingClientRect().top + window.scrollY
        if (top <= marker) {
          current = section.id
        }
      })

      setActiveSection(current)

      if (current && current !== 'home' && !trackedSections.current.has(current)) {
        trackedSections.current.add(current)
        trackEvent('Section View', { section: current })
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    if (isFeaturePaused || reduceMotion) return

    const timer = window.setInterval(() => {
      setActiveFeature((current) => (current + 1) % heroFeatures.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [isFeaturePaused, reduceMotion])

  useEffect(() => {
    if (!activeNote) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveNote(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeNote])

  const toggleProject = (number: string) => {
    setExpandedProjects((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number],
    )
  }

  const openNote = (note: EngineeringNote) => {
    setActiveNote(note)
    trackEvent('Note Open', { note: note.slug })
  }

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
            <a
              key={item.label}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-resume"
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
            onClick={() => trackEvent('Resume Download', { source: 'nav' })}
          >
            <Download size={15} />
            Résumé
          </a>

          <a
            className="nav-contact"
            href={bookingUrls.recruiter}
            onClick={() =>
              trackEvent('Recruiter Booking Click', { source: 'nav' })
            }
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mobile-actions">
          <a
            className="mobile-resume"
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
            aria-label="Download résumé"
            title="Download résumé"
            onClick={() => {
              trackEvent('Resume Download', { source: 'mobile-header' })
              setIsMenuOpen(false)
            }}
          >
            <Download size={16} />
            <span>Résumé</span>
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
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Mobile navigation"
        >
          <div className="mobile-profile">
            <span className="mobile-profile-label">ANURAG RAUT</span>
            <strong>Senior React Native / Mobile Engineer</strong>
            <span className="mobile-profile-location">
              Pune, India · Open to senior roles
            </span>
            <div className="mobile-profile-metrics">
              <span>5+ yrs</span>
              <span>98%+ crash-free</span>
              <span>40% startup</span>
            </div>
            <div className="mobile-profile-actions">
              <a
                href={resumeUrl}
                download="Anurag-Raut-Resume.pdf"
                onClick={() => {
                  trackEvent('Resume Download', { source: 'mobile-profile' })
                  setIsMenuOpen(false)
                }}
              >
                Résumé
              </a>
              <a
                href={bookingUrls.recruiter}
                onClick={() => {
                  trackEvent('Recruiter Booking Click', {
                    source: 'mobile-profile',
                  })
                  setIsMenuOpen(false)
                }}
              >
                Book intro
              </a>
            </div>
          </div>

          {navigation.map((item) => (
            <a
              key={item.label}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}

          <a
            className="mobile-resume-link"
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
            onClick={() => {
              trackEvent('Resume Download', { source: 'mobile-menu' })
              setIsMenuOpen(false)
            }}
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
            Pune, India · UTC+5:30 · Open to remote, hybrid and on-site roles
          </div>

          <div className="hero-identity">
            <span>SENIOR REACT NATIVE DEVELOPER</span>
            <span>5+ YEARS PRODUCTION EXPERIENCE</span>
            <span>ARCHITECTURE · PERFORMANCE · DELIVERY</span>
          </div>

          <h1>
            Senior React Native
            <br />
            <span>engineer for reliable mobile products.</span>
          </h1>

          <p className="hero-description">
            I build, ship and improve Android and iOS apps with React Native —
            from architecture and performance to production release. Across banking,
            FinTech and GovTech, I’ve owned delivery of secure mobile products
            that stay fast and reliable as they grow.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#work">
              See selected work <ArrowUpRight size={17} />
            </a>

            <a
              className="text-button"
              href={resumeUrl}
              download="Anurag-Raut-Resume.pdf"
              onClick={() => trackEvent('Resume Download', { source: 'hero' })}
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
          <div
            className="hero-showcase"
            onMouseEnter={() => setIsFeaturePaused(true)}
            onMouseLeave={() => setIsFeaturePaused(false)}
            onFocusCapture={() => setIsFeaturePaused(true)}
            onBlurCapture={() => setIsFeaturePaused(false)}
          >
            <div className="showcase-glow" />

            <div className="showcase-heading">
              <span className="showcase-dot" />
              SENIOR MOBILE ENGINEER
              <span className="showcase-version">
                0{activeFeature + 1} / 0{heroFeatures.length}
              </span>
            </div>

            <motion.div
              className="showcase-phone"
              animate={reduceMotion ? { y: 0 } : { y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="phone-frame">
                <div className="phone-island" />

                <div className="phone-screen">
                  <div className="phone-topline">
                    <span>
                      MOBILE / {heroFeatures[activeFeature].title.toUpperCase()}
                    </span>
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

                  {heroFeatures.map((feature, index) => (
                    <button
                      className={`phone-feature ${activeFeature === index ? 'is-active' : ''}`}
                      key={feature.number}
                      type="button"
                      aria-pressed={activeFeature === index}
                      aria-label={`Show ${feature.title}`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <span className="feature-icon">{feature.number}</span>
                      <span className="feature-copy">
                        <strong>{feature.title}</strong>
                        <span>{feature.detail}</span>
                      </span>
                      <ArrowUpRight size={17} />
                    </button>
                  ))}

                  <a
                    className="phone-resume"
                    href={resumeUrl}
                    download="Anurag-Raut-Resume.pdf"
                    onClick={() =>
                      trackEvent('Resume Download', { source: 'hero-phone' })
                    }
                  >
                    <Download size={14} />
                    Download résumé
                    <ArrowUpRight size={14} />
                  </a>

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
              animate={reduceMotion ? { y: 0 } : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="float-label">STARTUP IMPROVEMENT</span>
              <strong>40%</strong>
              <span className="float-description">Faster app launch</span>
            </motion.div>

            <motion.div
              className="showcase-float showcase-float-bottom"
              animate={reduceMotion ? { y: 0 } : { y: [0, 7, 0] }}
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
              A closer look at the problems, ownership and measured outcomes
              behind the work.
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

                  <div className="project-case">
                    <span className="project-details-label">THE PROBLEM</span>
                    <p>{project.challenge}</p>
                  </div>

                  <div className="project-result">
                    <span className="project-details-label">RESULT</span>
                    <p>{project.outcome}</p>
                  </div>

                  <button
                    className={`project-detail-toggle ${expandedProjects.includes(project.number) ? 'is-open' : ''}`}
                    type="button"
                    aria-expanded={expandedProjects.includes(project.number)}
                    onClick={() => {
                      toggleProject(project.number)
                      trackEvent('Project Detail Toggle', {
                        project: project.number,
                      })
                    }}
                  >
                    <span>
                      {expandedProjects.includes(project.number)
                        ? 'Hide engineering detail'
                        : 'View engineering detail'}
                    </span>
                    <span className="detail-toggle-icon">
                      {expandedProjects.includes(project.number) ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    className={`project-extra ${expandedProjects.includes(project.number) ? 'is-open' : ''}`}
                    aria-hidden={!expandedProjects.includes(project.number)}
                  >
                    <div className="project-extra-inner">
                      <div className="project-details">
                        <span className="project-details-label">WHAT I OWNED</span>

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
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section engineering-section section-padding" id="engineering">
        <div className="container">
          <motion.div
            className="expertise-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">03 / HOW I ENGINEER</span>
            <h2>
              Built with intent.
              <br />
              <span>Not just shipped.</span>
            </h2>
            <p>
              The principles behind the work — the decisions that keep mobile
              products fast, stable and easier to change.
            </p>
          </motion.div>

          <div className="expertise-grid">
            {engineeringPrinciples.map((principle) => (
              <motion.article
                className="expertise-card"
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="expertise-card-top">
                  <span>{principle.number}</span>
                  <span className="expertise-card-line" />
                </div>

                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="notes-section section-padding" id="notes">
        <div className="container">
          <motion.div
            className="notes-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">04 / FIELD NOTES</span>
            <h2>
              Thinking out loud,
              <br />
              <span>with receipts.</span>
            </h2>
            <p>
              Short engineering notes on performance, reliability and shipping
              mobile products that hold up in production.
            </p>
          </motion.div>

          <div className="notes-grid">
            {engineeringNotes.map((note, index) => (
              <motion.button
                className="note-card"
                key={note.slug}
                type="button"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => openNote(note)}
              >
                <div className="note-card-top">
                  <span className="note-number">{note.number}</span>
                  <span className="note-metric">{note.metric}</span>
                </div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
                <div className="note-card-footer">
                  <div className="note-tags">
                    {note.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="note-read">{note.readTime}</span>
                </div>
                <span className="note-arrow">↗</span>
              </motion.button>
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
            <span className="eyebrow">05 / TECHNICAL EXPERTISE</span>
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
            <span className="eyebrow">06 / ABOUT ME</span>
            <h2>
              Engineer who
              <br />
              <span>owns the outcome.</span>
            </h2>
          </motion.div>

          <div className="about-content">
            <div className="about-description">
              <p className="about-lead">
                I'm a Senior React Native Engineer with 5+ years building and
                evolving production Android and iOS applications.
              </p>

              <p>
                My experience spans banking, FinTech, GovTech, blockchain and
                e-commerce — secure transactions, offline-first apps, complex
                integrations and performance-critical mobile workflows.
              </p>

              <p>
                I take ownership beyond implementation: translating
                requirements into technical solutions, shaping architecture,
                improving reliability and shipping through production.
              </p>

              <p className="about-direction">
                I'm especially interested in products where scale, reliability
                and performance are non-negotiable — mobile systems that need
                to stay fast and stable as teams and user bases grow.
              </p>

              {/* <div className="about-credentials">
                <span>CREDENTIALS</span>
                <p>
                  B.E. Electronics &amp; Telecommunication · CS50 Mobile App
                  Development · Generative AI for Software Development
                </p>
              </div> */}
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
            <span className="eyebrow">07 / HOW I CAN HELP</span>
            <h2>
              Clear ways
              <span> I can add value.</span>
            </h2>
            <p>
              Whether you’re hiring for a product team or building something
              locally, here is where I fit best.
            </p>
          </motion.div>

          <div className="services-grid">
            {helpOptions.map((service, index) => (
              <motion.a
                className="service-card"
                key={service.number}
                href={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                onClick={() =>
                  trackEvent(service.eventName, { source: 'help-card' })
                }
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <service.icon size={23} strokeWidth={1.8} />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <span className="service-audience">{service.audience}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-cta">
                  {service.cta} <ArrowUpRight size={15} />
                </span>
              </motion.a>
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
            <span className="eyebrow">08 / LET'S TALK</span>

            <h2>
              Looking for a senior
              <br />
              <span>mobile engineer?</span>
            </h2>

            <p>
              Open to senior React Native and mobile engineering roles in Pune
              or remote. I also take on focused product engagements. Tell me
              what you're building — or what you need help shipping.
            </p>

            <div className="contact-options">
              <a
                href={bookingUrls.recruiter}
                className="contact-option"
                onClick={() =>
                  trackEvent('Recruiter Booking Click', { source: 'contact' })
                }
              >
                <span className="contact-option-label">FOR RECRUITERS & TEAMS</span>
                <strong>Book a quick intro</strong>
                <span className="contact-option-action">
                  Talk about the role <ArrowUpRight size={17} />
                </span>
              </a>

              <a
                href={bookingUrls.client}
                className="contact-option"
                onClick={() =>
                  trackEvent('Client Booking Click', { source: 'contact' })
                }
              >
                <span className="contact-option-label">FOR FOUNDERS & CLIENTS</span>
                <strong>Discuss a mobile project</strong>
                <span className="contact-option-action">
                  Talk about your product <ArrowUpRight size={17} />
                </span>
              </a>
            </div>

            <div className="contact-bottom">
              <div className="contact-direct">
                <a
                  href="mailto:anuragraut.developer@gmail.com"
                  className="contact-email-link"
                  onClick={() => trackEvent('Email Click', { source: 'contact' })}
                >
                  anuragraut.developer@gmail.com
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="tel:+917767874097"
                  className="contact-phone-link"
                  onClick={() => trackEvent('Phone Click', { source: 'contact' })}
                >
                  +91 77678 74097
                </a>
              </div>

              <div className="contact-socials">
                <a
                  href={resumeUrl}
                  download="Anurag-Raut-Resume.pdf"
                  onClick={() => trackEvent('Resume Download', { source: 'contact' })}
                >
                  Résumé <Download size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/anuragraut-developer/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent('LinkedIn Click', { source: 'contact' })}
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://github.com/AnuraagRaut"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent('GitHub Click', { source: 'contact' })}
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
              <p>Senior React Native Developer | Mobile Engineer</p>
              <span>End-to-End Product Ownership · Architecture · Performance.</span>
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
              <a
                href={resumeUrl}
                download="Anurag-Raut-Resume.pdf"
                onClick={() => trackEvent('Resume Download', { source: 'footer' })}
              >
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

      <AnimatePresence>
        {activeNote && (
          <motion.div
            className="note-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setActiveNote(null)}
          >
            <motion.article
              className="note-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="note-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="note-close"
                type="button"
                aria-label="Close note"
                autoFocus
                onClick={() => setActiveNote(null)}
              >
                <X size={20} />
              </button>

              <div className="note-modal-meta">
                <span>{activeNote.number} / FIELD NOTE</span>
                <span>{activeNote.readTime}</span>
              </div>

              <h2 id="note-modal-title">{activeNote.title}</h2>
              <p className="note-modal-summary">{activeNote.summary}</p>
              <span className="note-modal-metric">{activeNote.metric}</span>

              <div className="note-modal-body">
                {activeNote.sections.map((section) => (
                  <section key={section.heading}>
                    <h3>{section.heading}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="note-takeaway">
                <span>TAKEAWAY</span>
                <p>{activeNote.takeaway}</p>
              </div>

              <div className="note-modal-footer">
                <a
                  className="primary-button"
                  href={bookingUrls.recruiter}
                  onClick={() =>
                    trackEvent('Recruiter Booking Click', { source: 'note' })
                  }
                >
                  Discuss this with me <ArrowUpRight size={17} />
                </a>
                <button type="button" onClick={() => setActiveNote(null)}>
                  Close note
                </button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
