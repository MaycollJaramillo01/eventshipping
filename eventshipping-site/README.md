# Event Shipping

Sitio Astro + TypeScript adaptado del template TSS en `tss_extraccion/tss-website`. Conserva sus componentes, tipografías locales, retícula, tarjetas, menú accesible y estilo editorial. Usa el granate `#800000` y los textos e imágenes proporcionados de Event Shipping. El template original permanece intacto.

## Ejecutar

Node 24 recomendado (mínimo 22.23.4). Desde esta carpeta:

```sh
npm ci
npm run dev
npm run check
npm run build
npm run verify
npm run preview
```

`dist/` contiene el sitio estático listo para alojamiento. Los originales usados están en `assets/originals/`; `npm run assets` genera WebP/AVIF responsivos, fuentes e iconos locales con sus licencias. El proyecto no depende de la carpeta TSS para ejecutarse o compilar.

## Contenido y rutas

- `/`: portada, servicios, proceso, industrias, recursos, preguntas y contacto.
- `/truck-shipping-1/`: transporte terrestre y especificaciones de equipos.
- `/domestic-shipping/`: eventos, ida y vuelta, almacenamiento y manejo especial.
- `/international-shipping/`: transporte aéreo y marítimo.
- `/contact/`: contacto y preparación de una solicitud de cotización.
- `/trade-show-marketing-tips/`, `/trade-show-shipping-tips/`, `/trade-show-time-wasters-1/`: recursos.
- `404.html`: página de error.

Las antiguas variantes de `contact-us/quote` se redirigen a `/contact/` mediante `public/_redirects`, para hosts estáticos compatibles. Las demás rutas existentes se conservan.

Contenido editable en `src/data/`; diseño en `src/styles/global.css`; páginas en `src/pages/`. Las notas editoriales originales están en `../INFORMACION_EMPRESA.md`.

## Chatbot existente

`src/components/Chatbot.astro` incluye exactamente la URL de script proporcionada, además de sus dos dependencias originales de GoDaddy. Usa la cuenta existente de Event Shipping (Re:amaze / GoDaddy Conversations), sin crear otro bot ni pedir credenciales. El componente añade los puntos de montaje esperados y evita que la navegación del sitio antiguo interfiera con el nuevo encabezado.

El texto, respuestas, horarios y números mostrados dentro del chatbot se administran en GoDaddy/Re:amaze. La configuración original contiene un teléfono distinto en su mensaje de bienvenida: revisar ese texto en el proveedor. Las páginas usan los números del material proporcionado: 800-649-0130 y 310-702-6856.

## Cotización

El formulario valida campos y fechas, y prepara un correo dirigido a `info@eventshipping.com`. El visitante revisa y envía el correo desde su aplicación; también puede copiar los datos. No se afirma que una solicitud fue recibida por completar el formulario. No se necesita backend ni se guardan los datos del visitante. Se incluye el enlace al formulario publicado del negocio como alternativa web.

## Publicación de revisión

La identidad de Sites está en `.openai/hosting.json`. Esta versión es privada y contiene `noindex, nofollow` y `robots.txt` restrictivo. Para usarla en el dominio definitivo, cambiar `site` en `astro.config.mjs`, habilitar indexación en `Layout.astro` y `robots.txt`, y confirmar los datos comerciales y derechos de las imágenes del sitio original. No se modificó `eventshipping.com`.
