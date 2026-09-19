import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import './Pages.css'
import './home.css'

const brands = [
  '/Top%20Equipment%20brands%20we%20have/1-3-1%20(1).svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-1.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-2.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-3.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-4.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-5.svg',
]

const equipment = [
  { name: 'Mobile Crane', image: '/Cranes%20U.png', heroImage: '/Cranes%20U.png', text: 'Wide selection of crane rentals in Dubai, tailored for high-rise construction and heavy lifting tasks. Our cranes deliver exceptional strength and reliability.', link: '/equipment/crane' },
  { name: 'Rough Terrain Crane', image: '/IMG_8363.jpg', heroImage: '/IMG_8363.jpg', text: 'Reliable rough terrain crane rentals designed for demanding construction sites and uneven ground conditions. Powerful lifting performance with excellent mobility and stability.', link: '/equipment/crane' },
  { name: 'Boom Loader/ Telehandler', image: '/Telehandler%20And%20Boombloader%20Equipment%20(1).png', heroImage: '/telehandler-hero.webp', text: 'Top-tier telehandlers facilitating efficient heavy lifting solutions with reliable machinery. Versatility and top performance for efficient operations.', link: '/equipment/telehandler' },
  { name: 'Fork Lift', image: '/Fork%20Lifter%20Equipment.png', heroImage: '/Forklift.jpg', text: 'Flexible and reliable forklift rental options for any project. Cost-effective solutions ensuring you always have the right forklift for your needs.', link: '/equipment/fork-lift' },
  { name: 'Excavators', image: '/excavator_%20equpment.png', heroImage: '/excavator-hero.jpg', text: 'Dependable excavator rentals suitable for digging and earthmoving projects. Efficiency and durability for demanding construction environments.', link: '/equipment/excavators' },
  { name: 'JCB 3CX', image: '/JCB%203CX%20Equipment.png', heroImage: '/jcb-hero.jpg', text: 'Versatile JCB 3CX backhoe loaders combining efficiency and durability. A top choice for excavation, loading, roadwork and utility operations.', link: '/equipment/jcb-3cx' },
  { name: 'Shovel', image: '/Shovel%20Loader%20Equipment.png', heroImage: '/shovel-hero.jpg', text: 'Robust shovel rentals perfect for mining, construction and landscaping projects. High-quality equipment offering reliability and performance.', link: '/equipment/shovel' },
  { name: 'Bobcat', image: '/Bobcat%20Equipment.png', heroImage: '/bobcat-hero.jpg', text: 'Versatile Bobcat machinery rentals ideal for construction, landscaping and agricultural tasks. Renowned for durability and ease of operation.', link: '/equipment/bobcat' },
]

const reviews = [
  { name: 'Ahmed Al Maktoum', role: 'Project Manager, Al-Futtaim', text: 'Professional service from start to finish. Their team handled a complex crane operation at our construction site with precision and care. Highly professional and safety-oriented.' },
  { name: 'Sarah Johnson', role: 'Logistics Director, DP World', text: 'Reliable transport partner for our heavy equipment. Always on time, extremely professional, and their operators are highly skilled. We have been working with them for over 3 years.' },
  { name: 'Rashid Al Hashimi', role: 'Operations Head, Emaar Properties', text: 'Top Cranes has been our go-to for all heavy lifting needs. Their safety standards are unmatched in the industry. They consistently deliver on time and within budget.' },
  { name: 'Khalid Al Mansouri', role: 'Site Director, Aldar Properties', text: 'Excellent service and well-maintained equipment. Their team went above and beyond to ensure our project deadlines were met. Highly recommended.' },
  { name: 'Robert Williams', role: 'Procurement Manager, Bechtel', text: 'We partnered with Top Cranes for a major infrastructure project and they exceeded our expectations. Professional, reliable, and their equipment is top-notch.' },
]

