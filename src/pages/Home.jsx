import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './Pages.css'
import './home.css'
import Expertise from '../components/Expertise'

const brands = [
  { name: 'Tadano', src: '/tadano-logo-2048x426.webp' },
  { name: 'Liebherr', src: '/Liebherrr.webp?v=2' },
  { name: 'Sany', src: '/Sanyyyy.svg' },
  { name: 'XCMG', src: '/xcmg-logo.webp' },
  { name: 'JCB', src: '/JCB-Logo.webp' },
  { name: 'Grove', src: '/Grove-Logo.webp' },
]

const equipment = [
  { name: 'Mobile Crane Rental', image: '/MobileCraneRental/mobile-crane-6.webp', heroImage: '/MobileCraneRental/mobile-crane-1.webp', text: 'All-terrain and truck-mounted mobile cranes from 50 to 550 tonnes, available with experienced operators for construction, infrastructure and industrial lifts across the UAE.', link: '/equipment/mobile-cranes-rentals-in-dubai' },
   { name: 'Rough Terrain Cranes', image: '/RoughTerrainCranes/New%20image.jpg', heroImage: '/RoughTerrainCranes/New%20image.jpg', text: 'Four-wheel-drive rough terrain cranes from 50 to 110 tonnes for uneven ground, tight access and pick-and-carry lifting across the UAE.', link: '/equipment/rough-terrain-cranes' },
   { name: 'HIAB Crane Rental In Dubai', image: '/HiabCrane/hiab-crane-construction.webp', heroImage: '/HiabCrane/hiab-crane-city.webp', text: 'HIAB crane truck rental in Dubai for construction, machinery lifting, loading and unloading, and heavy material transport across the UAE.', link: '/equipment/hiab-crane' },
  { name: 'Fork Lift', image: '/Fork%20Lifter%20Equipment.webp', heroImage: '/Forklift.webp', text: 'Flexible and reliable forklift rental options for any project. Cost-effective solutions ensuring you always have the right forklift for your needs.', link: '/equipment/fork-lift' },
   { name: 'Telehandler / Boom Loader', image: '/ChatGPT%20Image%20Sep%2020,%202026,%2001_52_53%20PM.webp', heroImage: '/ChatGPT%20Image%20Sep%2020,%202026,%2001_52_53%20PM.webp', text: 'Top-tier telehandlers facilitating efficient heavy lifting solutions with reliable machinery. Versatility and top performance for efficient operations.', link: '/equipment/telehandler' },
  { name: 'Excavators', image: '/excavator_%20equpment.webp', heroImage: '/excavator-hero.webp', text: 'Dependable excavator rentals suitable for digging and earthmoving projects. Efficiency and durability for demanding construction environments.', link: '/equipment/excavators' },
  { name: 'Backhoe Loaders JCB 3CX', image: '/JCB%203CX%20Equipment.webp', heroImage: '/jcb-hero.webp', text: 'Versatile Backhoe Loaders JCB 3CX machines combining efficiency and durability. A top choice for excavation, loading, roadwork and utility operations.', link: '/equipment/jcb-3cx' },
  { name: 'Shovel', image: '/Shovel%20Loader%20Equipment.webp', heroImage: '/shovel-hero.webp', text: 'Robust shovel rentals perfect for mining, construction and landscaping projects. High-quality equipment offering reliability and performance.', link: '/equipment/shovel' },
  { name: 'Bobcat', image: '/Bobcat%20Equipment.webp', heroImage: '/bobcat-hero.webp', text: 'Versatile Bobcat machinery rentals ideal for construction, landscaping and agricultural tasks. Renowned for durability and ease of operation.', link: '/equipment/bobcat' },
  { name: 'Low Bed Trailers', image: '/LowBedTrailers/lowbed-trailer.webp', heroImage: '/LowBedTrailers/lowbed-title.webp', text: 'Heavy-duty low bed trailers for moving cranes, excavators, loaders and oversized machinery safely across the UAE.', link: '/equipment/low-bed-trailers' },
]

const whyPoints = [
  {
    title: 'Established in 2009',
    text: 'Extensive experience supporting equipment rental and transport requirements across the UAE.',
  },
  {
    title: 'Quality Fleet',
    text: 'Machinery from recognized global manufacturers to meet diverse project needs.',
  },
  {
    title: 'Experienced Operators',
    text: 'Skilled teams supporting safe and efficient on-site equipment operations.',
  },
  {
    title: '24/7 Availability',
    text: 'Responsive assistance for equipment rental enquiries and project requirements.',
  },
]

