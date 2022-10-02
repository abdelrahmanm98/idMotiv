/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }
      'xl': '998px',

      'xll': '1150px',
      // => @media (min-width: 1280px) { ... }
      
      '1xl': '1300px',
      // => @media (min-width: 1536px) { ... }
      '1-2xl': '1500px',
      // => @media (min-width: 1536px) { ... }
      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
      '2-1xl': '1736px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1840px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '##A162F7',
        grayDark: '#7C7C8D',
      },
    },
  },
  plugins: [],
};
