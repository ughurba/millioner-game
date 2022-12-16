import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  JsContent?: string;
  AlItems?: string;
  FlexWrap?: string;
  FlexColumn?: string;
  children?: ReactNode;
}
const StyledFlex = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.JsContent || "flex-start"};
  align-items: ${(props) => props.AlItems || "flex-start"};
  flex-wrap: ${(props) => props.FlexWrap || "nowrap"};
  flex-direction: ${(props) => props.FlexColumn || "row"};
`;
export const Flex: FC<Props> = (props) => (
  <StyledFlex {...props}>{props.children}</StyledFlex>
);
