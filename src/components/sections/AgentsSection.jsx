import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import ProcessSteps from '../ui/ProcessSteps'
import { resolveImage, resolveSvg } from '../../utils/assets'

export default function AgentsSection({ data }) {
  const backgroundImage = resolveImage(data.image)
  const icon = resolveSvg(data.icon || 'robot_black.svg')

  return (
    <section
      id="agentes"
      className="section section--white section--with-bg section--agentes"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="section__inner">
        <div className="section__split">
          <div>
            <div className="section__eyebrow">
              <img src={icon} alt="" className="icon-36" aria-hidden="true" />
              <span className="section__pretitle">{data.pretitle}</span>
            </div>
            <SectionHeading title={data.title} size="lg" />
            {data.description && <p className="section__intro u-mt-lg">{data.description}</p>}
          </div>
        </div>

        <div className="process-steps__header u-mt-2xl">
          <h2 className="u-mb-md">Cómo funciona:</h2>
          <ProcessSteps steps={data.how} />

          <div className="process-steps__content">
            <div className="process-steps__aside">
              <h3 className="section__subtitle">Casos de uso típicos:</h3>
              {data.cta && (
                <div className="process-steps__cta">
                  <Button to={data.cta.link} variant="outline">
                    {data.cta.text}
                  </Button>
                </div>
              )}
            </div>

            <ul className="process-steps__cases">
              {data.cases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
