/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveLeftRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
        },
        colorChange: {
          "0%, 100%": { color: "#17a2b8" }, // black
          "25%": { color: "#dc3545" }, // red
          "50%": { color: "#ffc107" }, // green
          "75%": { color: "#17a2b8" }, // blue
        },
      },
      animation: {
        moveLeftRight: "moveLeftRight 5s infinite",
        colorChange: "colorChange 5s infinite",
      },
    },
  },
  plugins: [],
};
