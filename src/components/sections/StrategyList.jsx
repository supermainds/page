export default function StrategyList({ items }) {
  return (
    <div className="strategy-list">
      {items.map((item) => (
        <div key={item.title} className="strategy-list__item">
          <div className="strategy-list__left">
            <div className="strategy-list__number">{item.weeks || '2'}</div>
            <div className="strategy-list__unit">Semanas</div>
          </div>
          <div className="strategy-list__right">
            <h4 className="strategy-list__title">{item.title}</h4>
            {item.list && Array.isArray(item.list) ? (
              <ul className="strategy-list__list">
                {item.list.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="strategy-list__description">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
