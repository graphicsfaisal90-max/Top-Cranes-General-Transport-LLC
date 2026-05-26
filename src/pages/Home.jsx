import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './Pages.css'

const brands = [
  '/Top%20Equipment%20brands%20we%20have/1-3-1%20(1).svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-1.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-2.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-3.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-4.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-5.svg',
]

const reviews = [
  {
    name: 'Ahmed Al Maktoum',
    role: 'Project Manager, Al-Futtaim',
    text: 'Professional service from start to finish. Their team handled a complex crane operation at our construction site with precision and care. Highly professional and safety-oriented.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Logistics Director, DP World',
    text: 'Reliable transport partner for our heavy equipment. Always on time, extremely professional, and their operators are highly skilled. We\'ve been working with them for over 3 years.',
    rating: 5,
  },
  {
    name: 'Rashid Al Hashimi',
    role: 'Operations Head, Emaar Properties',
    text: 'Top Cranes has been our go-to for all heavy lifting needs. Their safety standards are unmatched in the industry. They consistently deliver on time and within budget.',
    rating: 5,
  },
  {
    name: 'Khalid Al Mansouri',
    role: 'Site Director, Aldar Properties',
    text: 'Excellent service and well-maintained equipment. Their team went above and beyond to ensure our project deadlines were met. Highly recommended for any heavy lifting needs.',
    rating: 5,
  },
  {
    name: 'Robert Williams',
    role: 'Procurement Manager, Bechtel',
    text: 'We partnered with Top Cranes for a major infrastructure project and they exceeded our expectations. Professional, reliable, and their equipment is top-notch. A trusted partner.',
    rating: 5,
  },
]

