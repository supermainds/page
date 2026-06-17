import SectionHeading from '../ui/SectionHeading'

export default function SplitTextSection({ className = '', title, paragraphs }) {
  return (
    <section className={`section section--split-text split-text ${className}`.trim()}>
      <div className="section__inner">
        <div className="split-text__inner">
          <SectionHeading title={title} size="lg" />
          <div className="split-text__content">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)} className="split-text__text">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
