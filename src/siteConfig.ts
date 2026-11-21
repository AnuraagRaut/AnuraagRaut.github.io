export const siteUrl = 'https://anuraagraut.github.io'
export const contactEmail = 'anuragraut.developer@gmail.com'
export const contactPhone = '+917767874097'
export const resumeUrl = '/Anurag-Raut-Resume.pdf'

export const socialUrls = {
  linkedIn: 'https://www.linkedin.com/in/anuragraut-developer/',
  github: 'https://github.com/AnuraagRaut',
}

/**
 * Free booking setup.
 *
 * By default every booking CTA opens the on-site request page at
 * /booking.html, which needs no third-party account and no paid plan.
 *
 * Optional upgrade: create a free TidyCal account
 * (https://tidycal.com/register), then set tidycalBaseUrl to your booking
 * page, for example: https://tidycal.com/your-handle
 */
export const booking = {
  tidycalBaseUrl: '',
}

const bookingSlugs = {
  recruiter: 'quick-intro',
  client: 'mobile-project',
  appReview: 'app-review',
} as const

function bookingUrl(type: keyof typeof bookingSlugs) {
  const base = booking.tidycalBaseUrl.trim().replace(/\/$/, '')

  if (base) {
    return `${base}/${bookingSlugs[type]}`
  }

  return `/booking.html?type=${type}`
}

export const bookingUrls = {
  recruiter: bookingUrl('recruiter'),
  client: bookingUrl('client'),
  appReview: bookingUrl('appReview'),
}
