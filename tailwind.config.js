const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    extend: {
      colors: {
        custom: {
          light: '#F3F4F6',     // Light gray for background
          dark: '#1F2937',      // Deep slate gray for dark elements
          white: '#FFFFFF',     // Pure white
          blue: '#015d9d',      // Deep blue from the logo
          teal: '#14B8A6',      // Balanced teal for accents
          green: '#01b26c',     // Vibrant green from the logo
          mint: '#D1FAE5',      // Soft mint for light backgrounds
      },
    },
  },
   // Overriding fontFamily to use @next/font loaded families
   fontFamily: {
    mono: 'var(--font-mono)',
    sans: 'var(--font-sans)',
    serif: 'var(--font-serif)',
    robo: 'var(--font-roboto)',
  },
  },
  
  plugins: [require('@tailwindcss/typography')],
}
