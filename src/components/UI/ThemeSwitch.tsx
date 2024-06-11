"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "~/hooks";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <button
          className="text-orange-600 p-2 rounded bg-slate-200 hover:bg-slate-300"
          onClick={() => setTheme("light")}
        >
          <FaSun />
        </button>
      ) : (
        <button
          className="text-white p-2 rounded bg-black hover:bg-slate-700"
          onClick={() => setTheme("dark")}
        >
          <FaMoon />
        </button>
      )}
    </div>
  );
};
