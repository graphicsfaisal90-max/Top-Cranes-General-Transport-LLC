import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import './lowbed.css'

const trailers = [
  {
    tag: 'Step Deck',
    title: 'Low Bed Trailer',
    image: '/LowBedTrailers/lowbed-trailers-2.webp',
    alt: 'Truck coupled to a low bed trailer ready for a heavy equipment move',
    text: 'A versatile low bed for excavators, wheel loaders and general plant moves. The lower deck keeps tall machines within safe travel height.',
    specs: [
      { value: 'Up to 60 t', label: 'Payload' },
      { value: '12–15 m', label: 'Deck length' },
      { value: '3 axle', label: 'Configuration' },
    ],
  },
  {
    tag: 'Heavy Haulage',
    title: 'Heavy Duty Low Bed',
    image: '/LowBedTrailers/lowbed-trailers-1.webp',
    alt: 'Multi-axle low bed trailer carrying a mobile crane',
    text: 'A multi-axle low bed built for cranes, dozers and oversized cargo. Extra axles spread the weight for stable, compliant road travel.',
    specs: [
      { value: 'Up to 80 t', label: 'Payload' },
      { value: '15–18 m', label: 'Deck length' },
      { value: '4–6 axle', label: 'Configuration' },
    ],
  },
]

const applications = [
  {
    title: 'Cranes & Lifting Equipment',
    text: 'Mobile cranes, boom trucks and access equipment moved as a complete unit, with the boom positioned for safe travel.',
  },
  {
    title: 'Excavators & Earthmoving',
    text: 'Tracked and wheeled excavators, dozers and loaders secured on purpose-matched decks for road transport.',
  },
  {
    title: 'Wheel Loaders & Shovels',
    text: 'Heavy loaders and shovels transported without dismantling wherever dimensions and route allow.',
  },
  {
    title: 'Industrial & Project Cargo',
    text: 'Generators, transformers, steel structures and plant machinery for industrial and infrastructure projects.',
  },
]

const steps = [
  {
    title: 'Share the load',
    text: 'Send us the equipment type, weight, dimensions, pickup point and delivery location.',
  },
  {
    title: 'We plan the move',
    text: 'We match the trailer, confirm the route and arrange permits or escorts where they are required.',
  },
  {
    title: 'Load and deliver',
    text: 'The machine is loaded, secured and checked before an experienced driver moves it to site.',
  },
]

const faqs = [
  {
    q: 'What equipment can a low bed trailer carry?',
    a: 'Low bed trailers are ideal for cranes, excavators, wheel loaders, dozers, boom trucks, generators and other heavy or oversized machinery. If it fits within the trailer dimensions and weight limits, we can plan the move.',
  },
  {
    q: 'Do your low bed trailers come with a driver?',
    a: 'Yes. Every trailer is supplied with an experienced heavy vehicle driver. Escort vehicles, load supervision and permit coordination can be arranged on request.',
  },
  {
    q: 'How much weight can you transport?',
    a: 'Our low bed fleet covers payloads of roughly 40 to 80 tonnes depending on the trailer and axle configuration. Share the exact weight, dimensions and route and we will confirm the right set-up.',
  },
  {
    q: 'Do you handle permits and route surveys?',
    a: 'We help coordinate the route, permits and escorts required for oversized loads. Requirements vary by emirate and load size, so early planning gives the smoothest move.',
  },
  {
    q: 'Which areas do you cover for low bed transport?',
    a: 'We provide low bed trailer transport across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain, with one-way, round-trip and project-based moves available.',
  },
  {
    q: 'How early should I book a low bed trailer?',
    a: 'We recommend booking 24 to 48 hours in advance for standard moves. Urgent requirements can often be accommodated subject to fleet availability — call us directly.',
  },
]

