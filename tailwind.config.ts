import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "inner-rounded-button-primary": "0px 6px 0px 0px #43D309",
        "inner-rounded-button-secondary": "0px 6px 0px 0px #A17CFF",
        "inner-rounded-button-disabled": "0px 6px 0px 0px #5A5A5A",
        "inner-rounded-button-danger": "0px 6px 0px 0px #CC0F0",
        "inner-box": "0px 6px 0px 0px #C5AB6F",
      },
      height: {
        button: "48px",
        "inner-button": "36px",
      },
      fontSize: {
        title: "96px",
        headline: "32px",
        storyTitle: "36px",
        level: "48px",
      },
      backgroundImage: {
        "primary-button":
          "linear-gradient(230deg, rgba(103,235,0,1) 50%, rgba(166,242,8,1) 50%)",
        "secondary-button":
          "linear-gradient(230deg, rgba(103,235,0,1) 50%, rgba(166,242,8,1) 50%)",
        "main-background": "url('../assets/images/main-background.png')",
        "el-dorado-level-background":
          "url('../assets/images/story-levels/el-dorado-level-background.jpeg')",
        menu: "url('../assets/images/menu.png')",
        temple:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 75.52%), url('../assets/images/temple.png')",
        "blurry-temple": "url('../assets/images/blurry-temple.png')",
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
