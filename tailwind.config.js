/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          "primary-light": "#F7F6F3",
          "primary-dark": "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
