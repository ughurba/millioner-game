import { AuditoriaProps } from "components/auditoria/type";
import { useState } from "react";
export const useIncPercent = (obj: AuditoriaProps) => {
  const [percents, setPercents] = useState<AuditoriaProps>({
    percentOne: 0,
    percentTwo: 0,
    percentTree: 0,
    percentFor: 0,
  });

  const runIncrementPercent = () => {
    const timer = setInterval(() => {
      for (const key in percents) {
        if (
          percents[key as keyof AuditoriaProps] <
          obj[key as keyof AuditoriaProps]
        ) {
          percents[key as keyof AuditoriaProps] += 1;
          setPercents({ ...percents });
        }
      }
      if (JSON.stringify(obj) === JSON.stringify(percents)) {
        clearInterval(timer);
      }
    }, 100);
  };
  return { percents, runIncrementPercent };
};
