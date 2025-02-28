import { useCallback, useEffect, useState } from "react";

const TIME_OUT = 50; // 50 seconds
export const useTimer = () => {
  const [time, setTimer] = useState(TIME_OUT);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    if (timeUp) return;

    if (time === 0) {
      setTimeUp(true);
    }
    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  const resetTimer = useCallback(() => {
    setTimer(TIME_OUT);
    setTimeUp(false);
  }, []);

  return {
    resetTimer,
    time,
    timeUp,
  };
};
