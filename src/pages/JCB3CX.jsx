import { Link } from 'react-router-dom'
import './Pages.css'
import './jcb3cx.css'

const applications = [
  { title: 'Excavation & Trenching', tag: 'Excavation', image: '/JCB3CX/Excavation & Trenching.jpg', metric: '14 ft', label: 'Dig Depth', features: ['Precision trenching', 'Deep excavation capability'], text: 'Dig foundations, trenches, drainage channels, and utility lines with dependable control and reach.' },
  { title: 'Material Loading', tag: 'Loading', image: '/JCB3CX/Material Loading.jpg', metric: '1.0 m3', label: 'Bucket', features: ['Efficient material handling', 'High-capacity loading'], text: 'Move soil, aggregate, rubble, and construction materials quickly with the front loader bucket.' },
  { title: 'Site Preparation', tag: 'Preparation', image: '/JCB3CX/Site Preparation.jpg', metric: '8 ft', label: 'Working Width', features: ['Grading and levelling', 'Clearing and backfilling'], text: 'Prepare construction sites, level working areas, and complete backfilling with one versatile machine.' },
  { title: 'Utility & Infrastructure', tag: 'Utility', image: '/JCB3CX/Utility & Infrastructure Works.jpg', metric: 'Multi', label: 'Purpose', features: ['Pipe laying and utilities', 'Road and infrastructure work'], text: 'A dependable solution for roadwork, utility installation, pipe laying, and infrastructure projects.' },
]

const benefits = [
  { title: 'Versatile & Powerful', text: 'The JCB 3CX combines a backhoe and loader in one machine, making it ideal for digging, excavation, loading, backfilling, and trenching.' },
  { title: 'Ready For Any Job Site', text: 'Every unit is regularly inspected and maintained so it can perform reliably under demanding construction conditions.' },
  { title: 'Flexible Rental Terms', text: 'Choose short-term or long-term rental options based on your project schedule, budget, and equipment requirements.' },
  { title: 'Expert Support', text: 'Our team can help you select the right machine, arrange delivery, and provide operator support when required.' },
  { title: 'Competitive Rates', text: 'Get dependable JCB 3CX equipment with clear quotations and cost-effective rental solutions for UAE projects.' },
  { title: 'Prompt Delivery', text: 'Based in the UAE, we coordinate efficient delivery and collection to help keep your project moving.' },
]

const steps = [
  { num: '01', title: 'Contact Us', text: 'Reach out through our website or call our team. We are ready to discuss your JCB 3CX rental requirements.' },
  { num: '02', title: 'Specify Your Needs', text: 'Tell us your project location, rental duration, operating requirements, and whether you need an operator.' },
  { num: '03', title: 'Schedule Delivery', text: 'Once confirmed, we arrange delivery of your JCB 3CX backhoe loader to your job site at a convenient time.' },
]

const related = [
  { name: 'Crane', image: '/Crane%20Equipment.png', text: 'Reliable crane rentals for construction and heavy lifting tasks.', link: '/equipment/crane' },
  { name: 'Excavators', image: '/excavator_%20equpment.png', text: 'Powerful excavators for earthmoving, demolition, and infrastructure work.', link: '/equipment/excavators' },
  { name: 'Shovel', image: '/Shovel%20Loader%20Equipment.png', text: 'Robust shovel loaders for mining, construction, and landscaping.', link: '/equipment/shovel' },
  { name: 'Telehandler', image: '/Telehandler%20And%20Boombloader%20Equipment%20(1).png', text: 'Efficient material handling and lifting with reliable telehandlers.', link: '/equipment/telehandler' },
]

