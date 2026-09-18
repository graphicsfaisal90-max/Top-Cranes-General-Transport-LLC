import { Link } from 'react-router-dom'
import './Pages.css'
import './forklift.css'

const forkliftTypes = [
  {
    name: 'Electric Forklift',
    tag: 'Electric',
    image: '/electric forklift png.png',
    capacity: '1.5 - 2.5 Ton',
    specs: ['Indoor warehouse use', 'Zero emissions', 'Smooth operation'],
    desc: 'Electric forklifts are ideal for indoor warehouse operations, providing clean and quiet performance with zero emissions.',
  },
  {
    name: 'Diesel Forklift',
    tag: 'Diesel',
    image: '/diesel forklift png.png',
    capacity: '2.5 - 7 Ton',
    specs: ['Outdoor heavy-duty work', 'Powerful lifting', 'All-weather operation'],
    desc: 'Diesel forklifts deliver powerful performance for outdoor and heavy-duty applications, handling the toughest material lifting tasks.',
  },
  {
    name: 'Heavy Duty Forklift',
    tag: 'Heavy Duty',
    image: '/heavy duty forklift png.png',
    capacity: '5 - 10 Ton',
    specs: ['Industrial & construction', 'Strong handling', 'Maximum stability'],
    desc: 'Heavy duty forklifts are designed for industrial and construction environments requiring maximum lifting capacity and stability.',
  },
  {
    name: 'Container Mass Forklift',
    tag: 'Container',
    image: '/Png industrial fork lift.png',
    capacity: '10 - 25 Ton',
    specs: ['Container handling', 'Port operations', 'Bulk material movement'],
    desc: 'Container mass forklifts are specialized for port and container yard operations, handling heavy containers with ease.',
  },
]

const forkliftSpecs = [
  { type: 'Normal Forklifts', capacity: '3, 5, 7 Ton', use: 'General warehouse and site operations' },
  { type: 'Container Mass Forklifts', capacity: '10, 15, 25 Ton', use: 'Port and container yard operations' },
  { type: 'Electric Forklifts', capacity: '1.5 - 2.5 Ton', use: 'Indoor warehouse, food industry' },
  { type: 'Diesel Forklifts', capacity: '2.5 - 7 Ton', use: 'Outdoor, construction sites' },
  { type: 'Heavy Duty Forklifts', capacity: '5 - 25 Ton', use: 'Industrial, heavy material handling' },
]

const relatedProducts = [
  { name: 'Crane', image: '/Crane%20Equipment.png', text: 'Wide selection of crane rentals for high-rise construction and heavy lifting tasks.', link: '/equipment/crane' },
  { name: 'Telehandler', image: '/Telehandler%20And%20Boombloader%20Equipment%20(1).png', text: 'Top-tier telehandlers facilitating efficient heavy lifting with reliable machinery.', link: '/equipment/telehandler' },
  { name: 'Excavators', image: '/excavator_%20equpment.png', text: 'Dependable excavator rentals for digging, earthmoving, and demolition projects.', link: '/equipment/excavators' },
]

const rentSteps = [
  { num: '01', title: 'Identify Your Requirements', text: 'Determine the type and capacity of forklift needed based on your load weight, operating environment, and project duration.' },
  { num: '02', title: 'Request a Quote', text: 'Contact our team via phone or website. We will provide detailed information about forklift options and competitive rental rates.' },
  { num: '03', title: 'Quick Delivery & Setup', text: 'We arrange delivery to your site at your convenience. Our team handles all transportation and provides operator training if needed.' },
]

