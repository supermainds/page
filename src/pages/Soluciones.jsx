import solucionesData from '../data/soluciones.json'
import Hero from '../components/ui/Hero'
import InfoGrid from '../components/ui/InfoGrid'
import PageSection from '../components/ui/PageSection'
import AgentsSection from '../components/sections/AgentsSection'
import MvpSection from '../components/sections/MvpSection'
import StrategySection from '../components/sections/StrategySection'
import WhatNotSection from '../components/sections/WhatNotSection'
import CTABanner from '../components/ui/CTABanner'

export default function Soluciones() {
  const { hero, services, strategy, whatNot, agents, mvp } = solucionesData

  return (
    <>
      <Hero
        pretitle={hero.pretitle}
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
      <PageSection sectionClassName="section--white section--solutions">
        <InfoGrid items={services} columns={3} />
      </PageSection>
      {strategy && <StrategySection data={strategy} />}
      {whatNot && <WhatNotSection data={whatNot} />}
      {agents && <AgentsSection data={agents} />}
      {mvp && <MvpSection data={mvp} />}

      <CTABanner />
    </>
  )
}
