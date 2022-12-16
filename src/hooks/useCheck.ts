import { useAppDispatch } from "../store/hooks";
import { reset, incrmentCount } from "store/slices/countSlice";
import { useEffect, useState } from "react";
import { setCheckAnswer } from "store/slices/checkAnswerSlice";
import colors from "data/colors.json";
import { Answer } from "helper/answer";

export const useCheck = (count: number) => {
  const [bgColor, setBgColor] = useState<string>(colors.default);
  const dispatch = useAppDispatch();

  const correctOption = () => {
    setBgColor(colors.correct);

    setTimeout(() => {
      dispatch(incrmentCount());
      dispatch(setCheckAnswer(Answer.pending));
    }, 1000);
    dispatch(setCheckAnswer(Answer.correct));
  };
  
  const runClearStates = () => {
    setBgColor(colors.wrong);
    setTimeout(() => {
      dispatch(setCheckAnswer(Answer.pending));
      dispatch(reset());
      setBgColor(colors.default);
    }, 1000);
  };
  useEffect(() => {
    setBgColor(colors.default);
  }, [count]);

  return {
    runClearStates,
    correctOption,
    setBgColor,
    bgColor,
  };
};
