import styled from "styled-components";

export const StyledImage = styled.img`
  width: 50px;
`;
export const StyledFifty = styled.button<{ isFiftyHelp: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 70px / 40px;
  width: 75px;
  height: 52px;
  background: ${(props) =>
    props.isFiftyHelp ? props.theme.colors.red : props.theme.colors.background};
  color: white;
  cursor: pointer;
`;
