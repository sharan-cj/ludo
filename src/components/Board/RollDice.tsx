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
import {
  diceRollAtom,
  playerTurnAtom,
  startAreaAtom,
  waitingForMove,
  waitingForRoll,
} from "~/state";
import { useAction, useSound } from "~/hooks";

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
  const { playSound } = useSound("diceRolling.mp3");
  const { updatePlayerTurn } = useAction();
  const [currentTurn] = useAtom(playerTurnAtom);
  const [startArea] = useAtom(startAreaAtom);
  const [isWaitingForMove, setWaitingForMove] = useAtom(waitingForMove);
  const [isWaitingForRoll, setWaitingForRoll] = useAtom(waitingForRoll);

  useEffect(() => {
    if (!diceRef.current || isWaitingForRoll || !diceRollValue) return;

    diceRef.current.style.animation = "roll 1s linear 0s infinite";
    playSound();
    const timeout = setTimeout(() => {
      if (!diceRef.current) return;

      diceRef.current.style.animation = "none";
      diceRef.current.style.transform = diceMovement[diceRollValue];

      setWaitingForMove(true);
      setWaitingForRoll(true);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [diceRollValue, isWaitingForRoll]);

  const handleRollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    setDiceRollValue(diceRoll);

    if (startArea[currentTurn].length === 4) {
      updatePlayerTurn();
    }

    setWaitingForRoll(false);
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
