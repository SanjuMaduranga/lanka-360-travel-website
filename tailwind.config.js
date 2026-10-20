/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#f1c40f',
          500: '#d4af37',
          600: '#aa8c2c',
        },
        emerald: {
          800: '#065f46',
          900: '#064e3b',
        },
        ocean: {
          800: '#0f2b48',
          900: '#0a192f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}