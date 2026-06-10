import { Link } from 'react-router-dom'
import './Pages.css'

export default function JCB3CX() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/jcb-hero.jpg)' }}
        />
        <div className="forklift-hero-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Versatile Earthmoving Solutions</span>
          <h1>JCB 3CX<br />Backhoe Loader Rental</h1>
          <p>
            The iconic JCB 3CX backhoe loader for construction, excavation, and
            site preparation. Power, versatility, and reliability on every job.
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
                <img src="/jcb-about.jpg" alt="JCB 3CX in operation" />
                <div className="forklift-services-image-glow" />
                <div className="forklift-services-image-badge">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="forklift-services-content">
              <span className="forklift-services-tagline">Top Cranes General Transport LLC</span>
              <h2>Professional JCB 3CX Services Across the UAE</h2>
              <p>
                Top Cranes General Transport LLC provides reliable and efficient JCB 3CX backhoe
                loader solutions for construction sites, infrastructure projects, and earthmoving
                operations across the UAE. Our machines are well-maintained, operator-ready,
                and suitable for both short-term and long-term projects.
              </p>
              <ul className="forklift-services-list">
                <li>
                  <span className="fsl-icon" />
                  JCB 3CX Rental (With/Without Operator)
                </li>
                <li>
                  <span className="fsl-icon" />
                  Trenching & Excavation
                </li>
                <li>
                  <span className="fsl-icon" />
                  Loading & Material Handling
                </li>
                <li>
                  <span className="fsl-icon" />
                  Site Preparation & Grading
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
            <span className="forklift-fleet-tagline">Our JCB 3CX Fleet</span>
            <h2>Powerful Machines For Every Job</h2>
            <p>
              We offer a range of JCB 3CX backhoe loader solutions suitable for construction sites,
              infrastructure projects, and earthmoving operations.
              Our fleet is regularly maintained to ensure safety, performance, and
              operational efficiency.
            </p>
          </div>
          <div className="forklift-fleet-grid">
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Excavation</span>
                <img src="/JCB3CX/Excavation & Trenching.jpg" alt="Excavation & Trenching" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Excavation &amp; Trenching</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>14 ft</strong>
                    <span>Dig Depth</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Precision trenching</li>
                  <li>Deep excavation capability</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Loading</span>
                <img src="/JCB3CX/Material Loading.jpg" alt="Material Loading" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Material Loading</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>1.0 m³</strong>
                    <span>Bucket</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Efficient material handling</li>
                  <li>High-capacity loading</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Preparation</span>
                <img src="/JCB3CX/Site Preparation.jpg" alt="Site Preparation" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Site Preparation</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>8 ft</strong>
                    <span>Width</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Grading & leveling</li>
                  <li>Site clearing & backfilling</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Utility</span>
                <img src="/JCB3CX/Utility & Infrastructure Works.jpg" alt="Utility & Infrastructure" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Utility &amp; Infrastructure</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>Multi</strong>
                    <span>Purpose</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Pipe laying & utilities</li>
                  <li>Road & infrastructure work</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="forklift-fleet-footer">
            <Link to="/equipment" className="btn btn-primary forkllift-fleet-btn">View Full Fleet</Link>
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
