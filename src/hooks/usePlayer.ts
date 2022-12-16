import { useRef } from "react";

import { useAppSelector } from "store/hooks";
export const usePlayer = () => {
  const song = useRef(new Audio());
  const musicSwitch = (path: string) => {
    song.current.src = path;
    song.current.play();
  };
  return { musicSwitch };
};
