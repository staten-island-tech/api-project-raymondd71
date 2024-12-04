/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "JS/main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-800": { max: "800px" },
        "max-550": { max: "550px" },
      },
    },
  },
  plugins: [require("daisyui")],
};
