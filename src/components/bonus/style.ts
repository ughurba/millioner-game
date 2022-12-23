import styled from "styled-components";
import { device } from "theme/device";

export const Title = styled.h4`
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const Wrapper = styled.div<{ isBurger: boolean }>`
  @media ${device.tablet} {
    display: ${(props) => (!props.isBurger ? "none" : "block")};
  }
`;

export const StyledBonus = styled.div<{ isActive: boolean }>`
  background: ${(props) =>
    !props.isActive ? props.theme.colors.background : "red"};
  border: 2px solid ${(props) => props.theme.colors.lightRight};
  border-radius: 8px;
  width: 240px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
