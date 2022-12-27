import { fifty } from "assets";
import { StyledFifty, StyledImage } from "./style";
import { generateRandomIndex } from "helper/generateRandomIndex";
import { useAppDispatch, useAppSelector } from "store/hooks";
import variants from "data/variants.json";
import { fiftyHelpVariantActive, reset } from "store/slices/fiftyHelpsSlice";
import { useEffect, useMemo, useState } from "react";
import { Answer } from "helper/answer";
import { FiftyHelpProps } from "./types";
import { setFiftyHelpAudio } from "store/slices/controlHelpSlice";
export const FiftyFifty = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);
  const { isAuditoriaHelp, isCallFriendHelp } = useAppSelector(
    (state) => state.controlHelp
  );
  const { answer } = useAppSelector((state) => state.checkAnswer);
  const [fiftyHelp, setFiftyHelp] = useState<FiftyHelpProps>({
    isActive: false,
    isFiftyHelp: false,
  });

  const filteredVariants = useMemo(() => {
    const filteredVariants: number[] = [];
    return filteredVariants;
  }, []);

  useEffect(() => {
    if (answer === Answer.CORRECT) {
      if (filteredVariants.length !== 0 && fiftyHelp.isActive) {
        dispatch(reset());
        setFiftyHelp({ ...{ isActive: false, isFiftyHelp: true } });
      }
    } else if (answer === Answer.WRONG) {
      dispatch(reset());
      setFiftyHelp({ ...{ isActive: false, isFiftyHelp: false } });
    }
  }, [answer, dispatch, filteredVariants]);

  useEffect(() => {
    dispatch(setFiftyHelpAudio(fiftyHelp.isActive));
  }, [fiftyHelp.isActive, dispatch]);

  const handleFiftyHelp = () => {
    for (let i = 0; i < variants[count].length; i++) {
      if (variants[count][i].isCorrectAnswer) {
        filteredVariants.push(i);
        break;
      }
    }
    generateRandomIndex(filteredVariants, count);
    setTimeout(() => {
      dispatch(fiftyHelpVariantActive(filteredVariants));
    }, 2000);
    setFiftyHelp({ ...{ isActive: true, isFiftyHelp: true } });
  };

  return (
    <StyledFifty
      data-testid="fifty-element"
      isFiftyHelp={fiftyHelp.isFiftyHelp}
      disabled={fiftyHelp.isFiftyHelp || isAuditoriaHelp || isCallFriendHelp}
      onClick={handleFiftyHelp}
    >
      <StyledImage src={fifty} />
    </StyledFifty>
  );
};
