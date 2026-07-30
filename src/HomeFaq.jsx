import { useState } from 'react'

const faqs = [
  {
    question: 'Are you accepting new patients?',
    answer:
      "Yes, we're always happy to welcome new patients, whether you're new to the area or just looking for a new optometrist for your family.",
  },
  {
    question: 'Do I need a referral to book an eye exam?',
    answer:
      'No referral is needed. You can book directly with us for a routine exam, a specific concern, or an eye care emergency.',
  },
  {
    question: 'Do you see children?',
    answer:
      "Yes, we welcome patients of all ages, including young children. We take a gentle approach to help kids feel comfortable from their very first visit.",
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      "It's helpful to bring your current glasses or contact lenses, a list of any medications, and your health fund or Medicare details if applicable.",
  },
  {
    question: 'What should I do if I have an eye care emergency?',
    answer:
      'Contact us as soon as possible so we can guide you and arrange to see you promptly. Visit our Emergency Eye Care page for more information.',
  },
  {
    question: 'Do you offer payment plans or health fund extras cover?',
    answer:
      'We accept a range of health funds for extras cover. Get in touch with our team and we can talk through the options available for your appointment.',
  },
]

function HomeFaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="home-faq-item">
      <button
        type="button"
        className="home-faq-question"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <span className="home-faq-icon" aria-hidden="true">
          ↓
        </span>
      </button>
      {open && <p className="home-faq-answer">{answer}</p>}
    </div>
  )
}

function HomeFaq() {
  return (
    <section className="home-faq">
      <h2>Frequently Asked Questions</h2>
      <div className="home-faq-list">
        {faqs.map((faq) => (
          <HomeFaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default HomeFaq
