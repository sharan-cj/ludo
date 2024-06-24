import { QtrInsidePath, QtrToColor, Stars, StartPoints, cn } from "~/utils";
import { FaRegStar } from "react-icons/fa6";
import { memo, useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { useAtom, useAtomValue } from "jotai";
import { diceRollAtom, playerTurnAtom, waitingForMove } from "~/state";
import { useAction } from "~/hooks";
type TBoxProps = {
  gridArea: string;
  id: number;
  pawns: string[];
};
const Box = ({ gridArea, id, pawns }: TBoxProps) => {
  const qtr = StartPoints[id] || QtrInsidePath[id];
  const bg = qtr && `bg-[var(--${QtrToColor[qtr]})]`;
  const starBoxQtr = Stars[id];

  const [isWaitingForMove, setWaitingForMove] = useAtom(waitingForMove);
  const player = useAtomValue(playerTurnAtom);
  const { movePawn } = useAction();
  const isHighlighted =
    isWaitingForMove && pawns.some((pawn) => pawn.split("-")[0] === player);

  const boxShadow = isHighlighted ? "inset 0 0 6px 4px var(--accent)" : "";

  const handleClick = () => {
    if (!isHighlighted) return;
    movePawn(pawns.find((pawn) => pawn.split("-")[0] === player) as string, id);
  };

  return (
    <div
      className={cn("board-box", bg)}
      style={{
        gridArea,
        boxShadow,
        cursor: isHighlighted ? "pointer" : "auto",
      }}
      role="button"
      onClick={handleClick}
    >
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
