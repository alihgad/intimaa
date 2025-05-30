/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./login/**/*.{html,js}",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
       borderRadius: {
        '4xl': '2rem', 
        '5xl': '2.5rem',  
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

