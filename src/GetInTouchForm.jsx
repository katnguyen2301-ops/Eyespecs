import { useState } from 'react'
import locations from './data/locations'
import SocialLinks from './SocialLinks'

const practiceEmail = locations.find(
  (location) => location.slug === 'eyespecs-cbd',
).email

function GetInTouchForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = `Website enquiry from ${form.firstName} ${form.lastName}`.trim()
    const bodyLines = [
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      '',
      form.message,
    ].filter(Boolean)

    const mailtoUrl = `mailto:${practiceEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailtoUrl
  }

  return (
    <section className="get-in-touch">
      <h2>Get in Touch</h2>
      <p>
        Have any questions about your vision or eye health? Want to drop any
        feedback? We would love to hear from you.
      </p>

      <form className="get-in-touch-form" onSubmit={handleSubmit}>
        <div className="get-in-touch-row">
          <label className="get-in-touch-field">
            First Name
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="get-in-touch-field">
            Last Name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="get-in-touch-field">
          Email*
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="get-in-touch-field">
          Phone
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
        </label>

        <label className="get-in-touch-field">
          Message
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="get-in-touch-submit">
          Submit
        </button>
      </form>

      <SocialLinks />
    </section>
  )
}

export default GetInTouchForm
