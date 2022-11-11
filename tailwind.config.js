/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  theme: {
    extend: {
      colors: {
        primary: '#2a9d8f',
        primaryShade: '#217b70',
      },
    },
  },
  plugins: [],
  purge: ['./src/components/**/*.(js|jsx|ts|tsx)'],
};
