import styled from "styled-components";
import { device } from "theme/device";

export const Text = styled.p`
  font-weight: 500;
  padding: 10px 0px;
  padding-left: 80px;
  padding-right: 50px;
  line-height: 25px;
  @media ${device.tablet} {
    font-size: 13px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
  }
`;

export const StyledQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  height: 80px;
  width: 670px;
  border-radius: 30px;
  margin-bottom: 30px;
  @media ${device.tablet} {
    width: 600px;
  }
  @media ${device.mobileL} {
    width: 300px;
    height: 90px;
  }
  @media ${device.mobileM} {
    margin: 0;
  }
`;
