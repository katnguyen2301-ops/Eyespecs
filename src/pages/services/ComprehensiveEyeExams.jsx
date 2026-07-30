import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'How often should I have an eye exam?',
    answer:
      'This depends on your age, health, and risk factors, but every one to two years is a common guide for most adults. Your optometrist can recommend a schedule suited to you.',
  },
  {
    question: 'Does the exam involve eye drops?',
    answer:
      'Some parts of the exam, such as checking the back of the eye, may involve dilating drops. Your optometrist will explain if this is needed and what to expect afterwards.',
  },
  {
    question: 'Will I need glasses after my exam?',
    answer:
      "Not everyone needs glasses. If a prescription is recommended, your optometrist will talk you through the options that suit your vision and lifestyle.",
  },
  {
    question: 'How long does a comprehensive exam take?',
    answer:
      'Most exams take around 30 to 45 minutes, depending on the tests involved and whether dilation is required.',
  },
  {
    question: 'Can an eye exam pick up other health conditions?',
    answer:
      'Yes, eye exams can sometimes detect early signs of conditions such as diabetes, high blood pressure, or glaucoma, which is one reason regular exams are valuable.',
  },
  {
    question: 'Do I need a referral?',
    answer:
      'No referral is needed for a routine eye exam. You can book directly with us.',
  },
]

function ComprehensiveEyeExams() {
  return (
    <article className="service-page">
      <h1>Comprehensive Eye Exams</h1>

      <p>
        A comprehensive eye exam is the foundation of good eye health,
        checking both your vision and the overall health of your eyes. We
        take the time to understand your history and any concerns before
        recommending next steps.
      </p>

      <h2>What is a Comprehensive Eye Exam?</h2>
      <p>
        A comprehensive eye exam is a thorough assessment that checks your
        visual acuity, how your eyes focus and work together, and the health
        of the structures inside and around your eyes.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>It's been a year or more since your last eye exam</li>
        <li>You've noticed changes in your vision</li>
        <li>You have a family history of eye conditions</li>
        <li>You're due for a routine check as part of ongoing eye care</li>
      </ul>

      <h2>What happens during your exam?</h2>
      <h3>Discussing your history</h3>
      <p>
        Your optometrist will ask about your vision, general health, and any
        symptoms or concerns you'd like to raise.
      </p>
      <h3>Vision and eye health testing</h3>
      <p>
        A series of tests checks your visual acuity, focusing ability, and
        the health of your eyes, using equipment appropriate to your needs.
      </p>
      <h3>Discussing your results</h3>
      <p>
        Your optometrist will explain the results and discuss any
        recommendations, whether that's a new prescription, further testing,
        or simply confirming your eyes are healthy.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps detect vision changes early</li>
        <li>Can pick up early signs of some general health conditions</li>
        <li>Gives you a clear picture of your current eye health</li>
      </ul>
      <p>
        Results vary between individuals, and regular exams are the best way
        to track changes over time.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Comprehensive eye exams are recommended for most people, regardless
        of age. Your optometrist will tailor the exam to your specific needs
        and history.
      </p>

      <h2>Aftercare</h2>
      <p>
        If your pupils were dilated, your vision may be blurry and
        light-sensitive for a few hours afterwards. Bringing sunglasses is a
        good idea, and you may prefer someone else drives you home.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes a thorough, unhurried approach to every exam, making
        sure you understand your results and any recommendations.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're due for an eye exam, get in touch with our team to arrange
        a booking.
      </p>
    </article>
  )
}

export default ComprehensiveEyeExams
