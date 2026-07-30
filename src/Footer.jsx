import { Link } from 'react-router-dom'
import services from './data/services'
import locations from './data/locations'
import SocialLinks from './SocialLinks'
import imageCredits from './data/imageCredits'

const areas = ['[Suburb One]', '[Suburb Two]', '[Suburb Three]', '[Suburb Four]']

const midpoint = Math.ceil(services.length / 2)
const servicesColumnOne = services.slice(0, midpoint)
const servicesColumnTwo = services.slice(midpoint)

function Footer() {
  const practice = locations[0]

  return (
    <footer className="site-footer">
      <p className="footer-disclaimer">
        This is a placeholder demo site. Replace this disclaimer with wording
        appropriate to your practice before publishing — for example, notes
        on patient image consent, results varying between individuals, and
        seeking professional advice for your specific circumstances.
      </p>

      <div className="footer-grid">
        <div>
          <h2>Get In Touch</h2>
          <p>{practice.name}</p>
          <p>
            <a href={`tel:${practice.phone.replace(/\s+/g, '')}`}>{practice.phone}</a>
          </p>
          <p>{practice.address}</p>
          <p>
            <a href={`mailto:${practice.email}`}>{practice.email}</a>
          </p>
        </div>

        <div>
          <h2>Services</h2>
          <div className="footer-services">
            <ul>
              {servicesColumnOne.map((service) => (
                <li key={service.path}>
                  <Link to={`/services/${service.path}`}>{service.label}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {servicesColumnTwo.map((service) => (
                <li key={service.path}>
                  <Link to={`/services/${service.path}`}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2>Clinic Hours</h2>
          {practice.hours.map((entry) => (
            <p key={entry.day}>
              {entry.day}
              <br />
              {entry.time}
            </p>
          ))}
        </div>
      </div>

      <ul className="footer-suburbs">
        {areas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>

      <div className="footer-bottom">
        <span>All Rights Reserved by Eyespecs</span>
        <SocialLinks className="footer-social-links" />
      </div>

      {imageCredits.length > 0 && (
        <details className="footer-credits">
          <summary>Photo credits</summary>
          <ul>
            {imageCredits.map((credit) => (
              <li key={credit.source}>
                &ldquo;{credit.title}&rdquo; by {credit.author}, licensed under{' '}
                {credit.license}.{' '}
                <a href={credit.source} target="_blank" rel="noreferrer">
                  Source
                </a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </footer>
  )
}

export default Footer
