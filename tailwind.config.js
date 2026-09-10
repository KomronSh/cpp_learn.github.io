/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cpp: {
          blue: '#00599C',
          darkBlue: '#004482',
          lightBlue: '#659AD2',
        }
      }
    },
  },
  plugins: [],
}
