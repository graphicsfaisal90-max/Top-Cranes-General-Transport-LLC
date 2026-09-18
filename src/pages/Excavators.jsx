import { Link } from 'react-router-dom'
import './Pages.css'
import './excavators.css'

const fleet = [
  { name: 'Crawler Excavators', image: '/Excavators/Crawler Excavators.jpg', tag: 'Heavy Duty', capacity: '12-50 Ton', text: 'Stable, powerful machines for heavy-duty earthmoving, foundations, infrastructure, and rough terrain operations.', features: ['Heavy-duty earthmoving', 'Superior rough-terrain stability', 'Bucket and jackhammer options'] },
  { name: 'Wheeled Excavators', image: '/Excavators/Wheeled Excavators.jpg', tag: 'Mobile', capacity: '10-25 Ton', text: 'Fast and flexible excavators for urban construction, roadwork, utilities, and projects requiring frequent movement.', features: ['Fast road mobility', 'Urban and paved-surface work', 'Efficient site relocation'] },
  { name: 'Mini Excavators', image: '/Excavators/Mini Excavators.jpg', tag: 'Compact', capacity: '1-5 Ton', text: 'Compact excavators for landscaping, trenching, utilities, and confined spaces where precision matters.', features: ['Tight access capability', 'Low-impact operation', 'Versatile attachments'] },
  { name: 'Long Reach Excavators', image: '/Excavators/Long Reach Excavators.jpg', tag: 'Extended Reach', capacity: '20-40 Ton', text: 'Extended-reach equipment for deep excavation, dredging, demolition, slope work, and hard-to-reach areas.', features: ['Extended digging reach', 'Deep excavation', 'Demolition and dredging'] },
]

const highlights = [
  { title: 'Versatile Range', text: 'Mini, hydraulic, crawler, wheeled, and long-reach excavators for urban construction, landscaping, and large excavation projects.' },
  { title: 'Well-Maintained Equipment', text: 'Every machine undergoes regular inspection and maintenance for safe, dependable, and efficient site performance.' },
  { title: 'Affordable Solutions', text: 'Competitive rental options with clear quotations and flexible terms for short-term and long-term projects.' },
  { title: 'Dedicated Support', text: 'Our experienced team helps you select the right machine and remains available throughout your rental.' },
  { title: 'Flexible Rental Periods', text: 'Rent an excavator for a day, a week, or a longer project schedule according to your requirements.' },
  { title: 'Quick Delivery', text: 'Dubai-based operations allow us to coordinate prompt delivery and collection across the UAE.' },
]

const related = [
  { name: 'Crane', image: '/Crane%20Equipment.png', text: 'Reliable crane rentals for high-rise construction and heavy lifting tasks.', link: '/equipment/crane' },
  { name: 'Fork Lift', image: '/Fork%20Lifter%20Equipment.png', text: 'Flexible forklift solutions for warehouses, factories, and construction sites.', link: '/equipment/fork-lift' },
  { name: 'JCB 3CX', image: '/JCB%203CX%20Equipment.png', text: 'Versatile backhoe loaders for excavation, loading, roadwork, and utilities.', link: '/equipment/jcb-3cx' },
  { name: 'Telehandler', image: '/Telehandler%20And%20Boombloader%20Equipment%20(1).png', text: 'Efficient heavy lifting and material handling with reliable telehandlers.', link: '/equipment/telehandler' },
]

const reviews = [
  { name: 'Ahmed Al Maktoum', text: 'The excavator arrived on time and was in excellent condition. The team made the rental process simple and professional.' },
  { name: 'Sarah Johnson', text: 'Reliable equipment and responsive support throughout our earthmoving project. Highly recommended.' },
  { name: 'Rashid Al Hashimi', text: 'Top Cranes helped us choose the right excavator for a difficult site. Excellent service from start to finish.' },
]

