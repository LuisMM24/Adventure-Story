import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
            },
            boxShadow: {
                button: "0px 12px 0px 0px #C0C0C0",
            },
            fontSize: {
                title: "96px",
                headline: "32px",
                storyTitle: "36px",
            },
            margin: {
                "4px": "4px",
                "26px": "26px",
            },
            padding: {
                "12px": "12px",
                "72px": "72px",
            },
            borderRadius: {
                "20px": "20px",
                "40px": "40px",
            },
            backgroundImage: {
                button: "linear-gradient(230deg, rgba(154,154,154,1) 50%, rgba(169,169,169,1) 50%)",
            },
        },
    },
    plugins: [],
};
export default config;
