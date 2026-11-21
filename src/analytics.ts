declare global {
  interface Window {
    goatcounter?: {
      count: (options: {
        path: string
        title?: string
        event?: boolean
      }) => void
    }
  }
}

function toEventPath(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window === 'undefined' || !window.goatcounter) return

  const parts = [toEventPath(event)]

  if (props) {
    for (const [key, value] of Object.entries(props)) {
      parts.push(toEventPath(key), toEventPath(value))
    }
  }

  window.goatcounter.count({
    path: parts.filter(Boolean).join('-'),
    title: event,
    event: true,
  })
}

export function trackPageview(path: string) {
  if (typeof window === 'undefined' || !window.goatcounter) return
  window.goatcounter.count({ path })
}
