/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ["Great Vibes", "cursive"],
        raleway: ["Raleway", "system-ui"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        extraBold: 900,
      },
    },
  },
  plugins: [],
};
