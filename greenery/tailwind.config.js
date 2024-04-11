/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        // colors: {
        //   'button': '#1C6758',
        //   'white-green': '#C1F4C5',
        //   'mid-green': '#65C18C',
        //   'regal-blue': '#243c5a',
        //   'regal-a': '#243c5a',
        // }
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
    ],
  }  