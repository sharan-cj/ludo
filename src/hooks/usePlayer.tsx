import { useAtomValue } from "jotai";
import { useCallback } from "react";
import { journey } from "~/config";
import { pawnsPositionAtom, playerTurnAtom } from "~/state";

export const usePlayer = () => {
  const playerTurn = useAtomValue(playerTurnAtom);
  const pawnsPosition = useAtomValue(pawnsPositionAtom);

  const canPlayerMove = useCallback(
    (dice: number) => {
      const playerPawns = Object.values(pawnsPosition[playerTurn]);

      const allInStartArea = playerPawns.every((boxId) => boxId === 0);

      if (allInStartArea) {
        return dice === 6;
      }

      const path = journey[playerTurn];

      playerPawns.some((boxId) => {
        const index = path.indexOf(boxId);
        return index + dice <= path.length;
      });
    },
    [playerTurn, pawnsPosition]
  );

  return {
    canPlayerMove,
  };
};
