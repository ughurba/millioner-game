import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 800px;
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
  visibility: ${(props) => (props.isFifty ? "" : "hidden")};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
  position: absolute;
  top: 2px;
  left: 3px;
  right: 3px;
  bottom: -20px;
  background: ${(props) =>
    props.index === props.isCheckIndex
      ? props.bgColor
      : props.theme.colors.background};
  height: 90px;
  box-sizing: border-box;
  clip-path: ${(props) => props.theme.clipPath};
  padding: 8px;
`;
export const WrapperList = styled.ul<{ isFifty?: boolean }>`
  width: 300px;
  height: 95px;
  position: relative;
  visibility: ${(props) => (props.isFifty ? "" : "hidden")};
  background-color: ${(props) => props.theme.colors.lightGray};
  clip-path: ${(props) => props.theme.clipPath};
  margin-left: 30px;
`;
