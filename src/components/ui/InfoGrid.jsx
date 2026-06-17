import { Link } from 'react-router-dom'
import WorkCardIcon from '../icons/WorkCardIcons'
import Button from './Button'

export default function InfoGrid({ items, columns = 3, meta = null }) {
  const gridClass = columns === 4 ? 'info-grid info-grid--4' : 'info-grid'

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <InfoGridCard key={item.title} item={item} meta={item.meta || meta} />
      ))}
    </div>
  )
}

function InfoGridCard({ item, meta }) {
  return (
    <article className="info-grid__card">
      {item.icon && (
        <div className="info-grid__icon">
          {typeof item.icon === 'string' ? <WorkCardIcon name={item.icon} /> : item.icon}
        </div>
      )}
      <h3 className="info-grid__title">{item.title}</h3>
      <p className="info-grid__description">{item.description}</p>
      <InfoGridMeta meta={meta} />
      {item.link && (
        <Link to={item.link} className="info-grid__link">
          Saber más →
        </Link>
      )}
    </article>
  )
}

function InfoGridMeta({ meta }) {
  if (!meta) return null

  return (
    <div className="info-grid__meta">
      {meta.timeline && (
        <div className="info-grid__timeline u-flex u-align-center u-gap-sm u-mt-md">
          <WorkCardIcon name={meta.timeline.icon} />
          <span>{meta.timeline.text}</span>
        </div>
      )}

      {meta.list && (
        <ul className="info-grid__list u-mt-md">
          {meta.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {meta.efficiency && <p className="info-grid__efficiency u-mt-md">{meta.efficiency}</p>}

      {meta.cta && (
        <div className="u-mt-md">
          <Button to={meta.cta.link} variant="primary">
            {meta.cta.text}
          </Button>
        </div>
      )}
    </div>
  )
}
