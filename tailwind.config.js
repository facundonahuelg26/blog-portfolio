
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        globalNavBg: "#161C22",
        globalBg: "#0D1117",
        htmlText: "#E34C26",
        jsText: "#F1E05A",
        reactText: "#61DAFB",
        textGlobalLight: "#21262D",
        textGlobalDark: "#C1D1D9",
        greenColor: "#238636",
        greenLight: "#3fea61",
        titleBlog: "#292929",
        contentBlog: "#757575",
        blackRgba: "rgba(0, 0, 0, 0.5)",
      },
      gridTemplateColumns: {
        gridCards: "repeat(auto-fit, minmax(288px, 1fr))",
        gridBlog: "1fr, 1030px,2fr",
        gridBlogXl: "1fr",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
