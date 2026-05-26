import { Link } from 'react-router-dom'

export default function Excavators() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Excavators</h1>
          <p>Powerful earthmoving for any scale</p>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>Excavator Rental Services</h2>
            <p>
              Our excavator fleet ranges from compact models for tight urban sites to large
              heavy-duty machines for major earthmoving projects. Each excavator is equipped
              with the latest hydraulic systems for maximum digging force and efficiency.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Operating weights from 5 to 50 tons</li>
              <li>Deep digging capabilities</li>
              <li>Demolition and grading attachments</li>
              <li>Fuel-efficient engines</li>
              <li>Experienced operators available</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
