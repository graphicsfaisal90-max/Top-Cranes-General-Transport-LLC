import { Link } from 'react-router-dom'
import './Pages.css'

export default function Bobcat() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/bobcat-hero.jpg)' }}
        />
        <div className="forklift-hero-overlay" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Compact Power Solutions</span>
          <h1>Bobcat Skid-Steer<br />Loader Rental Services</h1>
          <p>
            Compact yet powerful Bobcat skid-steer loaders for tight spaces,
            landscaping, site preparation, and material handling. Agility and
            reliability on every job.
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
                <img src="/bobcat-about.jpg" alt="Bobcat in operation" />
                <div className="forklift-services-image-glow" />
                <div className="forklift-services-image-badge">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="forklift-services-content">
              <span className="forklift-services-tagline">Top Cranes General Transport LLC</span>
              <h2>Professional Bobcat Services Across the UAE</h2>
              <p>
                Top Cranes General Transport LLC provides reliable and efficient Bobcat skid-steer
                loader solutions for construction sites, landscaping projects, and material handling
                across the UAE. Our machines are well-maintained, operator-ready, and suitable for
                both short-term and long-term projects.
              </p>
              <ul className="forklift-services-list">
                <li>
                  <span className="fsl-icon" />
                  Bobcat Rental (With/Without Operator)
                </li>
                <li>
                  <span className="fsl-icon" />
                  Landscaping & Site Cleanup
                </li>
                <li>
                  <span className="fsl-icon" />
                  Material Handling & Loading
                </li>
                <li>
                  <span className="fsl-icon" />
                  Grading & Site Preparation
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
            <span className="forklift-fleet-tagline">Our Bobcat Fleet</span>
            <h2>Powerful Machines For Every Job</h2>
            <p>
              We offer a range of Bobcat skid-steer loader solutions suitable for
              construction sites, landscaping projects, and material handling operations.
              Our fleet is regularly maintained to ensure safety, performance, and
              operational efficiency.
            </p>
          </div>
          <div className="forklift-fleet-grid">
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Construction</span>
                <img src="/Bobcat/Construction & Site Preparation.jpg" alt="Construction & Site Preparation" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Construction &amp; Site Preparation</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>900 kg</strong>
                    <span>Rated Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Site grading & leveling</li>
                  <li>General construction tasks</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Handling</span>
                <img src="/Bobcat/Material Handling.jpg" alt="Material Handling" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Material Handling</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>1,000 kg</strong>
                    <span>Rated Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Load & move bulk materials</li>
                  <li>Efficient stockpile management</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Landscaping</span>
                <img src="/Bobcat/Landscaping & Groundworks.jpg" alt="Landscaping & Groundworks" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Landscaping &amp; Groundworks</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>600 kg</strong>
                    <span>Rated Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Precision grading & shaping</li>
                  <li>Soil & aggregate handling</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Demolition</span>
                <img src="/Bobcat/Demolition & Cleanup.jpg" alt="Demolition & Cleanup" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Demolition &amp; Cleanup</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>1,200 kg</strong>
                    <span>Rated Capacity</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Light demolition & debris removal</li>
                  <li>Site cleanup & waste handling</li>
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
