import React, {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
  useEffect,
} from "react";
import { BackgroundAudioReducerAction } from "@/utils/@types";

const initialState = null;

const BackgroundAudioContext = createContext<
  | {
      audio: HTMLAudioElement | null;
      dispatch: React.Dispatch<BackgroundAudioReducerAction>;
    }
  | undefined
>(undefined);

const backgroundAudioReducer = (
  state: HTMLAudioElement | null,
  action: BackgroundAudioReducerAction
): HTMLAudioElement | null => {
  switch (action.type) {
    case "SET_AUDIO":
      if (state) {
        state.pause();
      }
      return new Audio(action.url);
    default:
      return state;
  }
};

const BackgroundAudioProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [audio, dispatch] = useReducer(backgroundAudioReducer, initialState);

  useEffect(() => {
    if (audio) {
      audio.play();
      audio.loop;
    }
  }, [audio]);

  return (
    <BackgroundAudioContext.Provider value={{ audio, dispatch: dispatch }}>
      {children}
    </BackgroundAudioContext.Provider>
  );
};

const useBackgroundAudioContext = () => {
  const context = useContext(BackgroundAudioContext);
  if (context === undefined) {
    throw new Error(
      "useBackgroundAudio must be used within the BackgroundAudioProvider"
    );
  }
  return context;
};

export { BackgroundAudioProvider, useBackgroundAudioContext };
