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
  const { correctOption, setBgColor, bgColor } = useCheck(count.count);

  const handleVariantClick = (index: number, isCorrectAnswer: boolean) => {
    dispatch(setCheckAnswer(Answer.CHECKED));
    setChecked(index);
    setBgColor(colors.PENDING);
    setTimeout(() => {
      if (isCorrectAnswer) {
        correctOption();
      } else {
        setBgColor(colors.WRONG);
        setTimeout(() => dispatch(setCheckAnswer(Answer.WRONG)), 1000);
      }
    }, 3000);
  };

  return (
    <Wrapper data-testid="variants-element">
      <WrapperList>
        {variants[count.count]?.map((variant, index) => (
          <List
            data-testid="variants"
            key={variant.variant}
            disabled={checkAnswer.answer === Answer.CHECKED ? true : false}
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
        ))}
      </WrapperList>
    </Wrapper>
  );
};
