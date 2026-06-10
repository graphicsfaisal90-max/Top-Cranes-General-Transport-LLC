import { Link } from 'react-router-dom'
import './Pages.css'

const equipment = [
  {
    id: 'crane',
    name: 'Crane',
    path: '/equipment/crane',
    image: '/crane-hero.jpg',
    description: 'Heavy-duty cranes for lifting and placing oversized loads with maximum safety and precision across construction and industrial sites.',
    categories: ['Mobile Cranes', 'Tower Cranes', 'Crawler Cranes', 'Rough Terrain Cranes'],
    gradient: 'linear-gradient(135deg, #e85d2c 0%, #F26836 50%, #ff9a6c 100%)',
  },
  {
    id: 'fork-lift',
    name: 'Fork Lift',
    path: '/equipment/fork-lift',
    image: '/Forklift.jpg',
    description: 'Our fleet of forklifts handles materials of all sizes with precision and care, from warehouse operations to construction sites.',
    categories: ['Electric Forklift', 'Diesel Forklift', 'Heavy Duty Forklift', 'High Capacity Forklift'],
    gradient: 'linear-gradient(135deg, #1a5fb4 0%, #2563eb 50%, #60a5fa 100%)',
  },
  {
    id: 'telehandler',
    name: 'Telehandler / Boomloader',
    path: '/equipment/telehandler',
    image: '/telehandler-hero.webp',
    description: 'Versatile telehandlers and boomloaders for reaching heights and navigating rough terrain with ease and precision.',
    categories: ['Material Handling', 'Rotating Boom', 'Heavy Lift', 'Compact Access'],
    gradient: 'linear-gradient(135deg, #15803d 0%, #22c55e 50%, #86efac 100%)',
  },
  {
    id: 'excavators',
    name: 'Excavators',
    path: '/equipment/excavators',
    image: '/excavator-hero.jpg',
    description: 'Powerful excavators for digging, demolition, and earthmoving tasks of any scale with advanced hydraulic systems.',
    categories: ['Crawler Excavators', 'Wheeled Excavators', 'Mini Excavators', 'Long Reach Excavators'],
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #a855f7 50%, #d8b4fe 100%)',
  },
  {
    id: 'jcb-3cx',
    name: 'JCB 3CX',
    path: '/equipment/jcb-3cx',
    image: '/jcb-hero.jpg',
    description: 'The iconic backhoe loader combining loader power with backhoe precision for trenching, loading, and excavation.',
    categories: ['Excavation & Trenching', 'Material Loading', 'Site Preparation', 'Utility & Infrastructure'],
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #fca5a5 100%)',
  },
  {
    id: 'bobcat',
    name: 'Bobcat',
    path: '/equipment/bobcat',
    image: '/bobcat-hero.jpg',
    description: 'Compact skid-steer loaders perfect for tight spaces, landscaping, site cleanup, and material handling.',
    categories: ['Construction & Prep', 'Material Handling', 'Landscaping', 'Demolition & Cleanup'],
    gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)',
  },
  {
    id: 'shovel',
    name: 'Shovel / Wheel Loader',
    path: '/equipment/shovel',
    image: '/shovel-hero.jpg',
    description: 'Large wheel loaders and shovels for bulk material handling, loading operations, and stockpile management.',
    categories: ['Compact Wheel Loaders', 'Medium Wheel Loaders', 'Heavy-Duty Loaders', 'High-Lift Loaders'],
    gradient: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #7dd3fc 100%)',
  },
]

export default function Equipment() {
  return (
    <>
      <section className="forklift-hero">
        <div
          className="forklift-hero-bg"
          style={{ backgroundImage: 'url(/crane-hero.jpg)' }}
        />
        <div className="forklift-hero-overlay" />
        <div className="container forklift-hero-content">
          <span className="forklift-hero-badge">Our Fleet</span>
          <h1>Heavy Equipment<br />Rental Fleet</h1>
          <p>
            Modern, well-maintained machinery for every job — from cranes and forklifts
            to excavators and loaders. Safety, reliability, and peak performance guaranteed.
          </p>
          <div className="forklift-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-hero">Request a Quote</Link>
            <Link to="#fleet" className="btn btn-outline btn-hero">Browse Equipment</Link>
          </div>
        </div>
      </section>

      <style>{`
        .eq-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 28px;
        }
        .eq-card {
          grid-column: span 4;
          border-radius: 18px;
          overflow: hidden;
          background: var(--bg);
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .eq-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(242,104,54,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .eq-card:hover {
          transform: translateY(-8px);
          border-color: rgba(242,104,54,0.2);
          box-shadow: 0 24px 60px rgba(0,0,0,0.08), 0 0 40px rgba(242,104,54,0.04);
        }
        .eq-card:hover::before {
          opacity: 1;
        }
        .eq-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .eq-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .eq-card:hover .eq-card-image img {
          transform: scale(1.08);
        }
        .eq-card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7));
          z-index: 1;
          pointer-events: none;
        }
        .eq-card-image-glow {
          position: absolute;
          bottom: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 100px;
          background: radial-gradient(ellipse, rgba(242,104,54,0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
          z-index: 1;
        }
        .eq-card:hover .eq-card-image-glow {
          opacity: 1;
          transform: translateX(-50%) scale(1.3);
        }
        .eq-card-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 3;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(4px);
          padding: 5px 14px;
          border-radius: 6px;
          border: 1px solid rgba(242,104,54,0.15);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .eq-card-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          position: relative;
          z-index: 2;
        }
        .eq-card-body h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
          font-family: 'Playfair Display', 'Times New Roman', serif;
          transition: color 0.3s ease;
        }
        .eq-card:hover .eq-card-body h3 {
          color: var(--primary);
        }
        .eq-card-body p {
          font-size: 0.85rem;
          color: var(--text-light);
          line-height: 1.65;
          flex: 1;
        }
        .eq-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }
        .eq-cat-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-light);
          background: var(--bg-alt);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .eq-cat-chip::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }
        .eq-card-btn {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          gap: 6px;
          margin-top: 8px;
          padding: 9px 22px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-light);
          background: var(--bg-alt);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .eq-card-btn::after {
          content: '\\2192';
          transition: transform 0.3s ease;
        }
        .eq-card:hover .eq-card-btn {
          color: #fff;
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 4px 15px rgba(242,104,54,0.25);
        }
        .eq-card:hover .eq-card-btn::after {
          transform: translateX(4px);
        }
        @media (max-width: 1100px) {
          .eq-card { grid-column: span 6; }
        }
        @media (max-width: 640px) {
          .eq-card { grid-column: span 12; }
          .eq-card-image { height: 180px; }
        }
      `}</style>

      <section className="section" id="fleet">
        <div className="container">
          <div className="eq-grid">
            {equipment.map((item) => (
              <div key={item.id} className="eq-card">
                <div className="eq-card-image">
                  <img src={item.image} alt={item.name} />
                  <div className="eq-card-image-overlay" />
                  <div className="eq-card-image-glow" />
                  <span className="eq-card-tag">{item.name}</span>
                </div>
                <div className="eq-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="eq-categories">
                    {item.categories.map((cat, i) => (
                      <span key={i} className="eq-cat-chip">{cat}</span>
                    ))}
                  </div>
                  <Link to={item.path} className="eq-card-btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
