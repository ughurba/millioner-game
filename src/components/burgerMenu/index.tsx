import { FC } from "react";
import styled from "styled-components";
import { device } from "theme/device";
import { Burger } from "./burger";
import { Menu } from "./menu";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const StyledBurgerMenu = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
export const BurgerMenu: FC<Props> = ({ open, setOpen }) => {
  return (
    <StyledBurgerMenu>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </StyledBurgerMenu>
  );
};
