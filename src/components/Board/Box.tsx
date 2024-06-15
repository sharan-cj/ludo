import { QtrInsidePath, QtrToColor, Stars, StartPoints, cn } from "~/utils";
import { FaRegStar } from "react-icons/fa6";
type TBoxProps = {
  gridArea: string;
  id: number;
};
export const Box = ({ gridArea, id }: TBoxProps) => {
  const qtr = StartPoints[id] || QtrInsidePath[id];
  const bg = qtr && `bg-[var(--${QtrToColor[qtr]})]`;
  const starBoxQtr = Stars[id];

  return (
    <div className={cn("board-box", bg)} style={{ gridArea }}>
      <span className="text-transparent">&nbsp; .</span>
      {starBoxQtr && (
        <div className="board-box-star">
          <FaRegStar />
        </div>
      )}
    </div>
  );
};
