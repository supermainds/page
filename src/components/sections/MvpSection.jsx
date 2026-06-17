import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import { resolveImage, resolveSvg } from '../../utils/assets'

export default function MvpSection({ data }) {
  const icon = resolveSvg(data.icon || 'caja_black.svg')
  const image = resolveImage(data.image)

  return (
    <section
      id="mvp"
      className="section section--grey mvp-section section--mvp"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="section__inner">
        <div className="mvp-section__hero">
          <div className="mvp-section__copy">
            <img src={icon} alt="" className="mvp-section__icon" aria-hidden="true" />
            {data.pretitle && <span className="section__pretitle">{data.pretitle}</span>}
            <SectionHeading title={data.title} size="lg" />
            {data.description && <p className="section__intro">{data.description}</p>}
          </div>
        </div>

        <div className="mvp-section__process">
          <h2>{data.processTitle}</h2>
          <div className="mvp-section__rows">
            {data.steps.map((step) => (
              <article key={step.title} className="mvp-section__row">
                <div className="mvp-section__duration">
                  <strong>{step.weeks}</strong>
                  <span>Semanas</span>
                </div>
                <div className="mvp-section__phase">
                  {step.sprint && <span>{step.sprint}</span>}
                  <h3>{step.title}</h3>
                </div>
                <ul className="mvp-section__list">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {data.products && (
          <div className="mvp-section__products">
            <div className="mvp-section__products-copy">
              <h2>{data.products.title}</h2>
              {data.products.cta && (
                <Button to={data.products.cta.link} variant="outline">
                  {data.products.cta.text}
                </Button>
              )}
            </div>
            <ul className="mvp-section__products-list">
              {data.products.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
