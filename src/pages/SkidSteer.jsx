import { Link } from 'react-router-dom'
import './Pages.css'
import './skidsteer.css'

const applications = [
  {
    title: 'Construction & Site Preparation',
    text: 'Grading, levelling, backfilling and clearing on sites where space is tight and larger machines cannot operate.',
  },
  {
    title: 'Landscaping & Groundworks',
    text: 'Soil movement, trenching, surface preparation and material placement for landscaping and outdoor projects.',
  },
  {
    title: 'Material Handling',
    text: 'Loading, unloading and moving aggregates, pallets and site materials with buckets, forks and grapples.',
  },
  {
    title: 'Demolition & Cleanup',
    text: 'Debris removal, light demolition support and post-work site clearing with the right attachment fitted.',
  },
]

const benefits = [
  {
    title: 'Flexible Rental Periods',
    text: 'Daily, weekly, monthly or project-based hire arranged around your schedule.',
  },
  {
    title: 'Experienced Operators',
    text: 'Trained skid steer operators available on request for safe, productive operation.',
  },
  {
    title: 'Well-Maintained Fleet',
    text: 'Every loader is inspected and serviced before it reaches your site.',
  },
  {
    title: 'Fast UAE-Wide Delivery',
    text: 'Coordinated delivery and collection across Dubai, Sharjah, Abu Dhabi and beyond.',
  },
]

export default function SkidSteer() {
  return (
    <div className="skid-page">
      {/* 1. Hero */}
      <section className="skid-hero">
        <div className="skid-hero-bg" />
        <div className="skid-hero-overlay" />
        <div className="container skid-hero-content">
          <span className="skid-badge">Skid Steer Loader Rental</span>
          <h1>Skid Steer Loader<br />Rental in UAE</h1>
          <p>Compact, manoeuvrable and attachment-ready skid steer loaders for construction, landscaping, material handling and site cleanup projects across Dubai and the UAE.</p>
          <div className="skid-actions">
            <Link to="/contact" className="skid-btn skid-btn-primary">Request a Quote</Link>
            <Link to="/equipment" className="skid-btn skid-btn-outline">Explore Fleet</Link>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="skid-intro">
        <div className="container skid-intro-grid">
          <div className="skid-intro-image">
            <img src="/SkidSteer/about.webp" alt="Skid steer loaders with attachments ready for rental" />
            <div className="skid-experience">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
          </div>
          <div className="skid-intro-content">
            <span className="skid-badge">Compact Power</span>
            <h2>The Right Machine for Tight-Access Work</h2>
            <p>Top Cranes General Transport LLC supplies well-maintained skid steer loaders for projects that need compact equipment with serious capability. Their small footprint and agile steering let them work in confined spaces where larger machines simply cannot reach.</p>
            <p>Choose wheeled or tracked loaders with the attachments your job requires, available with or without an experienced operator.</p>
            <ul className="skid-checks">
              <li>Compact and highly manoeuvrable</li>
              <li>Attachment-ready for multiple tasks</li>
              <li>Operator support available on request</li>
            </ul>
            <Link to="/contact" className="skid-btn skid-btn-primary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* 3. Applications */}
      <section className="skid-apps">
        <div className="container skid-apps-grid">
          <div className="skid-apps-image">
            <img src="/SkidSteer/applications.webp" alt="Skid steer loader working on a construction site" />
          </div>
          <div>
            <span className="skid-badge">Project Applications</span>
            <h2>One Machine, Many Jobs</h2>
            <p className="skid-lead">With the right attachment, a single skid steer loader can handle a wide range of site tasks — reducing the number of machines your project needs.</p>
            <div className="skid-apps-list">
              {applications.map((item, i) => (
                <article className="skid-app" key={item.title}>
                  <span className="skid-app-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="skid-why">
        <div className="container skid-why-grid">
          <div>
            <span className="skid-badge">Why Top Cranes</span>
            <h2>Reliable Skid Steer Hire, Start to Finish</h2>
            <p className="skid-lead">From selecting the right loader and attachment to delivery and collection, our team keeps the rental simple so your site keeps moving.</p>
            <div className="skid-benefits">
              {benefits.map((item, i) => (
                <article className="skid-benefit" key={item.title}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="skid-why-image">
            <img src="/SkidSteer/operator.webp" alt="Skid steer loader with an experienced operator on site" />
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="skid-cta">
        <div className="container skid-cta-grid">
          <div>
            <h2>Need a Skid Steer Loader on Site?</h2>
            <p>Tell us your project, location and rental period. We will match the right machine and attachment and send a clear, no-obligation quotation.</p>
          </div>
          <div className="skid-cta-actions">
            <Link to="/contact" className="skid-btn skid-btn-primary">Request a Quote</Link>
            <a href="tel:+971506749200" className="skid-btn skid-btn-outline">Call +971 50 674 9200</a>
          </div>
        </div>
      </section>
    </div>
  )
}
