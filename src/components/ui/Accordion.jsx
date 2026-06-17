import { useState } from 'react'

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.number}
            className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}
          >
            <button
              type="button"
              className="accordion__trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="accordion__number">{item.number}</span>
              <span className="accordion__title">{item.title}</span>
              <span className="accordion__icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && <div className="accordion__panel">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
