import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/Top%20Cranes%20logo.svg" alt="Top Cranes" className="footer-logo" />
          <h3 className="footer-company-name">Top Cranes General Transport LLC</h3>
          <p>
            UAE heavy equipment rental and general transport for construction,
            infrastructure, logistics and industrial projects. Safe equipment,
            skilled operators and dependable delivery.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">Our Company</Link>
          <Link to="/equipment">Services & Fleet</Link>
          <Link to="/contact">Request a Quote</Link>
          <Link to="/faq">Project FAQ</Link>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <Link to="/equipment/crane">Crane Rental UAE</Link>
          <Link to="/equipment/fork-lift">Forklift Rental</Link>
          <Link to="/equipment/excavators">Excavator Rental</Link>
          <Link to="/equipment/telehandler">Telehandler Rental</Link>
          <Link to="/equipment/bobcat">Bobcat Rental</Link>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <p className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ficon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
            <span><strong>Off:</strong> 3F-15, Al Rajhi Bldg, Hor Al Anz, Dubai-UAE</span>
          </p>
          <p className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ficon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
            <span><strong>Yard:</strong> Yard:10 Industrial Area 13 Sharjah-UAE</span>
          </p>
          <p className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ficon"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
            +971 50 919 1004
          </p>
          <p className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ficon"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
            +971 50 674 9200
          </p>
          <p className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ficon"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            sales@topcranestransport.com
          </p>
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
