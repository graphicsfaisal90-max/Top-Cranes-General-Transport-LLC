import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/Top%20Cranes%20logo.svg" alt="Top Cranes" className="footer-logo" />
          <p>
            Your trusted partner for heavy lifting and general transport services.
            Safety, reliability, and excellence in every job.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <Link to="/services">Crane Rental</Link>
          <Link to="/services">Heavy Haulage</Link>
          <Link to="/services">General Transport</Link>
          <Link to="/services">Logistics</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Industrial Road</p>
          <p>Dubai, UAE</p>
          <p>+971 4 123 4567</p>
          <p>info@topcranes.ae</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Top Cranes General Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
