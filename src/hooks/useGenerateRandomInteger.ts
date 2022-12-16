import { useMemo } from "react";
export const useGenerateRandomInteger = () => {
  const auditoriaObj = useMemo(() => {
    const percentOne = Math.round(Math.random() * 100);
    const percentTwo = Math.round(Math.random() * (100 - percentOne));
    const percentTree = Math.round(
      Math.random() * (100 - (percentOne + percentTwo))
    );
    const percentFor = 100 - (percentOne + percentTwo + percentTree);
    return { percentOne, percentTwo, percentTree, percentFor };
  }, []);

  console.log("auditoriaObj ", auditoriaObj);
  return { auditoriaObj };
};
