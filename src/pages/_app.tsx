import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Poppins, Manrope } from "next/font/google";
import ContentContainer from "@/components/ContentContainer";
import { UserProvider } from "@/context/userReducer";

const digitalt = localFont({ src: "../fonts/Digitalt.ttf", variable: "--font-digitalt" });
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <ContentContainer>
                <main className={`${poppins.variable} ${digitalt.variable} ${manrope.variable}`}>
                    <Component {...pageProps} />
                </main>
            </ContentContainer>
        </UserProvider>
    );
}
