import { Link } from 'react-router-dom'

export default function Crane() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Crane</h1>
          <p>Heavy lifting with maximum safety</p>
        </div>
      </section>

      <section className="section">
        <div className="container equipment-detail">
          <div className="equipment-detail-content">
            <h2>Crane Rental Services</h2>
            <p>
              Our heavy-duty crane fleet handles the most demanding lifting and placement jobs
              with precision and safety. From mobile cranes to tower cranes, we have the right
              equipment to lift and position oversized loads on any project.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Lift capacities from 20 to 200 tons</li>
              <li>Mobile and tower crane options</li>
              <li>Long reach and high lift heights</li>
              <li>Rigging and lifting engineering support</li>
              <li>Certified crane operators</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
