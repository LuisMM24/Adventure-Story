import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/Button";
import Link from "next/link";
import LogoSVG from "@/assets/images/Logo.svg";

export default function Home() {
  return (
    <ContentContainer
      gapSpacing="gap-10"
      parentClassName="bg-main-background bg-cover bg-center"
    >
      <LogoSVG />
      <Link href="/stories">
        <Button> Start</Button>
      </Link>
    </ContentContainer>
  );
}
