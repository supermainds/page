import { useRef } from 'react'
import SectionHeading from '../ui/SectionHeading'
import { useSliderPagination } from '../../hooks/useSliderPagination'
import { resolveImage } from '../../utils/assets'

export default function EcosystemSliderSection({ data }) {
  const trackRef = useRef(null)
  const { activePageIndex, goToNext, goToPrevious, goToSlide, pageIndexes } =
    useSliderPagination(trackRef, '.ecosystem-slider__card', data.partners.length)

  return (
    <section className="section ecosystem-slider">
      <div className="section__inner">
        <div className="ecosystem-slider__header">
          <SectionHeading title={data.title} size="lg" theme="white" />
          {data.description && <p>{data.description}</p>}
        </div>

        <div className="ecosystem-slider__viewport">
          <div ref={trackRef} className="ecosystem-slider__track">
            {data.partners.map((partner) => (
              <article key={partner.name} className="ecosystem-slider__card">
                <img
                  src={resolveImage(partner.logo)}
                  alt={partner.name}
                  className="ecosystem-slider__logo"
                  loading="lazy"
                />
                <div className="ecosystem-slider__divider" />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="ecosystem-slider__controls" aria-label="Controles del slider">
          <button
            type="button"
            className="ecosystem-slider__arrow"
            aria-label="Anterior"
            onClick={goToPrevious}
          >
            ←
          </button>
          <div className="ecosystem-slider__dots">
            {pageIndexes.map((slideIndex, pageIndex) => (
              <button
                key={slideIndex}
                type="button"
                className={`ecosystem-slider__dot ${
                  activePageIndex === pageIndex ? 'ecosystem-slider__dot--active' : ''
                }`}
                aria-label={`Ir al grupo ${pageIndex + 1}`}
                onClick={() => goToSlide(slideIndex)}
              />
            ))}
          </div>
          <button
            type="button"
            className="ecosystem-slider__arrow"
            aria-label="Siguiente"
            onClick={goToNext}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
