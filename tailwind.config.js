/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/landing-page/index.html",
    "./views/dashboard/index.html",
    "./views/favorites/index.html",
    "./views/login/index.html",
    "./views/saved/index.html",
    "./views/sign-up/index.html",
    "./views/add/index.html",
    "./views/update/index.html",
    "./src/js/script.js",
  ],
  darkMode: "class",
  theme: {
    // container: {
    //   center: true,
    //   padding: "16px",
    // },
    screens: {
      screen: "1280px",
      laptop: "1024px",
      tabletlg: "840px",
      tablet: "640px",
      mobile: "480px",
    },
    extend: {
      colors: {
        main: "#4F46E5",
        dark: "#27272A",
        dimmed: "#E1E1E1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
