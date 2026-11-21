import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import BlogApp from './BlogApp'

createRoot(document.getElementById('blog-root')!).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>,
)
