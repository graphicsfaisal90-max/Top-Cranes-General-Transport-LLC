import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://www.topcranestransport.com'

const pages = {
  '/': {
    title: 'Crane Rental Company in Dubai | Top Cranes Transport',
    description: 'Top Cranes provides crane rental and heavy equipment rental in Dubai, UAE. Explore our fleet of cranes, construction machinery and transport equipment.',
    keywords: 'crane rental company in Dubai, crane rental Dubai, heavy equipment rental Dubai',
  },
  '/equipment': {
    title: 'Heavy Equipment Rental Dubai | Construction Equipment UAE',
    description: 'Explore reliable heavy equipment for rent in Dubai and across the UAE, including cranes, forklifts, excavators, telehandlers, Backhoe Loaders JCB 3CX, Bobcat and loaders.',
    keywords: 'heavy equipment rental Dubai, construction equipment rental UAE, machinery rental Dubai, equipment hire UAE, lifting equipment rental',
  },
  '/equipment/crane': {
    title: 'Cranes Rental Services Dubai | Mobile Cranes Hire UAE',
    description: 'Top Cranes provides mobile cranes rental, tower cranes, crawler cranes and rough terrain cranes hire for construction and heavy lifting projects across Dubai and the UAE.',
    keywords: 'cranes rental Dubai, mobile cranes rental UAE, tower cranes hire Dubai, crawler cranes rental UAE, rough terrain cranes rental, heavy lifting services Dubai',
  },
  '/equipment/mobile-cranes-rentals-in-dubai': {
    title: 'Mobile Cranes Rentals in Dubai | 50–550 Ton Crane Hire UAE',
    description: 'Mobile cranes rentals in Dubai from 50 to 550 tonnes. All-terrain and truck-mounted crane hire across the UAE with experienced operators, lift planning and mobilisation.',
    keywords: 'mobile cranes rentals in Dubai, mobile crane rental Dubai, mobile crane hire UAE, all terrain crane rental Dubai, truck mounted crane rental UAE, 50 ton crane hire Dubai, 500 ton crane rental UAE, heavy lifting services Dubai',
  },
  '/equipment/hiab-crane': {
    title: '1 to 12 Ton HIAB Crane Rental Dubai | Top Cranes',
    description: 'Hire 1 to 12 ton HIAB cranes in Dubai. Reliable HIAB crane truck rental for construction, machinery lifting, loading and transport. Get a quote today.',
    keywords: 'HIAB Crane Rental Dubai, HIAB Crane, HIAB Crane Truck, 1 to 12 Ton HIAB Crane, HIAB Crane Hire Dubai, Truck Mounted Crane Rental Dubai, HIAB Crane Rental UAE',
  },
  '/equipment/rough-terrain-cranes': {
    title: 'Rough Terrain Crane Rental Dubai | 50–110 Ton Hire UAE',
    description: 'Rent 50 to 110 tonne rough terrain cranes in Dubai and across the UAE for construction, infrastructure, industrial, oil & gas and utility projects. Certified operators and UAE-wide mobilisation.',
    keywords: 'rough terrain crane rental Dubai, rough terrain crane hire UAE, 50 ton rough terrain crane Dubai, 110 ton rough terrain crane UAE, off road crane rental Dubai, pick and carry crane hire UAE',
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
    title: 'Backhoe Loaders JCB 3CX Rental Dubai | JCB Hire UAE',
    description: 'Top Cranes offers Backhoe Loaders JCB 3CX rental in Dubai for excavation, trenching, material loading, site preparation, roadwork and infrastructure projects.',
    keywords: 'Backhoe Loaders JCB 3CX rental Dubai, backhoe loader rental UAE, JCB hire Dubai, Backhoe Loaders JCB 3CX with operator, excavation equipment rental, site preparation equipment UAE',
  },
  '/equipment/bobcat': {
    title: 'Bobcat Rental Services Dubai | Skid Steer Loader Hire UAE',
    description: 'Reliable Bobcat rental in Dubai for construction, landscaping, groundworks, demolition, cleanup and material handling projects across the UAE.',
    keywords: 'Bobcat rental Dubai, Bobcat hire UAE, skid steer loader rental, compact loader hire Dubai, landscaping equipment rental UAE, Bobcat with operator',
  },
  '/equipment/low-bed-trailers': {
    title: 'Low Bed Trailer Rental Dubai | Heavy Equipment Transport UAE',
    description: 'Rent low bed trailers in Dubai for moving cranes, excavators, loaders and oversized machinery. Experienced drivers, route planning and UAE-wide heavy equipment transport.',
    keywords: 'low bed trailer rental Dubai, lowbed trailer hire UAE, heavy equipment transport Dubai, crane transport UAE, excavator transport Dubai, low bed trailer with driver, heavy haulage UAE',
  },
  '/equipment/shovel': {
    title: 'Wheel Loader Rental Dubai | Shovel Loader Hire UAE',
    description: 'Rent shovel and wheel loaders in Dubai for mining, construction, landscaping, aggregate handling and heavy material loading projects across the UAE.',
    keywords: 'wheel loader rental Dubai, shovel loader rental UAE, front loader hire, loader rental Dubai, material loading equipment UAE, construction loader hire',
  },
  '/about': {
    title: 'About Top Cranes General Transport | Equipment Rental UAE',
    description: 'Learn about Top Cranes General Transport LLC, a Dubai-based heavy equipment rental and general transport company serving construction and industrial projects across the UAE since 2009.',
    keywords: 'Top Cranes General Transport Dubai, heavy equipment company UAE, equipment rental company Dubai, cranes company UAE, transport company Sharjah',
  },
  '/contact': {
    title: 'Contact Top Cranes | Equipment Rental Quote Dubai UAE',
    description: 'Contact Top Cranes General Transport for cranes rental, forklift rental, excavator hire, telehandler, JCB, Bobcat and heavy equipment rental quotes across the UAE.',
    keywords: 'equipment rental quote Dubai, cranes rental contact UAE, heavy machinery rental enquiry, Top Cranes phone number, construction equipment hire UAE',
  },
  '/faq': {
    title: 'Equipment Rental FAQ | Cranes and Machinery Hire UAE',
    description: 'Find answers about cranes rental, forklift hire, excavator rental, operators, delivery, rental periods and heavy equipment services from Top Cranes in the UAE.',
    keywords: 'equipment rental FAQ UAE, cranes rental questions Dubai, forklift hire FAQ, excavator rental information, machinery rental terms UAE',
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
      telephone: ['+971506749200', '+971509191004'],
      email: 'sales@topcranestransport.com',
      areaServed: ['Dubai', 'Sharjah', 'Abu Dhabi', 'United Arab Emirates'],
      serviceType: ['Cranes rental', 'Heavy equipment rental', 'General transport'],
    })
  }, [pathname])

  return null
}
