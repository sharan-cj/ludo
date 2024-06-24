import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const pawnsPositionAtom = atom({
  q1: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  },
  q2: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  },
  q3: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  },
  q4: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  },
});

export const startAreaAtom = atom({
  q1: ["q1-p1", "q1-p2", "q1-p3", "q1-p4"],
  q2: ["q2-p1", "q2-p2", "q2-p3", "q2-p4"],
  q3: ["q3-p1", "q3-p2", "q3-p3", "q3-p4"],
  q4: ["q4-p1", "q4-p2", "q4-p3", "q4-p4"],
});

const boxes: Record<number, string[]> = {};
new Array(72).fill("").forEach((_, i) => {
  boxes[i + 1] = [];
});
export const boardAtom = atom<Record<number, string[]>>(boxes);

export const playerTurnAtom = atom<"q1" | "q2" | "q3" | "q4">("q1");

export const diceRollAtom = atom(0);

export const waitingForMove = atom(false);

export const waitingForRoll = atom(true);

export const gameSoundAtom = atomWithStorage("gameSound", true);
