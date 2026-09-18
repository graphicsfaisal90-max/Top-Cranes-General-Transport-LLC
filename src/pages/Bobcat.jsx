import { Link } from 'react-router-dom'
import './Pages.css'
import './bobcat.css'

const applications = [
  { title: 'Construction & Site Preparation', tag: 'Construction', image: '/Bobcat/Construction & Site Preparation.jpg', metric: '900 kg', label: 'Rated Capacity', text: 'Compact power for site grading, levelling, clearing, backfilling, and general construction tasks.', features: ['Site grading and levelling', 'General construction tasks'] },
  { title: 'Material Handling', tag: 'Handling', image: '/Bobcat/Material Handling.jpg', metric: '1,000 kg', label: 'Rated Capacity', text: 'Move soil, aggregate, pallets, and bulk materials efficiently around your construction or industrial site.', features: ['Load and move bulk materials', 'Stockpile management'] },
  { title: 'Landscaping & Groundworks', tag: 'Landscaping', image: '/Bobcat/Landscaping & Groundworks.jpg', metric: '600 kg', label: 'Rated Capacity', text: 'Agile equipment for landscape preparation, soil movement, ground shaping, and outdoor improvement projects.', features: ['Precision grading and shaping', 'Soil and aggregate handling'] },
  { title: 'Demolition & Cleanup', tag: 'Demolition', image: '/Bobcat/Demolition & Cleanup.jpg', metric: '1,200 kg', label: 'Rated Capacity', text: 'Compact access and attachment flexibility for light demolition, debris removal, and site cleanup operations.', features: ['Light demolition work', 'Debris and waste handling'] },
]

const benefits = [
  { title: 'Versatile Equipment', text: 'Our Bobcat solutions support construction, landscaping, agriculture, cleanup, and material handling applications.' },
  { title: 'Custom Rental Solutions', text: 'Choose flexible short-term hires or long-term leases that match your project schedule and operating needs.' },
  { title: 'Competitive Pricing', text: 'Get dependable compact equipment with clear quotations and cost-effective rental options.' },
  { title: 'Rapid Delivery', text: 'Our Dubai and Sharjah operations help us coordinate fast delivery and collection across the UAE.' },
  { title: 'Experienced Support', text: 'Our team can advise you on the best Bobcat model, attachment, and rental plan for your job.' },
  { title: 'High-Quality Machines', text: 'Every machine is inspected and maintained for safe, efficient, and reliable site performance.' },
]

const steps = [
  { num: '01', title: 'Identify Your Needs', text: 'Choose the Bobcat machine and attachment that best fits your project, access conditions, and material requirements.' },
  { num: '02', title: 'Contact Us', text: 'Reach out through our website, phone, or email. Our team will guide you and provide a detailed quotation.' },
  { num: '03', title: 'Schedule Delivery', text: 'Once your rental is confirmed, we arrange delivery to your site at a convenient time so work can begin without delay.' },
]

const related = [
  { name: 'Crane', image: '/Crane%20Equipment.png', text: 'Reliable crane rentals for construction and heavy lifting tasks.', link: '/equipment/crane' },
  { name: 'JCB 3CX', image: '/JCB%203CX%20Equipment.png', text: 'Versatile backhoe loaders for excavation, loading, and roadwork.', link: '/equipment/jcb-3cx' },
  { name: 'Excavators', image: '/excavator_%20equpment.png', text: 'Powerful excavators for earthmoving, demolition, and infrastructure.', link: '/equipment/excavators' },
  { name: 'Fork Lift', image: '/Fork%20Lifter%20Equipment.png', text: 'Flexible forklift solutions for warehouses and material handling.', link: '/equipment/fork-lift' },
]

