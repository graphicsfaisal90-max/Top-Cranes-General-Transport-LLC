import { Link } from 'react-router-dom'

export default function Telehandler() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Telehandler / Boomloader</h1>
          <p>Versatile reach for every job site</p>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>Telehandler & Boomloader Rental Services</h2>
            <p>
              Our fleet of telehandlers and boomloaders offers unmatched versatility for reaching heights
              and navigating rough terrain. Whether you need to lift materials to elevated platforms or
              handle loads on uneven ground, our machines deliver power, stability, and precision.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Lift capacities from 3 to 12 tons</li>
              <li>Maximum reach heights up to 20 meters</li>
              <li>All-terrain capabilities</li>
              <li>Interchangeable attachments available</li>
              <li>Certified operators provided</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
