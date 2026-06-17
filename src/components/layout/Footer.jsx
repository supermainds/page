import { Link } from 'react-router-dom'
import siteData from '../../data/site.json'
const logoImg = new URL('../../assets/images/Logo_blanco.png', import.meta.url).href
const linkedInSvg = new URL('../../assets/svg/LinkedIn.svg', import.meta.url).href

export default function Footer() {
  const { brand, footer } = siteData

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src={logoImg}
                className="header__logo-icon"
                aria-hidden="true"
                alt={brand.name}
                width={327}
                height={94}
              />
            </Link>
            <p>
              {brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="footer__column-title">Soluciones</h4>
            <ul className="footer__links">
              {footer.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__column-title">Compañía</h4>
            <ul className="footer__links">
              {footer.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__column-title">Legal</h4>
            <ul className="footer__links">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__inner">
          <span>{footer.copyright}</span>
          <div className="footer__social">
            {footer.social.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
                {item.label === 'LinkedIn' ? (
                  <img src={linkedInSvg} alt="LinkedIn" aria-hidden="false" />
                ) : (
                  item.label
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
