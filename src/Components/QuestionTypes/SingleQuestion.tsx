import React, { useState, useEffect } from "react";
import { IQuestion } from "../../App";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface ISingleQuestionProps {
  question: IQuestion;
  currentIndex: number;
}

function SingleQuestion({ question, currentIndex }: ISingleQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>(() => {
    return (
      sessionStorage.getItem(`question_${currentIndex}_selectedAnswer`) || ""
    );
  });

  useEffect(() => {
    sessionStorage.setItem(
      `question_${currentIndex}_selectedAnswer`,
      selectedAnswer
    );
  }, [selectedAnswer, currentIndex]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <h2>Вопрос:</h2>
      <h3>{question.question}</h3>
      <h2>Ответы:</h2>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <RadioGroup value={selectedAnswer} onChange={handleChange}>
          {question.answers?.map((answer) => (
            <FormControlLabel
              control={<Radio />}
              value={answer.id}
              label={answer.answer}
              key={answer.id}
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default SingleQuestion;
