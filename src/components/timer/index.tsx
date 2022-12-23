import { Answer } from "helper/answer";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setCheckAnswer } from "store/slices/checkAnswerSlice";
import { Second } from "./style";

export const Timer = () => {
  const { answer } = useAppSelector((state) => state.checkAnswer);
  const { isAuditoriaHelp, isCallFriendHelp, isFiftyHelp } = useAppSelector(
    (state) => state.controlHelp
  );
  const dispatch = useAppDispatch();
  const [second, setSecond] = useState(40);

  useEffect(() => {
    if (second !== 0) {
      const timer = setTimeout(() => setSecond(second - 1), 1000);

      if (Answer.CHECKED === answer) clearTimeout(timer);

      if (Answer.CORRECT === answer || Answer.WRONG === answer) {
        setSecond(40);
      }
      if (isAuditoriaHelp || isCallFriendHelp || isFiftyHelp) {
        clearTimeout(timer);
      }
    } else {
      dispatch(setCheckAnswer(Answer.WRONG));
    }
  }, [second, answer]);

  return (
    <>
      <Second>{second}</Second>
    </>
  );
};
