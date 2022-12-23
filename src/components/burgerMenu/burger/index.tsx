import { FC } from "react";
import { StyledBurger } from "./style";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const Burger: FC<Props> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
