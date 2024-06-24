"use client";

import { useAtom } from "jotai";
import React from "react";
import { gameSoundAtom } from "~/state";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import useSound from "use-sound";

export const GameSound = () => {
  const [isMuted, setMuted] = useAtom(gameSoundAtom);

  const [playPopSound] = useSound("sounds/pop.wav");

  const handleClick = () => {
    if (isMuted) playPopSound();
    setMuted((prev) => !prev);
  };

  return (
    <div
      className="text-accent cursor-pointer hover:scale-105 text-2xl"
      onClick={handleClick}
      role="button"
    >
      {isMuted ? <IoVolumeMuteOutline /> : <IoVolumeMediumOutline />}
    </div>
  );
};
