import { useState } from 'react'

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  )
}

function FaqAccordion({ items }) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <FaqItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default FaqAccordion
