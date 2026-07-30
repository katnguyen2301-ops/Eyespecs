import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'How do I choose the right frames?',
    answer:
      "Our team can help you choose frames that suit your face shape, prescription, and personal style, based on what's available in-practice.",
  },
  {
    question: 'How long does it take to make new glasses?',
    answer:
      'This varies depending on the lenses and frame chosen, but we can give you an estimated timeframe when you order.',
  },
  {
    question: 'Can I get lenses with special coatings?',
    answer:
      'Yes, options such as anti-glare, scratch-resistant, and light-responsive coatings are available. Your optometrist can discuss what suits your needs.',
  },
  {
    question: 'How often should I update my glasses prescription?',
    answer:
      'This depends on how your vision changes over time. Regular eye exams help determine when an update is needed.',
  },
  {
    question: 'What if my new glasses don\'t feel right?',
    answer:
      "Let us know as soon as possible. Adjustments to fit, and occasionally the prescription, can usually resolve most issues.",
  },
  {
    question: 'Do you offer glasses for children?',
    answer:
      'Yes, we stock a range of frames suited to children, including durable and flexible options.',
  },
]

function PrescriptionEyewear() {
  return (
    <article className="service-page">
      <h1>Prescription Eyewear</h1>

      <p>
        Choosing the right glasses is about more than just your
        prescription. We help you find frames and lenses that suit your
        vision needs, lifestyle, and personal style.
      </p>

      <h2>What is Prescription Eyewear?</h2>
      <p>
        Prescription eyewear is a made-to-order pair of glasses, with lenses
        crafted to your specific prescription and fitted to frames you
        choose.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You've been given a new or updated prescription</li>
        <li>Your current glasses are damaged or outdated</li>
        <li>You'd like a second pair for specific activities, like reading or screens</li>
        <li>You're looking for a style refresh</li>
      </ul>

      <h2>What happens when ordering glasses?</h2>
      <h3>Reviewing your prescription</h3>
      <p>
        We confirm your current prescription, from a recent eye exam with us
        or elsewhere, before recommending lens options.
      </p>
      <h3>Choosing frames and lenses</h3>
      <p>
        Our team helps you select frames and any relevant lens coatings or
        features suited to your needs and budget.
      </p>
      <h3>Fitting and collection</h3>
      <p>
        Once your glasses are ready, we fit and adjust them to make sure
        they sit comfortably before you take them home.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Lenses made specifically for your prescription</li>
        <li>A wide range of frame styles to choose from</li>
        <li>Professional fitting for lasting comfort</li>
      </ul>
      <p>
        The right eyewear for you depends on your individual prescription,
        face shape, and lifestyle.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Prescription eyewear suits most people who need vision correction.
        Your optometrist can advise if contact lenses or other options might
        also be worth considering.
      </p>

      <h2>Aftercare</h2>
      <p>
        Regular cleaning and careful storage help keep your glasses in good
        condition. Bring them in any time for a clean or adjustment.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes the time to help you find eyewear that looks good and
        feels right, backed by an accurate, professionally fitted
        prescription.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're due for new glasses, get in touch with our team to arrange
        a fitting.
      </p>
    </article>
  )
}

export default PrescriptionEyewear
