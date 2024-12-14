/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        lightBrown: "#9E7C5F",
        darkBrown: "#6f5840",
        lightGreen: "#91a287",
        darkGreen: "#658c5e",
        beige: "#fff0d6",
        darkBg: "#303030",
        pastelRed: "#EB8E91",
        unselectedGray: "#fcf3e3",
      }
    },
  },
  plugins: [],
};