import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import styled from "styled-components";
import questions from "data/questions.json";
import { StyledQuestion, Text } from "./style";

const Wrapper = styled.div``;
export const Question = () => {
  const [question, setQuestion] = useState<string>();
  const { count } = useAppSelector((state) => state.count);

  useEffect(() => {
    setQuestion(questions[count]);
  }, [count]);

  return (
    <Wrapper data-testid="question-element">
      <StyledQuestion>
        <Text>{question}</Text>
      </StyledQuestion>
    </Wrapper>
  );
};
