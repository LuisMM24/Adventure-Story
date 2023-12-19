import { useEffect, useState } from "react";

export const useAudio = (audioUrl: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio(audioUrl));
  }, [audioUrl]);

  return audio;
};
