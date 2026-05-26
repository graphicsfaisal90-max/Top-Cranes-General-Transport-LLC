import { Link } from 'react-router-dom'

export default function Equipment() {
  const equipment = [
    { id: 'fork-lift', name: 'Fork Lift', icon: '🏗️', path: '/equipment/fork-lift', description: 'Our fleet of forklifts handles materials of all sizes with precision and care, from warehouse operations to construction sites.' },
    { id: 'telehandler', name: 'Telehandler / Boomloader', icon: '🚜', path: '/equipment/telehandler', description: 'Versatile telehandlers and boomloaders for reaching heights and navigating rough terrain with ease.' },
    { id: 'excavators', name: 'Excavators', icon: '⛰️', path: '/equipment/excavators', description: 'Powerful excavators for digging, demolition, and earthmoving tasks of any scale.' },
    { id: 'jcb-3cx', name: 'JCB 3CX', icon: '🛠️', path: '/equipment/jcb-3cx', description: 'The iconic backhoe loader for trenching, loading, and excavation — a true workhorse.' },
    { id: 'bobcat', name: 'Bobcat', icon: '🔄', path: '/equipment/bobcat', description: 'Compact skid-steer loaders perfect for tight spaces, landscaping, and site cleanup.' },
    { id: 'crane', name: 'Crane', icon: '🏗️', path: '/equipment/crane', description: 'Heavy-duty cranes for lifting and placing oversized loads with maximum safety and precision.' },
    { id: 'shovel', name: 'Shovel', icon: '⛏️', path: '/equipment/shovel', description: 'Large wheel loaders and shovels for bulk material handling and loading operations.' },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Equipment</h1>
          <p>Modern, well-maintained machinery for every job</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="equipment-intro">
            <p>
              At Top Cranes General Transport, we pride ourselves on maintaining a diverse
              and modern fleet of equipment. Every machine is regularly serviced and operated
              by certified professionals to ensure safety, reliability, and peak performance
              on every project.
            </p>
          </div>

          <div className="equipment-grid">
            {equipment.map((item) => (
              <div key={item.id} id={item.id} className="equipment-card">
                <div className="equipment-icon">{item.icon}</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.path && (
                  <Link to={item.path} className="btn btn-primary" style={{ marginTop: 'auto' }}>View Details</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
