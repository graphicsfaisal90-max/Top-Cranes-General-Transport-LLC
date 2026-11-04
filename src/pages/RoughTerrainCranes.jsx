import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import './roughterrain.css'

const capacities = [
  {
    tonnage: '110',
    tag: 'Heavy industrial',
    text: 'For heavy components, plant modules and large infrastructure picks where capacity and reach are critical.',
  },
  {
    tonnage: '90',
    tag: 'Plant & refinery',
    text: 'A strong balance of lifting power and manoeuvrability for industrial plants and major construction work.',
  },
  {
    tonnage: '60',
    tag: 'Construction',
    text: 'A versatile class for precast, steelwork, general construction and utility operations.',
  },
  {
    tonnage: '50',
    tag: 'Utility & support',
    text: 'Compact, agile support for maintenance, tight sites and everyday lifting tasks.',
  },
]

const features = [
  {
    title: '4x4 mobility',
    text: 'Four-wheel drive and high ground clearance keep the crane moving across prepared and unpaved sites.',
  },
  {
    title: 'Pick & carry',
    text: 'Move loads short distances without repositioning the whole crane, improving productivity on busy sites.',
  },
  {
    title: 'Compact footprint',
    text: 'Tight turning and a compact chassis help the crane work in restricted yards and congested areas.',
  },
  {
    title: 'Fast setup',
    text: 'Straightforward rigging and controls keep mobilisation and daily lifting efficient.',
  },
]

const applications = [
  {
    title: 'Oil & Gas',
    text: 'Lifting and positioning equipment, pipe spools and structural components on upstream, midstream and industrial facilities.',
  },
  {
    title: 'Infrastructure',
    text: 'Bridges, roads, drainage and public works where cranes need to operate away from paved surfaces.',
  },
  {
    title: 'Construction',
    text: 'Precast panels, steelwork, materials and plant moved safely across active construction sites.',
  },
  {
    title: 'Industrial Maintenance',
    text: 'Shutdowns, maintenance campaigns and equipment replacement in operating plants and factories.',
  },
  {
    title: 'Utilities',
    text: 'Power, water and telecom projects requiring stable lifting on uneven or prepared ground.',
  },
  {
    title: 'Plant & Refinery',
    text: 'Heavy components, vessels and modules positioned with controlled reach in congested process areas.',
  },
]

const steps = [
  {
    title: 'Share the lift',
    text: 'Send us the load weight, lifting radius, height, site access, ground conditions and project dates.',
  },
  {
    title: 'We plan the crane',
    text: 'We select the right capacity and configuration, review access, prepare the lift plan and coordinate permits.',
  },
  {
    title: 'Mobilise to site',
    text: 'The crane is transported, positioned, inspected and set up by our team for the work ahead.',
  },
  {
    title: 'Lift with confidence',
    text: 'An experienced operator and rigging crew complete the lift, with demobilisation arranged afterwards.',
  },
]

const faqs = [
  {
    q: 'What rough terrain crane capacities are available?',
    a: 'Our rough terrain crane fleet covers 50, 60, 90 and 110 tonne classes. The right unit depends on the load, radius, boom configuration and site conditions. Share the lift details and we will confirm the best option.',
  },
  {
    q: 'Where can rough terrain cranes operate?',
    a: 'Rough terrain cranes are designed for unpaved, uneven and confined sites. They suit construction, infrastructure, industrial, oil & gas and utility projects where a standard mobile crane may struggle with access or ground conditions.',
  },
  {
    q: 'Do you provide certified operators?',
    a: 'Yes. Every crane can be supplied with an experienced, certified operator. Rigging crews, lift supervisors and site support can be arranged on request.',
  },
  {
    q: 'What rental periods do you offer?',
    a: 'We offer daily, weekly, monthly and long-term project rentals. Tell us the duration and scope, and we will structure a clear, cost-effective quotation.',
  },
  {
    q: 'Do you handle transport and mobilisation?',
    a: 'Yes. We coordinate transportation, mobilisation, setup, inspection and demobilisation across the UAE, including access planning and permit support where required.',
  },
  {
    q: 'Do you support urgent crane requirements?',
    a: 'We support urgent requests subject to fleet availability. Call our team directly with the lift details and dates, and we will confirm the fastest available solution.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We provide rough terrain crane rental across the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.',
  },
]

