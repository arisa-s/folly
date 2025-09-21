/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Sneaky Times', 'serif'],
        'secondary': ['Satoshi Bold', 'sans-serif'],
        'accent': ['Folly Satoshi', 'sans-serif'],
      },
      colors: {
        'folly': {
          'white': '#fefaf2',
          'red': '#60202e',
          'blue': '#69acc2',
          'yellow': '#cab63c',
        },
      },
    },
  },
  plugins: [],
}
