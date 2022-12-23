import { device } from "theme/device";
import styled from "styled-components";

export const StyledImage = styled.img`
  width: 50px;
  @media ${device.mobileL} {
    width: 35px;
  }
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
  cursor: pointer;
  @media ${device.mobileL} {
    width: 55px;
    height: 44px;
  }
`;
