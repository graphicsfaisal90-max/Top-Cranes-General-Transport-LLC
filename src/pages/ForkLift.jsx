import { Link } from 'react-router-dom'

export default function ForkLift() {
  return (
    <>
      <section className="hero-section fork-lift-hero">
        <div
          className="hero-bg active"
          style={{ backgroundImage: 'url(https://i.pinimg.com/originals/18/55/ae/1855aeaf9e78b6588a612ddfdd7bb9a1.jpg)' }}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-badge">Material Handling Solutions</span>
          <h1>Fork Lift<br />Rental Services</h1>
          <p>
            Reliable forklifts for warehouse operations, construction sites, and
            industrial material handling. Safety and precision guaranteed.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-hero">Request a Quote</Link>
            <Link to="/equipment" className="btn btn-outline btn-hero">All Equipment</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>Why Choose Our Forklifts</h2>
            <p>
              Our fleet of forklifts handles materials of all sizes with precision and care,
              from warehouse operations to construction sites. Each machine is regularly
              serviced and operated by certified professionals to ensure safety, reliability,
              and peak performance on every project.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Various load capacities available (2–25 tons)</li>
              <li>Electric and diesel options</li>
              <li>Indoor and outdoor capable</li>
              <li>Certified operators provided</li>
              <li>24/7 support and maintenance</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