export default function JCB3CX() {
  return (
    <div className="jcb-page">
      <section className="jcb-hero">
        <div className="jcb-hero-bg" />
        <div className="jcb-hero-overlay" />
        <div className="container jcb-hero-content">
          <span className="jcb-badge">Versatile Earthmoving Solutions</span>
          <h1>JCB 3CX Rental<br />Services Dubai</h1>
          <p>Reliable JCB 3CX backhoe loaders for construction, excavation, site preparation, roadwork, and infrastructure projects across the UAE.</p>
          <div className="jcb-actions"><Link to="/contact" className="jcb-btn jcb-btn-primary">Request a Quote</Link><a href="#applications" className="jcb-btn jcb-btn-outline">Explore Services</a></div>
        </div>
      </section>

      <section className="jcb-intro">
        <div className="container jcb-intro-grid">
          <div className="jcb-intro-image"><img src="/jcb-about.jpg" alt="JCB 3CX backhoe loader in operation" /><div className="jcb-experience"><strong>15+</strong><span>Years Experience</span></div></div>
          <div className="jcb-intro-content"><span className="jcb-badge">Your Trusted JCB Rental Partner</span><h2>Power, Versatility, And Reliability On Every Job</h2><p>Top Cranes General Transport LLC provides JCB 3CX backhoe loader rental services for construction sites, infrastructure projects, utilities, and earthmoving operations throughout Dubai and the UAE.</p><p>The JCB 3CX is a highly versatile machine that combines excavation and loading capabilities, helping your team complete more tasks with less equipment movement.</p><Link to="/contact" className="jcb-btn jcb-btn-primary">Get a Free Quote</Link></div>
        </div>
      </section>

      <section className="jcb-applications" id="applications">
        <div className="container"><div className="jcb-section-heading"><span className="jcb-badge">Explore Our JCB 3CX Services</span><h2>One Machine. Multiple Applications.</h2><p>From digging and trenching to loading and grading, our JCB 3CX machines are ready for demanding project work.</p></div><div className="jcb-app-grid">{applications.map((item) => <article className="jcb-card" key={item.title}><div className="jcb-card-image"><span>{item.tag}</span><img src={item.image} alt={item.title} /></div><div className="jcb-card-body"><h3>{item.title}</h3><div className="jcb-card-metric"><strong>{item.metric}</strong><small>{item.label}</small></div><p>{item.text}</p><ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link to="/contact" className="jcb-card-link">Book Now &rarr;</Link></div></article>)}</div></div>
      </section>

      <section className="jcb-benefits"><div className="container"><div className="jcb-section-heading"><span className="jcb-badge">Why Choose Top Cranes?</span><h2>Built For Your Project Requirements</h2><p>We provide more than equipment. Our team helps you get the right machine, support, and rental terms for your project.</p></div><div className="jcb-benefit-grid">{benefits.map((item, index) => <div className="jcb-benefit" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>

      <section className="jcb-steps"><div className="container"><div className="jcb-section-heading"><span className="jcb-badge">How To Rent</span><h2>How To Rent A JCB 3CX In Dubai</h2><p>Our rental process is simple, transparent, and designed to get your machine to site without unnecessary delays.</p></div><div className="jcb-step-grid">{steps.map((step) => <div className="jcb-step" key={step.num}><strong>{step.num}</strong><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section className="jcb-trusted"><div className="container jcb-trusted-grid"><div><span className="jcb-badge">Trusted By Professionals</span><h2>A Dependable Partner For UAE Projects</h2><p>From small site preparation jobs to large infrastructure work, Top Cranes supports contractors with reliable equipment, experienced assistance, and responsive service.</p><p>Every JCB 3CX is prepared for safe and efficient operation before it reaches your project site.</p><Link to="/contact" className="jcb-btn jcb-btn-primary">Talk To Our Team</Link></div><img src="/JCB 3CX Equipment.png" alt="JCB 3CX equipment" /></div></section>

      <section className="jcb-quote"><div className="container jcb-quote-grid"><div><span className="jcb-badge">We Are Here To Help</span><h2>Get A Free JCB 3CX Rental Quote</h2><p>Tell us about your project, location, and rental period. We will help you choose the right solution.</p></div><Link to="/contact" className="jcb-btn jcb-btn-dark">Submit Your Enquiry</Link></div></section>

      <section className="jcb-related"><div className="container"><div className="jcb-section-heading"><span className="jcb-badge">Related Equipment</span><h2>Complete Your Project Fleet</h2></div><div className="jcb-related-grid">{related.map((item) => <Link to={item.link} className="jcb-related-card" key={item.name}><div><img src={item.image} alt={item.name} /></div><h3>{item.name}</h3><p>{item.text}</p><span>Read More &rarr;</span></Link>)}</div></div></section>

      <section className="jcb-cta"><div className="container jcb-cta-grid"><div><h2>Contact Us! We're<br />Available 24/7.</h2><p>Ready to start your next project? Speak to our team about JCB 3CX rental today.</p></div><div className="jcb-contact-list"><a href="tel:+971509191004">+971 50 919 1004</a><a href="tel:+971506749200">+971 50 674 9200</a><a href="mailto:sales@topcranestransport.com">sales@topcranestransport.com</a></div></div></section>
    </div>
  )
}
