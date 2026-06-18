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

El formulario envía los mensajes a `cesar@supermainds.com` usando FormSubmit.

La primera vez que se envíe el formulario, FormSubmit puede mandar un correo de activación a `cesar@supermainds.com`. Hay que confirmar ese correo para habilitar la recepción de mensajes.

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
