import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";
import { diceRollAtom } from "~/state";
import useSound from "use-sound";

const diceMovement: Record<number, string> = {
  1: `rotateX(90deg) translateZ(50px)`,
  2: `rotateX(180deg) translateZ(98px)`,
  3: `rotateX(-90deg) translateZ(50px)`,
  4: `rotateY(90deg) translateZ(50px)`,
  5: `rotateY(-90deg) translateZ(50px)`,
  6: "",
};

export const RollDice = () => {
  const diceRef = useRef<HTMLDivElement | null>(null);
  const [diceRollValue, setDiceRollValue] = useAtom(diceRollAtom);

  const [play] = useSound("sound/diceRolling.mp3");

  useEffect(() => {
    if (!diceRef.current || !diceRollValue) return;

    diceRef.current.style.animation = "roll 1s linear 0s infinite";
    play();
    const timeout = setTimeout(() => {
      if (!diceRef.current) return;

      diceRef.current.style.animation = "none";
      diceRef.current.style.transform = diceMovement[diceRollValue];

      setDiceRollValue(0);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [diceRollValue]);

  const handleRollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);

    setDiceRollValue(diceRoll);
  };
  return (
    <div
      className="board-roll-dice cursor-pointer m-4 "
      ref={diceRef}
      onClick={handleRollDice}
      role="button"
    >
      <div className="origin-bottom" style={{ transform: "rotateX(90deg)" }}>
        <BsFillDice1Fill />
      </div>
      <div className="" style={{ transform: "translateZ(-98px)" }}>
        <BsFillDice2Fill />
      </div>
      <div className="origin-top" style={{ transform: "rotateX(-90deg)" }}>
        <BsFillDice3Fill />
      </div>
      <div className="origin-left" style={{ transform: "rotateY(90deg)" }}>
        <BsFillDice4Fill />
      </div>
      <div className="origin-right" style={{ transform: "rotateY(-90deg)" }}>
        <BsFillDice5Fill />
      </div>
      <div className="">
        <BsFillDice6Fill />
      </div>
    </div>
  );
};
