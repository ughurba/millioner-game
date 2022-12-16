import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
export const WrapperClip = styled.div`
  width: 600px;
  height: 95px;
  position: relative;
  background-color: ${(props) => props.theme.colors.lightGray};
  clip-path: ${(props) => props.theme.clipPath};
`;
export const Clip = styled.div`
  position: absolute;
  top: 2px;
  left: 3px;
  right: 3px;
  bottom: -20px;
  background: ${(props) => props.theme.colors.background};
  height: 90px;
  box-sizing: border-box;
  clip-path: ${(props) => props.theme.clipPath};
  padding: 8px;
`;
