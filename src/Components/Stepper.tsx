import React from "react";
import "./stepper.css";

interface IStepperProps {
  questions_size: number;
  currentIndex: number;
}

function Stepper({ questions_size, currentIndex }: IStepperProps) {
  const items = Array.from({ length: questions_size }).map((_, i) => i);
  const activeItems = Array.from({ length: currentIndex + 1 }).map((_, i) => i);
  console.log(items);
  console.log(activeItems);
  return (
    <div className="stepper">
      {items.map((_, index) => (
        <div
          key={index}
          className={`stepper_item ${
            activeItems.includes(index) ? "active" : ""
          }`}
        ></div>
      ))}
    </div>
  );
}

export default Stepper;
