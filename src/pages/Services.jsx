import { Link } from 'react-router-dom'
import './Pages.css'

const services = [
  {
    icon: '🏗️',
    title: 'Crane Rental',
    desc: 'Mobile cranes, tower cranes, and crawler cranes available for short-term and long-term rental. All equipment is regularly inspected and certified.',
    features: ['Mobile cranes (25T - 500T)', 'Tower cranes', 'Crawler cranes', 'Crane operators included', 'Rigging & lifting planning'],
  },
  {
    icon: '🚛',
    title: 'Heavy Haulage',
    desc: 'Specialized transport for oversized and heavy equipment. We handle permits, escorts, and route planning for safe delivery.',
    features: ['Low-bed trailers', 'Flatbed transport', 'Oversized load permits', 'Police escorts', 'Route surveying'],
  },
  {
    icon: '📦',
    title: 'General Transport',
    desc: 'Reliable freight and cargo transport services across the UAE. From small loads to full truckloads, we deliver on time.',
    features: ['FTL & LTL services', 'Temperature-controlled', 'Express delivery', 'Warehousing', 'Distribution'],
  },
  {
    icon: '⚡',
    title: 'Logistics Solutions',
    desc: 'End-to-end logistics management including supply chain coordination, freight forwarding, and project logistics.',
    features: ['Supply chain management', 'Freight forwarding', 'Project logistics', 'Inventory management', 'Customs clearance'],
  },
  {
    icon: '🔩',
    title: 'Equipment Installation',
    desc: 'Professional installation and positioning of heavy machinery and industrial equipment at your site.',
    features: ['Machinery installation', 'Industrial rigging', 'Precision positioning', 'Site preparation', 'Decommissioning'],
  },
  {
    icon: '🔄',
    title: 'Plant & Machinery Relocation',
    desc: 'Complete relocation services for industrial plants, factories, and heavy machinery across the region.',
    features: ['Factory relocation', 'Machinery moving', 'Disassembly & reassembly', 'Transport & installation', 'Insurance coverage'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive heavy lifting and transport solutions tailored to your needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt cta-section">
        <div className="container cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>Contact our team today for a personalized quote tailored to your project requirements.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
