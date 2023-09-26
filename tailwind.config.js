/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      'RedHat': ["Red Hat Display, sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}

