import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import styled from "styled-components";
import questions from "data/questions.json";
import { Clip, WrapperClip, Text } from "./style";
import { QuestionProps } from "./types";

const Wrapper = styled.div``;
export const Question = () => {
  const [question, setQuestion] = useState<QuestionProps | undefined>();
  const [win, setWin] = useState<boolean>(false);
  const { count } = useAppSelector((state) => state.count);

  useEffect(() => {
    if (questions.length - 1 < count) {
      setWin(true);
    } else {
      setQuestion(questions[count]);
    }
  }, [count]);

  return (
    <Wrapper>
      {win ? (
        <h1>win</h1>
      ) : (
        <WrapperClip>
          <Clip>
            <Text>{question?.question}</Text>
          </Clip>
        </WrapperClip>
      )}
    </Wrapper>
  );
};
