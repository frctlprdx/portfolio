/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxyDark: "#0d0d2b",
        galaxyLight: "#1a1a40",
        galaxyText: "#6B54A2",
      },
      keyframes: {
        "lexus-sign": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "border-run": {
          "0%": { boxShadow: "0px 0px 5px 2px #8B5CF6" },
          "25%": { boxShadow: "5px 0px 10px 2px #8B5CF6" },
          "50%": { boxShadow: "0px 5px 10px 2px #8B5CF6" },
          "75%": { boxShadow: "-5px 0px 10px 2px #8B5CF6" },
          "100%": { boxShadow: "0px 0px 5px 2px #8B5CF6" },
        },
      },
      animation: {
        "lexus-sign": "lexus-sign 1s linear infinite",
        "border-run": "border-run 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
