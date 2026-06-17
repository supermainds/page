export function parseTitle(parts, highlightClass = 'section-heading__highlight', newlineBeforeHighlight = false) {
  if (typeof parts === 'string') {
    return parts
  }

  return parts.map((part, index) => {
    if (typeof part === 'string') {
      return <span key={index}>{part}</span>
    }
    if (part.highlight) {
      if (newlineBeforeHighlight) {
        return (
          <span key={index} className={highlightClass}>
            <br />
            {part.highlight}
          </span>
        )
      }
      return (
        <span key={index} className={highlightClass}>
          {part.highlight}
        </span>
      )
    }
    if (part.break) {
      return <br key={index} />
    }
    return null
  })
}
