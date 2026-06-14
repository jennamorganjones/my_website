/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        nav: ["var(--font-nav)", "sans-serif"],
      },
      colors: {
        accent: "#6ECE98",
        nav: "#333333",
        text: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
