import { Link } from 'react-router-dom'
import './Pages.css'

export default function Excavators() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/excavator-hero.jpg)' }}
        />
        <div className="forklift-hero-overlay" />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Earthmoving Solutions</span>
          <h1>Excavator<br />Rental Services</h1>
          <p>
            Powerful excavators for construction, demolition, mining, and
            earthmoving projects. Performance, precision, and reliability guaranteed.
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
                <img src="/excavator-about.jpg" alt="Excavator in operation" />
                <div className="forklift-services-image-glow" />
                <div className="forklift-services-image-badge">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="forklift-services-content">
              <span className="forklift-services-tagline">Top Cranes General Transport LLC</span>
              <h2>Professional Excavator Services Across the UAE</h2>
              <p>
                Top Cranes General Transport LLC provides reliable and efficient excavator
                solutions for construction sites, infrastructure projects, and earthmoving
                operations across the UAE. Our machines are well-maintained, operator-ready,
                and suitable for both short-term and long-term projects.
              </p>
              <ul className="forklift-services-list">
                <li>
                  <span className="fsl-icon" />
                  Excavator Rental (With/Without Operator)
                </li>
                <li>
                  <span className="fsl-icon" />
                  Earthmoving & Excavation
                </li>
                <li>
                  <span className="fsl-icon" />
                  Demolition & Site Clearance
                </li>
                <li>
                  <span className="fsl-icon" />
                  Trenching & Grading
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
            <span className="forklift-fleet-tagline">Our Excavator Fleet</span>
            <h2>Powerful Machines For Every Job</h2>
            <p>
              We offer a wide range of excavator solutions suitable for construction sites,
              infrastructure projects, mining operations, and heavy earthmoving.
              Our fleet is regularly maintained to ensure safety, performance, and
              operational efficiency.
            </p>
          </div>
          <div className="forklift-fleet-grid">
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Crawler</span>
                <img src="/Excavators/Crawler Excavators.jpg" alt="Crawler Excavator" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Crawler Excavators</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>12-50 Ton</strong>
                    <span>Weight</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Heavy-duty earthmoving</li>
                  <li>Superior stability on rough terrain</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Wheeled</span>
                <img src="/Excavators/Wheeled Excavators.jpg" alt="Wheeled Excavator" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Wheeled Excavators</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>10-25 Ton</strong>
                    <span>Weight</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Fast road mobility</li>
                  <li>Urban & paved surface work</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Mini</span>
                <img src="/Excavators/Mini Excavators.jpg" alt="Mini Excavator" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Mini Excavators</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>1-5 Ton</strong>
                    <span>Weight</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Tight access & confined spaces</li>
                  <li>Versatile attachment options</li>
                </ul>
              </div>
            </div>
            <div className="fl-card">
              <div className="fl-card-img">
                <span className="fl-card-tag">Long Reach</span>
                <img src="/Excavators/Long Reach Excavators.jpg" alt="Long Reach Excavator" />
                <div className="fl-card-img-overlay" />
              </div>
              <div className="fl-card-body">
                <h3>Long Reach Excavators</h3>
                <div className="fl-card-meta">
                  <div className="fl-card-cap">
                    <strong>20-40 Ton</strong>
                    <span>Weight</span>
                  </div>
                </div>
                <ul className="fl-card-feats">
                  <li>Extended digging reach</li>
                  <li>Deep excavation & dredging</li>
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
