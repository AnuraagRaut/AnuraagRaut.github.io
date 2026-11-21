import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { posts } from './src/blog/posts.js'
import { siteUrl } from './src/siteConfig.js'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function generateFeeds(): Plugin {
  return {
    name: 'generate-feeds',
    generateBundle() {
      const lastModified = new Date().toISOString().slice(0, 10)
      const postPaths = posts.map((post) => `/blog.html?post=${encodeURIComponent(post.slug)}`)
      const sitemapPaths = [
        '/',
        '/blog.html',
        '/booking.html',
        '/privacy.html',
        ...postPaths,
      ]

      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemapPaths.map(
          (path) =>
            `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
        ),
        '</urlset>',
        '',
      ].join('\n')

      const rss = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0">',
        '  <channel>',
        '    <title>Field Notes by Anurag Raut</title>',
        `    <link>${escapeXml(`${siteUrl}/blog.html`)}</link>`,
        '    <description>Practical engineering notes on React Native, performance, reliability and production mobile delivery.</description>',
        '    <language>en</language>',
        `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
        ...posts.flatMap((post) => {
          const url = `${siteUrl}/blog.html?post=${encodeURIComponent(post.slug)}`
          return [
            '    <item>',
            `      <title>${escapeXml(post.title)}</title>`,
            `      <link>${escapeXml(url)}</link>`,
            `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
            `      <description>${escapeXml(post.summary)}</description>`,
            ...post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`),
            '    </item>',
          ]
        }),
        '  </channel>',
        '</rss>',
        '',
      ].join('\n')

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      this.emitFile({ type: 'asset', fileName: 'rss.xml', source: rss })
    },
  }
}

export default defineConfig({
  plugins: [react(), generateFeeds()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        blog: fileURLToPath(new URL('./blog.html', import.meta.url)),
      },
    },
  },
})
