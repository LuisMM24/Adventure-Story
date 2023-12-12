import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                secondary: "#A9A9A9",
            },
            boxShadow: {
                button: "0px 4px 0px 0px #C0C0C0",
            },
            fontSize: {
                title: "96px",
                headline: "32px",
            },
            margin: {
                "4px": "4px",
                "26px": "26px",
            },
        },
    },
    plugins: [],
};
export default config;
