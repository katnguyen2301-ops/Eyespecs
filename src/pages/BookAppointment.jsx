import { useState } from 'react'
import locations from '../data/locations'
import services from '../data/services'

const practice = locations.find((location) => location.slug === 'eyespecs-cbd')

function parseTimeToMinutes(value) {
  const match = value.trim().match(/(\d+):(\d+)\s*(am|pm)/i)
  if (!match) return null
  let hours = parseInt(match[1], 10)
  const minutes = parseInt(match[2], 10)
  const period = match[3].toLowerCase()
  if (period === 'pm' && hours !== 12) hours += 12
  if (period === 'am' && hours === 12) hours = 0
  return hours * 60 + minutes
}

function minutesToLabel(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const period = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`
}

function getSlotsForDate(dateValue) {
  if (!dateValue) return []
  const date = new Date(`${dateValue}T00:00:00`)
  const dayName = date.toLocaleDateString('en-AU', { weekday: 'long' })
  const entry = practice.hours.find((hours) => hours.day === dayName)
  if (!entry || entry.time.toLowerCase() === 'closed') return []

  const [startText, endText] = entry.time.split('-')
  const start = parseTimeToMinutes(startText)
  const end = parseTimeToMinutes(endText)
  if (start == null || end == null) return []

  const slots = []
  for (let t = start; t + 30 <= end; t += 30) {
    slots.push(minutesToLabel(t))
  }
  return slots
}

function BookAppointment() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: services[0].path,
    notes: '',
  })
  const [status, setStatus] = useState('idle')

  function handleFieldChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleDateChange(event) {
    const { value } = event.target
    setForm((prev) => ({ ...prev, date: value, time: '' }))
  }

  function handleTimeSelect(slot) {
    setForm((prev) => ({ ...prev, time: slot }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!form.time || status === 'sending') return

    const serviceLabel = services.find((entry) => entry.path === form.service)?.label

    setStatus('sending')

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          dateOfBirth: form.dateOfBirth,
          email: form.email,
          phone: form.phone,
          date: form.date,
          time: form.time,
          service: serviceLabel,
          notes: form.notes,
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const slots = getSlotsForDate(form.date)
  const canSubmit = form.date && form.time && status !== 'sending'

  return (
    <section className="get-in-touch">
      <h1>Book an Appointment</h1>
      <p>
        Our team will confirm your appointment by phone or email.
      </p>

      {status === 'success' && (
        <p className="book-appointment-confirmation">
          Thanks! Your appointment request has been sent — we'll be in touch
          to confirm.
        </p>
      )}

      {status === 'error' && (
        <p className="book-appointment-error">
          Something went wrong sending your request. Please call us on{' '}
          <a href={`tel:${practice.phone.replace(/\s+/g, '')}`}>{practice.phone}</a> or
          email <a href={`mailto:${practice.email}`}>{practice.email}</a> directly.
        </p>
      )}

      <form className="get-in-touch-form" onSubmit={handleSubmit}>
        <div className="get-in-touch-row">
          <label className="get-in-touch-field">
            First Name
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleFieldChange}
              required
            />
          </label>
          <label className="get-in-touch-field">
            Last Name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <label className="get-in-touch-field">
          Date of Birth
          <input
            type="date"
            name="dateOfBirth"
            max={today}
            value={form.dateOfBirth}
            onChange={handleFieldChange}
            required
          />
        </label>

        <div className="get-in-touch-row">
          <label className="get-in-touch-field">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFieldChange}
              required
            />
          </label>
          <label className="get-in-touch-field">
            Phone
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <label className="get-in-touch-field">
          Date
          <input
            type="date"
            name="date"
            min={today}
            value={form.date}
            onChange={handleDateChange}
            required
          />
        </label>

        <div className="book-slots">
          <span className="book-slots-label">Time</span>
          {!form.date && (
            <p className="book-slots-empty">Choose a date to see available times.</p>
          )}
          {form.date && slots.length === 0 && (
            <p className="book-slots-empty">
              We're closed that day — please choose another date.
            </p>
          )}
          {slots.length > 0 && (
            <div className="book-slots-grid">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={
                    slot === form.time ? 'book-slot-btn book-slot-btn-selected' : 'book-slot-btn'
                  }
                  onClick={() => handleTimeSelect(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        </div>

        <label className="get-in-touch-field">
          Reason for Visit
          <select name="service" value={form.service} onChange={handleFieldChange}>
            {services.map((service) => (
              <option key={service.path} value={service.path}>
                {service.label}
              </option>
            ))}
          </select>
        </label>

        <label className="get-in-touch-field">
          Additional Notes
          <textarea name="notes" rows={4} value={form.notes} onChange={handleFieldChange} />
        </label>

        <button type="submit" className="get-in-touch-submit" disabled={!canSubmit}>
          {status === 'sending' ? 'Sending…' : 'Request Appointment'}
        </button>
      </form>
    </section>
  )
}

export default BookAppointment
