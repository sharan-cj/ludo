import { useAtomValue } from "jotai";
import sound from "use-sound";
import { gameSoundAtom } from "~/state";

type TSounds = "diceRolling.mp3" | "pop.wav";
export const useSound = (soundName: TSounds) => {
  const [play] = sound(`sounds/${soundName}`);
  const isMuted = useAtomValue(gameSoundAtom);

  const playSound = () => {
    if (!isMuted) {
      play();
    }
  };

  return { playSound };
};
