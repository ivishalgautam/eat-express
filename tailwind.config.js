/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: "#fafafa",
        "gray-dark": "#111111",
        "gray-light": "#777777",
        "gray-lighter": "#949494",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