export default function Excavators() {
  return (
    <div className="exc-page">
      <section className="exc-hero">
        <div className="exc-hero-bg" />
        <div className="exc-hero-overlay" />
        <div className="container exc-hero-content">
          <span className="exc-badge">Earthmoving Solutions</span>
          <h1>Excavator Rental<br />Services Dubai</h1>
          <p>High-quality excavators for construction, demolition, landscaping, infrastructure, and earthmoving projects across the UAE.</p>
          <div className="exc-actions">
            <Link to="/contact" className="exc-btn exc-btn-primary">Request a Quote</Link>
            <a href="#fleet" className="exc-btn exc-btn-outline">View Fleet</a>
          </div>
        </div>
      </section>

      <section className="exc-intro">
        <div className="container exc-intro-grid">
          <div className="exc-intro-image">
            <img src="/excavator-about.jpg" alt="Excavator working on a UAE construction site" />
            <div className="exc-experience"><strong>15+</strong><span>Years Experience</span></div>
          </div>
          <div className="exc-intro-content">
            <span className="exc-badge">Your Trusted Excavator Rental Service</span>
            <h2>Powerful Equipment For Every Excavation Project</h2>
            <p>Top Cranes General Transport LLC provides dependable excavator rental services in Dubai and across the UAE. Whether you need a mini excavator for a small job or a heavy-duty machine for large-scale operations, our fleet is ready to support your project.</p>
            <p>Our team helps you choose the right excavator based on your site conditions, digging depth, access requirements, and project duration.</p>
            <Link to="/contact" className="exc-btn exc-btn-primary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="exc-fleet" id="fleet">
        <div className="container">
          <div className="exc-section-heading">
            <span className="exc-badge">Discover Our Excavator Fleet</span>
            <h2>Machines Built For The Job</h2>
            <p>Choose from a versatile range of well-maintained excavators for demanding UAE projects.</p>
          </div>
          <div className="exc-fleet-grid">
            {fleet.map((item) => (
              <article className="exc-card" key={item.name}>
                <div className="exc-card-image"><span>{item.tag}</span><img src={item.image} alt={item.name} /></div>
                <div className="exc-card-body">
                  <h3>{item.name}</h3>
                  <div className="exc-card-cap"><strong>{item.capacity}</strong><small>Operating range</small></div>
                  <p>{item.text}</p>
                  <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <Link to="/contact" className="exc-card-link">Book Now &rarr;</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="exc-highlights">
        <div className="container">
          <div className="exc-section-heading">
            <span className="exc-badge">Why Choose Us?</span>
            <h2>Rental Made Simple</h2>
            <p>From choosing your machine to delivery at your site, our team keeps every step straightforward.</p>
          </div>
          <div className="exc-highlights-grid">
            {highlights.map((item, index) => <div className="exc-highlight" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="exc-quote">
        <div className="container exc-quote-grid">
          <div><span className="exc-badge">We Are Here To Help</span><h2>Get A Free Excavator Rental Quote</h2><p>Tell us about your project and our team will recommend the right machine, rental period, and delivery solution.</p></div>
          <Link to="/contact" className="exc-btn exc-btn-primary">Submit Your Enquiry</Link>
        </div>
      </section>

      <section className="exc-related">
        <div className="container">
          <div className="exc-section-heading"><span className="exc-badge">Related Equipment</span><h2>Complete Your Project Fleet</h2></div>
          <div className="exc-related-grid">{related.map((item) => <Link to={item.link} className="exc-related-card" key={item.name}><div><img src={item.image} alt={item.name} /></div><h3>{item.name}</h3><p>{item.text}</p><span>Read More &rarr;</span></Link>)}</div>
        </div>
      </section>

      <section className="exc-testimonials">
        <div className="container"><div className="exc-section-heading"><span className="exc-badge">Testimonials</span><h2>People Are Talking About Top Cranes</h2></div><div className="exc-review-grid">{reviews.map((review) => <article className="exc-review" key={review.name}><div className="exc-stars">★★★★★</div><p>&quot;{review.text}&quot;</p><strong>{review.name}</strong><small>Project Client</small></article>)}</div></div>
      </section>

      <section className="exc-cta"><div className="container exc-cta-grid"><div><h2>Contact Us! We're<br />Available 24/7.</h2><p>Ready to start your excavation project? Talk to our team today.</p></div><div className="exc-contact-list"><a href="tel:+971509191004">+971 50 919 1004</a><a href="tel:+971506749200">+971 50 674 9200</a><a href="mailto:sales@topcranestransport.com">sales@topcranestransport.com</a></div></div></section>
    </div>
  )
}
