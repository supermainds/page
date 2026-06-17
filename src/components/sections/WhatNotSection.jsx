import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function WhatNotSection({ data }) {
  return (
    <section className="section section--grey section--what-not">
      <div className="section__inner">
        <div className="section__header section__header--stacked">
          <SectionHeading title={data.title} size="lg" />
        </div>
        <div className="what-not-grid">
          {data.items.map((text) => (
            <p key={text} className="what-not-grid__item">
              {text}
            </p>
          ))}
        </div>
        {data.cta && (
          <div className="section__cta u-mt-lg">
            <Button to={data.cta.link} variant="primary">
              {data.cta.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
