import { Link } from 'react-router-dom'
import './Pages.css'

const fleet = [
  { id: 'crane', name: 'Crane Rental', eyebrow: 'Lift / place / install', image: '/crane-hero.jpg', path: '/equipment/crane', text: 'Mobile and industrial crane solutions for safe lifting, positioning and site support across the UAE.' },
  { id: 'fork-lift', name: 'Forklift Rental', eyebrow: 'Load / unload / move', image: '/Forklift.jpg', path: '/equipment/fork-lift', text: 'Reliable forklifts for warehouses, logistics yards, factories, cargo handling and construction sites.' },
  { id: 'telehandler', name: 'Telehandler & Boom Loader', eyebrow: 'Reach / handle / build', image: '/telehandler-hero.webp', path: '/equipment/telehandler', text: 'High-reach material handling equipment for construction, industrial and infrastructure operations.' },
  { id: 'excavators', name: 'Excavator Rental', eyebrow: 'Dig / clear / develop', image: '/excavator-hero.jpg', path: '/equipment/excavators', text: 'Powerful excavators for earthmoving, trenching, demolition, land clearing and site development.' },
  { id: 'jcb-3cx', name: 'JCB 3CX', eyebrow: 'Dig / load / prepare', image: '/jcb-hero.jpg', path: '/equipment/jcb-3cx', text: 'Versatile backhoe loaders for utilities, roadwork, excavation and everyday construction support.' },
  { id: 'shovel', name: 'Wheel Loader', eyebrow: 'Bulk handling / stockpiles', image: '/shovel-hero.jpg', path: '/equipment/shovel', text: 'Heavy-duty wheel loaders for aggregate, earth, stockpile and bulk material handling.' },
  { id: 'bobcat', name: 'Bobcat Rental', eyebrow: 'Compact / agile / precise', image: '/bobcat-hero.jpg', path: '/equipment/bobcat', text: 'Compact machines for landscaping, cleanup, demolition and tight-access construction work.' },
]

export default function Equipment() {
  return (
    <div className="fleet-page">
      <section className="fleet-hero">
        <div className="fleet-hero-image" />
        <div className="fleet-hero-shade" />
        <div className="container fleet-hero-content">
          <p className="eyebrow light">The working fleet</p>
          <h1>Machines that<br /><em>move projects.</em></h1>
          <p>From a single forklift to a complete lifting package, choose dependable heavy equipment rental with the support to match.</p>
          <Link to="/contact" className="landing-button landing-button-orange">Request equipment <span>↗</span></Link>
        </div>
      </section>

      <section className="fleet-intro">
        <div className="container fleet-intro-grid">
          <p className="eyebrow">One fleet. Many applications.</p>
          <div><h2>Built for <span>real work</span> across the UAE.</h2><p>Our equipment is selected for the demands of construction, infrastructure, logistics, industrial maintenance and site development. Every machine is prepared for the job and backed by an experienced team.</p></div>
        </div>
      </section>

      <section className="fleet-catalogue">
        <div className="container"><div className="section-topline"><p className="eyebrow">Explore the catalogue</p><span className="section-rule" /><p className="section-count">{fleet.length} equipment categories</p></div><div className="catalogue-grid">{fleet.map((item, index) => <Link to={item.path} className={`catalogue-card catalogue-card-${index + 1}`} key={item.id}><img src={item.image} alt={item.name} /><div className="catalogue-shade" /><div className="catalogue-content"><span>{item.eyebrow}</span><h3>{item.name}</h3><p>{item.text}</p><b>View equipment <i>↗</i></b></div></Link>)}</div></div>
      </section>

      <section className="fleet-cta"><div className="container fleet-cta-inner"><div><p className="eyebrow light">Not sure what you need?</p><h2>Let’s match the<br /><em>right machine.</em></h2></div><Link to="/contact" className="landing-button landing-button-orange">Speak with our team <span>↗</span></Link></div></section>
    </div>
  )
}
