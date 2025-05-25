/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fde0b6',
          300: '#fbc88d',
          400: '#f9a55f',
          500: '#f58438',
          600: '#ea6a20',
          700: '#c45317',
          800: '#9c4215',
          900: '#7c3712',
        },
      },
    },
  },
  plugins: [],
};