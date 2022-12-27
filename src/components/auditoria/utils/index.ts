import { AuditoriaProps } from "../type";
export const getFilteredValues = (percents: AuditoriaProps) => {
  let filteredValues: number[] = [];
  let maxValue: number = 0;

  const values = Object.values(percents);
  maxValue = Math.max(...values);
  filteredValues = [...values];
  const index = values.indexOf(maxValue);
  filteredValues.splice(index, 1);
  return { filteredValues, maxValue };
};
