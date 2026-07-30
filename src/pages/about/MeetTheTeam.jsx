import team from '../../data/team'

function initials(name) {
  return name
    .replace(/[[\]]/g, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MeetTheTeam() {
  return (
    <section className="about-page meet-team-page">
      <h1>Meet the Team</h1>
      <p>
        Our optometrists bring years of combined experience and a genuinely
        friendly approach to every appointment. Get to know the team looking
        after your vision.
      </p>
      <div className="team-profile-list">
        {team.map((member) => (
          <article key={member.slug} id={member.slug} className="team-profile">
            {member.photo ? (
              <img className="team-profile-photo" src={member.photo} alt={member.name} />
            ) : (
              <div className="team-profile-photo-placeholder" aria-hidden="true">
                {initials(member.name)}
              </div>
            )}
            <div className="team-profile-body">
              <h2>{member.name}</h2>
              {member.credentials && (
                <p className="team-profile-credentials">{member.credentials}</p>
              )}
              {member.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MeetTheTeam
