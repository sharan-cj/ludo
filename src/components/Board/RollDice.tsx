import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
  BsQuestionSquareFill,
} from "react-icons/bs";
import {
  diceRollValueAtom,
  playerTurnAtom,
  startAreaAtom,
  pawnMoveAtom,
  diceRollAtom,
  pawnsPositionAtom,
} from "~/state";
import { useAction, usePlayer, useSound } from "~/hooks";

const diceMovement: Record<number, string> = {
  1: `rotateX(90deg) translateZ(50px)`,
  2: `rotateX(180deg) translateZ(98px)`,
  3: `rotateX(-90deg) translateZ(50px)`,
  4: `rotateY(90deg) translateZ(50px)`,
  5: `rotateY(-90deg) translateZ(50px)`,
  6: ``,
};

export const RollDice = () => {
  const diceRef = useRef<HTMLDivElement | null>(null);
  const [diceRollValue, setDiceRollValue] = useAtom(diceRollValueAtom);
  const { playSound } = useSound("diceRolling.mp3");
  const { updatePlayerTurn } = useAction();
  const [currentTurn] = useAtom(playerTurnAtom);
  const [startArea] = useAtom(startAreaAtom);
  const [isWaitingToMove, setWaitingToMove] = useAtom(pawnMoveAtom);
  const [isWaitingForRoll, setWaitingForRoll] = useAtom(diceRollAtom);

  const pawnPosition = useAtomValue(pawnsPositionAtom);
  const [isLoading, setLoading] = useState(false);

  const { canPlayerMove } = usePlayer();

  const diceRollAnimation = async (value: number) => {
    if (!diceRef.current) return;
    diceRef.current.style.animation = "roll 1s linear 0s infinite";
    playSound();

    await new Promise((resolve) =>
      setTimeout(() => {
        if (!diceRef.current) return;
        diceRef.current.style.animation = "none";
        diceRef.current.style.transform = diceMovement[value];
        resolve(true);
      }, 800)
    );
  };

  const handleRollDice = async () => {
    if (isLoading || !isWaitingForRoll) return;

    try {
      setLoading(true);
      const diceRoll = Math.floor(Math.random() * 6) + 1;
      await diceRollAnimation(diceRoll);
      setDiceRollValue(diceRoll);

      if (canPlayerMove(diceRoll)) {
        setWaitingToMove(true);
        setWaitingForRoll(false);
      } else {
        updatePlayerTurn();
        setWaitingToMove(false);
        setWaitingForRoll(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="board-roll-dice cursor-pointer m-4"
      ref={diceRef}
      onClick={handleRollDice}
      role="button"
      style={{
        visibility: isWaitingForRoll ? "visible" : "hidden",
      }}
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
        {diceRollValue ? <BsFillDice6Fill /> : <BsQuestionSquareFill />}
      </div>
    </div>
  );
};
