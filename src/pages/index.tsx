import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/Button";
import Link from "next/link";
import LogoSVG from "@/assets/images/Logo.svg";
import { useBackgroundAudioContext } from "@/context/backgroundAudioReducer";

const audioUrl = "audio/intro.mp3";

export default function Home() {
  const backgroundAudioContext = useBackgroundAudioContext();

  const handleStartSong = () => {
    backgroundAudioContext.dispatch({ type: "SET_AUDIO", url: audioUrl });
  };

  return (
    <ContentContainer parentClassName="bg-forest bg-cover bg-center">
      <LogoSVG />
      <Link href="/stories">
        <Button onClick={handleStartSong}> Start</Button>
      </Link>
    </ContentContainer>
  );
}
