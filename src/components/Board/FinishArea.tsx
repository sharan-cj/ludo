export const FinishArea = () => {
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