export default function Bobcat() {
  return (
    <div className="bob-page">
      <section className="bob-hero">
        <div className="bob-hero-bg" />
        <div className="bob-hero-overlay" />
        <div className="container bob-hero-content">
          <span className="bob-badge">Compact Power Solutions</span>
          <h1>Bobcat Rental<br />Services Dubai</h1>
          <p>Reliable Bobcat machines for construction, landscaping, agriculture, site preparation, and material handling projects across the UAE.</p>
          <div className="bob-actions"><Link to="/contact" className="bob-btn bob-btn-primary">Request a Quote</Link><a href="#fleet" className="bob-btn bob-btn-outline">Explore Fleet</a></div>
        </div>
      </section>

      <section className="bob-intro"><div className="container bob-intro-grid"><div className="bob-intro-image"><img src="/bobcat-about.jpg" alt="Bobcat machine working on a project" /><div className="bob-experience"><strong>15+</strong><span>Years Experience</span></div></div><div className="bob-intro-content"><span className="bob-badge">Your Trusted Bobcat Rental Partner</span><h2>Compact Equipment That Works Hard</h2><p>Top Cranes General Transport LLC provides dependable Bobcat rental services in Dubai and throughout the UAE. Whether you need a skid-steer loader for a construction site, a compact machine for landscaping, or equipment for material handling, our fleet is ready to work.</p><p>Our Bobcat machines are well-maintained, flexible, and available for both short-term and long-term projects.</p><Link to="/contact" className="bob-btn bob-btn-primary">Get a Free Quote</Link></div></div></section>

      <section className="bob-fleet" id="fleet"><div className="container"><div className="bob-section-heading"><span className="bob-badge">Explore Our Bobcat Fleet</span><h2>Powerful Machines For Every Job</h2><p>Choose a compact equipment solution suited to your application, site conditions, and project goals.</p></div><div className="bob-fleet-grid">{applications.map((item) => <article className="bob-card" key={item.title}><div className="bob-card-image"><span>{item.tag}</span><img src={item.image} alt={item.title} /></div><div className="bob-card-body"><h3>{item.title}</h3><div className="bob-card-metric"><strong>{item.metric}</strong><small>{item.label}</small></div><p>{item.text}</p><ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link to="/contact" className="bob-card-link">Book Now &rarr;</Link></div></article>)}</div></div></section>

      <section className="bob-benefits"><div className="container"><div className="bob-section-heading"><span className="bob-badge">Why Choose Top Cranes?</span><h2>Bobcat Rental Made Simple</h2><p>From choosing the right compact machine to delivery at your site, our team supports every stage of your rental.</p></div><div className="bob-benefit-grid">{benefits.map((item, index) => <div className="bob-benefit" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>

      <section className="bob-steps"><div className="container"><div className="bob-section-heading"><span className="bob-badge">Easy Steps To Rent</span><h2>How To Rent A Bobcat In Dubai</h2><p>Our straightforward rental process helps you get the right compact equipment without unnecessary delays.</p></div><div className="bob-step-grid">{steps.map((step) => <div className="bob-step" key={step.num}><strong>{step.num}</strong><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section className="bob-trusted"><div className="container bob-trusted-grid"><div><span className="bob-badge">Trusted By Industry Professionals</span><h2>Reliable Support For Every Site</h2><p>Top Cranes is committed to providing efficient Bobcat rentals, responsive service, and well-maintained machines for contractors and businesses throughout the UAE.</p><p>Let our compact equipment handle the tough work while our team keeps your rental simple and dependable.</p><Link to="/contact" className="bob-btn bob-btn-primary">Talk To Our Team</Link></div><img src="/Bobcat Equipment.png" alt="Bobcat equipment" /></div></section>

      <section className="bob-quote"><div className="container bob-quote-grid"><div><span className="bob-badge">We Are Here To Help</span><h2>Get A Free Bobcat Rental Quote</h2><p>Tell us about your project, location, and rental period. We will recommend a reliable solution for your work.</p></div><Link to="/contact" className="bob-btn bob-btn-dark">Submit Your Enquiry</Link></div></section>

      <section className="bob-related"><div className="container"><div className="bob-section-heading"><span className="bob-badge">Related Equipment</span><h2>Complete Your Project Fleet</h2></div><div className="bob-related-grid">{related.map((item) => <Link to={item.link} className="bob-related-card" key={item.name}><div><img src={item.image} alt={item.name} /></div><h3>{item.name}</h3><p>{item.text}</p><span>Read More &rarr;</span></Link>)}</div></div></section>

      <section className="bob-cta"><div className="container bob-cta-grid"><div><h2>Contact Us! We're<br />Available 24/7.</h2><p>Ready to start your project? Talk to our team about Bobcat rental today.</p></div><div className="bob-contact-list"><a href="tel:+971509191004">+971 50 919 1004</a><a href="tel:+971506749200">+971 50 674 9200</a><a href="mailto:sales@topcranestransport.com">sales@topcranestransport.com</a></div></div></section>
    </div>
  )
}
