const recipient = 'sales@topcranestransport.com'

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength)
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character])
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  const { name, email, phone, service, message } = request.body || {}
  const safeName = clean(name, 120)
  const safeEmail = clean(email, 160)
  const safePhone = clean(phone, 60)
  const safeService = clean(service, 100)
  const safeMessage = clean(message, 4000)

  if (!safeName || !safeEmail || !safeMessage) {
    return response.status(400).json({ success: false, message: 'Please fill in all required fields.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
    return response.status(400).json({ success: false, message: 'Please enter a valid email address.' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.')
    return response.status(500).json({ success: false, message: 'Email service is not configured yet.' })
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'Top Cranes Website <onboarding@resend.dev>'
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;padding:24px;color:#17201f">
      <h2 style="color:#e86d3d">New Top Cranes Website Enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:10px;background:#f2f0eb;font-weight:bold">Name</td><td style="padding:10px">${escapeHtml(safeName)}</td></tr>
        <tr><td style="padding:10px;background:#f2f0eb;font-weight:bold">Email</td><td style="padding:10px">${escapeHtml(safeEmail)}</td></tr>
        <tr><td style="padding:10px;background:#f2f0eb;font-weight:bold">Phone</td><td style="padding:10px">${escapeHtml(safePhone || 'N/A')}</td></tr>
        <tr><td style="padding:10px;background:#f2f0eb;font-weight:bold">Service</td><td style="padding:10px">${escapeHtml(safeService || 'N/A')}</td></tr>
        <tr><td style="padding:10px;background:#f2f0eb;font-weight:bold;vertical-align:top">Message</td><td style="padding:10px;white-space:pre-wrap">${escapeHtml(safeMessage)}</td></tr>
      </table>
    </div>`

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: safeEmail,
      subject: `New Contact Form Inquiry - ${safeName}`,
      html,
    }),
  })

  if (!resendResponse.ok) {
    console.error('Resend API error:', await resendResponse.text())
    return response.status(502).json({ success: false, message: 'Unable to send your message right now. Please try again.' })
  }

  return response.status(200).json({ success: true, message: 'Thank you! Your message has been sent successfully.' })
}
