import { device } from "theme/device";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media ${device.tablet} {
    width: 400px;
  }
`;
export const StyledVariant = styled.span`
  margin-right: 10px;
`;

export const List = styled.li<{
  isFifty?: boolean;
  index: number;
  isCheckIndex: number;
  bgColor: string;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  visibility: ${(props) => (props.isFifty ? "" : "hidden")};
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
  background: ${(props) =>
    props.index === props.isCheckIndex
      ? props.bgColor
      : props.theme.colors.background};
  width: 300px;
  height: 60px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 20px;

  &:hover {
    background: radial-gradient(
      at center center,
      rgb(234, 163, 56) 2%,
      rgb(196, 137, 0) 100%
    );
  }
  @media ${device.tablet} {
    width: 270px;
    height: 60px;
  }
`;

export const WrapperList = styled.ul<{ isFifty?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 640px;

  @media ${device.tablet} {
    width: 580px;
  }
  @media ${device.mobileL} {
    max-width: 280px;
  }
`;
