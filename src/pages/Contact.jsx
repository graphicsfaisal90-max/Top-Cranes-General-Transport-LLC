import { useState } from 'react'
import './Pages.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for a free consultation and quote</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Ready to start your project? Reach out to our team and we'll get back
              to you within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>123 Industrial Road, Dubai, UAE</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+971 4 123 4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@topcranes.ae</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>Sat - Thu: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll contact you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+971 XX XXX XXXX" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service">
                    <option value="">Select a service</option>
                    <option value="crane">Crane Rental</option>
                    <option value="haulage">Heavy Haulage</option>
                    <option value="transport">General Transport</option>
                    <option value="logistics">Logistics Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
