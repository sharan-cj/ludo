import { useAtom } from "jotai";
import React from "react";
import { FaChessPawn } from "react-icons/fa6";
import { boardAtom, startAreaAtom } from "~/state";
import { QtrToColor, QtrToStartPoint } from "~/utils";

export const StartArea = () => {
  return (
    <>
      <div
        style={{ gridArea: "q1" }}
        className="bg-[var(--blue)] grid place-items-center border-t-2 border-r-2 border-accent rounded-bl-[14px]"
      >
        <StartAreaPawns qtr="q1" count={4} />
      </div>
      <div
        style={{ gridArea: "q2" }}
        className="bg-[var(--red)] grid place-items-center border-b-2 border-r-2 border-accent rounded-tl-[14px]"
      >
        <StartAreaPawns qtr="q2" count={4} />
      </div>
      <div
        style={{ gridArea: "q3" }}
        className="bg-[var(--green)] grid place-items-center border-l-2 border-b-2 border-accent rounded-tr-[14px]"
      >
        <StartAreaPawns qtr="q3" count={4} />
      </div>
      <div
        style={{ gridArea: "q4" }}
        className=" bg-[var(--yellow)] grid place-items-center border-t-2 border-l-2 border-accent rounded-br-[14px]"
      >
        <StartAreaPawns qtr="q4" count={4} />
      </div>
    </>
  );
};

type TStartAreaPawnsProps = {
  qtr: "q1" | "q2" | "q3" | "q4";
  count: number;
};
const StartAreaPawns = ({ qtr, count }: TStartAreaPawnsProps) => {
  const color = `var(--${QtrToColor[qtr]})`;
  const [_, setBoard] = useAtom(boardAtom);
  const [startAreaPawns, setStartAreaPawns] = useAtom(startAreaAtom);
  const handlePawnClick = (pawn: string) => {
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
    <div className="board-start-area text-sm md:text-3xl" style={{ color }}>
      {startAreaPawns[qtr].map((pawn) => (
        <FaChessPawn
          key={pawn}
          role="button"
          onClick={() => handlePawnClick(pawn)}
        />
      ))}
    </div>
  );
};
