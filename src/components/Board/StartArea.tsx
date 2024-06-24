import { useAtom, useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { FaChessPawn } from "react-icons/fa6";
import {
  boardAtom,
  diceRollAtom,
  playerTurnAtom,
  startAreaAtom,
} from "~/state";
import { QtrToColor, QtrToStartPoint } from "~/utils";

export const StartArea = () => {
  const player = useAtomValue(playerTurnAtom);

  return (
    <>
      <div
        style={{
          gridArea: "q1",
          border: player === "q1" ? "4px dashed var(--accent)" : "",
        }}
        className="bg-[var(--blue)] grid place-items-center border-t-2 border-r-2 border-accent rounded-bl-[14px]"
      >
        <StartAreaPawns qtr="q1" />
      </div>
      <div
        style={{
          gridArea: "q2",
          border: player === "q2" ? "4px dashed var(--accent)" : "",
        }}
        className="bg-[var(--red)] grid place-items-center border-b-2 border-r-2 border-accent rounded-tl-[14px]"
      >
        <StartAreaPawns qtr="q2" />
      </div>
      <div
        style={{
          gridArea: "q3",
          border: player === "q3" ? "4px dashed var(--accent)" : "",
        }}
        className="bg-[var(--green)] grid place-items-center border-l-2 border-b-2 border-accent rounded-tr-[14px]"
      >
        <StartAreaPawns qtr="q3" />
      </div>
      <div
        style={{
          gridArea: "q4",
          border: player === "q4" ? "4px dashed var(--accent)" : "",
        }}
        className=" bg-[var(--yellow)] grid place-items-center border-t-2 border-l-2 border-accent rounded-br-[14px]"
      >
        <StartAreaPawns qtr="q4" />
      </div>
    </>
  );
};

type TStartAreaPawnsProps = {
  qtr: "q1" | "q2" | "q3" | "q4";
};
const StartAreaPawns = ({ qtr }: TStartAreaPawnsProps) => {
  const color = `var(--${QtrToColor[qtr]})`;
  const [_, setBoard] = useAtom(boardAtom);
  const [startAreaPawns, setStartAreaPawns] = useAtom(startAreaAtom);
  const player = useAtomValue(playerTurnAtom);
  const diceRoll = useAtomValue(diceRollAtom);
  const isSelectionActive =
    diceRoll === 6 && player === qtr && startAreaPawns[qtr].length > 0;

  const boxShadow = isSelectionActive ? `inset 0 0 6px 4px var(--accent)` : "";

  const handlePawnClick = () => {
    if (!isSelectionActive) return;
    const pawn = startAreaPawns[qtr][0];
    const boxId = QtrToStartPoint[qtr];
    setBoard((board) => {
      return {
        ...board,
        [boxId]: [...board[boxId], pawn],
      };
    });

    setStartAreaPawns((startAreaPawns) => {
      return {
        ...startAreaPawns,
        [qtr]: startAreaPawns[qtr].filter((p) => p !== pawn),
      };
    });
  };
  return (
    <div
      className="board-start-area text-sm md:text-3xl"
      style={{ color, boxShadow }}
      onClick={handlePawnClick}
      role="button"
    >
      {startAreaPawns[qtr].map((pawn) => (
        <FaChessPawn key={pawn} />
      ))}
    </div>
  );
};
