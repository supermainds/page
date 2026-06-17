import { parseTitle } from '../../utils/parseTitle'
import ComparisonIconCross from '../icons/ComparisonIconCross'
import ComparisonIconCheck from '../icons/ComparisonIconCheck'

const toneIcons = {
  negative: ComparisonIconCross,
  positive: ComparisonIconCheck,
}

function ComparisonColumn({ column }) {
  const tone = column.tone || 'positive'
  const Icon = toneIcons[tone] || ComparisonIconCheck

  return (
    <div className={`comparison__column comparison__column--${column.variant || 'accent'}`}>
      <h2 className="comparison__heading">{parseTitle(column.title)}</h2>
      {column.description && <p className="comparison__intro">{column.description}</p>}
      <ul className="comparison__list">
        {column.items.map((item) => (
          <li key={item} className="comparison__item">
            <span className={`comparison__icon comparison__icon--${tone}`}>
              <Icon />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ComparisonSection({ columns, notBest, perfectIf }) {
  const comparisonColumns =
    columns ||
    [
      { ...notBest, tone: 'negative', variant: 'light' },
      { ...perfectIf, tone: 'positive', variant: 'accent' },
    ].filter((column) => column.title && Array.isArray(column.items))

  return (
    <section className="section section--comparison">
      <div className="section__inner comparison">
        {comparisonColumns.map((column) => (
          <ComparisonColumn key={column.title.toString()} column={column} />
        ))}
      </div>
    </section>
  )
}
