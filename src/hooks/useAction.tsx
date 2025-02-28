import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import { journey } from "~/config";
import {
  boardAtom,
  diceRollAtom,
  diceRollValueAtom,
  pawnMoveAtom,
  playerTurnAtom,
  startAreaAtom,
} from "~/state";

export const useAction = () => {
  const [currentTurn, setPlayerTurn] = useAtom(playerTurnAtom);
  const diceRoll = useAtomValue(diceRollValueAtom);
  const [isWaitingToMove, setWaitingToMove] = useAtom(pawnMoveAtom);
  const [isWaitingForRoll, setWaitingForRoll] = useAtom(diceRollAtom);
  const startArea = useAtomValue(startAreaAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const updatePlayerTurn = () => {
    if (diceRoll === 6) {
      return;
    }

    if (currentTurn === "q1") {
      setPlayerTurn("q2");
    } else if (currentTurn === "q2") {
      setPlayerTurn("q3");
    } else if (currentTurn === "q3") {
      setPlayerTurn("q4");
    } else if (currentTurn === "q4") {
      setPlayerTurn("q1");
    }
  };

  const movePawn = useCallback(
    (pawn: string, boxId: number) => {
      const path = journey[currentTurn];

      const currentPosition = path.indexOf(boxId) + 1;

      const nextPositionIndex = currentPosition + diceRoll - 1;
      const nextPosition = path[nextPositionIndex];

      setBoard((prev) => {
        return {
          ...prev,
          [boxId]: prev[boxId].filter((p) => p !== pawn),
          [nextPosition]: [...prev[nextPosition], pawn],
        };
      });

      updatePlayerTurn();
    },
    [currentTurn, diceRoll]
  );

  return { updatePlayerTurn, movePawn };
};
