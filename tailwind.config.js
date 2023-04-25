/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8FAFB",
        secondary: "#DADFE7",
        "ternary-light": "#6B768A",
        "ternary-dark": "#202732",
      },
    },
  },
  plugins: [],
};