const slides = [
  {
    image: '/Forklift.jpg',
    badge: 'TRUSTED ACROSS THE UAE',
    heading: 'Professional Forklift &amp;<br />Material Handling Solutions',
    text: 'Top Cranes General Transport provides professional forklift rental, warehouse handling, loading &amp; unloading, and industrial lifting solutions across the UAE. We ensure safe operations, skilled operators, and efficient transport support for every project.',
    btn1: { text: 'Get a Quote', link: '/contact' },
    btn2: { text: 'Our Forklifts', link: '/equipment/fork-lift' },
  },
  {
    image: '/Telehandler%20%20Boomloader.jpg',
    badge: 'HEAVY LIFTING EXPERTS',
    heading: 'Professional Telehandler &amp;<br />Boom Loader Solutions',
    text: 'Top Cranes General Transport provides reliable telehandler and boom loader rental services for construction, industrial, and warehouse operations across the UAE. We deliver safe lifting, high-reach handling, and efficient material transportation with skilled operators and modern equipment.',
    btn1: { text: 'Get a Quote', link: '/contact' },
    btn2: { text: 'Explore Equipment', link: '/equipment/telehandler' },
  },
  {
    image: '/Excavators.jpg',
    badge: 'YOUR TRUSTED PARTNER',
    heading: 'Powerful Excavator &amp;<br />Earthmoving Solutions',
    text: 'Top Cranes General Transport provides professional excavator rental services for construction, demolition, land clearing, and heavy earthmoving projects across the UAE. Our modern equipment and skilled operators ensure efficient digging, loading, and site development solutions.',
    btn1: { text: 'Get a Quote', link: '/contact' },
    btn2: { text: 'Explore Excavators', link: '/equipment/excavators' },
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [reviewIdx, setReviewIdx] = useState(0)
  const trackRef = useRef(null)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIdx((p) => {
        const next = (p + 1) % reviews.length
        const el = trackRef.current
        if (el && el.children[next]) {
          el.children[next].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        }
        return next
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${slide.image})` }} />
        <div className="hero-overlay" />
        <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous slide"><span className="arrow-icon arrow-prev" /></button>
        <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide"><span className="arrow-icon arrow-next" /></button>
        <div className="hero-content" key={current}>
          <span className="hero-badge">{slide.badge}</span>
          <h1 dangerouslySetInnerHTML={{ __html: slide.heading }} />
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link to={slide.btn1.link} className="btn btn-primary btn-hero">{slide.btn1.text}</Link>
            <Link to={slide.btn2.link} className="btn btn-outline btn-hero">{slide.btn2.text}</Link>
          </div>
        </div>
      </section>

       <section className="about-premium">
          <div className="container">
            <div className="about-premium-grid">
              <div className="about-premium-visual">
                <div className="about-premium-image-card">
                  <div className="ap-image-card-inner">
                    <div className="ap-image-card-bg" />
                    <div className="ap-image-card-overlay" />
                    <div className="ap-image-card-frame" />
                    <div className="ap-image-card-stats">
                      <div className="ap-stat-item">
                        <span className="ap-stat-num">200+</span>
                        <span className="ap-stat-label">Projects</span>
                      </div>
                      <div className="ap-stat-divider" />
                      <div className="ap-stat-item">
                        <span className="ap-stat-num">50+</span>
                        <span className="ap-stat-label">Fleet</span>
                      </div>
                      <div className="ap-stat-divider" />
                      <div className="ap-stat-item">
                        <span className="ap-stat-num">15+</span>
                        <span className="ap-stat-label">Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-premium-content">
                <span className="about-premium-badge">About Us</span>
                <h2 className="about-premium-heading">
                  Our <span className="text-highlight">Journey</span> of Excellence
                </h2>
                <p className="about-premium-text">
                  Founded in 2009, <strong>Top Cranes General Transport</strong> started with a single crane
                  and a vision to provide reliable heavy lifting services in the UAE. Over the
                  years, we have grown into one of the region's most trusted names in crane
                  rental and general transport.
                </p>
                <p className="about-premium-text">
                  Our commitment to safety, punctuality, and customer satisfaction has earned us
                  long-term partnerships with major construction and logistics companies. Today,
                  we operate a modern fleet of over 50 vehicles and have successfully completed
                  more than 200 projects across the UAE.
                </p>
                <div className="about-premium-mission">
                  <div className="ap-mission-card">
                    <div className="ap-mission-icon">&#9776;</div>
                    <h4>Our Mission</h4>
                    <p>To deliver safe, reliable, and efficient heavy lifting and transport solutions that exceed client expectations.</p>
                  </div>
                  <div className="ap-mission-card">
                    <div className="ap-mission-icon ap-mission-icon-vision">&#9733;</div>
                    <h4>Our Vision</h4>
                    <p>To be the UAE's most trusted partner in heavy equipment and transport services, setting the standard for excellence.</p>
                  </div>
                </div>
                <div className="about-premium-values">
                  <div className="ap-value-chip">
                    <span className="ap-value-dot" />
                    Safety First
                  </div>
                  <div className="ap-value-chip">
                    <span className="ap-value-dot" />
                    Reliability
                  </div>
                  <div className="ap-value-chip">
                    <span className="ap-value-dot" />
                    Excellence
                  </div>
                  <div className="ap-value-chip">
                    <span className="ap-value-dot" />
                    Integrity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       <section className="equipment-fleet">
          <div className="container">
            <div className="ef-header">
              <span className="ef-badge">Our Fleet</span>
              <h2 className="ef-title">Our Equipment Fleet</h2>
              <p className="ef-subtitle">Reliable Heavy Equipment &amp; Transport Solutions Across the UAE</p>
            </div>
            <div className="ef-grid">
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/Fork%20Lifter%20Equipment.png" alt="Forklift" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>Forklift</h3>
                  <p>Reliable forklift solutions designed for warehouse operations, cargo handling, loading, unloading, and industrial material transportation. Our modern forklifts ensure smooth operations, maximum safety, and efficient performance for construction sites, factories, logistics hubs, and commercial facilities across the UAE.</p>
                  <Link to="/equipment/fork-lift" className="ef-card-btn">View Details</Link>
                </div>
              </div>
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/Telehandler%20And%20Boombloader%20Equipment%20(1).png" alt="Telehandler &amp; Boom Loader" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>Telehandler &amp; Boom Loader</h3>
                  <p>Professional telehandler and boom loader equipment built for high-reach lifting, heavy material handling, and construction support operations. These versatile machines provide excellent reach, flexibility, and lifting capacity, making them ideal for industrial, commercial, and infrastructure projects.</p>
                  <Link to="/equipment/telehandler" className="ef-card-btn">View Details</Link>
                </div>
              </div>
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/excavator_%20equpment.png" alt="Excavators" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>Excavators</h3>
                  <p>Powerful excavator machines engineered for excavation, demolition, trenching, earthmoving, and large-scale construction work. Our advanced equipment and experienced operators deliver efficient performance, precision digging, and reliable site development solutions for every project.</p>
                  <Link to="/equipment/excavators" className="ef-card-btn">View Details</Link>
                </div>
              </div>
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/JCB%203CX%20Equipment.png" alt="JCB 3CX" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>JCB 3CX</h3>
                  <p>Versatile JCB 3CX backhoe loaders designed for excavation, loading, roadwork, utility operations, and construction site activities. Combining power, flexibility, and durability, these machines are ideal for heavy-duty tasks while ensuring operational efficiency and productivity.</p>
                  <Link to="/equipment/jcb-3cx" className="ef-card-btn">View Details</Link>
                </div>
              </div>
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/Crane%20Equipment.png" alt="Cranes" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>Cranes</h3>
                  <p>Professional crane rental solutions for lifting, transportation, construction, and industrial operations across the UAE. Our heavy-duty cranes are maintained to the highest safety standards and operated by skilled professionals to handle complex lifting requirements with precision and reliability.</p>
                  <Link to="/equipment/crane" className="ef-card-btn">View Details</Link>
                </div>
              </div>
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/Shovel%20Loader%20Equipment.png" alt="Shovel" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>Shovel</h3>
                  <p>Heavy-duty shovel equipment designed for loading, material movement, site clearing, and construction support applications. Built for strength and efficiency, our shovel machinery helps improve productivity while handling demanding industrial and earthmoving operations smoothly.</p>
                  <Link to="/equipment/shovel" className="ef-card-btn">View Details</Link>
                </div>
              </div>
              <div className="ef-card">
                <div className="ef-card-image">
                  <img src="/Bobcat%20Equipment.png" alt="Bobcat" />
                  <div className="ef-card-glow" />
                </div>
                <div className="ef-card-body">
                  <h3>Bobcat</h3>
                  <p>Compact and efficient Bobcat machines ideal for site preparation, landscaping, construction support, debris removal, and utility work. Designed for versatility and performance in confined spaces, our Bobcat equipment ensures reliable operation and maximum efficiency on every project.</p>
                  <Link to="/equipment/bobcat" className="ef-card-btn">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wcu-section">
          <div className="container">
            <div className="wcu-grid">
              <div className="wcu-visual">
                <div className="wcu-image-card">
                  <div className="wcu-image-bg" />
                  <div className="wcu-image-overlay" />
                  <div className="wcu-image-accent" />
                  <div className="wcu-image-content">
                    <div className="wcu-image-stat">
                      <span className="wcu-stat-num">15+</span>
                      <span className="wcu-stat-label">Years Experience</span>
                    </div>
                    <div className="wcu-image-stat">
                      <span className="wcu-stat-num">200+</span>
                      <span className="wcu-stat-label">Projects Done</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wcu-content">
                <span className="wcu-badge">Why Choose Us</span>
                <h2 className="wcu-heading">
                  Built on <span className="wcu-highlight">Trust</span>, Driven by <span className="wcu-highlight">Excellence</span>
                </h2>
                <p className="wcu-intro">
                  At Top Cranes General Transport LLC, we are committed to delivering reliable heavy equipment rental and transport solutions with professionalism, safety, and operational excellence. With modern machinery, experienced operators, and a customer-focused approach, we ensure every project is completed efficiently and on time.
                </p>
                <div className="wcu-features">
                  <div className="wcu-feature-item">
                    <div className="wcu-feature-icon">
                      <span className="wcu-feature-dot" />
                    </div>
                    <div className="wcu-feature-text">
                      <h4>Experienced &amp; Skilled Team</h4>
                      <p>Our trained operators and industry professionals ensure safe handling and efficient execution for every lifting, transport, and construction operation.</p>
                    </div>
                  </div>
                  <div className="wcu-feature-item">
                    <div className="wcu-feature-icon">
                      <span className="wcu-feature-dot" />
                    </div>
                    <div className="wcu-feature-text">
                      <h4>Modern Equipment Fleet</h4>
                      <p>We provide well-maintained cranes, forklifts, excavators, telehandlers, and heavy machinery equipped to handle projects of every scale.</p>
                    </div>
                  </div>
                  <div className="wcu-feature-item">
                    <div className="wcu-feature-icon">
                      <span className="wcu-feature-dot" />
                    </div>
                    <div className="wcu-feature-text">
                      <h4>Safety &amp; Reliability</h4>
                      <p>Safety is our top priority. We follow strict operational standards and maintenance procedures to deliver dependable and secure services.</p>
                    </div>
                  </div>
                  <div className="wcu-feature-item">
                    <div className="wcu-feature-icon">
                      <span className="wcu-feature-dot" />
                    </div>
                    <div className="wcu-feature-text">
                      <h4>Fast &amp; Efficient Operations</h4>
                      <p>From material handling to heavy transportation, we provide timely and efficient solutions that help keep your projects running smoothly.</p>
                    </div>
                  </div>
                  <div className="wcu-feature-item">
                    <div className="wcu-feature-icon">
                      <span className="wcu-feature-dot" />
                    </div>
                    <div className="wcu-feature-text">
                      <h4>UAE-Wide Service Coverage</h4>
                      <p>We proudly serve construction, industrial, logistics, and commercial projects across the UAE with professional support and quick response times.</p>
                    </div>
                  </div>
                  <div className="wcu-feature-item">
                    <div className="wcu-feature-icon">
                      <span className="wcu-feature-dot" />
                    </div>
                    <div className="wcu-feature-text">
                      <h4>Customer-Focused Approach</h4>
                      <p>We believe in building long-term client relationships by providing quality service, transparent communication, and complete customer satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       <section className="section section-alt">
         <div className="container">
           <div className="stats-grid">
             <div className="stat-item">
               <span className="stat-number">200+</span>
               <span className="stat-label">Projects Completed</span>
             </div>
             <div className="stat-item">
               <span className="stat-number">50+</span>
               <span className="stat-label">Fleet Vehicles</span>
             </div>
             <div className="stat-item">
               <span className="stat-number">15+</span>
               <span className="stat-label">Years Experience</span>
             </div>
             <div className="stat-item">
               <span className="stat-number">98%</span>
               <span className="stat-label">Client Satisfaction</span>
             </div>
           </div>
         </div>
       </section>

        <section className="testimonials-section">
          <div className="testimonials-ribbon" />
          <div className="container">
            <div className="testimonials-header">
              <span className="testimonials-badge">Testimonials</span>
              <h2 className="testimonials-title">What Our Clients Say</h2>
              <p className="testimonials-subtitle">Trusted by leading companies across the UAE</p>
            </div>
            <div className="testimonials-rating">
              <div className="testimonials-rating-stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg key={si} viewBox="0 0 20 20" width="20" height="20"><path fill="#F26836" d="M10 1l2.39 4.85 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.63l5.34-.78L10 1z"/></svg>
                ))}
              </div>
              <span className="testimonials-rating-num">5.0</span>
              <span className="testimonials-rating-label">Average Google Rating</span>
            </div>
            <div className="testimonials-carousel" ref={trackRef}>
              <div className="testimonials-track">
                {reviews.map((r, i) => (
                  <div className="testimonials-card" key={i}>
                    <div className="testimonials-card-top">
                      <div className="testimonials-card-google">
                        <svg viewBox="0 0 48 48" width="16" height="16"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                        Google
                      </div>
                      <div className="testimonials-stars">
                        {Array.from({ length: r.rating }).map((_, si) => (
                          <svg key={si} viewBox="0 0 20 20" width="14" height="14"><path fill="#F26836" d="M10 1l2.39 4.85 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.63l5.34-.78L10 1z"/></svg>
                        ))}
                      </div>
                    </div>
                    <p className="testimonials-text">"{r.text}"</p>
                    <div className="testimonials-author">
                      <strong>{r.name}</strong>
                      <span>{r.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonials-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials-dot ${i === reviewIdx ? 'active' : ''}`}
                  onClick={() => {
                    setReviewIdx(i)
                    const el = trackRef.current
                    if (el) {
                      const cards = el.querySelector('.testimonials-track')
                      if (cards && cards.children[i]) {
                        cards.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                      }
                    }
                  }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

      <section className="brands-section">
        <div className="brands-orange-strip">
          <div className="container">
            <div className="brands-header">
              <span className="brands-badge">Our Partners</span>
              <h2 className="brands-title">
                Trusted by Leading Brands
                <span>Top Equipment Brands We Work With</span>
              </h2>
            </div>
            <div className="brands-carousel">
              <div className="brands-track">
                <div className="brands-track-inner">
                  {[...brands, ...brands, ...brands].map((src, i) => (
                    <div className="brands-logo" key={i}>
                      <img src={src} alt={`Brand ${(i % brands.length) + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
