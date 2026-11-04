import { Link } from 'react-router-dom'
import './Expertise.css'

const services = [
  {
    title: 'Crane Rental',
    text: 'Mobile and rough terrain cranes for construction, heavy lifting, and industrial operations.',
  },
  {
    title: 'Heavy Equipment Rental',
    text: 'Construction machinery for excavation, earthmoving, loading, and material handling.',
  },
  {
    title: 'Heavy Equipment Transport',
    text: 'Transport solutions for moving heavy machinery and construction equipment.',
  },
]

export default function Expertise() {
  return (
    <section className="expertise">
      <div className="container">
        <div className="expertise-header">
          <span className="expertise-badge">Our Expertise</span>
          <h2>Heavy Lifting, Equipment Rental &amp; Transport Solutions</h2>
          <p>We provide equipment rental and transport solutions tailored to construction, infrastructure, and industrial project requirements.</p>
        </div>
        <div className="expertise-grid">
          {services.map((service, i) => (
            <article className="expertise-card" key={service.title}>
              <span className="expertise-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <div className="expertise-actions">
          <Link to="/equipment" className="expertise-cta">Explore Our Services</Link>
        </div>
      </div>
    </section>
  )
}
