import React, { useEffect, useState } from "react";
import { IQuestion } from "../../App";
import { Box, TextField } from "@mui/material";

interface ILongQuestionProps {
  question: IQuestion;
  currentIndex: number;
}

function LongQuestion({ question, currentIndex }: ILongQuestionProps) {
  const [answer, setAnswer] = useState<string>(() => {
    return sessionStorage.getItem(`question_${currentIndex}_answer`) || "";
  });

  useEffect(() => {
    sessionStorage.setItem(`question_${currentIndex}_answer`, answer);
  }, [answer, currentIndex]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <h2>Вопрос:</h2>
      <h3>{question.question}</h3>
      <h2>Ответ:</h2>
      <TextField
        value={answer}
        onChange={handleChange}
        label="Развернутый ответ"
        multiline
        rows={4}
        variant="outlined"
      />
    </Box>
  );
}

export default LongQuestion;
