import React from "react";
import { IQuestion } from "../App";
import SingleQuestion from "./QuestionTypes/SingleQuestion";
import MultipleQuestion from "./QuestionTypes/MultipleQuestion";
import ShortQuestion from "./QuestionTypes/ShortQuestion";
import LongQuestion from "./QuestionTypes/LongQuestion";
import { Button } from "@mui/material";
import "./questions.css";

interface IQuestionsProps {
  questions: IQuestion[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Questions({
  questions,
  currentIndex,
  setCurrentIndex,
}: IQuestionsProps) {
  //Функция соотношения типа из интерфейса и компонента вопроса
  const renderQuestion = (question: IQuestion) => {
    switch (question.type) {
      case "single":
        return (
          <SingleQuestion
            key={question.id}
            question={question}
            currentIndex={currentIndex}
          />
        );
      case "multiple":
        return (
          <MultipleQuestion
            key={question.id}
            question={question}
            currentIndex={currentIndex}
          />
        );
      case "short":
        return (
          <ShortQuestion
            key={question.id}
            question={question}
            currentIndex={currentIndex}
          />
        );
      case "long":
        return (
          <LongQuestion
            key={question.id}
            question={question}
            currentIndex={currentIndex}
          />
        );
      default:
        return null;
    }
  };

  //Переключение вопроса на следующий
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((val) => {
        sessionStorage.setItem("currentIndex", String(val + 1));
        return val + 1;
      });
    }
  };

  //Переключение вопроса на предыдущий
  const handlePreviousQuestion = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((val) => {
        sessionStorage.setItem("currentIndex", String(val - 1));
        return val - 1;
      });
    }
  };

  const handleEndTest = async () => {
    //here will be code to send results to server
  };

  return (
    <>
      <div className="question_body">
        {renderQuestion(questions[currentIndex])}
      </div>
      <div className="controls">
        <Button
          onClick={handlePreviousQuestion}
          disabled={currentIndex === 0}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          variant="outlined"
          color={`${
            currentIndex === questions.length - 1 ? "success" : "primary"
          }`}
          onClick={
            currentIndex === questions.length - 1
              ? handleEndTest
              : handleNextQuestion
          }
        >
          {currentIndex === questions.length - 1 ? "Завершить" : "Дальше"}
        </Button>
      </div>
    </>
  );
}

export default Questions;
