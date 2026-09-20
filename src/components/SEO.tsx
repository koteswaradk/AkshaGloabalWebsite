import { useEffect } from 'react'

export interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'product' | 'course'
  keywords?: string[]
  schema?: Record<string, any> | Array<Record<string, any>>
}

const SITE_NAME = 'Aksha Globals'
const DEFAULT_IMAGE = 'https://github.com/user-attachments/assets/a3566f73-012a-405e-a33f-dd12f0982201'

export default function SEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
  keywords,
  schema
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  
  // Resolve absolute URL
  const origin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://akshaglobals.com'
  const url = `${origin}#${path}`

  const resolvedImage = image
    ? (image.startsWith('http') ? image : `${origin}/${image.replace(/^\.?\/?/, '')}`)
    : DEFAULT_IMAGE

  useEffect(() => {
    // 1. Title
    document.title = fullTitle

    // Helper for meta tags
    const setMeta = (key: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (isProperty) {
          el.setAttribute('property', key)
        } else {
          el.setAttribute('name', key)
        }
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // 2. Standard Search Metadata
    setMeta('description', description)
    if (keywords && keywords.length > 0) {
      setMeta('keywords', keywords.join(', '))
    }

    // 3. Open Graph Tags
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:type', type === 'course' || type === 'product' ? 'website' : type, true)
    setMeta('og:url', url, true)
    setMeta('og:site_name', SITE_NAME, true)
    setMeta('og:image', resolvedImage, true)

    // 4. Twitter / X Cards
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', resolvedImage)

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // 6. Schema.org JSON-LD Structured Data
    const scriptId = 'schema-org-jsonld'
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script')
        scriptEl.id = scriptId
        scriptEl.type = 'application/ld+json'
        document.head.appendChild(scriptEl)
      }
      scriptEl.textContent = JSON.stringify(schema, null, 2)
    } else if (scriptEl) {
      scriptEl.remove()
    }

    return () => {
      // Optional cleanup on unmount
      const existingScript = document.getElementById(scriptId)
      if (existingScript && schema) {
        existingScript.remove()
      }
    }
  }, [fullTitle, description, url, resolvedImage, type, keywords, schema])

  return null
}

