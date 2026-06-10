import { Link } from 'react-router-dom'
import './Pages.css'

export default function Shovel() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/shovel-hero.jpg)' }}
        />
        <div className="forklift-hero-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Bulk Material Handling Solutions</span>
          <h1>Wheel Loader &amp;<br />Shovel Rental Services</h1>
          <p>
            Powerful wheel loaders and shovels for high-volume material handling,
            loading, and stockpiling. Performance, efficiency, and reliability guaranteed.
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
                <img src="/shovel-about.jpg" alt="Wheel loader in operation" />
                <div className="forklift-services-image-glow" />
                <div className="forklift-services-image-badge">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="forklift-services-content">
              <span className="forklift-services-tagline">Top Cranes General Transport LLC</span>
              <h2>Professional Shovel &amp; Loader Services Across the UAE</h2>
              <p>
                Top Cranes General Transport LLC provides reliable and efficient wheel loader
                and shovel solutions for construction sites, mining operations, and material
                handling across the UAE. Our machines are well-maintained, operator-ready,
                and suitable for both short-term and long-term projects.
              </p>
              <ul className="forklift-services-list">
                <li>
                  <span className="fsl-icon" />
                  Wheel Loader Rental (With/Without Operator)
                </li>
                <li>
                  <span className="fsl-icon" />
                  Bulk Material Loading
                </li>
                <li>
                  <span className="fsl-icon" />
                  Stockpiling & Rehandling
                </li>
                <li>
                  <span className="fsl-icon" />
                  Truck Loading & Hopper Feeding
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
            <span className="forklift-fleet-tagline">Our Shovel &amp; Loader Fleet</span>
            <h2>Powerful Machines For Every Job</h2>
            <p>
              We offer a wide range of wheel loader and shovel solutions suitable for
              construction sites, mining operations, quarries, and material handling.
              Our fleet is regularly maintained to ensure safety, performance, and
              operational efficiency.
            </p>
          </div>
          <div className="forklift-fleet-grid">
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Compact</span>
                <img src="/Shovel/Compact Wheel Loaders.jpg" alt="Compact Wheel Loader" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Compact Wheel Loaders</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>2 m³</strong>
                    <span>Bucket</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Tight site maneuverability</li>
                  <li>Versatile attachment options</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Medium</span>
                <img src="/Shovel/Medium Wheel Loaders.jpg" alt="Medium Wheel Loader" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Medium Wheel Loaders</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>4 m³</strong>
                    <span>Bucket</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>General construction & quarry</li>
                  <li>High cycle efficiency</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Heavy-Duty</span>
                <img src="/Shovel/Heavy-Duty Wheel Loaders.jpg" alt="Heavy-Duty Wheel Loader" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Heavy-Duty Wheel Loaders</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>7 m³</strong>
                    <span>Bucket</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Large-scale mining & quarry</li>
                  <li>Maximum payload capacity</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">High-Lift</span>
                <img src="/Shovel/High-Lift Wheel Loaders.jpg" alt="High-Lift Wheel Loader" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>High-Lift Wheel Loaders</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>5 m³</strong>
                    <span>Bucket</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Extended dump height</li>
                  <li>High-tip loading capability</li>
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
