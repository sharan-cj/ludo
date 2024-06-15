import { FaChessPawn } from "react-icons/fa6";

export const StartArea = () => {
  return (
    <>
      <div
        style={{ gridArea: "q1" }}
        className="bg-[var(--blue)] grid place-items-center border-t-2 border-r-2 border-accent rounded-bl-[14px]"
      >
        <StartAreaPawns color="var(--blue)" count={4} />
      </div>
      <div
        style={{ gridArea: "q2" }}
        className="bg-[var(--red)] grid place-items-center border-b-2 border-r-2 border-accent rounded-tl-[14px]"
      >
        <StartAreaPawns color="var(--red)" count={4} />
      </div>
      <div
        style={{ gridArea: "q3" }}
        className="bg-[var(--green)] grid place-items-center border-l-2 border-b-2 border-accent rounded-tr-[14px]"
      >
        <StartAreaPawns color="var(--green)" count={4} />
      </div>
      <div
        style={{ gridArea: "q4" }}
        className=" bg-[var(--yellow)] grid place-items-center border-t-2 border-l-2 border-accent rounded-br-[14px]"
      >
        <StartAreaPawns color="var(--yellow)" count={4} />
      </div>
    </>
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
