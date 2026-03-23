
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./constants.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        orange: {
          500: '#FF5C00',
        }
      }
    },
  },
  plugins: [],
}
