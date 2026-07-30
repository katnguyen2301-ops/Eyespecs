import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import services from './data/services'
import serviceImages from './data/serviceImages'
import locations from './data/locations'

function ServicesCarousel() {
  const trackRef = useRef(null)
  const navigate = useNavigate()
  const practice = locations.find((location) => location.slug === 'eyespecs-cbd')

  function scrollByCard(direction) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.service-tile')
    const amount = card ? card.getBoundingClientRect().width + 24 : 300
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  function handleTileClick(event, path) {
    if (!document.startViewTransition) return
    event.preventDefault()
    document.startViewTransition(() => navigate(`/services/${path}`))
  }

  return (
    <section className="services-carousel">
      <h2>Our Services</h2>
      <p className="services-carousel-subtitle">
        We offer a range of eye care services, combining thorough exams with
        a personalised approach to help support your vision.
      </p>

      <div className="services-carousel-row">
        <button
          type="button"
          className="services-carousel-arrow"
          aria-label="Scroll left"
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>

        <div className="services-carousel-track" ref={trackRef}>
          {services.map((service, i) => (
            <Link
              key={service.path}
              to={`/services/${service.path}`}
              className="service-tile"
              onClick={(event) => handleTileClick(event, service.path)}
            >
              {serviceImages[service.path] ? (
                <img
                  className="service-tile-image"
                  src={serviceImages[service.path]}
                  alt=""
                  style={{ viewTransitionName: `service-image-${service.path}` }}
                />
              ) : (
                <div
                  className={`service-tile-image service-tile-image-${i % 4}`}
                  aria-hidden="true"
                />
              )}
              <h3>{service.label}</h3>
              <p>{service.blurb}</p>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="services-carousel-arrow"
          aria-label="Scroll right"
          onClick={() => scrollByCard(1)}
        >
          →
        </button>
      </div>

      <a
        href={`mailto:${practice.email}`}
        className="btn btn-book services-carousel-cta"
      >
        Book Appointment
      </a>
    </section>
  )
}

export default ServicesCarousel
