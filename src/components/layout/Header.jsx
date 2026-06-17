import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import siteData from '../../data/site.json'
const logoImgHead = new URL('../../assets/images/Logo_negro.png', import.meta.url).href


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { brand, navigation } = siteData

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label={brand.name}>
          <img
            src={logoImgHead}
            className="header__logo-icon"
            alt={brand.name}
            width={197}
            height={44}
          />
        </Link>

        <nav className="header__nav" aria-label="Principal">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `header__link ${isActive ? 'header__link--active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Button to="/#contacto" variant="primary">
            Contacto
          </Button>
        </div>
      </div>

      <nav
        className={`header__mobile-nav ${mobileOpen ? 'header__mobile-nav--open' : ''}`}
        aria-label="Móvil"
      >
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="header__link"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header__mobile-bar" aria-label="Navegación móvil">
        <button
          type="button"
          className="header__mobile-action"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="header__mobile-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Menú</span>
        </button>
        <Link
          to="/#contacto"
          className="header__mobile-action header__mobile-action--primary"
          onClick={() => setMobileOpen(false)}
        >
          <svg
            className="header__phone-icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6.24 6.24l1.28-1.28a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Contáctenos</span>
        </Link>
      </div>
    </header>
  )
}
