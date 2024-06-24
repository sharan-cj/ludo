"use client";

import { useTimer } from "~/hooks";

export const ProgressBar = () => {
  const { time } = useTimer();

  const progress = time * 2;
  return (
    <div
      style={{ width: `${progress}%` }}
      className="border-b-4 border-primary transition-[width] duration-1000"
    ></div>
  );
};
