import React, { useState } from "react";
import Stepper from "./Components/Stepper";
import { mockData } from "./MockData";
import Questions from "./Components/Questions";
import Timer from "./Components/Timer";

type Answer = {
  id: number;
  answer: string;
};
//for mock data. Object like get from server and used on client side
export interface IQuestion {
  id: number;
  type: "single" | "multiple" | "short" | "long";
  question: string;
  answers?: Answer[];
}

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(
    Number(sessionStorage.getItem("currentIndex")) || 0
  );
  return (
    <div className="App">
      <h1>Тестовое задание для MadSoft</h1>
      <div className="top_test">
        <Stepper
          questions_size={mockData.length}
          currentIndex={currentIndex}
        ></Stepper>
        <Timer minutes={20}></Timer>
      </div>

      <Questions
        questions={mockData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      ></Questions>
    </div>
  );
}

export default App;
