/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '200px',

      'mq': '600px',

      'md': '768px',

      'mdl': '890px',

      'lg': '1024px',

      'large': '1150px',

      'xl': '1280px',

      '2xl': '1536px',
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
