export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
      colors: {
        fire: "#FF3D00",
        fire2: "#FF8C00",
        dark: "#0A0A0A",
        dark2: "#111111",
        grayFit: "#1C1C1C",
      },
      boxShadow: {
        fire: "0 0 45px rgba(255, 61, 0, .25)",
        fireStrong: "0 0 80px rgba(255, 61, 0, .35)",
      },
      clipPath: {
        cut: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
      }
    },
  },
  plugins: [],
};
