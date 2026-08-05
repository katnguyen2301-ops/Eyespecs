import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'What age can start Ortho-K?',
    answer:
      'Ortho-K is often used for children and teenagers to help manage myopia progression, but it can also suit adults. Your optometrist can advise on suitability.',
  },
  {
    question: 'Is Ortho-K safe?',
    answer:
      "When properly fitted and cared for, Ortho-K is considered a safe option. Following your optometrist's cleaning and wear instructions is important for eye health.",
  },
  {
    question: 'Does it feel uncomfortable to wear the lenses overnight?',
    answer:
      'Most people adjust within the first few nights, with any initial awareness of the lenses settling quickly.',
  },
  {
    question: 'How long before I see clear vision during the day?',
    answer:
      'Many people notice improved vision within the first few days, though it can take one to two weeks for the effect to stabilise.',
  },
  {
    question: 'What happens if I stop wearing the lenses?',
    answer:
      'The corneal reshaping effect is temporary, so your vision will gradually return to its original state if you stop wearing the lenses.',
  },
  {
    question: 'Can Ortho-K help slow myopia progression in children?',
    answer:
      "Ortho-K is one option that may help manage myopia progression in some children. Your optometrist can discuss whether it's a suitable fit.",
  },
]

function OrthoKContactLenses() {
  return (
    <article className="service-page">
      <h1>Ortho-K Contact Lenses</h1>

      <p>
        Ortho-K lenses are worn overnight to gently reshape the surface of
        your eye, giving you clear vision during the day without glasses or
        daytime contact lenses.
      </p>

      <h2>What is Ortho-K?</h2>
      <p>
        Ortho-K, short for orthokeratology, uses specially designed rigid
        contact lenses worn while you sleep. The lenses gently reshape your
        cornea overnight, temporarily correcting your vision so you can see
        clearly during the day without glasses or daytime contacts.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You'd like an alternative to daytime glasses or contact lenses</li>
        <li>Your child has myopia that your optometrist would like to help manage</li>
        <li>You play sport or have a lifestyle where daytime glasses or contacts are inconvenient</li>
        <li>You're not suitable for, or not interested in, laser eye surgery</li>
      </ul>

      <h2>What happens during a fitting?</h2>
      <h3>Assessment</h3>
      <p>
        Your optometrist measures the shape of your cornea and discusses
        your prescription and lifestyle to check your suitability for
        Ortho-K.
      </p>
      <h3>Custom lenses</h3>
      <p>
        Your lenses are custom-designed for your eyes, with a trial period
        to fine-tune the fit and check how your vision responds.
      </p>
      <h3>Ongoing reviews</h3>
      <p>
        Regular check-ups help monitor your eye health and vision as you
        continue wearing your lenses.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Clear vision during the day without glasses or contacts</li>
        <li>May help manage the progression of myopia, particularly in children</li>
        <li>A reversible option, as the effect fades if lenses aren't worn</li>
      </ul>
      <p>
        Results vary between individuals, and your optometrist will discuss
        what you can realistically expect.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Ortho-K isn't suitable for every prescription or every eye. Your
        optometrist will assess your eyes and discuss whether Ortho-K is a
        good option for you or your child.
      </p>

      <h2>Aftercare</h2>
      <p>
        Proper lens hygiene and following your optometrist's wear schedule
        are important for comfortable, healthy Ortho-K wear. Your
        optometrist will explain care and cleaning instructions specific to
        your lenses.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team has experience fitting Ortho-K lenses and takes the time to
        monitor your progress with regular reviews.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're interested in Ortho-K, get in touch with our team to
        arrange an assessment.
      </p>
    </article>
  )
}

export default OrthoKContactLenses
