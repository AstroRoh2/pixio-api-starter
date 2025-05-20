/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#2A7C76', // Teal for the background
        foreground: '#333333', // Dark text so we can read easily
        cardBg: '#FFF9E6', // Cream color for cards
        primary: '#F5A623', // Yellow like Quilly’s name
        secondary: '#F28C38', // Orange like the feather
        accent: '#F06292', // Pink like the feather dots
      },
      fontFamily: {
        comic: ['Comic Neue', 'sans-serif'], // Our fun font for kids
      },
      borderRadius: {
        DEFAULT: '1rem', // Nice round corners for everything
      },
    },
  },
  plugins: [],
};