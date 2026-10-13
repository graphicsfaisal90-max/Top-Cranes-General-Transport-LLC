import { Link } from 'react-router-dom'
import './Pages.css'
import './crane.css'

const craneTypes = [
  {
    name: 'Mobile Cranes',
    tag: 'Mobile',
    image: '/Crane/Mobile Cranes.webp',
    capacity: '25-250 Ton',
    specs: ['Highway mobility', 'Quick setup', 'Versatile lifting'],
    desc: 'Our mobile cranes offer exceptional versatility for construction sites, industrial projects, and infrastructure development across the UAE.',
  },
  {
    name: 'Rough Terrain Cranes',
    tag: 'Rough Terrain',
    image: '/Rough%20Terrarain%20Cranes.webp',
    capacity: '30-130 Ton',
    specs: ['All-terrain capability', 'Off-road mobility', 'Quick deployment'],
    desc: 'Designed for off-road operations, rough terrain cranes deliver reliable performance on uneven surfaces and challenging construction sites.',
  },
]

const relatedProducts = [
  { name: 'Fork Lift', image: '/Fork%20Lifter%20Equipment.webp', text: 'Flexible and reliable forklift rental options for warehouses, factories, and construction sites.', link: '/equipment/fork-lift' },
  { name: 'Telehandler / Boom Loader', image: '/ChatGPT%20Image%20Sep%2020,%202026,%2001_52_53%20PM.webp', text: 'Top-tier telehandlers facilitating efficient heavy lifting with reliable machinery.', link: '/equipment/telehandler' },
  { name: 'Excavators', image: '/excavator_%20equpment.webp', text: 'Dependable excavator rentals for digging, earthmoving, and demolition projects.', link: '/equipment/excavators' },
]

const rentSteps = [
  { num: '01', title: 'Assess Your Needs', text: 'Identify the type and size of cranes required for your project. Our team can help determine the most suitable options based on load requirements and site conditions.' },
  { num: '02', title: 'Get in Touch', text: 'Contact us via our website or phone. Our customer service team will discuss your needs and provide detailed information about cranes options and rental rates.' },
  { num: '03', title: 'Schedule & Delivery', text: 'Once you have chosen your cranes, we arrange delivery to your site at your convenience. We handle all transportation and setup, ensuring the cranes are ready to go.' },
]

export default function Crane() {
  return (
    <div className="crane-page">
      {/* Hero */}
      <section className="crane-hero">
        <div className="crane-hero-bg" />
        <div className="crane-hero-overlay" />
        <div className="container crane-hero-content">
          <span className="crane-hero-badge">Heavy Lifting Solutions</span>
          <h1>Cranes Rental<br />Services Dubai</h1>
          <p>Welcome to Top Cranes General Transport LLC, your trusted partner for comprehensive cranes rental services in Dubai. We provide a wide range of cranes hire solutions tailored to meet your specific requirements.</p>
          <div className="crane-hero-actions">
            <Link to="/contact" className="crane-btn crane-btn-primary">Request a Quote</Link>
            <a href="#fleet" className="crane-btn crane-btn-outline">View Fleet</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="crane-about">
        <div className="container">
          <div className="crane-about-grid">
            <div className="crane-about-img">
              <img src="/Cranes%20U.webp" alt="Cranes operations in Dubai" />
              <div className="crane-about-badge-card">
                <span className="crane-about-badge-num">15+</span>
                <span className="crane-about-badge-text">Years Experience</span>
              </div>
            </div>
            <div className="crane-about-content">
              <span className="crane-section-badge">About Our Cranes Services</span>
              <h2>Professional Cranes Solutions Across the UAE</h2>
              <p>Top Cranes General Transport LLC provides reliable and efficient cranes solutions for construction sites, industrial facilities, and infrastructure projects across the UAE. Our cranes are well-maintained, operator-ready, and suitable for both short-term and long-term projects.</p>
              <ul className="crane-about-list">
                <li>Cranes Rental (With/Without Operator)</li>
                <li>Heavy Lifting & Placement</li>
                <li>Rigging & Engineering Support</li>
                <li>Site Survey & Planning</li>
                <li>Short-Term & Long-Term Contracts</li>
              </ul>
              <Link to="/contact" className="crane-btn crane-btn-primary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="crane-fleet" id="fleet">
        <div className="container">
          <div className="crane-fleet-header">
            <span className="crane-section-badge">Our Cranes Fleet</span>
            <h2>Wide Range of Heavy Lifting Equipment</h2>
            <p>We offer a comprehensive range of cranes solutions suitable for construction sites, industrial projects, infrastructure development, and heavy lifting operations.</p>
          </div>
          <div className="crane-fleet-grid">
            {craneTypes.map((crane, i) => (
              <div className="crane-card" key={i}>
                <div className="crane-card-img">
                  <span className="crane-card-tag">{crane.tag}</span>
                  <img src={crane.image} alt={crane.name} />
                </div>
                <div className="crane-card-body">
                  <h3>{crane.name}</h3>
                  <div className="crane-card-cap">
                    <strong>{crane.capacity}</strong>
                    <span>Capacity</span>
                  </div>
                  <p>{crane.desc}</p>
                  <ul className="crane-card-feats">
                    {crane.specs.map((spec, j) => (
                      <li key={j}>{spec}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="crane-card-link">Book Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Rent */}
      <section className="crane-steps">
        <div className="container">
          <div className="crane-steps-header">
            <span className="crane-section-badge">How to Rent</span>
            <h2>How to Rent Cranes in Dubai</h2>
            <p>Renting cranes from Top Cranes General Transport LLC is a straightforward process designed to get your equipment to you with minimal hassle.</p>
          </div>
          <div className="crane-steps-grid">
            {rentSteps.map((step, i) => (
              <div className="crane-step-card" key={i}>
                <span className="crane-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="crane-related">
        <div className="container">
          <div className="crane-related-header">
            <span className="crane-section-badge">Related Equipment</span>
            <h2>Other Equipment You May Need</h2>
          </div>
          <div className="crane-related-grid">
            {relatedProducts.map((item, i) => (
              <Link to={item.link} className="crane-related-card" key={i}>
                <div className="crane-related-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="crane-related-body">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <span className="crane-related-link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="crane-cta">
        <div className="container crane-cta-grid">
          <div className="crane-cta-text">
            <h2>Contact Us! We're<br />Available 24/7.</h2>
            <p>Ready to start your project? Get in touch for a free consultation and cranes rental quote.</p>
          </div>
          <div className="crane-cta-contacts">
            <a href="tel:+971509191004" className="crane-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 919 1004</span>
            </a>
            <a href="tel:+971506749200" className="crane-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 674 9200</span>
            </a>
            <a href="mailto:sales@topcranestransport.com" className="crane-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>sales@topcranestransport.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
