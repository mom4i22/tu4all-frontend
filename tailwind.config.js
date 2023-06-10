/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
     screens: {
        sm: '960px',
        md: '1280px',
        lg: '1920px',
        xl: '2240px',
      },
  extend:{
        colors: {
           customBlue: '#0B3E5D',
           customNavy: '#081E26',
           customRed: '#94342D',
           customCream: '#E5DEE2',
           customBeige: '#D3CAC9',
         },
         }
  },
  plugins: [],
  important: true,
}

