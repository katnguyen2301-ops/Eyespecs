const RECIPIENTS = ['admin@eyespecs.com.au', 'dianetkn@gmail.com']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NOTES_LENGTH = 2000

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { firstName, lastName, dateOfBirth, email, phone, date, time, service, notes } =
    req.body || {}

  if (
    !isNonEmptyString(firstName) ||
    !isNonEmptyString(lastName) ||
    !isNonEmptyString(dateOfBirth) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(date) ||
    !isNonEmptyString(time) ||
    !isNonEmptyString(service)
  ) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  if (!EMAIL_PATTERN.test(email)) {
    res.status(400).json({ error: 'Invalid email address' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromAddress = process.env.BOOKING_FROM_EMAIL

  if (!apiKey || !fromAddress) {
    res.status(500).json({ error: 'Email service is not configured' })
    return
  }

  const trimmedNotes = typeof notes === 'string' ? notes.trim().slice(0, MAX_NOTES_LENGTH) : ''

  const subject = `Appointment request from ${firstName} ${lastName}`
  const textLines = [
    `Name: ${firstName} ${lastName}`,
    `Date of birth: ${dateOfBirth}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Requested date: ${date}`,
    `Requested time: ${time}`,
    `Reason for visit: ${service}`,
    trimmedNotes && '',
    trimmedNotes && `Additional notes: ${trimmedNotes}`,
  ].filter(Boolean)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: RECIPIENTS,
        reply_to: email,
        subject,
        text: textLines.join('\n'),
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend error:', errorBody)
      res.status(502).json({ error: 'Failed to send email' })
      return
    }

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Booking email error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
