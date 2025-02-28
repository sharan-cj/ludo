"use client";

import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useTimer } from "~/hooks";
import { pawnMoveAtom, diceRollAtom, playerTurnAtom } from "~/state";

export const ProgressBar = () => {
  const { time, resetTimer } = useTimer();

  const isWaitingForRoll = useAtomValue(diceRollAtom);
  const isWaitingToMove = useAtomValue(pawnMoveAtom);
  const playerTurn = useAtomValue(playerTurnAtom);

  useEffect(() => {
    resetTimer();
  }, [isWaitingForRoll, isWaitingToMove, playerTurn]);

  const progress = time * 2;
  return (
    <div
      style={{ width: `${progress}%` }}
      className="border-b-4 border-primary transition-[width] duration-1000"
    ></div>
  );
};
