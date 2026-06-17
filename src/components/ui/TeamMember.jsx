import { resolveImage } from '../../utils/assets'

export default function TeamMember({ name, role, bio, image, reverse = false }) {
  const photo = resolveImage(image)

  return (
    <article className={`team-member ${reverse ? 'team-member--reverse' : ''}`}>
      <div className="team-member__photo-wrap">
        <img src={photo} alt={name} className="team-member__photo" loading="lazy" />
      </div>
      <div className="team-member__bio">
        <p className="team-member__role">{role}</p>
        <h3 className="team-member__name">{name}</h3>
        <p>{bio}</p>
      </div>
    </article>
  )
}
