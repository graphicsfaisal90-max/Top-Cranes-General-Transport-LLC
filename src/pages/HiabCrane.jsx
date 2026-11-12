import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import './hiabcrane.css'

const capacities = [
  {
    range: '1–3',
    tag: 'Light lifting',
    text: 'For lighter lifting operations, small machinery, equipment handling and everyday loading and unloading tasks.',
  },
  {
    range: '4–6',
    tag: 'General purpose',
    text: 'A flexible mid-range option for construction materials, generators, commercial equipment and general site work.',
  },
  {
    range: '7–9',
    tag: 'Construction',
    text: 'For heavier building supplies, industrial machinery and demanding loading, lifting and transportation requirements.',
  },
  {
    range: '10–12',
    tag: 'Heavy lifting',
    text: 'For heavier material handling, large industrial equipment and machinery transport across Dubai and the UAE.',
  },
]

const features = [
  {
    title: 'Hydraulic lifting',
    text: 'Hydraulic crane lifting and material transportation combined in one truck-mounted solution.',
  },
  {
    title: '1–12 ton range',
    text: 'From 1 ton HIAB cranes for lighter lifts to 12 ton HIAB cranes for heavier material handling.',
  },
  {
    title: 'Loading & unloading',
    text: 'Lift and move construction materials, machinery, generators and industrial equipment.',
  },
  {
    title: 'Flexible rental',
    text: 'Short-term and project-based HIAB crane rental built around your requirements.',
  },
]

const services = [
  {
    title: 'Construction Material Lifting',
    text: 'Loading and unloading steel, pipes, blocks, and building supplies.',
  },
  {
    title: 'Machinery Lifting',
    text: 'Handling industrial machinery and heavy equipment.',
  },
  {
    title: 'Generator Transportation',
    text: 'Loading, unloading, and positioning generators.',
  },
  {
    title: 'Warehouse Operations',
    text: 'Moving bulky materials and commercial equipment.',
  },
  {
    title: 'Equipment Delivery',
    text: 'Transporting and unloading machinery at project sites.',
  },
]

const reasons = [
  {
    title: '1 to 12 ton capacity',
    text: 'HIAB crane capacity range from 1 to 12 tons.',
  },
  {
    title: 'Reliable HIAB crane trucks',
    text: 'Reliable HIAB crane truck rental solutions.',
  },
  {
    title: 'Flexible rental terms',
    text: 'Flexible short-term and project-based rentals.',
  },
  {
    title: 'Construction & industrial support',
    text: 'Construction and industrial lifting support.',
  },
  {
    title: '24/7 customer assistance',
    text: '24/7 customer assistance.',
  },
  {
    title: 'Equipment rental across Dubai',
    text: 'Equipment rental services across Dubai.',
  },
]

const faqs = [
  {
    q: 'What HIAB crane capacities are available?',
    a: 'Our HIAB crane rental fleet covers 1 to 12 tons, from lighter 1 ton lifting operations through to 12 ton material handling. Share your load details and our team will confirm the right HIAB crane truck.',
  },
  {
    q: 'What can a HIAB crane truck be used for?',
    a: 'HIAB crane trucks are used for loading and unloading construction materials, lifting industrial machinery, positioning generators, moving bulky warehouse items and delivering equipment to project sites.',
  },
  {
    q: 'Do you offer short-term HIAB crane rental in Dubai?',
    a: 'Yes. We offer flexible short-term and project-based HIAB crane hire in Dubai to suit your lifting and transportation requirements.',
  },
  {
    q: 'How do I book a HIAB crane?',
    a: 'Call or WhatsApp +971 50 674 9200 with your lifting requirements, project location and rental duration, or send an enquiry through our contact page for a suitable quotation.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We provide HIAB crane rental across Dubai and the wider UAE. Contact our team to confirm availability for your project location.',
  },
]

