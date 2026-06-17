import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  size = '',
  to,
  href,
  type = 'button',
  className = '',
  onClick,
  block = false,
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size && `btn--${size}`,
    block && 'btn--block',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
