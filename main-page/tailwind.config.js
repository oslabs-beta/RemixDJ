/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#1E1E1E',
      'white': '#FFFFFF',
      'red': '#E15156',
      'yellow': '#F6CE4B',
      'green': '#87D675',
      'turquoise': '#79ECE8',
      'magenta': '#C748CC',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}