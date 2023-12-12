import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const digitalt = localFont({ src: "../fonts/Digitalt.ttf", variable: "--font-digitalt" });
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${poppins.variable} ${digitalt.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
