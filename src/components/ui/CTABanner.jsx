import Button from './Button'
import siteData from '../../data/site.json'

export default function CTABanner({ data = siteData.cta }) {
  return (
    <section className="section section--cta-banner cta-banner">
      <div className="section__inner">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__title">{data.title}</h2>
          {data.subtitle && <p className="cta-banner__subtitle">{data.subtitle}</p>}
          <Button to={data.buttonPath} variant="white" size="lg">
            {data.buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
