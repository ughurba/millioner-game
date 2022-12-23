import { useAppDispatch } from "../store/hooks";
import { reset, incrmentCount } from "store/slices/countSlice";
import { useEffect, useState } from "react";
import { setCheckAnswer } from "store/slices/checkAnswerSlice";
import colors from "data/colors.json";
import { Answer } from "helper/answer";


export const useCheck = (count: number) => {
  const [bgColor, setBgColor] = useState<string>(colors.DEFAULT);
  const dispatch = useAppDispatch();

  const correctOption = () => {
    setBgColor(colors.CORRECT);

    setTimeout(() => {
      dispatch(incrmentCount());
      dispatch(setCheckAnswer(Answer.PENDING));
    }, 1000);
    dispatch(setCheckAnswer(Answer.CORRECT));
  };

  const runClearStates = () => {
    setTimeout(() => {
      dispatch(setCheckAnswer(Answer.PENDING));
      dispatch(reset());
      setBgColor(colors.DEFAULT);
    }, 1000);
  };
  useEffect(() => {
    setBgColor(colors.DEFAULT);
  }, [count]);

  return {
    runClearStates,
    correctOption,
    setBgColor,
    bgColor,
  };
};
