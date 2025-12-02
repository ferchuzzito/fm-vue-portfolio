# Frontend Mentor - Ejercicios (Vue 3 + Vite + Tailwind)

Proyecto con varias tarjetas de ejemplo extraídas de Frontend Mentor, implementadas con Vue 3, Vite y TailwindCSS.

## Descripción
Este repositorio contiene tres componentes de ejemplo mostrados como "cards":
- Order Summary: Card compuesta por CardHeader, PlanDetails y ActionButtons.
- Product Card: Card con ProductImage, ProductDetails, PriceDisplay y AddToCartButton.
- QR Code Card: Card con QrDetails.

La app sirve como catálogo de componentes y ejemplo de estructura para proyectos pequeños en Vue 3.

## Tecnologías
- Vue 3 (script setup)
- Vite
- TailwindCSS
- Router de Vue (src/router)

## Requisitos
- Node.js 18+
- npm o pnpm

## Instalación
```sh
npm install
```

## Desarrollo
Iniciar servidor de desarrollo:
```sh
npm run dev
```
Abrir en el navegador: por defecto http://localhost:5173 (ver consola de Vite).

## Build / Preview
Construir para producción:
```sh
npm run build
```
Previsualizar build:
```sh
npm run preview
```

## Estructura relevante
- src/main.js — punto de entrada.
- src/App.vue — componente raíz.
- src/router/index.js — rutas.
- src/assets/main.css — estilos globales (Tailwind).
- src/components/ — componentes por tarjeta:
  - order-summary: CardHeader.vue, PlanDetails.vue, ActionButtons.vue
  - productCard: ProductImage.vue, ProductDetails.vue, PriceDisplay.vue, AddToCartButton.vue
  - qrCode: QrDetails.vue
  - Attribution.vue

Vistas de ejemplo en src/Views: Home.vue, OrderSummary.vue, ProductCard.vue, QrCodeCard.vue

## Notas
- Ajusta la base del router si despliegas en GitHub Pages.
- Personaliza estilos en src/assets/main.css y tailwind.config.js.
- El proyecto está pensado como referencia/ejercicio; adapta estructura según necesidades.

## Contribuir
1. Fork > branch > PR.
2. Mantener formato y convenciones de Vue 3.
3. Añadir descripciones claras en los PRs.

## Licencia
Añade la licencia que corresponda. Este repositorio es un ejercicio de aprendizaje.
