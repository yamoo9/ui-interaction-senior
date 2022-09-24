/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.html'],
  theme: {
    extend: {
      fontSize: {
        '10xl': '224px',
      },
      animation: {
        'pulse-fast': 'pulse 0.2s linear infinite',
      },
    },
  },
  plugins: [],
};
