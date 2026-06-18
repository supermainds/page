# superartificial — Sitio web

Landing y páginas internas para **superartificial**, construidas con React, Vite y Sass.

## Estructura

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout
│   ├── sections/     # Secciones compuestas (contacto, comparación…)
│   └── ui/           # Botones, Hero, cards, accordion…
├── data/             # Contenido en JSON (fácil de editar)
├── pages/            # Home, Soluciones, The Lab, Nosotros, Blog
├── styles/           # Sass modular (_variables, componentes…)
└── utils/            # Helpers (parseTitle)
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Formulario de contacto

El formulario envía los mensajes a `cesar@supermainds.com` usando la función serverless `api/contact.js`.

Configura estas variables de entorno en Vercel:

```bash
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=supermAInds <cesar@supermainds.com>
```

`CONTACT_FROM_EMAIL` debe usar un dominio verificado en Resend. Si necesitas cambiar el destinatario, puedes agregar `CONTACT_TO_EMAIL`.

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/soluciones` | Soluciones |
| `/the-lab` | The Lab |
| `/nosotros` | Nosotros |
| `/blog` | Blog (placeholder) |
| `/#contacto` | Formulario en inicio |

## Contenido

Edita los archivos en `src/data/` para actualizar textos, listas y enlaces sin tocar componentes.

## Diseño

- Color primario: `#F5A623`
- Tipografía: Inter (Google Fonts)
- Imágenes de ejemplo vía Unsplash (sustituir por assets finales en `public/`)
