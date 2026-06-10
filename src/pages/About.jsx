import { Link } from 'react-router-dom'
import './Pages.css'

const milestones = [
  { year: '2009', event: 'Company founded with a single crane' },
  { year: '2013', event: 'Expanded fleet to 15 vehicles' },
  { year: '2017', event: 'Opened second depot in Abu Dhabi' },
  { year: '2020', event: 'Handled 100th major project milestone' },
  { year: '2024', event: 'Fleet expanded to 50+ vehicles' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our journey, values, and the team behind Top Cranes General Transport</p>
        </div>
      </section>

      <section className="about-premium">
        <div className="container">
          <div className="about-premium-grid">
            <div className="about-premium-visual">
              <div className="about-premium-image-card">
                <div className="ap-image-card-inner">
                  <div className="ap-image-card-bg" />
                  <div className="ap-image-card-overlay" />
                  <div className="ap-image-card-frame" />
                  <div className="ap-image-card-stats">
                    <div className="ap-stat-item">
                      <span className="ap-stat-num">50+</span>
                      <span className="ap-stat-label">Vehicles</span>
                    </div>
                    <div className="ap-stat-divider" />
                    <div className="ap-stat-item">
                      <span className="ap-stat-num">200+</span>
                      <span className="ap-stat-label">Projects</span>
                    </div>
                    <div className="ap-stat-divider" />
                    <div className="ap-stat-item">
                      <span className="ap-stat-num">15+</span>
                      <span className="ap-stat-label">Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-premium-content">
              <span className="about-premium-badge">Our Story</span>
              <h2 className="about-premium-heading">
                Lifting UAE's <span className="text-highlight">Infrastructure</span> Since 2009
              </h2>
              <p className="about-premium-text">
                Founded in 2009, Top Cranes General Transport started with a single crane
                and a vision to provide reliable heavy lifting services in the UAE. Over the
                years, we have grown into one of the region's most trusted names in crane
                rental and general transport.
              </p>
              <p className="about-premium-text">
                Our commitment to <strong>safety</strong>, <strong>punctuality</strong>, and{' '}
                <strong>customer satisfaction</strong> has earned us long-term partnerships with
                major construction and logistics companies. Today, we operate a modern fleet of
                over 50 vehicles and have successfully completed more than 200 projects across the UAE.
              </p>
              <div className="about-premium-mission">
                <div className="ap-mission-card">
                  <div className="ap-mission-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h4>Our Mission</h4>
                  <p>Deliver safe, reliable, and efficient heavy lifting and transport solutions across the UAE.</p>
                </div>
                <div className="ap-mission-card">
                  <div className="ap-mission-icon ap-mission-icon-vision">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h4>Our Vision</h4>
                  <p>To be the most trusted and preferred heavy equipment provider in the region.</p>
                </div>
              </div>
              <div className="about-premium-values">
                <span className="ap-value-chip"><span className="ap-value-dot" />Safety First</span>
                <span className="ap-value-chip"><span className="ap-value-dot" />Reliability</span>
                <span className="ap-value-chip"><span className="ap-value-dot" />Excellence</span>
                <span className="ap-value-chip"><span className="ap-value-dot" />Integrity</span>
                <span className="ap-value-chip"><span className="ap-value-dot" />Customer Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">Our Journey</div>
          <p className="section-subtitle">From a single crane to a fleet of 50+ vehicles</p>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="about-stats-header">
            <span className="about-stats-badge">By the Numbers</span>
            <h2>Our Impact Across the UAE</h2>
            <p>Delivering excellence in heavy lifting and transport since 2009</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <span className="stat-number">50+</span>
              <span className="stat-label">Fleet Vehicles</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="stat-number">200+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="stat-number">99%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
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
              <h3>Let's Work Together</h3>
              <p>Ready to start your next project? Get in touch with our team for a free consultation and quote.</p>
            </div>
            <Link to="/contact" className="btn btn-primary forklift-support-btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
