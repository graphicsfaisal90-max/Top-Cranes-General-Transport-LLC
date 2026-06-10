import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <div className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}>
            <div className="dropdown-head">
              <NavLink to="/equipment" className="dropdown-link" onClick={() => setMenuOpen(false)}>Equipment</NavLink>
              <button
                className="dropdown-arrow"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="Toggle equipment menu"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
              </button>
            </div>
            <div className="dropdown-content">
              <Link to="/equipment/crane" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Crane</Link>
              <Link to="/equipment/fork-lift" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Fork Lift</Link>
              <Link to="/equipment/telehandler" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Telehandler / Boomloader</Link>
              <Link to="/equipment/excavators" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Excavators</Link>
              <Link to="/equipment/jcb-3cx" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>JCB 3CX</Link>
              <Link to="/equipment/shovel" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Shovel</Link>
              <Link to="/equipment/bobcat" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Bobcat</Link>
            </div>
          </div>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary header-cta" onClick={() => setMenuOpen(false)}>Get Quote Now</Link>
        </nav>
      </div>
    </header>
  )
}
