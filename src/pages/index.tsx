import ContentContainer from "@/components/ContentContainer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="text-center">
            <h2 className="text-primary text-headline  font-normal mb-4px font-Poppins">Welcome to your</h2>
            <h1 className="text-primary text-title leading-none  font-medium mb-26px font-Digitalt">
                Adventure
                <br />
                Story
            </h1>

            <Link href="/stories">
                <button className="bg-secondary px-72px py-12px rounded-20px text-xl shadow-button outline outline-white outline-2 bg-button text-white">Start</button>
            </Link>
        </div>
    );
}
