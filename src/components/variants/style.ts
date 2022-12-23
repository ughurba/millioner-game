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
  margin-left: 10px;
  border: 1px solid #fff;
  border-radius: 20px;

  @media ${device.laptop} {
    width: 260px;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-child(3) {
      margin-left: 0;
    }
  }
  @media ${device.tablet} {
    width: 270px !important;
    height: 60px;
    &:nth-child(1) {
      margin-left: 0 !important;
    }
    &:nth-child(3) {
      margin-left: 0 !important;
    }
  }

  @media ${device.mobileM} {
    &:nth-child(1) {
      margin-left: 70px !important;
    }
    &:nth-child(3) {
      margin-left: 70px !important;
    }
    margin-left: 70px;
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
  @media ${device.laptop} {
    width: 580px;
  }
  @media ${device.mobileL} {
    max-width: 420px;
  }
`;
