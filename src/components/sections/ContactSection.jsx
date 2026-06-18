import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import siteData from '../../data/site.json'

export default function ContactSection({ data }) {
  const { brand } = siteData
  const [interests, setInterests] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const toggleInterest = (interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest],
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      contactPreference: interests.join(', '),
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje')
      }

      setSubmitted(true)
    } catch {
      setError('No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente al correo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section section--contact contact">
      <div className="section__inner">
        <div className="contact__inner">
        <div className="contact__info">
          <SectionHeading title={data.title} size="lg" theme="white" />
          <p>{data.description}</p>
          <div className="contact__details">
            <div>
              <Button
                href={`mailto:${brand.email}?subject=${encodeURIComponent('Agendar 30 minutos')}`}
                variant="white"
                size="sm"
                className="contact__schedule"
              >
                Agendar 30 min
              </Button>
            </div>
            <p>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </p>
            <p>
              <a href={`tel:${brand.phone}`}>{brand.phone}</a>
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="contact__form">
            <p>¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <div className="contact__field">
                <label htmlFor="name">NO</label>
                <input id="name" name="name" type="text" required placeholder="Tu nombre" />
              </div>
              <div className="contact__field">
                <label htmlFor="email">EMAIL CORPORATIVO</label>
                <input id="email" name="email" type="email" required placeholder="tu@email.com" />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="company">EMPRESA</label>
              <input id="company" name="company" type="text" placeholder="Tu empresa" />
            </div>
            <div className="contact__field">
              <label htmlFor="message">¿CUÁL ES TU RETO PRINCIPAL ?</label>
              <textarea id="message" name="message" required placeholder="Cuéntanos tu reto..." />
            </div>
            <div className="contact__interests">
              <label>¿CÓMO PREFIERES QUE TE CONTECTEMOS?</label>
              <div className="contact__chips">
                {data.interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    className={`contact__chip ${interests.includes(interest) ? 'contact__chip--active' : ''}`}
                    onClick={() => toggleInterest(interest)}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            {error && <p className="contact__error">{error}</p>}
            <Button type="submit" variant="white" size="lg" block disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : data.submitText}
            </Button>
          </form>
        )}
        </div>
      </div>
    </section>
  )
}
