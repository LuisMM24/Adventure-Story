import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";
import { Loading } from "@/components/Loading";

export default function Home() {
  return (
    <ContentContainer parentClassName="bg-forest bg-cover bg-center">
      <div className="flex items-center flex-col justify-center gap-[40px] h-full">
        <Image src={Logo} alt="logo" width={555} height={244} />
        <Link href="/stories">
          <Button> Start</Button>
        </Link>
      </div>
    </ContentContainer>
  );
}
