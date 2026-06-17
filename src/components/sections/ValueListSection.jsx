import SectionHeading from '../ui/SectionHeading'

export default function ValueListSection({ title, items, backgroundImage }) {
  const resolveImage = (img) => {
    if (!img) return undefined
    if (typeof img === 'string' && (img.startsWith('http') || img.startsWith('/'))) return img
    try {
      return new URL(`../../assets/images/${img}`, import.meta.url).href
    } catch {
      return img
    }
  }

  const bg = resolveImage(backgroundImage)

  return (
    <section className="section section--dark section--value-list">
      {bg && (
        <div
          className="section__bg"
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden="true"
        />
      )}
      <div className="section__inner">
        <SectionHeading title={title} size="lg" theme="white" highlightOnNewLine />
        <ul className="value-list">
          {items.map((item) => (
            <li key={item.title} className="value-list__item">
              <span className="value-list__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="value-list__title">{item.title}</h3>
              <p className="value-list__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
