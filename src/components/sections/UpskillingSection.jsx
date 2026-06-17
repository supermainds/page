import { useRef } from 'react'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import { useSliderPagination } from '../../hooks/useSliderPagination'
import { resolveSvg } from '../../utils/assets'

export default function UpskillingSection({ data }) {
  const trackRef = useRef(null)
  const { activePageIndex, goToNext, goToPrevious, goToSlide, pageIndexes } =
    useSliderPagination(trackRef, '.upskilling-slider__card', data.items.length)

  return (
    <section className="section section--grey upskilling-slider">
      <div className="section__inner">
        <div className="upskilling-slider__header">
          <SectionHeading title={data.title} size="lg" />
          {data.description && <p>{data.description}</p>}
        </div>

        <div className="upskilling-slider__viewport">
          <div ref={trackRef} className="upskilling-slider__track">
            {data.items.map((item) => (
              <article key={item.title} className="upskilling-slider__card">
                <img
                  src={resolveSvg(item.icon)}
                  alt=""
                  className="upskilling-slider__icon"
                  aria-hidden="true"
                />
                <h3>{item.title}</h3>
                <div className="upskilling-slider__meta">
                  <span className="upskilling-slider__duration">
                    <img src={resolveSvg('clock.svg')} alt="" aria-hidden="true" />
                    {item.duration}
                  </span>
                  <span>{item.audience}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="upskilling-slider__controls" aria-label="Controles del slider">
          <Button
            type="button"
            variant="outline"
            className="upskilling-slider__arrow"
            onClick={goToPrevious}
          >
            ←
          </Button>
          <div className="upskilling-slider__dots">
            {pageIndexes.map((slideIndex, pageIndex) => (
              <button
                key={slideIndex}
                type="button"
                className={`upskilling-slider__dot ${
                  activePageIndex === pageIndex ? 'upskilling-slider__dot--active' : ''
                }`}
                aria-label={`Ir al grupo ${pageIndex + 1}`}
                onClick={() => goToSlide(slideIndex)}
              />
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            className="upskilling-slider__arrow"
            onClick={goToNext}
          >
            →
          </Button>
        </div>
      </div>
    </section>
  )
}
