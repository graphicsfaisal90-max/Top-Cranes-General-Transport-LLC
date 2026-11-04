import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import './mobilecrane.css'

const cranes = [
  { tonnage: '550 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/550-ton-all-terrain.webp' },
  { tonnage: '500 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/500-ton-all-terrain.webp' },
  { tonnage: '450 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/450-ton-all-terrain.webp' },
  { tonnage: '400 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/400-ton-all-terrain.webp' },
  { tonnage: '350 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/350-ton-all-terrain.webp' },
  { tonnage: 'LTM 1300', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/ltm-1300-all-terrain.webp' },
  { tonnage: '250 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/250-ton-all-terrain.webp' },
  { tonnage: '220 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/220-ton-all-terrain.webp' },
  { tonnage: '200 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/200-ton-truck-mounted.webp' },
  { tonnage: '160 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/160-ton-all-terrain.webp' },
  { tonnage: '130 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/130-ton-truck-mounted.webp' },
  { tonnage: '110 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/110-ton-truck-mounted.webp' },
  { tonnage: '100 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/100-ton-truck-mounted.webp' },
  { tonnage: '80 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/80-ton-truck-mounted.webp' },
  { tonnage: '50 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/50-ton-truck-mounted.webp' },
]

const filters = [
  { id: 'all', label: 'All Cranes' },
  { id: 'all-terrain', label: 'All Terrain' },
  { id: 'truck-mounted', label: 'Truck Mounted' },
]

const applications = [
  {
    title: 'Construction & High-Rise',
    text: 'Steel, precast panels, MEP modules and materials lifted safely on active construction sites.',
  },
  {
    title: 'Infrastructure & Utilities',
    text: 'Bridges, roads, drainage, utilities and heavy precast installed with precision.',
  },
  {
    title: 'Industrial & Plant',
    text: 'Maintenance, shutdowns, equipment installation and heavy components moved in live facilities.',
  },
  {
    title: 'Logistics & Project Cargo',
    text: 'Loading, unloading and positioning of machinery and project cargo at yards and ports.',
  },
]

const steps = [
  {
    title: 'Share the lift',
    text: 'Send us the load weight, lifting radius, height and site location.',
  },
  {
    title: 'We plan the move',
    text: 'We select the right crane, prepare the lift plan and coordinate access, permits and mobilisation.',
  },
  {
    title: 'Lift with confidence',
    text: 'An experienced operator and rigging crew execute the lift safely and efficiently.',
  },
]

const faqs = [
  {
    q: 'What mobile crane capacities are available?',
    a: 'Our mobile crane fleet ranges from 50 to 550 tonnes and includes all-terrain and truck-mounted cranes. Availability depends on the lift requirements and project dates, so share the details and we will confirm the right option.',
  },
  {
    q: 'Do your cranes come with an operator?',
    a: 'Yes. Every mobile crane is supplied with an experienced operator. Rigging crews and lift supervisors can be arranged on request.',
  },
  {
    q: 'How do I choose the right crane for my lift?',
    a: 'Tell us the load weight, lifting radius, height, site access and ground conditions. Our team will recommend the crane capacity and configuration that matches the job.',
  },
  {
    q: 'Do you provide lift plans and permits?',
    a: 'We support site surveys, lift planning and permit coordination for crane operations and oversized moves. Requirements vary by site and emirate, so early planning gives the smoothest result.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We provide mobile crane rental across the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.',
  },
  {
    q: 'How early should I book a mobile crane?',
    a: 'We recommend booking 24 to 48 hours in advance for standard lifts. Urgent requirements can often be accommodated subject to fleet availability — call us directly.',
  },
]

export default function MobileCraneRental() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState(0)

  const visibleCranes = activeFilter === 'all'
    ? cranes
    : cranes.filter((crane) => crane.category === activeFilter)

  const countFor = (id) => (
    id === 'all' ? cranes.length : cranes.filter((crane) => crane.category === id).length
  )

  return (
    <div className="mcr-page">
      <section className="mcr-hero">
        <div className="mcr-hero-pattern" aria-hidden="true" />
        <div className="container mcr-hero-grid">
          <div className="mcr-hero-copy">
            <span className="mcr-badge">Mobile Crane Rental · UAE</span>
            <h1>Mobile Crane<br /><em>Rental</em></h1>
            <p className="mcr-hero-lead">
              All-terrain and truck-mounted cranes from 50 to 550 tonnes. The lifting capacity,
              reach and reliability your project needs, anywhere in the UAE.
            </p>
            <div className="mcr-hero-actions">
              <Link to="/contact" className="mcr-btn mcr-btn-primary">Request a Quote <span>↗</span></Link>
              <a href="#fleet" className="mcr-btn mcr-btn-outline">Explore the Fleet</a>
            </div>
            <p className="mcr-hero-note">Experienced operators · UAE-wide mobilisation · 24/7 support</p>
          </div>

          <div className="mcr-hero-media">
            <div className="mcr-hero-frame">
              <img
                src="/MobileCraneRental/50-ton-truck-mounted.webp"
                alt="50 tonne truck mounted mobile crane ready for a lift"
              />
            </div>
            <div className="mcr-hero-plate">
              <strong>50–550<span>t</span></strong>
              <small>Lifting capacity</small>
            </div>
            <span className="mcr-hero-caption">All terrain · Truck mounted</span>
          </div>
        </div>
      </section>

      <div className="container mcr-stats-wrap">
        <div className="mcr-stats">
          <div className="mcr-stat">
            <strong>50–550<span>t</span></strong>
            <small>Capacity range</small>
          </div>
          <div className="mcr-stat">
            <strong>15</strong>
            <small>Crane models</small>
          </div>
          <div className="mcr-stat">
            <strong>7</strong>
            <small>Emirates covered</small>
          </div>
          <div className="mcr-stat">
            <strong>24/7</strong>
            <small>Operations support</small>
          </div>
        </div>
      </div>

      <section className="mcr-intro">
        <div className="container mcr-intro-grid">
          <div className="mcr-intro-copy">
            <span className="mcr-eyebrow">The right crane for the lift</span>
            <h2>One fleet. Every lifting requirement.</h2>
            <p>
              From a 50-tonne truck-mounted crane for a tight urban lift to a 550-tonne all-terrain
              crane for heavy infrastructure, Top Cranes General Transport LLC supplies mobile crane
              rental across Dubai and the UAE.
            </p>
            <p>
              Every crane is matched to the load, radius and site, then supported by experienced
              operators, lift planning and responsive mobilisation.
            </p>
            <ul className="mcr-checks">
              <li>50 to 550 tonne lifting capacity</li>
              <li>All-terrain and truck-mounted cranes</li>
              <li>Experienced operators and rigging crews</li>
              <li>Site surveys, lift plans and permit coordination</li>
              <li>Daily, weekly, monthly and project-based hire</li>
            </ul>
            <Link to="/contact" className="mcr-btn mcr-btn-dark">Plan Your Lift <span>↗</span></Link>
          </div>

          <div className="mcr-intro-media">
            <img
              src="/MobileCraneRental/450-ton-all-terrain.webp"
              alt="450 tonne all terrain mobile crane at a project site"
            />
            <div className="mcr-experience">
              <strong>15+</strong>
              <span>Years lifting<br />across the UAE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mcr-fleet" id="fleet">
        <div className="container">
          <div className="mcr-fleet-head">
            <div>
              <span className="mcr-eyebrow">Our mobile crane fleet</span>
              <h2>Explore the full range.</h2>
            </div>
            <p>
              Filter by crane type, or tell us the lift and we will recommend the right capacity.
              Every crane is available with an experienced operator.
            </p>
          </div>

          <div className="mcr-filter-bar">
            <div className="mcr-filters" role="group" aria-label="Filter mobile cranes">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id
                return (
                  <button
                    key={filter.id}
                    type="button"
                    className={`mcr-filter${isActive ? ' active' : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                    aria-pressed={isActive}
                  >
                    {filter.label} <span>{countFor(filter.id)}</span>
                  </button>
                )
              })}
            </div>
            <p className="mcr-fleet-count">{visibleCranes.length} cranes showing</p>
          </div>

          <div className="mcr-crane-grid">
            {visibleCranes.map((crane) => (
              <Link
                to="/contact"
                className="mcr-crane-card"
                key={crane.tonnage}
                aria-label={`Request availability for ${crane.tonnage} ${crane.type}`}
              >
                <img
                  src={crane.image}
                  alt={`${crane.tonnage} ${crane.type}`}
                  loading="lazy"
                />
                <div className="mcr-crane-shade" />
                <span className="mcr-crane-tag">{crane.type}</span>
                <div className="mcr-crane-info">
                  <div>
                    <h3>{crane.tonnage}</h3>
                    <p>{crane.type}</p>
                  </div>
                  <span className="mcr-crane-arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mcr-fleet-note">
            <span>Availability depends on project dates, lift requirements and site conditions.</span>
            <Link to="/contact">Talk to our crane team <i>↗</i></Link>
          </div>
        </div>
      </section>

      <section className="mcr-apps">
        <div className="container">
          <div className="mcr-apps-head">
            <div>
              <span className="mcr-eyebrow light">Where we lift</span>
              <h2>Built for every<br /><em>stage of the build.</em></h2>
            </div>
            <p>
              From the first steel column to the final plant installation, our mobile cranes support
              the work that keeps UAE projects moving.
            </p>
          </div>

          <div className="mcr-apps-list">
            {applications.map((item, index) => (
              <article className="mcr-app-row" key={item.title}>
                <span className="mcr-app-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mcr-coverage">
            <h4>United Arab Emirates</h4>
            <p>Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain</p>
          </div>
        </div>
      </section>

      <section className="mcr-process">
        <div className="container">
          <div className="mcr-process-head">
            <span className="mcr-eyebrow">How it works</span>
            <h2>A safer lift starts with a plan.</h2>
          </div>
          <div className="mcr-steps">
            {steps.map((step, index) => (
              <article className="mcr-step" key={step.title}>
                <span className="mcr-step-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mcr-faq">
        <div className="container mcr-faq-grid">
          <div className="mcr-accordion">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`mcr-faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="mcr-faq-q"
                    id={`mcr-faq-q-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`mcr-faq-${index}`}
                  >
                    <span>{item.q}</span>
                    <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
                  </button>
                  <div
                    className="mcr-faq-a"
                    id={`mcr-faq-${index}`}
                    role="region"
                    aria-labelledby={`mcr-faq-q-${index}`}
                    aria-hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mcr-faq-intro">
            <span className="mcr-eyebrow">Good to know</span>
            <h2>Mobile crane questions, answered.</h2>
            <p>
              Not sure which crane fits the lift? Send us the load details and our team will guide
              you through capacity, access and mobilisation.
            </p>
            <div className="mcr-faq-card">
              <span>Talk to the crane team</span>
              <a href="tel:+971506749200">+971 50 674 9200</a>
              <small>Available 24/7 for urgent lifts</small>
            </div>
          </div>
        </div>
      </section>

      <section className="mcr-cta">
        <div className="mcr-cta-bg" aria-hidden="true" />
        <div className="container mcr-cta-inner">
          <span className="mcr-eyebrow light">Ready to lift</span>
          <h2>Tell us about<br />your <em>lift.</em></h2>
          <p>
            Share the load details and our team will come back with the right crane, availability
            and a clear quote.
          </p>
          <div className="mcr-cta-actions">
            <Link to="/contact" className="mcr-btn mcr-btn-primary">Request a Quote <span>↗</span></Link>
            <a href="tel:+971506749200" className="mcr-btn mcr-btn-outline">Call +971 50 674 9200</a>
          </div>
          <small className="mcr-cta-note">Mobile crane rental across Dubai, Abu Dhabi, Sharjah and the wider UAE.</small>
        </div>
      </section>
    </div>
  )
}
