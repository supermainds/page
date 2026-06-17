import SectionHeading from '../ui/SectionHeading'
import StrategyList from './StrategyList'
import { resolveImage, resolveSvg } from '../../utils/assets'

export default function StrategySection({ data }) {
  const backgroundImage = resolveImage(data.backgroundImage || 'estrategia.png')
  const icon = resolveSvg(data.icon || 'bombillo_black.svg')

  return (
    <section
      id="estrategia"
      className="section section--white section--with-bg section--strategy"
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
            <p className="section__intro u-mt-lg">{data.intro}</p>
          </div>
        </div>
        <StrategyList items={data.items} />
      </div>
    </section>
  )
}
