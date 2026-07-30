import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'What causes dry eyes?',
    answer:
      'Dry eye can be caused by a range of factors, including reduced tear production, screen use, environmental conditions, and certain medications or health conditions.',
  },
  {
    question: 'Are over-the-counter eye drops enough?',
    answer:
      'For mild cases, lubricating drops may help. For ongoing or more significant dry eye, a proper assessment can identify the best management approach.',
  },
  {
    question: 'How long does treatment take to work?',
    answer:
      'This varies depending on the cause and treatment approach, and can range from a few weeks to longer for more persistent cases.',
  },
  {
    question: 'Is dry eye a permanent condition?',
    answer:
      "For many people, dry eye can be managed effectively, though it may be an ongoing condition that needs continued care.",
  },
  {
    question: 'Can screen use make dry eye worse?',
    answer:
      'Yes, extended screen use is associated with reduced blinking, which can contribute to dry eye symptoms.',
  },
  {
    question: 'Should I see someone if my eyes are gritty or irritated?',
    answer:
      "Yes, it's worth having your eyes assessed, as several conditions can cause similar symptoms and benefit from different treatments.",
  },
]

function DryEyeTreatment() {
  return (
    <article className="service-page">
      <h1>Dry Eye Treatment</h1>

      <p>
        Dry, gritty, or irritated eyes can affect your daily comfort. We
        assess the underlying cause and discuss management options suited to
        you.
      </p>

      <h2>What is Dry Eye?</h2>
      <p>
        Dry eye occurs when your eyes don't produce enough tears, or the
        right quality of tears, to stay properly lubricated, which can lead
        to discomfort, irritation, and sometimes blurred vision.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You experience persistent dryness, grittiness, or irritation</li>
        <li>Your eyes water more than usual, which can be linked to dryness</li>
        <li>You spend long hours on screens</li>
        <li>You've noticed discomfort with contact lens wear</li>
      </ul>

      <h2>What happens during assessment?</h2>
      <h3>Discussing your symptoms</h3>
      <p>
        Your optometrist will ask about your symptoms, lifestyle, and any
        relevant health history or medications.
      </p>
      <h3>Eye examination</h3>
      <p>
        A closer look at your tear film and the surface of your eyes helps
        identify the likely cause of your symptoms.
      </p>
      <h3>Discussing management options</h3>
      <p>
        Depending on the findings, your optometrist may recommend lubricating
        drops, lifestyle adjustments, or other management strategies.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps identify the underlying cause of your symptoms</li>
        <li>Can reduce discomfort and irritation</li>
        <li>Supports more comfortable contact lens wear, where relevant</li>
      </ul>
      <p>
        Results vary between individuals, and ongoing management may be
        needed for ongoing comfort.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Dry eye can affect people of all ages. Your optometrist will assess
        your specific symptoms and recommend an approach suited to you.
      </p>

      <h2>Aftercare</h2>
      <p>
        Following your optometrist's recommendations, such as using drops as
        directed or taking regular screen breaks, can help support ongoing
        comfort.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes the time to understand your symptoms and find a
        management approach that fits your day-to-day life.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're experiencing dry or irritated eyes, get in touch with our
        team to arrange an assessment.
      </p>
    </article>
  )
}

export default DryEyeTreatment
