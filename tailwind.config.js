/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C2127",
        divider: "rgba(167, 177, 188, 0.16)",
        "text-col-1": "rgba(167, 177, 188, 1)",
        "btn-tab": "rgba(18, 23, 29, 1)",
        "paper": "#20252B",
        "border-2": "rgba(38, 41, 50, 1)",
        profit: "#00C076",
        loss: "#FF6838"
      }
    },
  },
  plugins: [],
}

