import { Link } from 'react-router-dom'
import './Pages.css'

const fleet = [
  { id: 'crane', name: 'Crane Rental Services', eyebrow: 'Lift / place / install', image: '/Cranes%20U.webp', path: '/equipment/crane', text: 'Mobile and industrial crane solutions for safe lifting, positioning and site support across the UAE.' },
  { id: 'mobile-cranes', name: 'Mobile Crane Rental', eyebrow: '50–550 t / all terrain / truck mounted', image: '/MobileCraneRental/450-ton-all-terrain.webp', path: '/equipment/mobile-cranes', text: 'All-terrain and truck-mounted cranes from 50 to 550 tonnes for construction, infrastructure and industrial lifts across the UAE.' },
  { id: 'rough-terrain-cranes', name: 'Rough Terrain Cranes', eyebrow: '50–110 t / off-road / pick & carry', image: '/RoughTerrainCranes/60-ton-rough-terrain.webp', path: '/equipment/rough-terrain-cranes', text: 'Four-wheel-drive rough terrain cranes from 50 to 110 tonnes for uneven ground, tight access and pick-and-carry work across the UAE.' },
  { id: 'fork-lift', name: 'Forklift Rental', eyebrow: 'Load / unload / move', image: '/Forklift.webp', path: '/equipment/fork-lift', text: 'Reliable forklifts for warehouses, logistics yards, factories, cargo handling and construction sites.' },
  { id: 'telehandler', name: 'Telehandler & Boom Loader', eyebrow: 'Reach / handle / build', image: '/ChatGPT%20Image%20Sep%2020,%202026,%2001_52_53%20PM.webp', path: '/equipment/telehandler', text: 'High-reach material handling equipment for construction, industrial and infrastructure operations.' },
  { id: 'excavators', name: 'Excavator Rental', eyebrow: 'Dig / clear / develop', image: '/excavator-hero.webp', path: '/equipment/excavators', text: 'Powerful excavators for earthmoving, trenching, demolition, land clearing and site development.' },
  { id: 'jcb-3cx', name: 'Backhoe Loaders JCB 3CX', eyebrow: 'Dig / load / prepare', image: '/jcb-hero.webp', path: '/equipment/jcb-3cx', text: 'Versatile backhoe loaders for utilities, roadwork, excavation and everyday construction support.' },
  { id: 'shovel', name: 'Wheel Loader', eyebrow: 'Bulk handling / stockpiles', image: '/shovel-hero.webp', path: '/equipment/shovel', text: 'Heavy-duty wheel loaders for aggregate, earth, stockpile and bulk material handling.' },
  { id: 'bobcat', name: 'Bobcat Rental', eyebrow: 'Compact / agile / precise', image: '/bobcat-hero.webp', path: '/equipment/bobcat', text: 'Compact machines for landscaping, cleanup, demolition and tight-access construction work.' },
  { id: 'skid-steer', name: 'Skid Steer Loader Rental', eyebrow: 'Compact / versatile / attachment-ready', image: '/SkidSteer/about.webp', path: '/equipment/skid-steer', text: 'Agile skid steer loaders for construction, landscaping, material handling and site cleanup across the UAE.' },
  { id: 'low-bed-trailers', name: 'Low Bed Trailers', eyebrow: 'Haul / secure / deliver', image: '/LowBedTrailers/lowbed-title.webp', path: '/equipment/low-bed-trailers', text: 'Heavy-duty low bed trailers for moving cranes, excavators, loaders and oversized machinery across the UAE.' },
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
