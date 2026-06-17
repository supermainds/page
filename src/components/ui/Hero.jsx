import { parseTitle } from '../../utils/parseTitle'
import Button from './Button'
const bgDefault = new URL('../../assets/images/header_home.png', import.meta.url).href

export default function Hero({
  title,
  subtitle,
  pretitle,
  ctaText,
  ctaPath,
  backgroundImage,
  variant = 'centered',
  image,
  isHome = false,
  showScroll = false,
}) {
  const isSplit = variant === 'split'
  let bg = bgDefault
  if (backgroundImage) {
    if (typeof backgroundImage === 'string') {
      if (backgroundImage.startsWith('http') || backgroundImage.startsWith('/')) {
        bg = backgroundImage
      } else {
        try {
          bg = new URL(`../../assets/images/${backgroundImage}`, import.meta.url).href
        } catch {
          bg = backgroundImage
        }
      }
    } else {
      bg = backgroundImage
    }
  }


  return (
    <section className={`hero ${isSplit ? 'hero--split' : ''} ${isHome ? 'hero--home' : ''}`}>
      {bg && (
        <div
          className="hero__bg"
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden="true"
        />
      )}

      {isSplit ? (
        <div className="hero__inner">
          <div className="hero__content">
            {pretitle && <span className="hero__pretitle">{pretitle}</span>}
            <h1 className="hero__title">{parseTitle(title, 'hero__highlight')}</h1>
            {subtitle && <p className="hero__subtitle">{subtitle}</p>}
            {ctaText && <Button to={ctaPath} variant="white" size="lg">{ctaText}</Button>}
          </div>
          {image && <img src={image} alt="" className="hero__image" />}
        </div>
      ) : (
        <div className="hero__content">
          {pretitle && <span className="hero__pretitle">{pretitle}</span>}
          <h1 className="hero__title">{parseTitle(title, 'hero__highlight')}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {ctaText && (
            <div className="hero__actions">
              <Button to={ctaPath} variant="white" size="lg">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      )}

      {showScroll && (
        <a href="#resultados" className="hero__scroll" aria-label="Desplazarse hacia abajo">
          Scroll
        </a>
      )}
    </section>
  )
}
