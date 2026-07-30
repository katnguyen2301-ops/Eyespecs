const practicePhotos = [
  'Reception',
  'Waiting Area',
  'Testing Room',
  'Testing Room',
  'Dispensary',
  'Frame Display',
]

function OurPractice() {
  return (
    <section className="about-page">
      <h1>Our Practice</h1>
      <p>
        Take a look around our practice. We've designed our spaces to feel
        calm and comfortable, with modern equipment to support thorough,
        considered care.
      </p>
      <div className="practice-gallery">
        {practicePhotos.map((label, i) => (
          <div key={label + i} className="practice-photo-placeholder">
            {label}
          </div>
        ))}
      </div>
      <p className="practice-gallery-note">
        Photo placeholders — add real photos of your practice here.
      </p>
    </section>
  )
}

export default OurPractice
