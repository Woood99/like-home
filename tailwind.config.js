/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,scss}"],
  theme: {
    extend: {
      screens: {
        'md1': {'max': '1300px'},  
        'mmd1': {'min': '1301px'},
        'md2': {'max': '768px'},
        'mmd2': {'min': '769px'},
      }
    },
  },
  plugins: [],
}

