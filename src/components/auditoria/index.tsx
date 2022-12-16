import { people } from "assets";
import { useEffect, useState } from "react";
import { Wrapper, StyledAuditoria, StyledImage } from "./style";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Percents } from "./components/percent";
import { AuditoriaHelpProps } from "./type";
import { Answer } from "helper/answer";
import { setAuditoriaHelpAudio } from "store/slices/controlPlayerSlice";

export const Auditoria = () => {
  const dispatch = useAppDispatch();
  const { answer } = useAppSelector((state) => state.checkAnswer);
  const [helpAuditoria, setHelpAuditoria] = useState<AuditoriaHelpProps>({
    isActive: false,
    isAuditoria: false,
    isOpenAuditoria: false,
  });

  useEffect(() => {
    if (answer === Answer.correct && helpAuditoria.isActive) {
      setHelpAuditoria({
        ...{ isActive: false, isAuditoria: true, isOpenAuditoria: false },
      });
    } else if (answer === Answer.wrong) {
      setHelpAuditoria({
        ...{ isActive: false, isAuditoria: false, isOpenAuditoria: false },
      });
    }
  }, [answer]);

  useEffect(() => {
    dispatch(setAuditoriaHelpAudio(helpAuditoria.isActive));
  }, [helpAuditoria.isActive]);

  const handleAuditoriaClick = () => {
    setHelpAuditoria({
      ...{ isActive: true, isAuditoria: true, isOpenAuditoria: true },
    });
  };

  return (
    <Wrapper>
      <StyledAuditoria
        isAuditoria={helpAuditoria.isAuditoria}
        disabled={helpAuditoria.isAuditoria}
        onClick={handleAuditoriaClick}
      >
        <StyledImage src={people} />
      </StyledAuditoria>
      {helpAuditoria.isOpenAuditoria && <Percents />}
    </Wrapper>
  );
};