export default function ForkLift() {
  return (
    <div className="fl-page">
      {/* Hero */}
      <section className="fl-hero">
        <div className="fl-hero-bg" />
        <div className="fl-hero-overlay" />
        <div className="container fl-hero-content">
          <span className="fl-hero-badge">Material Handling Solutions</span>
          <h1>Forklift Rental<br />Services Dubai</h1>
          <p>Almasa Transport LLC specializes in forklift rentals in Dubai, providing flexible and reliable options for any project. Our cost-effective solutions ensure you always have the right forklift for your needs.</p>
          <div className="fl-hero-actions">
            <Link to="/contact" className="fl-btn fl-btn-primary">Request a Quote</Link>
            <a href="#fleet" className="fl-btn fl-btn-outline">View Fleet</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="fl-about">
        <div className="container">
          <div className="fl-about-grid">
            <div className="fl-about-img">
              <img src="/Forklift About.png" alt="Forklift operations in Dubai" />
              <div className="fl-about-badge-card">
                <span className="fl-about-badge-num">15+</span>
                <span className="fl-about-badge-text">Years Experience</span>
              </div>
            </div>
            <div className="fl-about-content">
              <span className="fl-section-badge">About Our Forklift Services</span>
              <h2>Powering Your Projects With Efficiency</h2>
              <p>We provide reliable and efficient forklift solutions for industrial, warehouse, construction, and logistics operations across the UAE. Our forklifts are well-maintained, operator-ready, and suitable for both short-term and long-term projects.</p>
              <ul className="fl-about-list">
                <li>Forklift Rental (With/Without Operator)</li>
                <li>Material Handling & Lifting</li>
                <li>Loading & Unloading Services</li>
                <li>Warehouse & Site Support</li>
                <li>Container Stuffing & Destuffing</li>
                <li>Short-Term & Long-Term Contracts</li>
              </ul>
              <Link to="/contact" className="fl-btn fl-btn-primary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="fl-fleet" id="fleet">
        <div className="container">
          <div className="fl-fleet-header">
            <span className="fl-section-badge">Our Forklift Fleet</span>
            <h2>Wide Range of Forklift Solutions</h2>
            <p>We offer a comprehensive range of forklift solutions suitable for warehouses, construction sites, logistics operations, ports, and industrial projects across the UAE.</p>
          </div>
          <div className="fl-fleet-grid">
            {forkliftTypes.map((fl, i) => (
              <div className="fl-card" key={i}>
                <div className="fl-card-img">
                  <span className="fl-card-tag">{fl.tag}</span>
                  <img src={fl.image} alt={fl.name} />
                </div>
                <div className="fl-card-body">
                  <h3>{fl.name}</h3>
                  <div className="fl-card-cap">
                    <strong>{fl.capacity}</strong>
                    <span>Capacity</span>
                  </div>
                  <p>{fl.desc}</p>
                  <ul className="fl-card-feats">
                    {fl.specs.map((spec, j) => (
                      <li key={j}>{spec}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="fl-card-link">Book Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="fl-specs">
        <div className="container">
          <div className="fl-specs-header">
            <span className="fl-section-badge">Forklift Types</span>
            <h2>Our Forklift Range & Capacities</h2>
          </div>
          <div className="fl-specs-table-wrap">
            <table className="fl-specs-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Capacity</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {forkliftSpecs.map((item, i) => (
                  <tr key={i}>
                    <td className="fl-specs-type">{item.type}</td>
                    <td>{item.capacity}</td>
                    <td>{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Rent */}
      <section className="fl-steps">
        <div className="container">
          <div className="fl-steps-header">
            <span className="fl-section-badge">How to Rent</span>
            <h2>How to Rent a Forklift in Dubai</h2>
            <p>Renting a forklift from Top Cranes General Transport LLC is a straightforward process designed to get your equipment with minimal hassle.</p>
          </div>
          <div className="fl-steps-grid">
            {rentSteps.map((step, i) => (
              <div className="fl-step-card" key={i}>
                <span className="fl-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="fl-related">
        <div className="container">
          <div className="fl-related-header">
            <span className="fl-section-badge">Related Equipment</span>
            <h2>Other Equipment You May Need</h2>
          </div>
          <div className="fl-related-grid">
            {relatedProducts.map((item, i) => (
              <Link to={item.link} className="fl-related-card" key={i}>
                <div className="fl-related-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="fl-related-body">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <span className="fl-related-link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fl-cta">
        <div className="container fl-cta-grid">
          <div className="fl-cta-text">
            <h2>Contact Us! We're<br />Available 24/7.</h2>
            <p>Ready to start your project? Get in touch for a free consultation and forklift rental quote.</p>
          </div>
          <div className="fl-cta-contacts">
            <a href="tel:+971509191004" className="fl-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 919 1004</span>
            </a>
            <a href="tel:+971506749200" className="fl-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 674 9200</span>
            </a>
            <a href="mailto:sales@topcranestransport.com" className="fl-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>sales@topcranestransport.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
