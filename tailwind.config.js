module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
       fontFamily: {
         'permanent-marker': ['Permanent Marker']
       }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
