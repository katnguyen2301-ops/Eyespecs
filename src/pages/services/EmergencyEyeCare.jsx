import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'What counts as an eye emergency?',
    answer:
      'Sudden vision loss, eye pain, a foreign object in the eye, or an eye injury are all reasons to seek prompt care.',
  },
  {
    question: 'Should I go to a hospital or an optometrist?',
    answer:
      'For many urgent eye concerns, an optometrist can assess and treat you promptly. For severe injuries or sudden vision loss, hospital emergency care may be more appropriate — contact us and we can advise.',
  },
  {
    question: 'Can you remove something stuck in my eye?',
    answer:
      'In many cases, yes. Contact us as soon as possible so we can assess the situation and advise on the best course of action.',
  },
  {
    question: 'What if I get sudden flashes or floaters?',
    answer:
      'Sudden flashes or a significant increase in floaters should be assessed promptly, as this can sometimes indicate a more serious issue.',
  },
  {
    question: 'Do you offer same-day appointments for emergencies?',
    answer:
      "We do our best to see urgent cases as quickly as possible. Call us and let us know it's urgent so we can prioritise your appointment.",
  },
  {
    question: 'What should I do while waiting to be seen?',
    answer:
      "Avoid rubbing the eye, and if there's a chemical involved, rinse with clean water and seek care immediately. Follow any advice given when you call.",
  },
]

function EmergencyEyeCare() {
  return (
    <article className="service-page">
      <h1>Emergency Eye Care</h1>

      <p>
        Sudden eye pain, injuries, or vision changes need prompt attention.
        Contact us as soon as possible so we can guide you and arrange care
        quickly.
      </p>

      <h2>What is Emergency Eye Care?</h2>
      <p>
        Emergency eye care covers prompt assessment and treatment for
        urgent eye concerns, such as injuries, sudden pain, or unexpected
        changes in vision.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You have sudden eye pain or redness</li>
        <li>Something is stuck in your eye or you've had an injury</li>
        <li>You've noticed sudden vision changes, flashes, or floaters</li>
        <li>You have a chemical splash or other exposure to your eye</li>
      </ul>

      <h2>What happens during an emergency visit?</h2>
      <h3>Initial assessment</h3>
      <p>
        Your optometrist will quickly assess the nature and severity of your
        symptoms to determine the best course of action.
      </p>
      <h3>Treatment or referral</h3>
      <p>
        Depending on the issue, your optometrist may treat you directly or
        refer you to a specialist or hospital for further care.
      </p>
      <h3>Follow-up guidance</h3>
      <p>
        You'll be given clear guidance on next steps, including any
        follow-up appointments or symptoms to watch for.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Prompt assessment can help prevent complications</li>
        <li>Clear guidance on whether further care is needed</li>
        <li>Peace of mind when dealing with an unexpected eye concern</li>
      </ul>
      <p>
        Outcomes depend on the nature of the emergency and how quickly it's
        assessed, which is why prompt contact matters.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Emergency eye care is appropriate for anyone experiencing sudden eye
        pain, injury, or vision changes. For very severe injuries or sudden
        vision loss, hospital emergency care may be needed — call us and we
        can advise.
      </p>

      <h2>Aftercare</h2>
      <p>
        Follow any care instructions given at your appointment closely, and
        contact us again if your symptoms worsen or don't improve as
        expected.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team understands eye emergencies can be distressing and aims to
        see urgent cases as quickly as possible.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're experiencing an eye emergency, contact our team straight
        away.
      </p>
    </article>
  )
}

export default EmergencyEyeCare
