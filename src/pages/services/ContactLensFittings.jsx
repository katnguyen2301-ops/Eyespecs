import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Am I able to wear contact lenses?',
    answer:
      'Most people can wear contact lenses, but suitability depends on your eyes, prescription, and lifestyle. A fitting will confirm what works best for you.',
  },
  {
    question: 'How long does a fitting take?',
    answer:
      'An initial fitting usually takes longer than a standard exam, often 30 to 60 minutes, to allow time for measurements and a trial fit.',
  },
  {
    question: 'Do I still need glasses if I wear contact lenses?',
    answer:
      "It's still a good idea to have an up-to-date glasses prescription as a backup for times you're not wearing your lenses.",
  },
  {
    question: 'How often do I need a check-up once I wear contacts?',
    answer:
      'Regular reviews help make sure your lenses continue to fit well and your eyes stay healthy. Your optometrist will recommend a suitable schedule.',
  },
  {
    question: 'What if my contact lenses feel uncomfortable?',
    answer:
      "Let us know as soon as possible. Discomfort can sometimes mean the fit or lens type needs adjusting.",
  },
  {
    question: 'Can I wear contact lenses if I have astigmatism?',
    answer:
      'Yes, there are contact lens options designed specifically for astigmatism. Your optometrist can advise on suitable choices.',
  },
]

function ContactLensFittings() {
  return (
    <article className="service-page">
      <h1>Contact Lens Fittings</h1>

      <p>
        Contact lenses can offer a convenient, comfortable alternative to
        glasses. We take the time to find a lens type and fit suited to your
        eyes and lifestyle.
      </p>

      <h2>What is a Contact Lens Fitting?</h2>
      <p>
        A contact lens fitting measures the shape and surface of your eyes
        to determine the right lens type, curve, and size, followed by a
        trial period to check comfort and vision.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You're interested in contact lenses for the first time</li>
        <li>You'd like to switch to a different lens type</li>
        <li>You play sport or have a lifestyle that suits contacts over glasses</li>
        <li>Your current lenses aren't feeling as comfortable as they should</li>
      </ul>

      <h2>What happens during a fitting?</h2>
      <h3>Assessment</h3>
      <p>
        Your optometrist measures your eyes and discusses your lifestyle and
        preferences to narrow down suitable lens options.
      </p>
      <h3>Trial fitting</h3>
      <p>
        You'll try a set of lenses in-practice so your optometrist can check
        fit, movement, and comfort.
      </p>
      <h3>Training and follow-up</h3>
      <p>
        If you're new to contacts, we'll guide you through insertion,
        removal, and care, then arrange a follow-up to check how you're
        going.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>A convenient alternative to glasses for many activities</li>
        <li>A wide field of view without frames</li>
        <li>Options available for most prescriptions, including astigmatism</li>
      </ul>
      <p>
        Comfort and suitability vary between individuals, which is why a
        proper fitting and trial period matter.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Contact lenses aren't suitable for every eye or every prescription.
        Your optometrist will assess your eyes and discuss whether contacts
        are a good option for you.
      </p>

      <h2>Aftercare</h2>
      <p>
        Following proper hygiene and wear-time guidance helps keep your eyes
        healthy while wearing contact lenses. Your optometrist will explain
        care instructions specific to your lens type.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes time with every fitting to help you feel confident
        wearing and caring for your contact lenses.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're interested in contact lenses, get in touch with our team
        to arrange a fitting.
      </p>
    </article>
  )
}

export default ContactLensFittings