const homeFaqs = [
  {
    q: 'What types of heavy equipment do you rent?',
    a: 'We rent mobile cranes, rough terrain cranes, HIAB crane trucks, forklifts, telehandlers, excavators, JCB 3CX backhoe loaders, wheel loaders, Bobcats and low bed trailers across the UAE.',
  },
  {
    q: 'Do you provide operators with the equipment?',
    a: 'Yes, certified and experienced operators are available with all equipment rentals. Equipment-only rental is also available if you have your own certified personnel.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We serve Dubai, Abu Dhabi, Sharjah and all other emirates. Our fleet can reach project sites across the UAE.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Fill out the contact form on our website, call +971 50 674 9200, or email sales@topcranestransport.com. Our team usually responds within 24 hours.',
  },
  {
    q: 'What is the minimum rental period?',
    a: 'We offer daily, weekly, monthly and long-term rental options to suit both short projects and ongoing site requirements.',
  },
  {
    q: 'Do you provide heavy equipment transport?',
    a: 'Yes, we provide low bed trailers and heavy haulage for cranes, excavators, loaders and oversized machinery, including route planning and safe delivery to your project site.',
  },
]

const reviews = [
  { name: 'Ahmed Al Maktoum', role: 'Project Manager, Al-Futtaim', text: 'Professional service from start to finish. Their team handled a complex cranes operation at our construction site with precision and care. Highly professional and safety-oriented.' },
  { name: 'Sarah Johnson', role: 'Logistics Director, DP World', text: 'Reliable transport partner for our heavy equipment. Always on time, extremely professional, and their operators are highly skilled. We have been working with them for over 3 years.' },
  { name: 'Rashid Al Hashimi', role: 'Operations Head, Emaar Properties', text: 'Top Cranes has been our go-to for all heavy lifting needs. Their safety standards are unmatched in the industry. They consistently deliver on time and within budget.' },
  { name: 'Khalid Al Mansouri', role: 'Site Director, Aldar Properties', text: 'Excellent service and well-maintained equipment. Their team went above and beyond to ensure our project deadlines were met. Highly recommended.' },
  { name: 'Robert Williams', role: 'Procurement Manager, Bechtel', text: 'We partnered with Top Cranes for a major infrastructure project and they exceeded our expectations. Professional, reliable, and their equipment is top-notch.' },
]

