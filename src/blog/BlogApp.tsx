import { useEffect, useRef, useState, type MouseEvent } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Download,
  Mail,
} from 'lucide-react'
import { trackEvent, trackPageview } from '../analytics'
import { bookingUrls, contactEmail, resumeUrl, siteUrl } from '../siteConfig'
import { getNextPost, getPost, posts, type BlogPost } from './posts'
import './Blog.css'

const blogUrl = `${siteUrl}/blog.html`
const ogImageUrl = `${siteUrl}/og-image.png`
const indexTitle = 'Field Notes | Anurag Raut'
const indexDescription =
  'Practical engineering notes from Anurag Raut on React Native performance, mobile reliability, app size and production delivery.'

function postUrl(slug: string) {
  return `/blog.html?post=${encodeURIComponent(slug)}`
}

function canonicalPostUrl(slug: string) {
  return `${blogUrl}?post=${encodeURIComponent(slug)}`
}

function slugFromUrl() {
  return new URLSearchParams(window.location.search).get('post')
}

function handleInternalNavigation(
  event: MouseEvent<HTMLAnchorElement>,
  navigate: () => void,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  event.preventDefault()
  navigate()
}

function personSchema() {
  return {
    '@type': 'Person',
    name: 'Anurag Raut',
    url: siteUrl,
    jobTitle: 'Senior React Native Developer',
  }
}

function itemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Field Notes by Anurag Raut',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: canonicalPostUrl(post.slug),
      name: post.title,
    })),
  }
}

function blogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    mainEntityOfPage: canonicalPostUrl(post.slug),
    url: canonicalPostUrl(post.slug),
    datePublished: post.date,
    author: personSchema(),
    publisher: personSchema(),
    keywords: post.tags.join(', '),
    image: ogImageUrl,
  }
}

type PostCardProps = {
  post: BlogPost
  onOpen: (slug: string) => void
  featured?: boolean
}

function PostCard({ post, onOpen, featured = false }: PostCardProps) {
  return (
    <a
      className={featured ? 'blog-card blog-card-featured' : 'blog-card'}
      href={postUrl(post.slug)}
      onClick={(event) =>
        handleInternalNavigation(event, () => onOpen(post.slug))
      }
    >
      <div className="blog-card-top">
        <span className="blog-card-number">NOTE {post.number}</span>
        <span className="blog-card-metric">{post.metric}</span>
      </div>

      <h3>{post.title}</h3>
      <p className="blog-card-subtitle">{post.subtitle}</p>
      <p className="blog-card-summary">{post.summary}</p>

      <div className="blog-card-bottom">
        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="blog-card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <span className="blog-card-arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </a>
  )
}

