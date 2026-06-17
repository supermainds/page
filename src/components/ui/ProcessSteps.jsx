import WorkCardIcon from '../icons/WorkCardIcons'

export default function ProcessSteps({ steps, variant = 'horizontal' }) {
  if (!steps || !Array.isArray(steps) || steps.length === 0) return null

  if (variant === 'vertical') {
    return (
      <div className="process-steps process-steps--vertical">
        {steps.map((step) => (
          <div key={step.title} className="process-steps__row">
            <h4 className="process-steps__title">{step.title}</h4>
            <p className="process-steps__description">{step.description}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="process-steps process-steps--horizontal">
      {steps.map((step) => (
        <div key={step.number || step.title} className="process-steps__step">
          {step.number && <div className="process-steps__number">{step.number}</div>}
          {step.weeks && (
            <div className="process-steps__meta">
              <WorkCardIcon name="clock" />
              <small>Semana {step.weeks}</small>
            </div>
          )}
          <h4 className="process-steps__title">{step.title}</h4>
          {step.list ? (
            <ul className="process-steps__list">
              {step.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="process-steps__description">{step.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}
