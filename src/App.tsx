
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
      </section>
    </main>
  )
}

export default App
