/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        green: {
          500: '#00FF00',
        },
        blue: {
          500: '#0000FF',
        },
        red: {
          500: '#F40107',
        },
        purple: {
          500: '#9E00FF',
        },
        yellow: {
          500: '#FFFF00',
        },
        orange: {
          500: '#FFA500',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(purple|green|blue|red|yellow|orange)-500/,
    },
    'hover:bg-transparent',
    'hover:text-blue-500',
    'hover:text-yellow-500',
    'hover:text-orange-500',
    'hover:text-red-500',
    'hover:text-green-500',
  ],
}
