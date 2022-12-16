import variants from "data/variants.json";
import { List, StyledVariant, Wrapper, WrapperList } from "./style";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useCheck } from "hooks/useCheck";
import { useState } from "react";
import { Answer } from "helper/answer";
import { setCheckAnswer } from "store/slices/checkAnswerSlice";
import colors from "data/colors.json";
export const Variants = () => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<number>();
  const { fifty, count, checkAnswer } = useAppSelector((state) => state);
  const { correctOption, runClearStates, setBgColor, bgColor } = useCheck(
    count.count
  );

  const handleVariantClick = (index: number, isCorrectAnswer: boolean) => {
    dispatch(setCheckAnswer(Answer.checked));
    setChecked(index);
    setBgColor(colors.pending);
    setTimeout(() => {
      if (isCorrectAnswer) {
        correctOption();
      } else {
        dispatch(setCheckAnswer(Answer.wrong));
        runClearStates();
      }
    }, 3000);
  };
  return (
    <Wrapper>
      {variants[count.count]?.map((variant, index) => (
        <WrapperList
          isFifty={
            fifty.fiftyHelp.length !== 0
              ? fifty.fiftyHelp?.includes(index)
              : true
          }
          key={index}
        >
          <List
            disabled={checkAnswer.answer === Answer.checked ? true : false}
            bgColor={bgColor}
            index={index}
            isCheckIndex={checked as number}
            isFifty={
              fifty.fiftyHelp.length !== 0
                ? fifty.fiftyHelp?.includes(index)
                : true
            }
            onClick={() => handleVariantClick(index, variant.isCorrectAnswer)}
          >
            <StyledVariant>{variant.variant}:</StyledVariant>
            {variant.title}
          </List>
        </WrapperList>
      ))}
    </Wrapper>
  );
};
