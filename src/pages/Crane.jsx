import { Link } from 'react-router-dom'
import './Pages.css'

export default function Crane() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/crane-hero.jpg)' }}
        />
        <div className="forklift-hero-overlay" />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Heavy Lifting Solutions</span>
          <h1>Crane<br />Rental Services</h1>
          <p>
            Powerful cranes for construction, industrial projects, and heavy lifting.
            Safety, precision, and reliability on every job.
          </p>
          <div className="forklift-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-hero">Request a Quote</Link>
            <Link to="/equipment" className="btn btn-outline btn-hero">All Equipment</Link>
          </div>
        </div>
      </section>

      <section className="forklift-services">
        <div className="container">
          <div className="forklift-services-grid">
            <div className="forklift-services-image">
              <div className="forklift-services-image-card">
                <img src="/crane-about.jpg" alt="Crane in operation" />
                <div className="forklift-services-image-glow" />
                <div className="forklift-services-image-badge">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="forklift-services-content">
              <span className="forklift-services-tagline">Top Cranes General Transport LLC</span>
              <h2>Professional Crane Services Across the UAE</h2>
              <p>
                Top Cranes General Transport LLC provides reliable and efficient crane solutions for construction sites,
                industrial facilities, and infrastructure projects across the UAE. Our cranes
                are well-maintained, operator-ready, and suitable for both short-term and
                long-term projects.
              </p>
              <ul className="forklift-services-list">
                <li>
                  <span className="fsl-icon" />
                  Crane Rental (With/Without Operator)
                </li>
                <li>
                  <span className="fsl-icon" />
                  Heavy Lifting & Placement
                </li>
                <li>
                  <span className="fsl-icon" />
                  Rigging & Engineering Support
                </li>
                <li>
                  <span className="fsl-icon" />
                  Site Survey & Planning
                </li>
                <li>
                  <span className="fsl-icon" />
                  Short-Term & Long-Term Contracts
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary forklift-services-cta">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="forklift-fleet">
        <div className="container">
          <div className="forklift-fleet-header">
            <span className="forklift-fleet-tagline">Our Crane Fleet</span>
            <h2>Powerful Machines For Every Job</h2>
            <p>
              We offer a wide range of crane solutions suitable for construction sites,
              industrial projects, infrastructure development, and heavy lifting operations.
              Our fleet is regularly maintained to ensure safety, performance, and
              operational efficiency.
            </p>
          </div>
          <div className="forklift-fleet-grid">
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Mobile</span>
                <img src="/Crane/Mobile Cranes.jpg" alt="Mobile Crane" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Mobile Cranes</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>25-100 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Quick setup & highway mobility</li>
                  <li>Versatile lifting solutions</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Tower</span>
                <img src="/Crane/Tower Cranes.jpg" alt="Tower Crane" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Tower Cranes</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>8-20 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>High-rise construction</li>
                  <li>Exceptional lift height</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Crawler</span>
                <img src="/Crane/Crawler Cranes.jpg" alt="Crawler Crane" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Crawler Cranes</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>50-200 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Heavy lifting on soft ground</li>
                  <li>Stable & powerful performance</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Rough Terrain</span>
                <img src="/Crane/Rough Terrain Cranes.jpg" alt="Rough Terrain Crane" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Rough Terrain Cranes</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>30-80 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Off-road capability</li>
                  <li>All-terrain operation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="forklift-fleet-footer">
            <Link to="/equipment" className="btn btn-primary forklift-fleet-btn">View Full Fleet</Link>
          </div>
        </div>
      </section>

      <section className="forklift-support">
        <div className="container">
          <div className="forklift-support-box">
            <div className="forklift-support-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="forklift-support-text">
              <h3>24/7 Support</h3>
              <p>We are always ready to support your operations with reliable equipment and quick assistance.</p>
            </div>
            <Link to="/contact" className="btn btn-primary forklift-support-btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