export default function LowBedTrailers() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="lbt-page">
      <section className="lbt-hero">
        <div className="lbt-hero-bg" />
        <div className="lbt-hero-overlay" />
        <div className="container lbt-hero-inner">
          <span className="lbt-badge">Low Bed Trailer Rental · UAE</span>
          <h1>Low Bed<br /><em>Trailers</em></h1>
          <p className="lbt-hero-lead">
            Heavy equipment transport that keeps your project moving. Move cranes, excavators,
            loaders and oversized machinery safely across the UAE with our low bed trailer fleet.
          </p>
          <div className="lbt-hero-actions">
            <Link to="/contact" className="lbt-btn lbt-btn-primary">Request a Quote <span>↗</span></Link>
            <a href="#fleet" className="lbt-btn lbt-btn-outline">View the Fleet</a>
          </div>
          <p className="lbt-hero-note">Experienced drivers · UAE-wide delivery · 24/7 support</p>
        </div>
        <span className="lbt-hero-stamp" aria-hidden="true">Heavy haulage — since 2009</span>
      </section>

      <div className="container lbt-stats-wrap">
        <div className="lbt-stats">
          <div className="lbt-stat">
            <strong>40–80<span>t</span></strong>
            <small>Typical payload</small>
          </div>
          <div className="lbt-stat">
            <strong>12–18<span>m</span></strong>
            <small>Deck length</small>
          </div>
          <div className="lbt-stat">
            <strong>7</strong>
            <small>Emirates covered</small>
          </div>
          <div className="lbt-stat">
            <strong>24/7</strong>
            <small>Operations support</small>
          </div>
        </div>
      </div>

      <section className="lbt-intro">
        <div className="container lbt-intro-grid">
          <div className="lbt-intro-media">
            <img
              src="/LowBedTrailers/lowbed-trailer.webp"
              alt="Low bed trailer parked at a yard ready for loading"
            />
            <div className="lbt-experience">
              <strong>15+</strong>
              <span>Years moving<br />heavy equipment</span>
            </div>
          </div>
          <div className="lbt-intro-copy">
            <span className="lbt-eyebrow">Built for the heavy stuff</span>
            <h2>Your equipment. Our trailer. One safe journey.</h2>
            <p>
              Top Cranes General Transport LLC provides low bed trailer rental for contractors,
              plant owners and industrial teams across Dubai and the UAE. From a single excavator
              to a complete lifting package, we plan every move around the load.
            </p>
            <p>
              Each trailer is inspected, maintained and matched to the weight, dimensions and
              route of your equipment.
            </p>
            <ul className="lbt-checks">
              <li>Cranes, excavators, loaders and industrial machinery</li>
              <li>Experienced drivers and load-securing checks</li>
              <li>Route planning, permits and escort support on request</li>
              <li>One-way, round-trip and project-based transport</li>
            </ul>
            <Link to="/contact" className="lbt-btn lbt-btn-dark">Plan Your Move <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="lbt-fleet" id="fleet">
        <div className="container">
          <div className="lbt-fleet-head">
            <div>
              <span className="lbt-eyebrow">Our low bed fleet</span>
              <h2>The right trailer<br />for every load.</h2>
            </div>
            <p>
              Two low bed configurations cover most heavy equipment moves. Tell us the machine,
              route and timeline and we will recommend the trailer, axle set-up and securing plan.
            </p>
          </div>

          <div className="lbt-fleet-grid">
            {trailers.map((item) => (
              <article className="lbt-trailer" key={item.title}>
                <div className="lbt-trailer-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="lbt-trailer-tag">{item.tag}</span>
                </div>
                <div className="lbt-trailer-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="lbt-specs">
                    {item.specs.map((spec) => (
                      <div className="lbt-spec" key={spec.label}>
                        <strong>{spec.value}</strong>
                        <span>{spec.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="lbt-text-link">Request this trailer <span>↗</span></Link>
                </div>
              </article>
            ))}
          </div>

          <div className="lbt-fleet-note">
            <span>Availability depends on load, route and permit requirements.</span>
            <Link to="/contact">Talk to our transport team <i>↗</i></Link>
          </div>
        </div>
      </section>

      <section className="lbt-apps">
        <div className="container">
          <div className="lbt-apps-head">
            <div>
              <span className="lbt-eyebrow light">What we move</span>
              <h2>Heavy cargo.<br /><em>Handled.</em></h2>
            </div>
            <p>
              From a single machine to a full project package, our transport team plans the load,
              the route and the paperwork so your equipment arrives ready to work.
            </p>
          </div>

          <div className="lbt-apps-grid">
            {applications.map((item, index) => (
              <article className="lbt-app" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="lbt-coverage">
            <div>
              <h4>United Arab Emirates</h4>
              <p>Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lbt-process">
        <div className="container">
          <div className="lbt-process-head">
            <span className="lbt-eyebrow">How it works</span>
            <h2>Three steps from pickup to delivery.</h2>
          </div>
          <div className="lbt-steps">
            {steps.map((step, index) => (
              <article className="lbt-step" key={step.title}>
                <span className="lbt-step-num">Step {String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lbt-faq">
        <div className="container lbt-faq-grid">
          <div className="lbt-faq-intro">
            <span className="lbt-eyebrow">Good to know</span>
            <h2>Low bed trailer questions, answered.</h2>
            <p>
              Still unsure which trailer fits your machine? Send us the equipment details and our
              transport team will guide you.
            </p>
            <div className="lbt-faq-card">
              <span>Talk to the transport team</span>
              <a href="tel:+971506749200">+971 50 674 9200</a>
              <small>Available 24/7 for urgent moves</small>
            </div>
          </div>

          <div className="lbt-accordion">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`lbt-faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="lbt-faq-q"
                    id={`lbt-faq-q-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`lbt-faq-${index}`}
                  >
                    <span>{item.q}</span>
                    <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
                  </button>
                  <div
                    className="lbt-faq-a"
                    id={`lbt-faq-${index}`}
                    role="region"
                    aria-labelledby={`lbt-faq-q-${index}`}
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

      <section className="lbt-cta">
        <div className="container lbt-cta-inner">
          <div>
            <span className="lbt-eyebrow light">Ready when you are</span>
            <h2>Got a heavy machine<br />to <em>move?</em></h2>
            <p>
              Send the load details and we will come back with the right trailer and a clear
              transport quote.
            </p>
          </div>
          <div className="lbt-cta-actions">
            <Link to="/contact" className="lbt-btn lbt-btn-primary">Request a Quote <span>↗</span></Link>
            <a href="tel:+971506749200" className="lbt-btn lbt-btn-outline">Call +971 50 674 9200</a>
          </div>
        </div>
      </section>
    </div>
  )
}
