/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: { max: "839px" }, // Custom screen size for less than 840px
      },
      colors: {
        "money-green": "#0B4F2D",
        "wealth-gold": "#F4B400",
        "leaf-green": "#2E7D32",
        "ivory-white": "#FAF9F6",
        "tree-bark-dark": "#062925",
        "golden-sheen": "#FFCE00",
        "forest-green": "#14532D",
        "mint-gray": "#E5EFE6",
      },
    },
  },
  plugins: [],
};