const heroSlides = [
  { image: '/Cranes%20U.png', badge: 'TRUSTED ACROSS THE UAE', heading: 'Professional Crane Rental &\nHeavy Lifting Solutions', text: 'Top Cranes Transport is the most reliable heavy equipment rental company in the UAE, catering to multiple crane requirements on site.', btn1: { text: 'Get a Quote', link: '/contact' }, btn2: { text: 'View Cranes', link: '/equipment/crane' } },
  { image: '/Forklift.jpg', badge: 'MATERIAL HANDLING EXPERTS', heading: 'Forklift Rental &\nWarehouse Solutions', text: 'Efficient forklift rental services for warehouses, factories, construction sites and logistics operations across Dubai and the UAE.', btn1: { text: 'Get a Quote', link: '/contact' }, btn2: { text: 'View Forklifts', link: '/equipment/fork-lift' } },
  { image: '/excavator-hero.jpg', badge: 'YOUR TRUSTED PARTNER', heading: 'Powerful Excavator &\nEarthmoving Solutions', text: 'Professional excavator rental for construction, demolition, land clearing and heavy earthmoving projects across the UAE.', btn1: { text: 'Get a Quote', link: '/contact' }, btn2: { text: 'View Excavators', link: '/equipment/excavators' } },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [testIdx, setTestIdx] = useState(0)
  const testTrackRef = useRef(null)
  const eqScrollRef = useRef(null)

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
      <section className="am-hero" key={currentSlide}>
        <div className="am-hero-bg" style={{ backgroundImage: `url(${slide.image})` }} />
        <div className="am-hero-overlay" />
        <button className="am-hero-arrow am-hero-arrow-left" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="am-hero-arrow am-hero-arrow-right" onClick={next} aria-label="Next">&#8250;</button>
        <div className="container am-hero-content">
          <span className="am-hero-badge">{slide.badge}</span>
          <h1>{slide.heading.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</h1>
          <p>{slide.text}</p>
          <div className="am-hero-actions">
            <Link to={slide.btn1.link} className="am-btn am-btn-primary">{slide.btn1.text}</Link>
            <Link to={slide.btn2.link} className="am-btn am-btn-outline">{slide.btn2.text}</Link>
          </div>
        </div>
      </section>

      {/* 2. About / Company Intro */}
      <section className="am-about">
        <div className="container am-about-grid">
          <div className="am-about-left">
            <span className="am-badge">About Us</span>
            <h2>Round the Clock Availability & Equipment Rental Services</h2>
          </div>
          <div className="am-about-right">
            <p>Top Cranes General Transport LLC introduces us as one of the leading transport and heavy equipment rental companies established in 2009 in Dubai, United Arab Emirates. Since our inception, we have consistently evolved and advanced our services, emerging as one of the leading equipment rental companies in the UAE.</p>
            <p>We trade and rent high-quality equipment from the world's best brands, ensuring every project receives dependable machinery backed by experienced operators and dedicated support.</p>
          </div>
        </div>
      </section>

      {/* 3. Equipment Carousel */}
      <section className="am-equipment">
        <div className="container">
          <div className="am-eq-header">
            <span className="am-badge">Our Fleet</span>
            <h2>Heavy Equipment Rental Services</h2>
          </div>
          <div className="am-eq-carousel">
            <button className="am-carousel-arrow am-carousel-arrow-left" onClick={() => scrollEq(-1)} aria-label="Previous">&#8249;</button>
            <div className="am-eq-scroll" ref={eqScrollRef}>
              <div className="am-eq-track">
                {equipment.map((item) => (
                  <Link to={item.link} className="am-eq-card" key={item.name}>
                    <div className="am-eq-card-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="am-eq-card-body">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                      <span className="am-readmore">Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <button className="am-carousel-arrow am-carousel-arrow-right" onClick={() => scrollEq(1)} aria-label="Next">&#8250;</button>
          </div>
        </div>
      </section>

      {/* 4. Equipment Rental Rows */}
      <section className="am-rental">
        <div className="container">
          {equipment.map((item, i) => (
            <div className={`am-rental-row ${i % 2 !== 0 ? 'am-rental-reverse' : ''}`} key={item.name + '-r'}>
              <div className="am-rental-img">
                <img src={item.heroImage} alt={item.name} />
              </div>
              <div className="am-rental-content">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <Link to={item.link} className="am-btn am-btn-primary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials Carousel */}
      <section className="am-testimonials">
        <div className="container">
          <div className="am-test-header">
            <span className="am-badge">Testimonials</span>
            <h2>People are Talking About Top Cranes</h2>
          </div>
          <div className="am-test-carousel-wrapper">
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

      {/* 6. Brand Logos */}
      <section className="am-brands">
        <div className="am-brands-inner">
          <div className="container">
            <div className="am-brands-header">
              <h2>Top Equipment Brands We Have</h2>
            </div>
            <div className="am-brands-track">
              <div className="am-brands-track-inner">
                {brands.map((src, i) => (
                  <div className="am-brand-logo" key={i}>
                    <img src={src} alt={`Brand ${(i % brands.length) + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="am-contact-cta">
        <div className="container am-cta-grid">
          <div className="am-cta-text">
            <h2>Contact Us! We're<br />Available 24/7.</h2>
            <p>Ready to start your project? Get in touch for a free consultation and equipment quote.</p>
          </div>
          <div className="am-cta-contacts">
            <a href="tel:+971509191004" className="am-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 919 1004</span>
            </a>
            <a href="tel:+971506749200" className="am-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 674 9200</span>
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
