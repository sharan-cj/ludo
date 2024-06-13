import { Board, Navbar } from "~/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-background px-4 md:px-6 pt-[69px] grid place-items-center h-lvh">
        <Board />
      </div>
    </>
  );
}
