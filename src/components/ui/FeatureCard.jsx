import FeatureCardIcon from '../icons/FeatureCardIcons'
import { resolveImage } from '../../utils/assets'

export default function FeatureCard({ number, icon, title, description, image, variant = 'dark' }) {
  const backgroundImage = resolveImage(image)

  if (variant === 'light') {
    return (
      <article className="feature-card feature-card--light">
        <div className="feature-card__content">
          {icon ? (
            <span className="feature-card__icon">
              <FeatureCardIcon name={icon} />
            </span>
          ) : (
            number && <span className="feature-card__number">{number}</span>
          )}
          <h3 className="feature-card__title">{title}</h3>
          <p className="feature-card__description">{description}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="feature-card">
      <div
        className="feature-card__bg"
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        aria-hidden="true"
      />
      <div className="feature-card__content">
        {icon ? (
          <span className="feature-card__icon">
            <FeatureCardIcon name={icon} />
          </span>
        ) : (
          number && <span className="feature-card__number">{number}</span>
        )}
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </article>
  )
}
