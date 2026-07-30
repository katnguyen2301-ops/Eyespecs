import { Link } from 'react-router-dom'
import team from './data/team'

function initials(name) {
  return name
    .replace(/[[\]]/g, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TeamCarousel() {
  return (
    <section className="team-carousel">
      <div className="team-carousel-header">
        <h2>Meet Our Team</h2>
        <p>
          We're committed to delivering thorough eye care in a friendly,
          welcoming environment, where patients feel confident throughout
          their visit.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member) => (
          <article key={member.slug} className="team-tile">
            <div className="team-tile-heading">
              <h3>{member.name}</h3>
              <p className="team-tile-title">{member.title}</p>
            </div>
            <Link to={`/about/meet-the-team#${member.slug}`} className="team-tile-photo-link">
              {member.photo ? (
                <img className="team-tile-photo" src={member.photo} alt={member.name} />
              ) : (
                <div className="team-tile-photo-placeholder" aria-hidden="true">
                  {initials(member.name)}
                </div>
              )}
            </Link>
            <Link to={`/about/meet-the-team#${member.slug}`} className="team-tile-link">
              Learn more ↗
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamCarousel
