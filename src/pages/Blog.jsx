import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/ui/CTABanner'

export default function Blog() {
  return (
    <>
      <section className="section section--white section--blog">
        <div className="section__inner u-pt-lg">
          <div className="section__header section__header--stacked">
            <SectionHeading title="BLOG / INSIGHTS" size="lg" />
            <p className="section__intro">
              Próximamente: artículos sobre IA aplicada, casos de estudio y aprendizajes del Lab.
            </p>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