export default function HiabCrane() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="hiab-page">
      <section className="hiab-hero">
        <img
          className="hiab-hero-bg"
          src="/HiabCrane/hiab-crane-city.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="hiab-hero-overlay" aria-hidden="true" />
        <div className="hiab-hero-grid-lines" aria-hidden="true" />

        <div className="container hiab-hero-inner">
          <div className="hiab-hero-copy">
            <span className="hiab-eyebrow">Dubai, UAE · HIAB Crane Rental · 1–12 Ton Fleet</span>
            <h1>HIAB Crane Rental<br /><em>Dubai – 1 to 12 Ton</em></h1>
            <p className="hiab-hero-lead">
              Reliable HIAB crane truck rental in Dubai for construction, heavy lifting, machinery
              transport, loading and unloading. Affordable, flexible rental solutions.
            </p>
            <div className="hiab-actions">
              <Link to="/contact" className="hiab-btn hiab-btn-primary">Request a Quote <span>↗</span></Link>
              <a href="tel:+971506749200" className="hiab-btn hiab-btn-outline">Call &amp; WhatsApp</a>
            </div>
            <div className="hiab-hero-meta">
              <span>24/7 HIAB Crane Booking &amp; Support</span>
              <span>Call &amp; WhatsApp: +971 50 674 9200</span>
            </div>
          </div>

          <aside className="hiab-hero-side">
            <strong>1–12<span>t</span></strong>
            <small>Lifting capacity</small>
            <i aria-hidden="true" />
            <p>HIAB crane trucks<br />Dubai &amp; UAE</p>
          </aside>
        </div>

        <div className="hiab-hero-strip">
          <div className="container hiab-hero-strip-inner">
            {capacities.map((item) => (
              <a href="#capacities" className="hiab-hero-cap" key={item.range}>
                <strong>{item.range}<span>t</span></strong>
                <small>{item.tag}</small>
              </a>
            ))}
            <div className="hiab-strip-note">
              <span>1–12</span>
              <small>Ton<br />fleet</small>
            </div>
          </div>
        </div>
      </section>

      <section className="hiab-intro">
        <div className="container hiab-intro-grid">
          <div className="hiab-intro-media">
            <div className="hiab-intro-frame">
              <img
                src="/HiabCrane/hiab-crane-construction.webp"
                alt="HIAB crane truck lifting construction materials in Dubai"
                loading="lazy"
              />
            </div>
            <div className="hiab-intro-plate">
              <strong>1–12<span>t</span></strong>
              <small>HIAB crane<br />truck fleet</small>
            </div>
            <span className="hiab-intro-caption">Truck mounted · Hydraulic lifting</span>
          </div>

          <div className="hiab-intro-copy">
            <span className="hiab-eyebrow">HIAB Crane Rental Dubai</span>
            <h2>HIAB Crane Rental Dubai –<br /><em>1 to 12 Ton HIAB Crane Trucks</em></h2>
            <p>
              Looking for reliable HIAB crane rental in Dubai? Top Cranes General Transport LLC
              provides 1 to 12 ton HIAB crane rental services for construction, logistics, machinery
              lifting, and heavy material transportation. Our HIAB crane trucks offer flexible
              hydraulic lifting and transportation solutions for commercial and industrial projects
              across Dubai, UAE.
            </p>

            <div className="hiab-features">
              {features.map((feature, index) => (
                <article className="hiab-feature" key={feature.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>

            <Link to="/contact" className="hiab-btn hiab-btn-dark">Get a Free HIAB Crane Rental Quote <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="hiab-capacities" id="capacities">
        <div className="hiab-capacities-bg" aria-hidden="true" />
        <div className="container">
          <div className="hiab-section-head">
            <div>
              <span className="hiab-eyebrow light">1 to 12 Ton HIAB Crane Rental in Dubai</span>
              <h2>Every load.<br /><em>One HIAB fleet.</em></h2>
            </div>
            <p>
              Top Cranes offers HIAB cranes from 1 ton to 12 tons to meet different lifting and
              transportation requirements. Our HIAB crane truck rental in Dubai is suitable for
              loading, unloading, lifting, and transporting construction materials, machinery,
              generators, and industrial equipment.
            </p>
          </div>

          <div className="hiab-cap-grid">
            {capacities.map((item, index) => (
              <article className="hiab-cap-card" key={item.range}>
                <div className="hiab-cap-index">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <small>{item.tag}</small>
                </div>
                <strong>{item.range}<span>t</span></strong>
                <div className="hiab-cap-bar" aria-hidden="true">
                  <i style={{ width: `${(Number(item.range.split('–')[1]) / 12) * 100}%` }} />
                </div>
                <h3>HIAB Crane Truck</h3>
                <p>{item.text}</p>
                <Link to="/contact">Request availability <span>↗</span></Link>
              </article>
            ))}
          </div>

          <div className="hiab-cap-note">
            <p>
              Whether you need a 1 ton HIAB crane for lighter lifting operations or a 12 ton HIAB
              crane for heavier material handling, we provide flexible rental solutions based on
              your project requirements. Our HIAB crane hire Dubai services support short-term and
              project-based equipment rental needs.
            </p>
            <Link to="/contact">Talk to our HIAB team <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="hiab-apps" id="services">
        <div className="container">
          <div className="hiab-apps-head">
            <div>
              <span className="hiab-eyebrow">HIAB Crane Truck Rental Services</span>
              <h2>Hydraulic lifting.<br /><em>Material transport.</em></h2>
            </div>
            <p>
              Our HIAB crane truck rental Dubai services support various construction, logistics,
              and industrial applications. Our truck mounted crane rental Dubai solutions combine
              hydraulic lifting and material transportation in one vehicle.
            </p>
          </div>

          <div className="hiab-app-grid">
            {services.map((item, index) => (
              <article className="hiab-app-card" key={item.title}>
                <span className="hiab-app-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="hiab-app-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="hiab-coverage">
            <h4>Dubai &amp; UAE coverage</h4>
            <p>HIAB crane rental for construction sites, warehouses, industrial facilities and commercial projects across Dubai and the wider UAE.</p>
          </div>
        </div>
      </section>

      <section className="hiab-process">
        <div className="container hiab-process-grid">
          <div className="hiab-process-intro">
            <span className="hiab-eyebrow">Why choose Top Cranes</span>
            <h2>Why Choose Top Cranes for <em>HIAB Crane Rental?</em></h2>
            <p>
              Top Cranes General Transport LLC provides reliable HIAB crane rental services in
              Dubai for contractors, logistics companies, and industrial businesses.
            </p>
            <p>
              Our team helps customers choose suitable HIAB crane trucks based on load
              requirements, lifting distance, site conditions, and project duration.
            </p>
            <Link to="/contact" className="hiab-btn hiab-btn-dark">Get a Quote <span>↗</span></Link>
          </div>

          <div className="hiab-step-list">
            {reasons.map((reason, index) => (
              <article className="hiab-step-row" key={reason.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hiab-faq">
        <div className="container hiab-faq-grid">
          <div className="hiab-faq-intro">
            <span className="hiab-eyebrow">Good to know</span>
            <h2>HIAB crane questions, answered.</h2>
            <p>
              Not sure which HIAB crane capacity fits your load? Share your lifting requirements
              and our team will guide you through truck selection, availability and rental terms.
            </p>
            <div className="hiab-faq-card">
              <span>Talk to the HIAB crane team</span>
              <a href="tel:+971506749200">+971 50 674 9200</a>
              <small>Available 24/7 for bookings &amp; support</small>
            </div>
          </div>

          <div className="hiab-accordion">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`hiab-faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="hiab-faq-q"
                    id={`hiab-faq-q-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`hiab-faq-${index}`}
                  >
                    <span>{item.q}</span>
                    <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
                  </button>
                  <div
                    className="hiab-faq-a"
                    id={`hiab-faq-${index}`}
                    role="region"
                    aria-labelledby={`hiab-faq-q-${index}`}
                    aria-hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="hiab-cta">
        <div className="hiab-cta-bg" aria-hidden="true" />
        <div className="container hiab-cta-inner">
          <div className="hiab-cta-copy">
            <span className="hiab-eyebrow light">HIAB Crane Rental Services Across Dubai</span>
            <h2>Need a HIAB crane truck <em>in Dubai?</em></h2>
            <p>
              Top Cranes supports lifting and transportation requirements at construction sites,
              warehouses, industrial facilities, and commercial projects. Our 1 to 12 ton HIAB crane
              rental Dubai services help businesses manage material handling and transportation
              operations efficiently.
            </p>
            <p>
              Contact Top Cranes General Transport LLC for 1 to 12 ton HIAB crane rental in Dubai.
              Share your lifting requirements, project location, and rental duration to receive a
              suitable quotation.
            </p>
          </div>

          <div className="hiab-cta-panel">
            <span>24/7 HIAB crane booking &amp; support</span>
            <a href="tel:+971506749200">+971 50 674 9200</a>
            <div className="hiab-cta-actions">
              <Link to="/contact" className="hiab-btn hiab-btn-primary">Get a Free Quote <span>↗</span></Link>
              <a href="https://wa.me/971506749200" target="_blank" rel="noreferrer" className="hiab-btn hiab-btn-outline">WhatsApp Us</a>
            </div>
            <small>Call &amp; WhatsApp: +971 50 674 9200 · HIAB crane rental across Dubai and the UAE.</small>
          </div>
        </div>
      </section>
    </div>
  )
}
