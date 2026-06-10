import { Link } from 'react-router-dom'
import './Pages.css'

export default function Telehandler() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/telehandler-hero.webp)' }}
        />
        <div className="forklift-hero-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Versatile Reach Solutions</span>
          <h1>Telehandler &amp;<br />Boomloader Rental</h1>
          <p>
            Powerful telehandlers and boomloaders for construction sites, industrial projects,
            and material handling. Versatility, reach, and reliability on every job.
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
                <img src="/telehandler-about.webp" alt="Telehandler in operation" />
                <div className="forklift-services-image-glow" />
                <div className="forklift-services-image-badge">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="forklift-services-content">
              <span className="forklift-services-tagline">Top Cranes General Transport LLC</span>
              <h2>Professional Telehandler Services Across the UAE</h2>
              <p>
                Top Cranes General Transport LLC provides reliable and efficient telehandler and boomloader
                solutions for construction sites, industrial facilities, and infrastructure projects across
                the UAE. Our machines are well-maintained, operator-ready, and suitable for both short-term
                and long-term projects.
              </p>
              <ul className="forklift-services-list">
                <li>
                  <span className="fsl-icon" />
                  Telehandler Rental (With/Without Operator)
                </li>
                <li>
                  <span className="fsl-icon" />
                  Material Handling & Lifting
                </li>
                <li>
                  <span className="fsl-icon" />
                  High-Reach Placement Services
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
            <span className="forklift-fleet-tagline">Our Telehandler Fleet</span>
            <h2>Powerful Machines For Every Job</h2>
            <p>
              We offer a wide range of telehandler and boomloader solutions suitable for construction sites,
              industrial projects, infrastructure development, and material handling operations.
              Our fleet is regularly maintained to ensure safety, performance, and
              operational efficiency.
            </p>
          </div>
          <div className="forklift-fleet-grid">
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Material Handling</span>
                <img src="/Telehandler/Material Handling Telehandlers.jpg" alt="Material Handling Telehandler" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Material Handling Telehandlers</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>3-5 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Efficient material transport</li>
                  <li>Precise load placement</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Rotating Boom</span>
                <img src="/Telehandler/Rotating Boom Loaders.jpg" alt="Rotating Boom Loader" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Rotating Boom Loaders</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>5-7 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>360-degree rotation</li>
                  <li>Versatile positioning</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Heavy Lift</span>
                <img src="/Telehandler/Heavy Lift Telehandlers.jpg" alt="Heavy Lift Telehandler" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Heavy Lift Telehandlers</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>7-12 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Maximum lifting power</li>
                  <li>Rough terrain stability</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Compact Access</span>
                <img src="/Telehandler/Compact Access Telehandlers.jpg" alt="Compact Access Telehandler" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Compact Access Telehandlers</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>2-3 Ton</strong>
                    <span>Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Tight access & indoor use</li>
                  <li>Versatile maneuverability</li>
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
