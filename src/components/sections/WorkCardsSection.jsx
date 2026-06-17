import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import WorkCardIcon from '../icons/WorkCardIcons'
import { resolveImage } from '../../utils/assets'

export default function WorkCardsSection({ title, cards }) {
  return (
    <section className="section section--work-cards work-cards-section">
      <div className="section__inner">
        <div className="section__header section__header--stacked">
          <SectionHeading title={title} size="lg" theme="black" />
        </div>
        <div className="work-cards">
        {cards.map((card) => (
          <WorkCard key={card.title} card={card} />
        ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ card }) {
  const backgroundImage = resolveImage(card.image)

  return (
    <article className="work-cards__card">
      <div
        className="work-cards__bg"
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        aria-hidden="true"
      />
      <div className="work-cards__overlay" aria-hidden="true" />
      <div className="work-cards__body">
        {card.icon && (
          <div className="work-cards__icon">
            <WorkCardIcon name={card.icon} />
          </div>
        )}
        <h3 className="work-cards__title">{card.title}</h3>
        <p className="work-cards__description">{card.description}</p>
        <Button to={card.link} variant="outline-light" className="work-cards__btn">
          Ver más
        </Button>
      </div>
    </article>
  )
}
