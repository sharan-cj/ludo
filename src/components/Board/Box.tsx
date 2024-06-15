import { QtrInsidePath, QtrToColor, Stars, StartPoints, cn } from "~/utils";
import { FaRegStar } from "react-icons/fa6";
import { memo } from "react";
import { LuMapPin } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
type TBoxProps = {
  gridArea: string;
  id: number;
  pawns: string[];
};
const Box = ({ gridArea, id, pawns }: TBoxProps) => {
  const qtr = StartPoints[id] || QtrInsidePath[id];
  const bg = qtr && `bg-[var(--${QtrToColor[qtr]})]`;
  const starBoxQtr = Stars[id];

  return (
    <div className={cn("board-box", bg)} style={{ gridArea }}>
      <span className="text-transparent">&nbsp; .</span>

      {pawns.map((pawn, index) => {
        const [qtr] = pawn.split("-");
        const isSinglePawn = pawns.length === 1;
        return (
          <div
            className={"absolute grid place-items-center"}
            key={pawn}
            style={{
              color: `var(--${QtrToColor[qtr]}-dark)`,
              top: `${index * 10}px`,
              left: `${index * 10}px`,
              ...(isSinglePawn && { bottom: "0", right: "0" }),
            }}
          >
            <MdLocationPin size={isSinglePawn ? `3em` : "2em"} />
          </div>
        );
      })}

      {starBoxQtr && (
        <div className="board-box-star">
          <FaRegStar />
        </div>
      )}
    </div>
  );
};

export default memo(Box);
