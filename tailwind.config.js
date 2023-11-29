/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#9A4523",
          "primary-content": "#FFFFFF",
          secondary: "##825500",
          "secondary-content": "#FFFFFF",
          "base-100": "#F8EBE7",
        },
        dark: {
          primary: "#FFB59A",
          "primary-content": "#5B1B00",
          secondary: "#FFB950",
          "secondary-content": "#452B00",
          "base-100": "#3B3331",
        },
      },
    ],
  },
};
