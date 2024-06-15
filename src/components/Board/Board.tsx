"use client";

import "~/styles/board.css";
import { Box } from "./Box";
import { StartArea } from "./StartArea";
import { FinishArea } from "./FinishArea";
import { RollDice } from "./RollDice";

export const Board = () => {
  return (
    <div className="flex justify-center flex-wrap ">
      <div className="board-layout border-2 border-accent rounded-2xl">
        <StartArea />

        {new Array(72).fill("").map((_, i) => {
          const id = i + 1;
          return <Box key={id} gridArea={`b${id}`} id={id} />;
        })}

        <FinishArea />
      </div>
      <div className="flex items-center">
        <RollDice />
      </div>
    </div>
  );
};
