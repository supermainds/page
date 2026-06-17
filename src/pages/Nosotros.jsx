import nosotrosData from '../data/nosotros.json'
import Hero from '../components/ui/Hero'
import PageSection from '../components/ui/PageSection'
import SplitTextSection from '../components/sections/SplitTextSection'
import EcosystemSliderSection from '../components/sections/EcosystemSliderSection'
import Accordion from '../components/ui/Accordion'
import TeamMember from '../components/ui/TeamMember'
import CTABanner from '../components/ui/CTABanner'

export default function Nosotros() {
  const { hero, story, principles, team, ecosystem, cta } = nosotrosData

  return (
    <>
      <Hero
        pretitle={hero.pretitle}
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />

      <SplitTextSection className="story" title={story.title} paragraphs={story.paragraphs} />

      <PageSection sectionClassName="section--white section--principles" title={principles.title}>
        <Accordion items={principles.items} defaultOpenIndex={1} />
      </PageSection>

      <PageSection sectionClassName="section--grey section--team" title={team.title}>
        {team.members.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </PageSection>

      <EcosystemSliderSection data={ecosystem} />

      <CTABanner data={cta} />
    </>
  )
}
