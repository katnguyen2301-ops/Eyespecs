import { useEffect, useState } from 'react'

const DISMISS_KEY = 'closure-notice-2026-10-03'
const EXPIRES_AT = new Date('2026-10-07T00:00:00')

function ClosureNotice() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (new Date() >= EXPIRES_AT) return
    if (localStorage.getItem(DISMISS_KEY)) return
    setOpen(true)
  }, [])

  function dismiss() {
    setOpen(false)
    localStorage.setItem(DISMISS_KEY, 'true')
  }

  if (!open) return null

  return (
    <div className="closure-notice-overlay" onClick={dismiss}>
      <div
        className="closure-notice"
        role="dialog"
        aria-modal="true"
        aria-labelledby="closure-notice-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="closure-notice-close"
          aria-label="Close"
          onClick={dismiss}
        >
          ×
        </button>
        <h2 id="closure-notice-title">Practice Closure Notice</h2>
        <p>
          Our practice will be closed from <strong>Saturday, October 3rd</strong> to{' '}
          <strong>Wednesday, October 6th</strong>, resuming normal business
          hours on <strong>Thursday, October 7th</strong>.
        </p>
        <button type="button" className="btn btn-book closure-notice-dismiss" onClick={dismiss}>
          Got it
        </button>
      </div>
    </div>
  )
}

export default ClosureNotice
