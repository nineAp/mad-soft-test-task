import React, { useState, useEffect } from "react";
import "./timer.css";

interface ITimerProps {
  minutes: number;
}

function Timer({ minutes }: ITimerProps) {
  const initialTime = minutes * 60;
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const storedTime = sessionStorage.getItem("timer_time");
    if (storedTime) {
      setTime(parseInt(storedTime));
    }

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        } else {
          const newTime = prevTime - 1;
          sessionStorage.setItem("timer_time", newTime.toString());
          return newTime;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      sessionStorage.removeItem("timer_time");
    };
  }, [initialTime]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <h2>{formatTime(time)}</h2>
    </div>
  );
}

export default Timer;
