const CONTACT_TO_EMAIL = 'cesar@supermainds.com'

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const cleanValue = (value = '') => String(value).trim()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, message, contactPreference } = req.body || {}
  const cleaned = {
    name: cleanValue(name),
    email: cleanValue(email),
    company: cleanValue(company),
    message: cleanValue(message),
    contactPreference: cleanValue(contactPreference),
  }

  if (!cleaned.name || !cleaned.email || !cleaned.message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  const to = process.env.CONTACT_TO_EMAIL || CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'supermAInds <onboarding@resend.dev>'
  const subject = `Nuevo contacto desde supermAInds: ${cleaned.name}`
  const text = [
    `Nombre: ${cleaned.name}`,
    `Email: ${cleaned.email}`,
    `Empresa: ${cleaned.company || 'No especificada'}`,
    `Preferencia de contacto: ${cleaned.contactPreference || 'No especificada'}`,
    '',
    'Reto principal:',
    cleaned.message,
  ].join('\n')
  const html = `
    <h2>Nuevo mensaje desde el formulario de supermAInds</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(cleaned.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(cleaned.email)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(cleaned.company || 'No especificada')}</p>
    <p><strong>Preferencia de contacto:</strong> ${escapeHtml(cleaned.contactPreference || 'No especificada')}</p>
    <p><strong>Reto principal:</strong></p>
    <p>${escapeHtml(cleaned.message).replaceAll('\n', '<br>')}</p>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      html,
      reply_to: cleaned.email,
    }),
  })

  if (!response.ok) {
    return res.status(502).json({ error: 'Email provider rejected the message' })
  }

  return res.status(200).json({ ok: true })
}
