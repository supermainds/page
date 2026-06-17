import theLabData from '../data/theLab.json'
import Hero from '../components/ui/Hero'
import InfoGrid from '../components/ui/InfoGrid'
import PageSection from '../components/ui/PageSection'
import UpskillingSection from '../components/sections/UpskillingSection'
import CTABanner from '../components/ui/CTABanner'

export default function TheLab() {
  const { hero, experiments, upskilling, cta } = theLabData

  return (
    <>
      <Hero
        pretitle={hero.pretitle}
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />

      <PageSection sectionClassName="section--white section--lab-experiments" title={experiments.title}>
        <InfoGrid items={experiments.items} columns={4} />
      </PageSection>

      <UpskillingSection data={upskilling} />

      <CTABanner data={cta} />
    </>
  )
}
