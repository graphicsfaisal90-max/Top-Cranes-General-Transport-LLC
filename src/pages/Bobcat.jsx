import { Link } from 'react-router-dom'

export default function Bobcat() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Bobcat</h1>
          <p>Compact power for tight spaces</p>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>Bobcat Skid-Steer Loader Rental Services</h2>
            <p>
              Our Bobcat skid-steer loaders are perfect for working in confined spaces where
              larger equipment cannot operate. From landscaping and site cleanup to material
              handling and grading, these compact machines deliver surprising power and agility.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Compact size for tight access areas</li>
              <li>Quick-attach system for multiple tools</li>
              <li>Zero-radius turning capability</li>
              <li>Ideal for landscaping and site preparation</li>
              <li>Certified operators provided</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
