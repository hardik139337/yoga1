module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    screens: {
      '2xl': {'min': '1400px'},
      'xl': { 'max': '1200px'},
      'lg': { 'max': '992px'},
      'md': { 'max': '768px'},
      'sm': { 'max': '576px'},
    },
    container: {
      screens: {
         sm: "100%",
         md: "576px",
         lg: "768px",
         xl: "992px"
      }
    }
  },
  plugins: [],
}
