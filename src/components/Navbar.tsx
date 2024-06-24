import { BsDice3, BsDice6Fill } from "react-icons/bs";
import { ThemeSwitch, GameSound, ProgressBar } from "~/components";
export const Navbar = () => {
  return (
    <div className="bg-nav-bg p-4 md:px-6 border-b-2 fixed backdrop-blur-md left-0 right-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-tiny5">Ludo</h1>
          <span className="text-3xl text-primary mx-2">
            <BsDice3 />
          </span>
          <span className="text-3xl text-secondary">
            <BsDice6Fill />
          </span>
        </div>

        <div className="flex items-center gap-4">
          <GameSound />
          <ThemeSwitch />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ProgressBar />
      </div>
    </div>
  );
};
