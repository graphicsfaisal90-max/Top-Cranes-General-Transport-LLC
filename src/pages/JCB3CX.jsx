import { Link } from 'react-router-dom'

export default function JCB3CX() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>JCB 3CX</h1>
          <p>The iconic backhoe loader for every task</p>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>JCB 3CX Rental Services</h2>
            <p>
              The JCB 3CX is a true workhorse on any construction site. Combining the power of
              a loader with the precision of a backhoe, it excels at trenching, loading,
              excavation, and site preparation. Our fleet is well-maintained and ready for
              any challenge.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Powerful backhoe digging depth</li>
              <li>High-capacity front loader</li>
              <li>Easy-to-use controls</li>
              <li>Durable and reliable performance</li>
              <li>Certified operators provided</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