const heroSlides = [
  { image: '/Main%20Homepage%20hero%20section.webp', imageAlt: 'Top Cranes mobile crane lifting a concrete block at a Dubai construction site', badge: 'TRUSTED ACROSS THE UAE', heading: 'Crane Rental &\nHeavy Equipment\nServices in Dubai', text: 'Top Cranes General Transport LLC provides reliable crane rental and heavy equipment rental services across Dubai and the UAE. We support construction, infrastructure, and industrial projects with quality machinery, experienced operators, and dependable lifting solutions.', btn1: { text: 'Get a Quote', link: '/contact' }, btn2: { text: 'View Our Fleet', link: '/equipment' } },
  { image: '/Forklift.webp', imageAlt: 'Forklift moving materials at a warehouse in Dubai', badge: 'MATERIAL HANDLING EXPERTS', heading: 'Forklift Rental &\nWarehouse Solutions', text: 'Efficient forklift rental services for warehouses, factories, construction sites and logistics operations across Dubai and the UAE.', btn1: { text: 'Get a Quote', link: '/contact' }, btn2: { text: 'View Forklifts', link: '/equipment/fork-lift' } },
  { image: '/excavator-hero.webp', imageAlt: 'Excavator working on an earthmoving project in the UAE', badge: 'YOUR TRUSTED PARTNER', heading: 'Powerful Excavator &\nEarthmoving Solutions', text: 'Professional excavator rental for construction, demolition, land clearing and heavy earthmoving projects across the UAE.', btn1: { text: 'Get a Quote', link: '/contact' }, btn2: { text: 'View Excavators', link: '/equipment/excavators' } },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [testIdx, setTestIdx] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const testTrackRef = useRef(null)
  const eqScrollRef = useRef(null)

  useEffect(() => {
    const section = document.querySelector('.am-home')
    if (!section) return

    const items = section.querySelectorAll('[data-reveal]')
    if (!items.length) return

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const scrollEq = (dir) => {
    const el = eqScrollRef.current
    if (el) el.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  const scrollTest = (dir) => {
    const el = testTrackRef.current
    if (!el) return
    const idx = Math.min(testIdx + dir, reviews.length - 1)
    const next = Math.max(idx, 0)
    setTestIdx(next)
    if (el.children[next]) el.children[next].scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }

  const prev = () => setCurrentSlide(c => c === 0 ? heroSlides.length - 1 : c - 1)
  const next = () => setCurrentSlide(c => c === heroSlides.length - 1 ? 0 : c + 1)

  const slide = heroSlides[currentSlide]

  return (
    <div className="am-home">
      {/* 1. Hero Carousel */}
      <section className="am-hero">
        <img key={currentSlide} className="am-hero-bg" src={slide.image} alt={slide.imageAlt} fetchPriority="high" />
        <div className="am-hero-overlay" />
        <div className="am-hero-grid-lines" aria-hidden="true" />
        <button className="am-hero-arrow am-hero-arrow-left" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="am-hero-arrow am-hero-arrow-right" onClick={next} aria-label="Next">&#8250;</button>
        <div className="container am-hero-content" key={currentSlide}>
          <span className="am-hero-badge">{slide.badge}</span>
          <h1>{slide.heading.split('\n').map((line, i, lines) => <span key={i}>{line}{i < lines.length - 1 && <br />}</span>)}</h1>
          <p>{slide.text}</p>
          <div className="am-hero-actions">
            <Link to={slide.btn1.link} className="am-btn am-btn-primary">{slide.btn1.text}</Link>
            <Link to={slide.btn2.link} className="am-btn am-btn-outline">{slide.btn2.text}</Link>
          </div>
        </div>
      </section>

      {/* 2. Our Fleet Carousel */}
      <section className="am-equipment">
        <div className="container">
          <div className="am-eq-header" data-reveal>
            <span className="am-badge">Our Fleet</span>
            <h2>Heavy Equipment Rental Services</h2>
          </div>
          <div className="am-eq-carousel">
            <button className="am-carousel-arrow am-carousel-arrow-left" onClick={() => scrollEq(-1)} aria-label="Previous">&#8249;</button>
            <div className="am-eq-scroll" ref={eqScrollRef}>
              <div className="am-eq-track">
                {equipment.map((item, index) => (
                  <div
                    className="am-eq-card-reveal"
                    key={item.name}
                    data-reveal="zoom"
                    style={{ '--reveal-delay': `${Math.min(index, 5) * 70}ms` }}
                  >
                    <Link to={item.link} className="am-eq-card">
                      {item.image && (
                        <div className="am-eq-card-img">
                          <img src={item.image} alt={item.name} />
                        </div>
                      )}
                      <div className="am-eq-card-body">
                        <h3>{item.name}</h3>
                        <p>{item.text}</p>
                        <span className="am-readmore">Read More →</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <button className="am-carousel-arrow am-carousel-arrow-right" onClick={() => scrollEq(1)} aria-label="Next">&#8250;</button>
          </div>
        </div>
      </section>

      {/* 3. About / Company Intro */}
      <section className="am-about">
        <div className="container am-about-grid">
          <div className="am-about-left" data-reveal="left">
            <span className="am-badge">About Us</span>
            <h2>Trusted Crane Rental Company in Dubai Since 2009</h2>
          </div>
          <div className="am-about-right" data-reveal="right">
            <p>Established in 2009, Top Cranes General Transport LLC is a Dubai-based transport and heavy equipment rental company. We provide quality machinery from leading global brands, supported by experienced operators and dedicated service to meet diverse project requirements across the UAE.</p>
            <Link to="/about" className="am-btn am-btn-primary am-about-cta">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Top Cranes */}
      <section className="am-why">
        <div className="container am-why-grid">
          <div className="am-why-media" data-reveal="left">
            <img src="/Why%20you%20choose%20us%20image.webp" alt="Top Cranes heavy equipment ready for a project" loading="lazy" />
            <div className="am-why-plate">
              <strong>Since 2009</strong>
              <span>Trusted across the UAE</span>
            </div>
          </div>

          <div className="am-why-copy" data-reveal="right">
            <span className="am-badge">Why Choose Us</span>
            <h2>Why Choose Top Cranes?</h2>
            <p className="am-why-lead">Reliable Equipment Rental Services Across the UAE</p>

            <div className="am-why-list">
              {whyPoints.map((point, index) => (
                <article className="am-why-item" key={point.title}>
                  <span className="am-why-num">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <Link to="/contact" className="am-btn am-btn-primary">Request Equipment</Link>
          </div>
        </div>
      </section>

      {/* 5. Our Expertise */}
      <Expertise />

      {/* 6. Equipment Rental Rows */}
      <section className="am-rental">
        <div className="container">
          <div className="am-rental-head" data-reveal>
            <span className="am-badge">Our Services</span>
            <h2>Rental &amp; Transport Solutions Across the UAE</h2>
          </div>
          {equipment.map((item, i) => (
            <div className={`am-rental-row ${i % 2 !== 0 ? 'am-rental-reverse' : ''} ${!item.heroImage ? 'am-rental-solo' : ''}`} key={item.name + '-r'}>
              {item.heroImage && (
                <div className="am-rental-img" data-reveal={i % 2 === 0 ? 'left' : 'right'}>
                  <img src={item.heroImage} alt={item.name} />
                </div>
              )}
              <div className="am-rental-content" data-reveal={i % 2 === 0 ? 'right' : 'left'}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <Link to={item.link} className="am-btn am-btn-primary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials Carousel */}
      <section className="am-testimonials">
        <div className="container">
          <div className="am-test-header" data-reveal>
            <span className="am-badge">Testimonials</span>
            <h2>People are Talking About Top Cranes</h2>
          </div>
          <div className="am-test-carousel-wrapper" data-reveal>
            <button className="am-carousel-arrow am-carousel-arrow-left" onClick={() => scrollTest(-1)} aria-label="Previous">&#8249;</button>
            <div className="am-test-carousel" ref={testTrackRef}>
              <div className="am-test-track">
                {reviews.map((r, i) => (
                  <div className="am-test-card" key={i}>
                    <div className="am-test-stars">
                      {[1,2,3,4,5].map(s => <svg key={s} viewBox="0 0 20 20" width="15" height="15"><path fill="#F26836" d="M10 1l2.39 4.85 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.63l5.34-.78L10 1z"/></svg>)}
                    </div>
                    <p className="am-test-text">"{r.text}"</p>
                    <div className="am-test-author">
                      <strong>{r.name}</strong>
                      <span>{r.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="am-carousel-arrow am-carousel-arrow-right" onClick={() => scrollTest(1)} aria-label="Next">&#8250;</button>
          </div>
          <div className="am-test-dots">
            {reviews.map((_, i) => (
              <button key={i} className={`am-dot ${i === testIdx ? 'am-dot-active' : ''}`} onClick={() => {
                setTestIdx(i)
                const el = testTrackRef.current
                if (el && el.children[i]) el.children[i].scrollIntoView({ behavior: 'smooth', inline: 'center' })
              }} aria-label={`Review ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Brand Logos */}
      <section className="am-brands">
        <div className="am-brands-inner">
          <div className="container">
            <div className="am-brands-header" data-reveal>
              <h2>Top Equipment Brands We Have</h2>
            </div>
            <div className="am-brands-track" data-reveal="zoom">
              <div className="am-brands-track-inner">
                {brands.map((brand) => (
                  <div className="am-brand-logo" key={brand.src}>
                    <img src={brand.src} alt={`${brand.name} logo`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="am-faq">
        <div className="container am-faq-grid">
          <div className="am-faq-intro" data-reveal="left">
            <span className="am-badge">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers about crane and heavy equipment rental in Dubai and across the UAE.</p>
            <Link to="/faq" className="am-btn am-btn-primary">View All FAQs</Link>
          </div>

          <div className="am-faq-list" data-reveal="right">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`am-faq-item${isOpen ? ' open' : ''}`} key={faq.q}>
                  <button
                    type="button"
                    className="am-faq-q"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span className="am-faq-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className="am-faq-a" id={`home-faq-${index}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="am-contact-cta">
        <div className="container am-cta-grid">
          <div className="am-cta-text" data-reveal="left">
            <h2>Contact Us! We're<br />Available 24/7.</h2>
            <p>Ready to start your project? Get in touch for a free consultation and equipment quote.</p>
          </div>
          <div className="am-cta-contacts" data-reveal="right">
            <a href="tel:+971506749200" className="am-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 674 9200</span>
            </a>
            <a href="tel:+971509191004" className="am-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 919 1004</span>
            </a>
            <a href="mailto:sales@topcranestransport.com" className="am-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>sales@topcranestransport.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
