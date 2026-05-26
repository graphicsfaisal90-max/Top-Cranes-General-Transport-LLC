import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/Top%20Cranes%20logo.svg" alt="Top Cranes" className="logo-img" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <div className={`dropdown ${menuOpen ? 'dropdown-mobile' : ''}`}>
            <NavLink to="/equipment" className="dropdown-btn" onClick={() => setMenuOpen(false)}>
              Equipment
            </NavLink>
            <div className="dropdown-content">
              <Link to="/equipment/fork-lift" onClick={() => setMenuOpen(false)}>Fork Lift</Link>
              <Link to="/equipment/telehandler" onClick={() => setMenuOpen(false)}>Telehandler / Boomloader</Link>
              <Link to="/equipment/excavators" onClick={() => setMenuOpen(false)}>Excavators</Link>
              <Link to="/equipment/jcb-3cx" onClick={() => setMenuOpen(false)}>JCB 3CX</Link>
              <Link to="/equipment/bobcat" onClick={() => setMenuOpen(false)}>Bobcat</Link>
              <Link to="/equipment/crane" onClick={() => setMenuOpen(false)}>Crane</Link>
              <Link to="/equipment/shovel" onClick={() => setMenuOpen(false)}>Shovel</Link>
            </div>
          </div>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
