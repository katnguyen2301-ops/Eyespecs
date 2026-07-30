import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'What is glaucoma?',
    answer:
      'Glaucoma is a group of eye conditions that can damage the optic nerve, often related to increased pressure inside the eye, which can affect vision if untreated.',
  },
  {
    question: 'Does glaucoma screening hurt?',
    answer:
      'Screening tests are generally quick and painless. Some tests involve a brief puff of air or a gentle touch to measure eye pressure.',
  },
  {
    question: 'Am I at risk of glaucoma?',
    answer:
      'Risk factors include family history, age, and certain health conditions. Your optometrist can discuss your individual risk based on your history.',
  },
  {
    question: 'How often should I be screened?',
    answer:
      'This depends on your age and risk factors. Your optometrist can recommend a suitable screening schedule for you.',
  },
  {
    question: 'Is glaucoma treatable?',
    answer:
      "While damage from glaucoma can't be reversed, various treatments can help manage the condition and slow its progression if detected early.",
  },
  {
    question: 'Can glaucoma be picked up during a routine eye exam?',
    answer:
      'Yes, glaucoma screening is often included as part of a comprehensive eye exam, particularly for patients with risk factors.',
  },
]

function GlaucomaScreening() {
  return (
    <article className="service-page">
      <h1>Glaucoma Screening</h1>

      <p>
        Glaucoma often develops without noticeable symptoms in its early
        stages, which is why regular screening plays an important role in
        protecting your long-term vision.
      </p>

      <h2>What is Glaucoma Screening?</h2>
      <p>
        Glaucoma screening involves a series of tests that check eye
        pressure, the health of the optic nerve, and your peripheral vision,
        helping to detect early signs of the condition.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You have a family history of glaucoma</li>
        <li>You're over 40, when risk begins to increase</li>
        <li>You have certain health conditions, such as diabetes</li>
        <li>Your optometrist has noted risk factors during a previous exam</li>
      </ul>

      <h2>What happens during screening?</h2>
      <h3>Eye pressure testing</h3>
      <p>
        A quick test measures the pressure inside your eye, one of the key
        indicators used in glaucoma assessment.
      </p>
      <h3>Optic nerve assessment</h3>
      <p>
        Your optometrist examines the optic nerve at the back of your eye to
        check for signs of damage.
      </p>
      <h3>Visual field testing</h3>
      <p>
        If needed, a visual field test checks your peripheral vision, which
        can be affected in glaucoma.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps detect glaucoma before symptoms appear</li>
        <li>Supports earlier management, which can help slow progression</li>
        <li>Gives peace of mind about your eye health</li>
      </ul>
      <p>
        Screening results and recommended follow-up vary depending on your
        individual risk factors.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Glaucoma screening is recommended for most adults, particularly
        those with risk factors. Your optometrist can advise on how often
        you should be screened.
      </p>

      <h2>Aftercare</h2>
      <p>
        If further testing or a referral is recommended, your optometrist
        will explain the next steps and what to expect.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes eye health seriously, using thorough screening to
        help protect your vision for the long term.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you'd like to arrange glaucoma screening, get in touch with our
        team.
      </p>
    </article>
  )
}

export default GlaucomaScreening
