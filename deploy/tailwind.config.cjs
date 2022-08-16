/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobel': '365px',
      "sm": "640px",
      "md": "768px",
      "lg": "1024px"
    },
    extend: {},
  },
  plugins: [],
}