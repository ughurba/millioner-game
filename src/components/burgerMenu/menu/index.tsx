import { Bonus } from "components";
import { FC } from "react";
import styled from "styled-components";

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  background: #44edb8;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  /* height: 100%; */
  /* text-align: right; */
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  /* @media (max-width: 576px) {
    height: 100vh;
  } */
  width: 100%;
  height: 100%;
`;

interface Props {
  open: boolean;
}
export const Menu: FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Bonus isBurger={true} />
    </StyledMenu>
  );
};
