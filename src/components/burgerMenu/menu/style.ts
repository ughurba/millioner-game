import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1620ea;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  /* padding: 2.7rem; */
  position: absolute;
  top: 0;
  right: 0;
  /* transition: transform 0.3s ease-in-out; */
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open ? "flex" : "none")};
`;
