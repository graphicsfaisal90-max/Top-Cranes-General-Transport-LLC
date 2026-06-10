import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('/send-email.php', {
        method: 'POST',
        body: data,
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for a free consultation and quote</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-wrap">
              <span className="contact-info-badge">Get in Touch</span>
              <h2>Let's Discuss<br />Your Project</h2>
              <p className="contact-intro">
                Ready to start your project? Reach out to our team and we'll get back
                to you within 24 hours.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <strong>Office Address</strong>
                    <p>3F-15, Al Rajhi Bldg, Hor Al Anz, Dubai-UAE</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                      <line x1="8" y1="10" x2="16" y2="10" />
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <strong>Yard Address</strong>
                    <p>Yard:10 Industrial Area 13 Sharjah-UAE</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <strong>Phone</strong>
                    <p>+971 50 919 1004</p>
                    <p>+971 50 674 9200</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <strong>Email</strong>
                    <p>sales@topcranestransport.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <strong>Working Hours</strong>
                    <p>Sat - Thu: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and our team will get back to you promptly.</p>
              </div>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been received. We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name<span className="required">*</span></label>
                      <input type="text" id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address<span className="required">*</span></label>
                      <input type="email" id="email" name="email" required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+971 XX XXX XXXX" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service">
                      <option value="">Select a service</option>
                      <option value="crane">Crane Rental</option>
                      <option value="haulage">Heavy Haulage</option>
                      <option value="transport">General Transport</option>
                      <option value="logistics">Logistics Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message<span className="required">*</span></label>
                    <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project..." />
                  </div>
                  {error && <div className="form-error">{error}</div>}
                  <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
