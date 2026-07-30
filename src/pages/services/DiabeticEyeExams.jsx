import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Why do I need eye exams if I have diabetes?',
    answer:
      'Diabetes can affect the blood vessels in the retina over time, sometimes without early symptoms, so regular exams help catch changes early.',
  },
  {
    question: 'How often should I have a diabetic eye exam?',
    answer:
      'This depends on your individual health and any previous findings. Your optometrist can recommend a suitable schedule.',
  },
  {
    question: 'Will my pupils be dilated during the exam?',
    answer:
      'Dilating drops are often used so your optometrist can get a clear view of the back of your eye, where diabetes-related changes can occur.',
  },
  {
    question: 'Does diabetic eye disease have symptoms?',
    answer:
      "Early stages often have no symptoms, which is why regular screening matters even if your vision feels normal.",
  },
  {
    question: 'What happens if changes are found?',
    answer:
      'Your optometrist will discuss the findings with you and, if needed, arrange a referral for further assessment or treatment.',
  },
  {
    question: 'Should I bring my blood sugar records to my appointment?',
    answer:
      "It can be helpful to share general information about how your diabetes is being managed, as this can be relevant to your eye health.",
  },
]

function DiabeticEyeExams() {
  return (
    <article className="service-page">
      <h1>Diabetic Eye Exams</h1>

      <p>
        Diabetes can affect your eyes over time, often without early
        symptoms. Regular diabetic eye exams help monitor your eye health
        and catch changes early.
      </p>

      <h2>What is a Diabetic Eye Exam?</h2>
      <p>
        A diabetic eye exam is a focused assessment of the back of your eye,
        checking for changes to the blood vessels in the retina that can be
        associated with diabetes.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You've been diagnosed with type 1 or type 2 diabetes</li>
        <li>You're due for your annual diabetic eye check</li>
        <li>You've noticed changes in your vision</li>
        <li>Your GP or specialist has recommended a review</li>
      </ul>

      <h2>What happens during the exam?</h2>
      <h3>Discussing your health history</h3>
      <p>
        Your optometrist will ask about your diabetes management and any
        vision changes you've noticed.
      </p>
      <h3>Examining the retina</h3>
      <p>
        Using dilating drops and specialised equipment, your optometrist
        examines the back of your eye for any diabetes-related changes.
      </p>
      <h3>Discussing your results</h3>
      <p>
        You'll be talked through the findings, with a referral arranged if
        further assessment or treatment is needed.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps detect diabetes-related eye changes early</li>
        <li>Supports timely referral and treatment if needed</li>
        <li>Provides an important part of ongoing diabetes management</li>
      </ul>
      <p>
        Regular monitoring is one of the most effective ways to help protect
        your vision if you live with diabetes.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Diabetic eye exams are recommended for anyone with diabetes. Your
        optometrist can advise on how often you should be reviewed based on
        your individual health.
      </p>

      <h2>Aftercare</h2>
      <p>
        If your eyes were dilated, your vision may be blurry and
        light-sensitive for a few hours. Bringing sunglasses and arranging a
        lift home is a good idea.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team understands the importance of regular monitoring for
        patients with diabetes and takes a thorough, supportive approach to
        every exam.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're due for a diabetic eye exam, get in touch with our team to
        arrange a booking.
      </p>
    </article>
  )
}

export default DiabeticEyeExams