function BlogApp() {
  const [activeSlug, setActiveSlug] = useState<string | null>(slugFromUrl)
  const post = activeSlug ? getPost(activeSlug) : undefined

  useEffect(() => {
    const handlePopState = () => {
      setActiveSlug(slugFromUrl())
      const hash = window.location.hash.slice(1)

      window.requestAnimationFrame(() => {
        if (hash) {
          document.getElementById(hash)?.scrollIntoView()
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' })
        }
      })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const title = post ? `${post.title} | Field Notes | Anurag Raut` : indexTitle
    const description = post?.summary ?? indexDescription
    const canonicalUrl = post ? canonicalPostUrl(post.slug) : blogUrl

    document.title = title

    const setMeta = (selector: string, content: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      if (element) element.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', canonicalUrl)
    setMeta('meta[property="og:type"]', post ? 'article' : 'website')
    setMeta('meta[property="article:published_time"]', post?.date ?? '')
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)

    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (canonical) canonical.setAttribute('href', canonicalUrl)

    let structuredData = document.getElementById('blog-jsonld')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'blog-jsonld'
      structuredData.setAttribute('type', 'application/ld+json')
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = JSON.stringify(
      post ? blogPostingSchema(post) : itemListSchema(),
    )
  }, [post])

  const trackedPathRef = useRef<string | null>(null)

  useEffect(() => {
    const path = post ? postUrl(post.slug) : '/blog.html'

    if (trackedPathRef.current === null) {
      trackedPathRef.current = path
      return
    }

    if (trackedPathRef.current !== path) {
      trackPageview(path)
      trackedPathRef.current = path
    }
  }, [post])

  const openPost = (slug: string) => {
    const url = postUrl(slug)
    window.history.pushState({}, '', url)
    setActiveSlug(slug)
    trackEvent('Blog Post View', { post: slug })
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openIndex = () => {
    window.history.replaceState({}, '', '/blog.html')
    setActiveSlug(null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const header = (
    <header className="blog-header">
      <div className="blog-container blog-header-inner">
        <a className="blog-brand" href="/">
          ANURAG<span>.</span>
          <small>FIELD NOTES</small>
        </a>

        <nav className="blog-nav" aria-label="Blog navigation">
          <button
            type="button"
            className={post ? '' : 'active'}
            aria-current={post ? undefined : 'page'}
            onClick={openIndex}
          >
            All notes
          </button>
          <a className="blog-nav-portfolio" href="/">
            Portfolio
          </a>
          <a
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
            onClick={() => trackEvent('Resume Download', { source: 'blog' })}
          >
            Resume <Download size={13} />
          </a>
          <a
            className="blog-nav-cta"
            href={bookingUrls.recruiter}
            onClick={() =>
              trackEvent('Recruiter Booking Click', { source: 'blog' })
            }
          >
            Book intro <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  )

  let content

  if (activeSlug && !post) {
    content = (
      <main
        className="blog-container blog-not-found"
        id="main-content"
        tabIndex={-1}
      >
        <span className="blog-eyebrow">NOTE NOT FOUND</span>
        <h1>That note isn’t here.</h1>
        <p>The link may be old, or the post may have been renamed.</p>
        <a
          className="blog-primary-button"
          href="/blog.html"
          onClick={(event) => handleInternalNavigation(event, openIndex)}
        >
          Back to all notes <ArrowLeft size={16} />
        </a>
      </main>
    )
  } else if (post) {
    const nextPost = getNextPost(post.slug)

    content = (
      <main className="blog-container" id="main-content" tabIndex={-1}>
        <article className="blog-article">
          <div className="blog-article-header">
            <a
              className="blog-back-link"
              href="/blog.html"
              onClick={(event) => handleInternalNavigation(event, openIndex)}
            >
              <ArrowLeft size={16} /> All notes
            </a>

            <span className="blog-eyebrow">
              FIELD NOTE {post.number} · {post.tags[0].toUpperCase()}
            </span>

            <h1>{post.title}</h1>
            <p className="blog-article-subtitle">{post.subtitle}</p>

            <div className="blog-article-meta">
              <span>
                <CalendarDays size={14} /> {post.date}
              </span>
              <span>
                <Clock3 size={14} /> {post.readTime}
              </span>
              <span className="blog-article-metric">{post.metric}</span>
            </div>

            <div className="blog-tags blog-article-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="blog-article-layout">
            <aside className="blog-article-aside">
              <div className="blog-aside-card">
                <span>IN THIS NOTE</span>
                <ol role="list">
                  {post.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.heading}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="blog-article-body">
              <div className="blog-scope-note">
                <strong>Scope note</strong>
                <p>
                  These notes are written around verified outcomes from
                  production work. Client names, internal architecture and
                  company-specific details are intentionally generalised.
                </p>
              </div>

              {post.intro.map((paragraph) => (
                <p className="blog-lede" key={paragraph}>
                  {paragraph}
                </p>
              ))}

              {post.sections.map((section) => (
                <section className="blog-section" id={section.id} key={section.id}>
                  <h2>{section.heading}</h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.paragraphsAfterBullets?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.note && (
                    <blockquote>
                      <span>NOTE</span>
                      {section.note}
                    </blockquote>
                  )}
                </section>
              ))}

              <section className="blog-takeaways">
                <span className="blog-eyebrow">TAKEAWAYS</span>
                <h2>What to carry forward</h2>
                <ul>
                  {post.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </section>

              <section className="blog-author-card">
                <div>
                  <span className="blog-eyebrow">WRITTEN BY</span>
                  <h2>Anurag Raut</h2>
                  <p>
                    Senior React Native and mobile engineer with 5+ years
                    building, shipping and improving production Android and iOS
                    apps across banking, FinTech and GovTech.
                  </p>
                </div>
                <div className="blog-author-actions">
                  <a
                    className="blog-primary-button"
                    href={bookingUrls.recruiter}
                    onClick={() =>
                      trackEvent('Recruiter Booking Click', {
                        source: 'blog-author',
                      })
                    }
                  >
                    Discuss this with me <ArrowUpRight size={16} />
                  </a>
                  <a href="/">
                    View portfolio <ArrowUpRight size={15} />
                  </a>
                </div>
              </section>

              <a
                className="blog-next-post"
                href={postUrl(nextPost.slug)}
                onClick={(event) =>
                  handleInternalNavigation(event, () => openPost(nextPost.slug))
                }
              >
                <span>NEXT NOTE</span>
                <strong>{nextPost.title}</strong>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </article>
      </main>
    )
  } else {
    const [featured, ...rest] = posts

    content = (
      <main id="main-content" tabIndex={-1}>
        <section className="blog-container blog-hero">
          <div className="blog-hero-copy">
            <span className="blog-eyebrow">FIELD NOTES BY ANURAG RAUT</span>
            <h1>
              Practical notes on building
              <span> mobile software that holds up.</span>
            </h1>
            <p>
              Short, focused writing on React Native, performance, reliability
              and delivery — grounded in production work, not theory theatre.
            </p>
            <div className="blog-hero-actions">
              <a href="/" className="blog-primary-button">
                Back to portfolio <ArrowUpRight size={16} />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="blog-secondary-button"
                onClick={() =>
                  trackEvent('Email Click', { source: 'blog-hero' })
                }
              >
                <Mail size={15} /> Get in touch
              </a>
            </div>
          </div>

          <div className="blog-hero-stats">
            <div>
              <strong>{posts.length}</strong>
              <span>Published notes</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Years in production</span>
            </div>
            <div>
              <strong>98%+</strong>
              <span>Crash-free sessions</span>
            </div>
          </div>
        </section>

        <section className="blog-container blog-list-section">
          <div className="blog-list-heading">
            <div>
              <span className="blog-eyebrow">THE LIBRARY</span>
              <h2>Start here</h2>
            </div>
            <span>{posts.length} notes · updated Nov 2026</span>
          </div>

          <PostCard post={featured} onOpen={openPost} featured />

          <div className="blog-grid">
            {rest.map((item) => (
              <PostCard post={item} onOpen={openPost} key={item.slug} />
            ))}
          </div>
        </section>

        <section className="blog-container blog-principle">
          <span className="blog-eyebrow">HOW I WRITE</span>
          <h2>Verified outcomes. Generalised lessons.</h2>
          <p>
            Every note starts from a real production result I can stand behind.
            I do not name clients, expose confidential architecture or invent
            implementation details. The value is in the thinking, the trade-offs
            and the habits that travel across teams.
          </p>
        </section>
      </main>
    )
  }

  return (
    <div className="blog-page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {header}
      {content}
      <footer className="blog-footer">
        <div className="blog-container blog-footer-inner">
          <a className="blog-brand" href="/">
            ANURAG<span>.</span>
          </a>
          <p>Senior React Native Developer · Mobile Engineer</p>
          <div className="blog-footer-links">
            <a
              href={resumeUrl}
              download="Anurag-Raut-Resume.pdf"
              onClick={() => trackEvent('Resume Download', { source: 'blog' })}
            >
              Resume
            </a>
            <a href="/booking.html">Book</a>
            <a href="/rss.xml">RSS</a>
            <a href="/privacy.html">Privacy</a>
            <span>© {new Date().getFullYear()} Anurag Raut. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BlogApp
