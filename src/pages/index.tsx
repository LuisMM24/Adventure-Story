import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import LogoSVG from "@/assets/images/Logo.svg";
import { Loading } from "@/components/Loading";

export default function Home() {
  return (
    <ContentContainer parentClassName="bg-forest bg-cover bg-center">
      <LogoSVG />
      <Link href="/stories">
        <Button> Start</Button>
      </Link>
    </ContentContainer>
  );
}
