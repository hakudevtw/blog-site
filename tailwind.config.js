/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
