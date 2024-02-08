/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFD700",
          50: "#FFFFE0",
          100: "#FFFACD",
          200: "#EEE8AA",
          300: "#FFD700",
          400: "#ffd400",
          500: "#f7b801",
        },
      },
    },
  },
  plugins: [],
};
