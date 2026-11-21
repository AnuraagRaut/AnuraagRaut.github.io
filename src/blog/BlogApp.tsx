import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Download,
  Mail,
} from 'lucide-react'
import { trackEvent } from '../analytics'
import { bookingUrls, contactEmail } from '../siteConfig'
import { getNextPost, getPost, posts, type BlogPost } from './posts'
import './Blog.css'

const resumeUrl = '/Anurag-Raut-Resume.pdf'

function slugFromUrl() {
  return new URLSearchParams(window.location.search).get('post')
}

type PostCardProps = {
  post: BlogPost
  onOpen: (slug: string) => void
  featured?: boolean
}

function PostCard({ post, onOpen, featured = false }: PostCardProps) {
  return (
    <button
      type="button"
      className={featured ? 'blog-card blog-card-featured' : 'blog-card'}
      onClick={() => onOpen(post.slug)}
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
    </button>
  )
}

function BlogApp() {
  const [activeSlug, setActiveSlug] = useState<string | null>(slugFromUrl)
  const post = activeSlug ? getPost(activeSlug) : undefined

  useEffect(() => {
    const handlePopState = () => setActiveSlug(slugFromUrl())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    document.title = post
      ? `${post.title} | Field Notes | Anurag Raut`
      : 'Field Notes | Anurag Raut'
  }, [post])

  const openPost = (slug: string) => {
    const url = `${window.location.pathname}?post=${encodeURIComponent(slug)}`
    window.history.pushState({}, '', url)
    setActiveSlug(slug)
    trackEvent('Blog Post View', { post: slug })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const openIndex = () => {
    window.history.pushState({}, '', window.location.pathname)
    setActiveSlug(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
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
            onClick={openIndex}
          >
            All notes
          </button>
          <a href="/">Portfolio</a>
          <a
            href={resumeUrl}
            download="Anurag-Raut-Resume.pdf"
            onClick={() => trackEvent('Resume Download', { source: 'blog' })}
          >
            Résumé <Download size={13} />
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
      <main className="blog-container blog-not-found">
        <span className="blog-eyebrow">NOTE NOT FOUND</span>
        <h1>That note isn’t here.</h1>
        <p>The link may be old, or the post may have been renamed.</p>
        <button type="button" className="blog-primary-button" onClick={openIndex}>
          Back to all notes <ArrowLeft size={16} />
        </button>
      </main>
    )
  } else if (post) {
    const nextPost = getNextPost(post.slug)

    content = (
      <main className="blog-container">
        <article className="blog-article">
          <div className="blog-article-header">
            <button type="button" className="blog-back-link" onClick={openIndex}>
              <ArrowLeft size={16} /> All notes
            </button>

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
                <ol>
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

              <button
                type="button"
                className="blog-next-post"
                onClick={() => openPost(nextPost.slug)}
              >
                <span>NEXT NOTE</span>
                <strong>{nextPost.title}</strong>
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </article>
      </main>
    )
  } else {
    const [featured, ...rest] = posts

    content = (
      <>
        <main>
          <section className="blog-container blog-hero">
            <div className="blog-hero-copy">
              <span className="blog-eyebrow">FIELD NOTES BY ANURAG RAUT</span>
              <h1>
                Practical notes on building
                <span> mobile software that holds up.</span>
              </h1>
              <p>
                Short, focused writing on React Native, performance,
                reliability and delivery — grounded in production work, not
                theory theatre.
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
              Every note starts from a real production result I can stand
              behind. I do not name clients, expose confidential architecture or
              invent implementation details. The value is in the thinking, the
              trade-offs and the habits that travel across teams.
            </p>
          </section>
        </main>
      </>
    )
  }

  return (
    <div className="blog-page">
      {header}
      {content}
      <footer className="blog-footer">
        <div className="blog-container blog-footer-inner">
          <a className="blog-brand" href="/">
            ANURAG<span>.</span>
          </a>
          <p>Senior React Native Developer · Mobile Engineer</p>
          <span>© {new Date().getFullYear()} Anurag Raut. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default BlogApp
