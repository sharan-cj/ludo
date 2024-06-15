"use client";

import "~/styles/board.css";
import Box from "./Box";
import { StartArea } from "./StartArea";
import { FinishArea } from "./FinishArea";
import { RollDice } from "./RollDice";
import { useAtom } from "jotai";
import { boardAtom } from "~/state";

export const Board = () => {
  const [board, setBoard] = useAtom(boardAtom);
  return (
    <div className="flex justify-center flex-wrap ">
      <div className="board-layout border-2 border-accent rounded-2xl">
        <StartArea />

        {Object.keys(board).map((boxId) => {
          return (
            <Box
              key={boxId}
              gridArea={`b${boxId}`}
              id={+boxId}
              pawns={board[+boxId]}
            />
          );
        })}

        <FinishArea />
      </div>
      <div className="flex items-center">
        <RollDice />
      </div>
    </div>
  );
};
