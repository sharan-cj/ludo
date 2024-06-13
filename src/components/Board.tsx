"use client";

import { FaChessPawn, FaStar } from "react-icons/fa6";
import "~/styles/board.css";
import { QtrInsidePath, QtrToColor, Stars, StartPoints, cn } from "~/utils";
export const Board = () => {
  return (
    <div className="flex justify-center">
      <div className="board-layout border-2 border-accent">
        <StartArea />

        {new Array(72).fill("").map((_, i) => {
          const id = i + 1;
          return <Box key={id} gridArea={`b${id}`} id={id} />;
        })}

        <FinishArea />
      </div>
    </div>
  );
};

type TBoxProps = {
  gridArea: string;
  id: number;
};
const Box = ({ gridArea, id }: TBoxProps) => {
  const qtr = StartPoints[id] || QtrInsidePath[id];
  const bg = qtr && `bg-[var(--${QtrToColor[qtr]})]`;
  const starBoxQtr = Stars[id];
  const color = starBoxQtr && `var(--${QtrToColor[starBoxQtr]})`;

  return (
    <div className={cn("board-box", bg)} style={{ gridArea }}>
      <span className="text-transparent">&nbsp; .</span>
      {starBoxQtr && (
        <div className="board-box-star" style={{ color }}>
          <FaStar />
        </div>
      )}
    </div>
  );
};

type TStartAreaPawnsProps = {
  color: string;
  count: number;
};
const StartAreaPawns = ({ color, count }: TStartAreaPawnsProps) => {
  return (
    <div className="board-start-area text-sm md:text-3xl" style={{ color }}>
      {new Array(count).fill("").map((_, i) => (
        <FaChessPawn key={i} />
      ))}
    </div>
  );
};

const StartArea = () => {
  return (
    <>
      <div
        style={{ gridArea: "q1" }}
        className="bg-[var(--blue)] grid place-items-center border-t-2 border-r-2 border-accent"
      >
        <StartAreaPawns color="var(--blue)" count={4} />
      </div>
      <div
        style={{ gridArea: "q2" }}
        className="bg-[var(--red)] grid place-items-center border-b-2 border-r-2 border-accent"
      >
        <StartAreaPawns color="var(--red)" count={4} />
      </div>
      <div
        style={{ gridArea: "q3" }}
        className="bg-[var(--green)] grid place-items-center border-l-2 border-b-2 border-accent"
      >
        <StartAreaPawns color="var(--green)" count={4} />
      </div>
      <div
        style={{ gridArea: "q4" }}
        className=" bg-[var(--yellow)] grid place-items-center border-t-2 border-l-2 border-accent"
      >
        <StartAreaPawns color="var(--yellow)" count={4} />
      </div>
    </>
  );
};

const FinishArea = () => {
  return (
    <>
      <div style={{ gridArea: "f0" }} className="board-finish-f0" />
      <div style={{ gridArea: "f23" }} className="board-finish-f23" />
      <div style={{ gridArea: "f34" }} className="board-finish-f34" />
      <div style={{ gridArea: "f12" }} className="board-finish-f12" />
      <div style={{ gridArea: "f14" }} className="board-finish-f14" />

      <div style={{ gridArea: "f1" }} className="bg-[var(--blue)]"></div>
      <div style={{ gridArea: "f2" }} className="bg-[var(--red)]"></div>
      <div style={{ gridArea: "f3" }} className="bg-[var(--green)]"></div>
      <div style={{ gridArea: "f4" }} className="bg-[var(--yellow)]"></div>
    </>
  );
};
