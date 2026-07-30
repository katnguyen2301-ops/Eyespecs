import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'At what age should my child have their first eye exam?',
    answer:
      'Many optometrists recommend a first check around preschool age, or earlier if you notice anything unusual with your child\'s eyes or vision.',
  },
  {
    question: 'How do you test vision in young children?',
    answer:
      "We use age-appropriate methods, such as picture charts and simple games, so testing stays comfortable and engaging even for children who can't yet read letters.",
  },
  {
    question: 'What are signs my child might have a vision problem?',
    answer:
      'Sitting close to screens, squinting, rubbing eyes often, or struggling at school can all be signs worth having checked.',
  },
  {
    question: 'Will my child need drops during the exam?',
    answer:
      'This depends on what the optometrist needs to assess. If drops are recommended, we will explain what to expect beforehand.',
  },
  {
    question: 'How often should children have their eyes checked?',
    answer:
      'This varies by age and any previous findings, but your optometrist can recommend a suitable schedule for your child.',
  },
  {
    question: 'Do you see children with additional needs?',
    answer:
      "Yes, let us know beforehand so we can tailor the appointment to help your child feel comfortable.",
  },
]

function ChildrensEyeCare() {
  return (
    <article className="service-page">
      <h1>Children's Eye Care</h1>

      <p>
        Good vision plays a big part in how children learn and play. We
        offer gentle, patient eye exams designed to help kids feel
        comfortable from their very first visit.
      </p>

      <h2>What is Children's Eye Care?</h2>
      <p>
        Children's eye care involves age-appropriate vision testing and eye
        health checks, helping to identify and manage any issues early,
        while supporting healthy visual development.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>Your child is due for their first or a routine eye check</li>
        <li>You've noticed squinting, sitting close to screens, or eye rubbing</li>
        <li>Your child's teacher has raised a concern about their vision</li>
        <li>There's a family history of vision problems</li>
      </ul>

      <h2>What happens during the visit?</h2>
      <h3>A relaxed introduction</h3>
      <p>
        We take time to help your child settle in and feel comfortable
        before starting any testing.
      </p>
      <h3>Age-appropriate testing</h3>
      <p>
        Depending on your child's age, testing may involve picture charts,
        simple games, or standard letter charts to assess their vision and
        eye health.
      </p>
      <h3>Discussing the results with you</h3>
      <p>
        Your optometrist will explain the findings and discuss any
        recommendations, whether that's glasses, monitoring, or a follow-up
        visit.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps catch vision issues that could affect learning</li>
        <li>Supports healthy visual development</li>
        <li>Builds positive early experiences with eye care</li>
      </ul>
      <p>
        Every child develops differently, and your optometrist will tailor
        recommendations to your child's individual needs.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        We welcome children of all ages. Let us know beforehand about any
        specific needs or concerns so we can prepare accordingly.
      </p>

      <h2>Aftercare</h2>
      <p>
        If glasses are recommended, we'll help you and your child choose a
        comfortable, well-fitted pair, and explain how to care for them.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes a gentle, friendly approach with young patients,
        helping build confidence around eye care from an early age.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you'd like to book an eye check for your child, get in touch with
        our team.
      </p>
    </article>
  )
}

export default ChildrensEyeCare
