import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["var(--font-poppins)"],
      Digitalt: ["var(--font-digitalt)"],
      Manrope: ["var(--font-manrope)"],
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#A9A9A9",
        lightGray: "#D9D9D9",
        "text-orange": "#F7AC1E",
      },
      boxShadow: {
        button: "0px 2px 0px 0px rgba(0, 0, 0, 0.15)",
        "inner-button": "0px 6px 0px 0px #4EC307",
      },
      width: {
        button: "92px",
        "inner-button": "86px",
      },
      height: {
        button: "48px",
        "inner-button": "36px",
      },
      fontSize: {
        title: "96px",
        headline: "32px",
        storyTitle: "36px",
      },
      backgroundImage: {
        button:
          "linear-gradient(230deg, rgba(103,235,0,1) 50%, rgba(166,242,8,1) 50%)",
        forest: "url('../assets/images/forest.png')",
        menu: "url('../assets/images/menu.png')",
        temple:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/temple.png')",
        boat: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/boat.png')",
        "wild-west":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/wild-west.png')",
        "wild-space":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/wild-space.png')",
        village:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/village.png')",
        viking:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/viking.png')",
      },
    },
  },
  plugins: [],
};
export default config;
