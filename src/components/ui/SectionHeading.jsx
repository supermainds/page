import { parseTitle } from '../../utils/parseTitle'

export default function SectionHeading({
  title,
  subtitle,
  size = 'lg',
  theme = 'dark',
  className = '',
  as: Tag = 'h2',
  highlightOnNewLine = false,
}) {
  const themeClass = theme === 'white' ? 'section-heading--white' : 'section-heading--dark'

  return (
    <div className={`section-heading ${themeClass} section-heading--${size} ${className}`.trim()}>
      <Tag>{parseTitle(title, 'section-heading__highlight', highlightOnNewLine)}</Tag>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
