import { Link } from 'react-router-dom'

export default function Shovel() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Shovel</h1>
          <p>Bulk material handling at its best</p>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>Wheel Loader & Shovel Rental Services</h2>
            <p>
              Our fleet of wheel loaders and shovels is built for high-volume material handling.
              Whether loading trucks, stockpiling aggregates, or moving bulk materials across
              your site, these machines deliver exceptional productivity and efficiency.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Bucket capacities from 2 to 10 cubic meters</li>
              <li>High payload capacities</li>
              <li>Fuel-efficient engines</li>
              <li>Quick cycle times</li>
              <li>Experienced operators available</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
