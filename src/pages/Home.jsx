import homeData from '../data/home.json'
import Hero from '../components/ui/Hero'
import FeatureCard from '../components/ui/FeatureCard'
import PageSection from '../components/ui/PageSection'
import ComparisonSection from '../components/sections/ComparisonSection'
import SplitTextSection from '../components/sections/SplitTextSection'
import ValueListSection from '../components/sections/ValueListSection'
import WorkCardsSection from '../components/sections/WorkCardsSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  const { hero, results, comparison, valueProps, workTogether, clients, contact } = homeData

  return (
    <>
      <Hero {...hero} showScroll isHome />

      <PageSection
        id="resultados"
        sectionClassName="section--white section--results"
        title={results.title}
        intro={results.intro}
        headingClassName="section__header--split"
      >
        <div className="features-grid">
          {results.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </PageSection>

      <ComparisonSection notBest={comparison.notBest} perfectIf={comparison.perfectIf} />

      <ValueListSection
        title={valueProps.title}
        items={valueProps.items}
        backgroundImage={valueProps.backgroundImage}
      />

      <WorkCardsSection title={workTogether.title} cards={workTogether.cards} />

      <SplitTextSection className="clients" title={clients.title} paragraphs={clients.paragraphs} />

      <ContactSection data={contact} />
    </>
  )
}
