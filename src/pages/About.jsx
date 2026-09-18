import { Link } from 'react-router-dom'
import './Pages.css'
import './about.css'

const expertise = [
  'Road transport within the UAE',
  'Supply of specialized forklifts with different range & container mass',
  'Route surveying & site preparation',
  'Supply of low beds, low deck, extra long trailers, cranes, boom loaders and pick ups',
  'Packing and shifting of household goods & office machinery',
  'Concrete cutting, demolishing',
  'Heavy lifts consultant',
  'Maintenance & repairing services of all lifting/construction equipments & cranes',
]

const equipmentList = [
  { sr: 1, desc: 'Forklifts: Normal & Container Mass 3, 5, 7, 10, 15 & 25 Ton' },
  { sr: 2, desc: 'Mobile Cranes: 25, 50, 100, 150, 200 & 250 Ton' },
  { sr: 3, desc: 'Boom Loaders: 532, 537, 540' },
  { sr: 4, desc: 'Excavator 320, 330 with Bucket and Jackhammer' },
  { sr: 5, desc: 'Mini Excavators' },
  { sr: 6, desc: 'JCB: 3CX with Bucket and Jack Hammer' },
  { sr: 7, desc: 'Bob Cat' },
  { sr: 8, desc: 'Shovel: 950 & 966' },
  { sr: 9, desc: 'Flat Bed: 12 & 15 Meter' },
  { sr: 10, desc: 'Low Bed: 12, 15, 18 up to 35 Meter' },
  { sr: 11, desc: 'Pick Up: 1, 3, 5, 7 & 10 Ton' },
]

const milestones = [
  { year: '2009', event: 'Company founded with a single crane in Dubai, UAE' },
  { year: '2013', event: 'Expanded fleet to 15 vehicles and opened second depot' },
  { year: '2017', event: 'Opened operations in Abu Dhabi, serving major projects' },
  { year: '2020', event: 'Handled 100th major project milestone across the UAE' },
  { year: '2024', event: 'Fleet expanded to 50+ vehicles, serving top contractors' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <span className="about-hero-badge">About Us</span>
          <h1>About Top Cranes<br />General Transport</h1>
          <p>We offer expertise, technology, and controlled operations, specialized in transportation and heavy equipment rental across the UAE.</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-left">
              <span className="about-section-badge">Who We Are</span>
              <h2>Leading Heavy Equipment Rental Company in Dubai</h2>
            </div>
            <div className="about-intro-right">
              <p>Top Cranes General Transport LLC is one of the leading transport and heavy equipment rental companies established in 2009 in Dubai, United Arab Emirates. Since our inception, we have consistently evolved and advanced our services, emerging as one of the leading equipment rental companies in the UAE.</p>
              <p>We trade and rent high-quality equipment from the world's best brands, ensuring every project receives dependable machinery backed by experienced operators and dedicated support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="about-expertise">
        <div className="container">
          <div className="about-expertise-header">
            <span className="about-section-badge">Our Expertise</span>
            <h2>What We Offer</h2>
            <p>Comprehensive transport and heavy equipment solutions for every project</p>
          </div>
          <div className="about-expertise-grid">
            {expertise.map((item, i) => (
              <div className="about-expertise-card" key={i}>
                <div className="about-expertise-num">{String(i + 1).padStart(2, '0')}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Table */}
      <section className="about-equipment">
        <div className="container">
          <div className="about-equipment-header">
            <span className="about-section-badge">Our Fleet</span>
            <h2>Wide Range of Heavy Construction Equipment</h2>
          </div>
          <div className="about-equipment-table-wrap">
            <table className="about-equipment-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {equipmentList.map((item) => (
                  <tr key={item.sr}>
                    <td className="about-eq-sr">{item.sr}</td>
                    <td>{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="container">
          <div className="about-timeline-header">
            <span className="about-section-badge">Our Journey</span>
            <h2>From a Single Crane to 50+ Vehicles</h2>
          </div>
          <div className="about-timeline-track">
            {milestones.map((m, i) => (
              <div className="about-timeline-item" key={i}>
                <div className="about-timeline-dot" />
                <div className="about-timeline-year">{m.year}</div>
                <div className="about-timeline-text">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <span className="about-stat-num">50+</span>
              <span className="about-stat-label">Fleet Vehicles</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-num">200+</span>
              <span className="about-stat-label">Projects Completed</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-num">15+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-num">99%</span>
              <span className="about-stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-grid">
          <div className="about-cta-text">
            <h2>Contact Us! We're<br />Available 24/7.</h2>
            <p>Ready to start your project? Get in touch for a free consultation and equipment quote.</p>
          </div>
          <div className="about-cta-contacts">
            <a href="tel:+971509191004" className="about-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 919 1004</span>
            </a>
            <a href="tel:+971506749200" className="about-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              <span>+971 50 674 9200</span>
            </a>
            <a href="mailto:sales@topcranestransport.com" className="about-cta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>sales@topcranestransport.com</span>
            </a>
            <Link to="/contact" className="about-cta-btn">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
