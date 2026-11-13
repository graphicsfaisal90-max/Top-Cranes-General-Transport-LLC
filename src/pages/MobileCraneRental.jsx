import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import './mobilecrane.css'

const cranes = [
  { tonnage: '550 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-1.webp' },
  { tonnage: '500 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-2.webp' },
  { tonnage: '450 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-3.webp' },
  { tonnage: '400 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-4.webp' },
  { tonnage: '350 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-5.webp' },
  { tonnage: 'LTM 1300', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-3.webp' },
  { tonnage: '250 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-4.webp' },
  { tonnage: '220 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-5.webp' },
  { tonnage: '200 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/mobile-crane-6.webp' },
  { tonnage: '160 Ton', type: 'All Terrain Crane', category: 'all-terrain', image: '/MobileCraneRental/mobile-crane-7.webp' },
  { tonnage: '130 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/mobile-crane-6.webp' },
  { tonnage: '110 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/mobile-crane-7.webp' },
  { tonnage: '100 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/mobile-crane-6.webp' },
  { tonnage: '80 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/mobile-crane-7.webp' },
  { tonnage: '50 Ton', type: 'Truck Mounted Crane', category: 'truck-mounted', image: '/MobileCraneRental/mobile-crane-6.webp' },
]

const filters = [
  { id: 'all', label: 'All Cranes' },
  { id: 'all-terrain', label: 'All Terrain' },
  { id: 'truck-mounted', label: 'Truck Mounted' },
]

const services = [
  '50–550 tonne lifting capacity',
  'All-terrain and truck-mounted mobile cranes',
  'Experienced crane operators and rigging crews',
  'Site surveys, lift planning and permit coordination',
  'Daily, weekly, monthly and project-based crane rental',
  '24/7 operational support',
]

const applications = [
  {
    title: 'Construction and High-Rise Projects',
    text: 'Lifting steel structures, precast concrete panels, construction materials and mechanical equipment for residential and commercial developments.',
  },
  {
    title: 'Infrastructure and Utilities',
    text: 'Supporting bridge construction, road development, drainage installations, utilities and heavy precast placement.',
  },
  {
    title: 'Industrial and Plant Operations',
    text: 'Handling machinery installation, industrial maintenance, plant shutdowns and heavy equipment positioning.',
  },
  {
    title: 'Logistics and Project Cargo',
    text: 'Loading, unloading and positioning industrial machinery, heavy components and project cargo at warehouses, yards and ports.',
  },
]

const reasons = [
  {
    title: '15 crane models',
    text: 'Mobile crane options from 50 to 550 tonnes.',
  },
  {
    title: 'Experienced operators',
    text: 'Skilled personnel supporting lifting operations.',
  },
  {
    title: 'Flexible rental plans',
    text: 'Daily, weekly, monthly and project-based hire.',
  },
  {
    title: 'Lift planning support',
    text: 'Site assessments, crane selection and permit coordination.',
  },
  {
    title: 'UAE-wide coverage',
    text: 'Equipment mobilisation across all seven Emirates.',
  },
  {
    title: '24/7 assistance',
    text: 'Operational support for planned and urgent lifting requirements.',
  },
]

const faqs = [
  {
    q: 'What mobile crane capacities are available?',
    a: 'Our fleet includes all-terrain and truck-mounted mobile cranes ranging from 50 to 550 tonnes, subject to availability.',
  },
  {
    q: 'Do mobile crane rentals include operators?',
    a: 'Yes, our mobile cranes are offered with experienced operators. Rigging support can also be discussed according to project requirements.',
  },
  {
    q: 'How much does mobile crane rental cost per day in Dubai?',
    a: 'Daily rental costs vary depending on crane capacity, lifting requirements, project duration and mobilisation. Contact our team for a quotation.',
  },
  {
    q: 'Do you provide crane lift planning and permits?',
    a: 'Yes, our team supports site surveys, lift planning and permit coordination based on project requirements.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We serve Dubai and all seven Emirates, subject to crane availability and project requirements.',
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
            <span className="mcr-badge">Mobile Crane Rental · Dubai, UAE</span>
            <h1>Mobile Crane Rental<br /><em>in Dubai</em></h1>
            <p className="mcr-hero-lead">
              All-terrain and truck-mounted cranes from 50 to 550 tonnes, with experienced
              operators and 24/7 support across Dubai and the UAE.
            </p>
            <div className="mcr-hero-actions">
              <Link to="/contact" className="mcr-btn mcr-btn-primary">Request a Quote <span>↗</span></Link>
              <a href="#fleet" className="mcr-btn mcr-btn-outline">Explore the Fleet</a>
            </div>
            <p className="mcr-hero-note">Experienced operators · Lift planning · 24/7 support</p>
          </div>

          <div className="mcr-hero-media">
            <div className="mcr-hero-frame">
              <img
                src="/MobileCraneRental/mobile-crane-1.webp"
                alt="Mobile crane rental in Dubai for construction projects"
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
            <span className="mcr-eyebrow">Mobile crane rental in Dubai</span>
            <h2>Mobile Crane Rental in Dubai – 50 to 550 Ton Cranes</h2>
            <p>
              <Link to="/" className="mcr-text-link">Top Cranes General Transport LLC</Link> provides
              professional mobile crane rental in Dubai for construction, infrastructure, industrial
              and heavy lifting projects. Our fleet includes 50 to 550-tonne all-terrain and
              truck-mounted cranes, supported by experienced operators, lift planning and 24/7
              operational assistance.
            </p>
            <p>
              Whether you need short-term crane hire or long-term lifting support, we help you select
              suitable equipment for your project.
            </p>
            <p className="mcr-internal-links">
              Explore our <Link to="/">homepage</Link>,{' '}
              <Link to="/equipment/crane">crane truck rental services</Link>, or{' '}
              <Link to="/equipment">heavy equipment rental in Dubai</Link>.
            </p>
            <div className="mcr-intro-actions">
              <Link to="/contact" className="mcr-btn mcr-btn-dark">Request a Quote <span>↗</span></Link>
              <a href="#fleet" className="mcr-btn mcr-btn-outline-dark">Explore Our Crane Fleet</a>
            </div>
          </div>

          <div className="mcr-intro-media">
            <img
              src="/MobileCraneRental/mobile-crane-2.webp"
              alt="All terrain mobile crane available for rental in Dubai"
            />
            <div className="mcr-experience">
              <strong>15+</strong>
              <span>Years lifting<br />across the UAE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mcr-services">
        <div className="container mcr-services-grid">
          <div className="mcr-services-copy">
            <span className="mcr-eyebrow">Professional crane hire</span>
            <h2>Professional Mobile Crane Rental Services in Dubai</h2>
            <p>
              Looking for a reliable crane rental company in Dubai? Top Cranes supplies mobile
              lifting equipment for projects requiring flexibility, lifting capacity and efficient
              mobilisation.
            </p>
            <p>
              Our mobile crane rental solutions are selected according to load weight, lifting
              radius, site accessibility and project requirements.
            </p>
          </div>

          <ul className="mcr-services-list">
            {services.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="mcr-fleet" id="fleet">
        <div className="container">
          <div className="mcr-fleet-head">
            <div>
              <span className="mcr-eyebrow">Our mobile crane rental fleet</span>
              <h2>Our Mobile Crane Rental Fleet</h2>
            </div>
            <p>
              Explore our range of mobile cranes for construction, industrial and infrastructure
              lifting operations.
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

          <div className="mcr-fleet-types">
            <article className="mcr-fleet-type">
              <span className="mcr-fleet-type-cap">160–550 tonnes + LTM 1300</span>
              <h3>All-Terrain Crane Rental</h3>
              <p>
                Our all-terrain cranes range from 160 to 550 tonnes, with an additional LTM 1300
                model. These cranes are suitable for demanding lifting operations, infrastructure
                construction and heavy equipment installation.
              </p>
              <p className="mcr-fleet-type-models">
                <strong>Available models:</strong> 160, 220, 250, 350, 400, 450, 500 and 550-tonne
                cranes, plus LTM 1300.
              </p>
            </article>

            <article className="mcr-fleet-type">
              <span className="mcr-fleet-type-cap">50–200 tonnes</span>
              <h3>Truck-Mounted Crane Rental</h3>
              <p>
                Our truck-mounted crane rental solutions offer mobility and efficient deployment
                for construction sites, machinery handling and equipment installation.
              </p>
              <p className="mcr-fleet-type-models">
                <strong>Available capacities:</strong> 50, 80, 100, 110, 130 and 200 tonnes.
                Our team can recommend suitable equipment based on lifting requirements, working
                radius and site conditions.
              </p>
            </article>
          </div>

          <div className="mcr-fleet-note">
            <span>Availability depends on project dates, lift requirements and site conditions.</span>
            <Link to="/contact">Get Crane Rental Quote <i>↗</i></Link>
          </div>
        </div>
      </section>

      <section className="mcr-apps">
        <div className="container">
          <div className="mcr-apps-head">
            <div>
              <span className="mcr-eyebrow light">Where we lift</span>
              <h2>Mobile Crane Applications<br /><em>and Heavy Lifting Solutions</em></h2>
            </div>
            <p>
              Our crane rental services in Dubai support multiple industries and lifting
              applications.
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
            <div className="mcr-coverage-head">
              <span className="mcr-eyebrow light">Coverage</span>
              <h2>Mobile Crane Rental Across Dubai and the UAE</h2>
            </div>
            <div className="mcr-coverage-body">
              <p>
                Top Cranes provides mobile crane rental services throughout Dubai, including Jebel
                Ali, Al Quoz, Dubai Industrial City, Dubai Investment Park, Dubai South and Dubai
                Silicon Oasis.
              </p>
              <p>
                We also support projects in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and
                Umm Al Quwain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mcr-process">
        <div className="container">
          <div className="mcr-process-head">
            <span className="mcr-eyebrow">Why Top Cranes</span>
            <h2>Why Choose Top Cranes General Transport LLC?</h2>
            <p className="mcr-process-lead">
              With over 15 years of lifting experience across the UAE, Top Cranes provides dependable
              heavy crane rental solutions for projects of different sizes.
            </p>
          </div>
          <div className="mcr-reasons">
            {reasons.map((reason, index) => (
              <article className="mcr-reason" key={reason.title}>
                <span className="mcr-step-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mcr-cost">
        <div className="container mcr-cost-grid">
          <div className="mcr-cost-head">
            <span className="mcr-eyebrow">Rental pricing</span>
            <h2>Mobile Crane Rental Cost in Dubai</h2>
          </div>
          <div className="mcr-cost-copy">
            <p>
              The cost of mobile crane rental in Dubai depends on crane capacity, rental duration,
              lifting radius, site conditions and transportation requirements.
            </p>
            <p>
              We offer flexible rental arrangements for daily, weekly, monthly and project-based
              lifting operations.
            </p>
            <p>
              For accurate crane rental per day pricing, share your load weight, required lifting
              height, project location and rental dates.
            </p>
            <Link to="/contact" className="mcr-btn mcr-btn-dark">
              Request a Competitive Crane Rental Quote <span>↗</span>
            </Link>
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
            <h2>Frequently Asked Questions</h2>
            <p>
              Find answers about mobile crane capacities, operators, daily rental costs, lift
              planning and coverage across Dubai and the UAE.
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
          <span className="mcr-eyebrow light">Get a quote</span>
          <h2>Get a Quote for Mobile<br />Crane Rental <em>in Dubai</em></h2>
          <p>
            Need reliable mobile crane rental in Dubai? Top Cranes General Transport LLC provides
            suitable lifting equipment, experienced operators and flexible rental solutions for
            your next project.
          </p>
          <div className="mcr-cta-actions">
            <Link to="/contact" className="mcr-btn mcr-btn-primary">Request a Quote Today <span>↗</span></Link>
            <a href="tel:+971506749200" className="mcr-btn mcr-btn-outline">Call +971 50 674 9200</a>
          </div>
          <a href="mailto:sales@topcranestransport.com" className="mcr-cta-email">
            sales@topcranestransport.com
          </a>
          <small className="mcr-cta-note">Mobile crane rental across Dubai, Abu Dhabi, Sharjah and the wider UAE.</small>
        </div>
      </section>
    </div>
  )
}
