/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        sans: ['Cairo', 'Inter', 'sans-serif'],
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

