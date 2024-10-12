/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-desktop": { max: "1536px" }, // For screens 1536px and below
        "max-laptop": { max: "1280px" }, // For screens 1280px and below
        "max-laptop-sm": { max: "1024px" }, // For screens 1024px and below
        "max-tablet": { max: "768px" }, // For screens 768px and below
        "max-mobile": { max: "640px" }, // For screens 640px and below
        "max-small-mobile": { max: "375px" }, // For screens 375px and below
        "max-tiny": { max: "299px" }, // For screens less than 300px
      },
    },
  },
  plugins: [],
};
