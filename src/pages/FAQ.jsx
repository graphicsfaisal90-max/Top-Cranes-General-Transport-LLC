import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const faqs = [
  {
    q: 'What types of cranes do you offer for rental?',
    a: 'We offer a wide range of cranes including mobile cranes, tower cranes, crawler cranes, rough terrain cranes, and all-terrain cranes. Our fleet covers capacities from 25 tons to 500 tons to suit projects of any scale.',
  },
  {
    q: 'Do you provide operators with the equipment?',
    a: 'Yes, we provide certified and experienced operators with all our equipment rentals. You also have the option to rent equipment without an operator if you have your own certified personnel.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire UAE including Dubai, Abu Dhabi, Sharjah, and all other emirates. Our fleet is mobile and can reach any project site across the country.',
  },
  {
    q: 'How do I request a quote?',
    a: 'You can request a quote by filling out the contact form on our website, calling us at +971 50 919 1004, or emailing sales@topcranestransport.com. Our team typically responds within 24 hours.',
  },
  {
    q: 'What is the minimum rental period?',
    a: 'We offer both short-term and long-term rental options. Short-term rentals can be as brief as a single day, while long-term contracts are available for monthly or yearly commitments at discounted rates.',
  },
  {
    q: 'Do you offer heavy haulage and transport services?',
    a: 'Yes, we provide specialized heavy haulage services for oversized and heavy equipment. We handle permits, escorts, route planning, and safe delivery to your project site.',
  },
  {
    q: 'What safety measures do you follow?',
    a: 'Safety is our top priority. All equipment is regularly inspected and certified. Our operators follow strict safety protocols, and we provide comprehensive safety briefings before every project.',
  },
  {
    q: 'Can I visit your yard to inspect equipment?',
    a: 'Absolutely. You are welcome to visit our yard at Industrial Area 13, Sharjah to inspect any equipment before rental. Contact us to schedule a visit.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our equipment rental services</p>
        </div>
      </section>

      <style>{`
        .faq-section {
          padding: 80px 0;
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
        }
        .faq-grid {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          border-color: rgba(242,104,54,0.2);
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .faq-item.open {
          border-color: rgba(242,104,54,0.25);
          box-shadow: 0 8px 30px rgba(242,104,54,0.06);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          text-align: left;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .faq-item.open .faq-question {
          color: var(--primary);
        }
        .faq-icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(242,104,54,0.08);
          color: var(--primary);
          transition: all 0.3s ease;
        }
        .faq-item.open .faq-icon {
          background: var(--primary);
          color: #fff;
        }
        .faq-icon svg {
          transition: transform 0.3s ease;
        }
        .faq-item.open .faq-icon svg {
          transform: rotate(45deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .faq-answer.open {
          max-height: 300px;
        }
        .faq-answer p {
          padding: 0 24px 20px;
          font-size: 0.95rem;
          color: var(--text-light);
          line-height: 1.7;
        }
        .faq-cta {
          text-align: center;
          margin-top: 48px;
          padding: 40px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .faq-cta h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 8px;
          font-family: 'Playfair Display', 'Times New Roman', serif;
        }
        .faq-cta p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin-bottom: 20px;
        }
      `}</style>

      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <h3>Still Have Questions?</h3>
            <p>Our team is ready to help. Get in touch with us for any inquiries.</p>
            <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '50px', padding: '12px 36px' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
