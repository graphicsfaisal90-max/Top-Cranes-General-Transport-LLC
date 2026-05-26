import './Pages.css'

const team = [
  { name: 'Khalid Al Suwaidi', role: 'CEO & Founder', desc: 'Over 20 years of experience in heavy lifting and transport industry.' },
  { name: 'Mohammed Hassan', role: 'Operations Manager', desc: 'Expert in logistics coordination and fleet management.' },
  { name: 'David Chen', role: 'Safety Officer', desc: 'Certified safety professional ensuring compliance with all regulations.' },
  { name: 'Fatima Al Zaabi', role: 'Client Relations', desc: 'Dedicated to providing exceptional customer experience.' },
]

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

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Story</h2>
              <p>
                Founded in 2009, Top Cranes General Transport started with a single crane
                and a vision to provide reliable heavy lifting services in the UAE. Over the
                years, we have grown into one of the region's most trusted names in crane
                rental and general transport.
              </p>
              <p>
                Our commitment to safety, punctuality, and customer satisfaction has earned us
                long-term partnerships with major construction and logistics companies. Today,
                we operate a modern fleet of over 50 vehicles and have successfully completed
                more than 200 projects across the UAE.
              </p>
            </div>
            <div className="about-values">
              <h3>Our Core Values</h3>
              <div className="value-item">
                <strong>Safety</strong>
                <p>Every operation follows strict safety protocols to protect our team and your assets.</p>
              </div>
              <div className="value-item">
                <strong>Reliability</strong>
                <p>We deliver on our promises. On time, every time.</p>
              </div>
              <div className="value-item">
                <strong>Excellence</strong>
                <p>Continuous improvement and investment in the best equipment and training.</p>
              </div>
              <div className="value-item">
                <strong>Integrity</strong>
                <p>Transparent pricing, honest communication, and ethical business practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
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

      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Experienced professionals dedicated to your success</p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
