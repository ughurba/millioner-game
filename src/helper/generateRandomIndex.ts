import variants from "data/variants.json";

//generateRandomInteger for Fifty help
export const generateRandomIndex = (arr: number[], count: number) => {
  const random = Math.floor(Math.random() * variants[count].length);
  if (!arr.includes(random)) {
    arr.push(random);
  } else {
    generateRandomIndex(arr, count);
  }
};
