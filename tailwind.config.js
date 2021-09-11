const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindForms = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#235c47' },
        secondary: { DEFAULT: '#c23c48' },
        yellow: {
          450: '#eba13d',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindForms],
};
