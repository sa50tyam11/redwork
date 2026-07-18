/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        disp: ['var(--font-disp)'],
        ui: ['var(--font-ui)'],
        mono: ['var(--font-mono)'],
      }
    },
  },
  corePlugins: {
    preflight: false, // Prevents tailwind from resetting base styles and messing up index.css
  },
  plugins: [],
}
