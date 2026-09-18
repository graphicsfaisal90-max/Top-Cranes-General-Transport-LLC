import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://www.topcranestransport.com'

const pages = {
  '/': {
    title: 'Top Cranes: Crane Rental & Lifting Services | Dubai, UAE & Sharjah',
    description: 'Top Cranes General Transport provides crane rental, forklift rental, excavator rental, telehandler, JCB, Bobcat and heavy equipment rental services across Dubai, Sharjah and the UAE.',
    keywords: 'heavy equipment rental Dubai, equipment rental UAE, crane rental Dubai, forklift rental Dubai, excavator rental Dubai, construction equipment rental UAE',
  },
  '/equipment': {
    title: 'Heavy Equipment Rental Dubai | Construction Equipment UAE',
    description: 'Explore reliable heavy equipment for rent in Dubai and across the UAE, including cranes, forklifts, excavators, telehandlers, JCB 3CX, Bobcat and loaders.',
    keywords: 'heavy equipment rental Dubai, construction equipment rental UAE, machinery rental Dubai, equipment hire UAE, lifting equipment rental',
  },
  '/equipment/crane': {
    title: 'Crane Rental Services Dubai | Mobile Crane Hire UAE',
    description: 'Top Cranes provides mobile crane rental, tower crane, crawler crane and rough terrain crane hire for construction and heavy lifting projects across Dubai and the UAE.',
    keywords: 'crane rental Dubai, mobile crane rental UAE, tower crane hire Dubai, crawler crane rental UAE, rough terrain crane rental, heavy lifting services Dubai',
  },
  '/equipment/fork-lift': {
    title: 'Forklift Rental Services Dubai | Forklift Hire UAE',
    description: 'Reliable forklift rental in Dubai for warehouses, construction sites, ports and logistics operations. Electric, diesel, heavy duty and container forklifts available.',
    keywords: 'forklift rental Dubai, forklift hire UAE, electric forklift rental, diesel forklift rental Dubai, container forklift rental, warehouse forklift hire',
  },
  '/equipment/telehandler': {
    title: 'Telehandler Rental Dubai | Boom Loader Hire UAE',
    description: 'Rent telehandlers and boom loaders in Dubai for construction, material handling and lifting projects across the UAE with dependable delivery and support.',
    keywords: 'telehandler rental Dubai, boom loader rental UAE, telescopic handler hire, material handling equipment Dubai, telehandler hire UAE',
  },
  '/equipment/excavators': {
    title: 'Excavator Rental Services Dubai | Excavator Hire UAE',
    description: 'Rent crawler, wheeled, mini and long reach excavators in Dubai for construction, demolition, landscaping, trenching and earthmoving projects across the UAE.',
    keywords: 'excavator rental Dubai, excavator hire UAE, mini excavator rental, crawler excavator rental Dubai, long reach excavator hire, earthmoving equipment UAE',
  },
  '/equipment/jcb-3cx': {
    title: 'JCB 3CX Rental Services Dubai | Backhoe Loader Hire UAE',
    description: 'Top Cranes offers JCB 3CX backhoe loader rental in Dubai for excavation, trenching, material loading, site preparation, roadwork and infrastructure projects.',
    keywords: 'JCB 3CX rental Dubai, backhoe loader rental UAE, JCB hire Dubai, JCB 3CX with operator, excavation equipment rental, site preparation equipment UAE',
  },
  '/equipment/bobcat': {
    title: 'Bobcat Rental Services Dubai | Skid Steer Loader Hire UAE',
    description: 'Reliable Bobcat rental in Dubai for construction, landscaping, groundworks, demolition, cleanup and material handling projects across the UAE.',
    keywords: 'Bobcat rental Dubai, Bobcat hire UAE, skid steer loader rental, compact loader hire Dubai, landscaping equipment rental UAE, Bobcat with operator',
  },
  '/equipment/shovel': {
    title: 'Wheel Loader Rental Dubai | Shovel Loader Hire UAE',
    description: 'Rent shovel and wheel loaders in Dubai for mining, construction, landscaping, aggregate handling and heavy material loading projects across the UAE.',
    keywords: 'wheel loader rental Dubai, shovel loader rental UAE, front loader hire, loader rental Dubai, material loading equipment UAE, construction loader hire',
  },
  '/about': {
    title: 'About Top Cranes General Transport | Equipment Rental UAE',
    description: 'Learn about Top Cranes General Transport LLC, a Dubai-based heavy equipment rental and general transport company serving construction and industrial projects across the UAE since 2009.',
    keywords: 'Top Cranes General Transport Dubai, heavy equipment company UAE, equipment rental company Dubai, crane company UAE, transport company Sharjah',
  },
  '/contact': {
    title: 'Contact Top Cranes | Equipment Rental Quote Dubai UAE',
    description: 'Contact Top Cranes General Transport for crane rental, forklift rental, excavator hire, telehandler, JCB, Bobcat and heavy equipment rental quotes across the UAE.',
    keywords: 'equipment rental quote Dubai, crane rental contact UAE, heavy machinery rental enquiry, Top Cranes phone number, construction equipment hire UAE',
  },
  '/faq': {
    title: 'Equipment Rental FAQ | Crane and Machinery Hire UAE',
    description: 'Find answers about crane rental, forklift hire, excavator rental, operators, delivery, rental periods and heavy equipment services from Top Cranes in the UAE.',
    keywords: 'equipment rental FAQ UAE, crane rental questions Dubai, forklift hire FAQ, excavator rental information, machinery rental terms UAE',
  },
}

const fallback = pages['/']

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pages[pathname] || fallback
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const canonicalUrl = `${siteUrl}${canonicalPath}`

    document.title = page.title
    setMeta('description', page.description)
    setMeta('keywords', page.keywords)
    setMeta('robots', 'index, follow')
    setProperty('og:title', page.title)
    setProperty('og:description', page.description)
    setProperty('og:url', canonicalUrl)
    setProperty('og:type', 'website')
    setProperty('og:image', `${siteUrl}/Top%20Cranes%20logo.svg`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    let schema = document.querySelector('#top-cranes-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'top-cranes-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Top Cranes General Transport LLC',
      url: siteUrl,
      logo: `${siteUrl}/Top%20Cranes%20logo.svg`,
      description: page.description,
      telephone: ['+971509191004', '+971506749200'],
      email: 'sales@topcranestransport.com',
      areaServed: ['Dubai', 'Sharjah', 'Abu Dhabi', 'United Arab Emirates'],
      serviceType: ['Crane rental', 'Heavy equipment rental', 'General transport'],
    })
  }, [pathname])

  return null
}
