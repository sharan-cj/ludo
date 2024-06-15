import { atom } from "jotai";

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

const boxes: Record<number, number[]> = {};
new Array(72).fill("").forEach((_, i) => {
  boxes[i + 1] = [];
});
export const boardAtom = atom<Record<number, number[]>>(boxes);

export const playerTurnAtom = atom<"q1" | "q2" | "q3" | "q4">("q1");

export const diceRollAtom = atom(0);
