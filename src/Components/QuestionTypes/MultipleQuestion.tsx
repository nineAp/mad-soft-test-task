import React, { useEffect, useState } from "react";
import { IQuestion } from "../../App";
import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

interface IMultipleQuestionProps {
  question: IQuestion;
  currentIndex: number;
}

function MultipleQuestion({ question, currentIndex }: IMultipleQuestionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(() => {
    const savedAnswers = sessionStorage.getItem(
      `question_${currentIndex}_selectedAnswers`
    );
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  });

  useEffect(() => {
    sessionStorage.setItem(
      `question_${currentIndex}_selectedAnswers`,
      JSON.stringify(selectedAnswers)
    );
  }, [selectedAnswers, currentIndex]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedAnswers((prev) =>
      prev.includes(value)
        ? prev.filter((answer) => answer !== value)
        : [...prev, value]
    );
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <h2>Вопрос:</h2>
      <h3>{question.question}</h3>
      <h2>Ответы:</h2>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <FormGroup>
          {question.answers?.map((answer) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedAnswers.includes(answer.id.toString())}
                  onChange={handleChange}
                />
              }
              value={answer.id.toString()}
              label={answer.answer}
              key={answer.id}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
}

export default MultipleQuestion;
