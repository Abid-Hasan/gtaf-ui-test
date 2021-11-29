module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          200: '#F2F2F3',
          300: '#E5E5E6',
          700: '#6B6C72',
          800: '#88898E',
          900: '#3E3F48',
        },
        green: {
          500: '#00C614',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
