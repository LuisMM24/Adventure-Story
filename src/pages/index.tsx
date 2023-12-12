import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <ContentContainer>
      <div className="text-center">
        <h2 className="text-primary text-headline  font-normal mb-4px font-Poppins">
          Welcome to your
        </h2>
        <h1 className="text-primary text-title leading-none  font-medium mb-26px font-Digitalt">
          Adventure
          <br />
          Story
        </h1>

        <Link href="/stories">
          <Button>Start</Button>
        </Link>
      </div>
    </ContentContainer>
  );
}
