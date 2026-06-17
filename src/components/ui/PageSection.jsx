import SectionHeading from './SectionHeading'

export default function PageSection({
  children,
  className = '',
  headingClassName = '',
  id,
  intro,
  sectionClassName = '',
  title,
  titleSize = 'lg',
  titleTheme = 'dark',
}) {
  const sectionClasses = ['section', sectionClassName, className].filter(Boolean).join(' ')
  const headerClasses = ['section__header', headingClassName || 'section__header--stacked']
    .filter(Boolean)
    .join(' ')
  const hasHeader = title || intro

  return (
    <section id={id} className={sectionClasses}>
      <div className="section__inner">
        {hasHeader && (
          <div className={headerClasses}>
            {title && <SectionHeading title={title} size={titleSize} theme={titleTheme} />}
            {intro && <p className="section__intro">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
