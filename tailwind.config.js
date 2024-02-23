/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        phones: { max: "640px" },
        laptops:{max:"1024px"},
        pc:{min:"1440px"}
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "bgPat": "url('/src/assets/contactBg.svg')",
      },
//       fontSize:{
//   sm: "clamp(0.8rem, 0.06vw + 0.79rem, 0.89rem)",
// base: "clamp(1rem, 0.13vw + 0.97rem, 1.19rem)",
// lg: "clamp(1.25rem, 0.24vw + 1.2rem, 1.58rem)",
// xl: "clamp(1.56rem, 0.39vw + 1.48rem, 2.11rem)",

//       }
    },
  },
  plugins: [],
};