export default function RoughTerrainCranes() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="rtc-page">
      <section className="rtc-hero">
        <img
          className="rtc-hero-bg"
          src="/RoughTerrainCranes/rough-terrain-fleet.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="rtc-hero-overlay" aria-hidden="true" />
        <div className="rtc-hero-grid-lines" aria-hidden="true" />

        <div className="container rtc-hero-inner">
          <div className="rtc-hero-copy">
            <span className="rtc-eyebrow">Rough Terrain Crane Hire · UAE</span>
            <h1>Rough Terrain<br /><em>Cranes</em></h1>
            <p className="rtc-hero-lead">
              Four-wheel-drive lifting from 50 to 110 tonnes for uneven ground, tight access and
              pick-and-carry work. Built to keep UAE projects moving when the site gets difficult.
            </p>
            <div className="rtc-actions">
              <Link to="/contact" className="rtc-btn rtc-btn-primary">Request a Quote <span>↗</span></Link>
              <a href="#capacities" className="rtc-btn rtc-btn-outline">View Capacities</a>
            </div>
            <div className="rtc-hero-meta">
              <span>4x4 mobility</span>
              <span>Pick &amp; carry</span>
              <span>Certified operators</span>
            </div>
          </div>

          <aside className="rtc-hero-side">
            <strong>50–110<span>t</span></strong>
            <small>Lifting capacity</small>
            <i aria-hidden="true" />
            <p>UAE-wide<br />mobilisation</p>
          </aside>
        </div>

        <div className="rtc-hero-strip">
          <div className="container rtc-hero-strip-inner">
            {capacities.map((item) => (
              <a href="#capacities" className="rtc-hero-cap" key={item.tonnage}>
                <strong>{item.tonnage}<span>t</span></strong>
                <small>{item.tag}</small>
              </a>
            ))}
            <div className="rtc-strip-note">
              <span>04</span>
              <small>Capacity<br />classes</small>
            </div>
          </div>
        </div>
      </section>

      <section className="rtc-intro">
        <div className="container rtc-intro-grid">
          <div className="rtc-intro-media">
            <div className="rtc-intro-frame">
              <img
                src="/RoughTerrainCranes/60-ton-rough-terrain.webp"
                alt="60 tonne rough terrain crane ready for an off-road lift"
                loading="lazy"
              />
            </div>
            <div className="rtc-intro-plate">
              <strong>60<span>t</span></strong>
              <small>Rough terrain<br />crane class</small>
            </div>
            <span className="rtc-intro-caption">Off-road ready · UAE fleet</span>
          </div>

          <div className="rtc-intro-copy">
            <span className="rtc-eyebrow">Built for the ground you&apos;re on</span>
            <h2>Where access gets tough,<br /><em>these cranes get working.</em></h2>
            <p>
              Rough terrain cranes are engineered for sites that do not offer smooth roads or generous
              space. With four-wheel drive, a compact chassis and pick-and-carry capability, they keep
              lifting productive when access is uneven or congested.
            </p>
            <p>
              Our UAE fleet supports construction, infrastructure, industrial, oil &amp; gas and utility
              projects — backed by experienced operators, lift planning and responsive mobilisation.
            </p>

            <div className="rtc-features">
              {features.map((feature, index) => (
                <article className="rtc-feature" key={feature.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>

            <Link to="/contact" className="rtc-btn rtc-btn-dark">Plan Your Lift <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="rtc-capacities" id="capacities">
        <div className="rtc-capacities-bg" aria-hidden="true" />
        <div className="container">
          <div className="rtc-section-head">
            <div>
              <span className="rtc-eyebrow light">The rough terrain fleet</span>
              <h2>Four capacities.<br /><em>One reliable fleet.</em></h2>
            </div>
            <p>
              Choose the lifting class that matches the load, radius and site conditions. Our team
              will confirm the right configuration, access plan and availability.
            </p>
          </div>

          <div className="rtc-cap-grid">
            {capacities.map((item, index) => (
              <article className="rtc-cap-card" key={item.tonnage}>
                <div className="rtc-cap-index">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <small>{item.tag}</small>
                </div>
                <strong>{item.tonnage}<span>t</span></strong>
                <div className="rtc-cap-bar" aria-hidden="true">
                  <i style={{ width: `${(Number(item.tonnage) / 110) * 100}%` }} />
                </div>
                <h3>Rough Terrain Crane</h3>
                <p>{item.text}</p>
                <Link to="/contact">Request availability <span>↗</span></Link>
              </article>
            ))}
          </div>

          <div className="rtc-cap-note">
            <p>Capacities are class ratings. Final lifting capacity depends on radius, boom configuration and site conditions.</p>
            <Link to="/contact">Talk to our crane team <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="rtc-apps">
        <div className="container">
          <div className="rtc-apps-head">
            <div>
              <span className="rtc-eyebrow">Where they work</span>
              <h2>Off-road capability.<br /><em>On-site performance.</em></h2>
            </div>
            <p>
              From the first site visit to the final pick, rough terrain cranes are built for projects
              where access is uneven, space is tight and the lift still has to be precise.
            </p>
          </div>

          <div className="rtc-app-grid">
            {applications.map((item, index) => (
              <article className="rtc-app-card" key={item.title}>
                <span className="rtc-app-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="rtc-app-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="rtc-coverage">
            <h4>United Arab Emirates</h4>
            <p>Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain</p>
          </div>
        </div>
      </section>

      <section className="rtc-process">
        <div className="container rtc-process-grid">
          <div className="rtc-process-intro">
            <span className="rtc-eyebrow">How it works</span>
            <h2>From first call<br />to <em>final lift.</em></h2>
            <p>
              A safe, productive lift starts with the right plan. We match the crane to the load and
              the ground, then coordinate every step through mobilisation and demobilisation.
            </p>
            <Link to="/contact" className="rtc-btn rtc-btn-dark">Start a Conversation <span>↗</span></Link>
          </div>

          <div className="rtc-step-list">
            {steps.map((step, index) => (
              <article className="rtc-step-row" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rtc-faq">
        <div className="container rtc-faq-grid">
          <div className="rtc-faq-intro">
            <span className="rtc-eyebrow">Good to know</span>
            <h2>Rough terrain crane questions, answered.</h2>
            <p>
              Not sure which capacity fits the lift? Send us the load details and our team will guide
              you through crane selection, access and mobilisation.
            </p>
            <div className="rtc-faq-card">
              <span>Talk to the crane team</span>
              <a href="tel:+971506749200">+971 50 674 9200</a>
              <small>Available 24/7 for urgent lifts</small>
            </div>
          </div>

          <div className="rtc-accordion">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`rtc-faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="rtc-faq-q"
                    id={`rtc-faq-q-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`rtc-faq-${index}`}
                  >
                    <span>{item.q}</span>
                    <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
                  </button>
                  <div
                    className="rtc-faq-a"
                    id={`rtc-faq-${index}`}
                    role="region"
                    aria-labelledby={`rtc-faq-q-${index}`}
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

      <section className="rtc-cta">
        <div className="rtc-cta-bg" aria-hidden="true" />
        <div className="container rtc-cta-inner">
          <div className="rtc-cta-copy">
            <span className="rtc-eyebrow light">Ready when you are</span>
            <h2>Tell us about<br /><em>the lift.</em></h2>
            <p>
              Share the load, radius, ground conditions and dates. We will come back with the right
              rough terrain crane, availability and a clear quote.
            </p>
          </div>

          <div className="rtc-cta-panel">
            <span>Fast response · UAE-wide</span>
            <a href="tel:+971506749200">+971 50 674 9200</a>
            <div className="rtc-cta-actions">
              <Link to="/contact" className="rtc-btn rtc-btn-primary">Request a Quote <span>↗</span></Link>
              <a href="mailto:sales@topcranestransport.com" className="rtc-btn rtc-btn-outline">Email the Team</a>
            </div>
            <small>Rough terrain crane rental across Dubai, Abu Dhabi, Sharjah and the wider UAE.</small>
          </div>
        </div>
      </section>
    </div>
  )
}
