import { Navigate, useParams } from 'react-router-dom'
import locations from '../data/locations'

function LocationDetail() {
  const { slug } = useParams()
  const location = locations.find((entry) => entry.slug === slug)

  if (!location) {
    return <Navigate to="/contact" replace />
  }

  return (
    <section className="location-detail">
      <div className="location-detail-hero">
        <h1>
          {location.name}
          <br />
          {location.tagline}
        </h1>
        <p>
          Offering a wide range of eye care tailored to each patient's
          individual needs in a professional and caring environment.
        </p>
        <div className="location-detail-hero-actions">
          <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="btn btn-outline-light">
            {location.phone}
          </a>
          <a href={`mailto:${location.email}`} className="btn btn-book">
            Book a consultation
          </a>
        </div>
      </div>

      <div className="location-detail-body">
        <aside className="location-detail-card">
          <h2>{location.name}</h2>
          <div className="location-detail-card-row">
            <span className="location-detail-card-label">Address</span>
            <p>{location.address}</p>
          </div>
          <div className="location-detail-card-row">
            <span className="location-detail-card-label">Phone</span>
            <p>
              <a href={`tel:${location.phone.replace(/\s+/g, '')}`}>{location.phone}</a>
            </p>
          </div>
          <div className="location-detail-card-row">
            <span className="location-detail-card-label">Opening Hours</span>
            {location.hours.map((entry) => (
              <p key={entry.day}>
                {entry.day}: {entry.time}
              </p>
            ))}
          </div>
        </aside>

        <div className="location-detail-map-placeholder" aria-hidden="true">
          Map placeholder — add a real address to enable the map
        </div>
      </div>
    </section>
  )
}

export default LocationDetail
