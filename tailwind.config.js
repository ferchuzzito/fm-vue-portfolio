// tailwind.config.js (VERSIÓN CORREGIDA)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // 💡 IMPORTANTE: 'fontFamily' y 'screens' PUEDEN estar aquí si quieres REEMPLAZAR
    // PERO, para evitar el error de las variantes, es mejor poner casi todo en 'extend'.
    container: {
      center: true,
    },
    // Si defines 'fontFamily' aquí, reemplazas las fuentes predeterminadas:
    fontFamily: {
      'sans': ['"Red Hat Display"', 'sans-serif'], // 🎯 Cambia 'RedHats' a 'sans'
      'RedHats': ['"Red Hat Display"', 'sans-serif'], // Si quieres usar 'font-RedHats'
      'Montserrat': ["Montserrat", "sans-serif"],
      'Fraunces': ["Fraunces", "serif"],
      'Outfit': ["Outfit", "sans-serif"],
    },
    
    // Si quieres usar tus breakpoints personalizados, déjalos aquí:
    screens: {
      sm: '375px', // => @media (min-width: 375px) { ... }
      lg: '1440px', // => @media (min-width: 1440px) { ... }
    },
    
    extend: {
      // 1. 🖼️ IMÁGENES DE FONDO (¡DEBEN estar en 'extend' para usar variantes como 'lg:')
      backgroundImage: {
        "Pattern-desktop": "url('/ordersummary/pattern-background-desktop.svg')",
        "Pattern-mobile": "url('/ordersummary/pattern-background-mobile.svg')",
        "Product-desktop": "url('/productcard/image-product-desktop.jpg')",
        "Product-mobile": "url('/productcard/image-product-mobile.jpg')",
      },
      
      // 2. 🎨 COLORES (Debe estar en 'extend' para conservar los colores base de Tailwind)
      colors: {
        'Paleblue': "hsl(225, 100%, 94%)",
        'LightGray': "hsl(212, 45%, 89%)",
        'Brightblue': "hsl(245, 75%, 52%)",
        'Verypaleblue': "hsl(225, 100%, 98%)",
        'Desaturatedblue': "hsl(224, 23%, 55%)",
        'Darkblue': "hsl(223, 47%, 23%)",
        'blue-attribution': "hsl(228, 45%, 44%)",
        'DarkBlue': "hsl(218, 44%, 22%)",
        'DarkCyan': "hsl(158, 36%, 37%)",
        'DarkCyanD': "hsl(156, 42%, 18%)",
        'Cream': "hsl(30, 38%, 92%)",
        'VeryDarkBlue': "hsl(212, 21%, 14%)",
        'DarkGrayishBlue': "hsl(228, 12%, 48%)",
        'GrayishBlue': "hsl(220, 15%, 55%)",
      },
      // 3. Puedes usar 'fontFamily' aquí si no quieres reemplazar la fuente 'sans'
    },
  },
  plugins: [],
}

