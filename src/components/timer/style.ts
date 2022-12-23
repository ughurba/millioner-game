import styled from "styled-components";
import { device } from "theme/device";

export const Second = styled.h6`
  height: 120px;
  position: absolute;
  width: 120px;
  line-height: 110px;
  margin-top: 10px;
  text-align: center;
  font-size: 70px;
  border-radius: 100%;
  border: 3px solid #ffffff;
  background: radial-gradient(ellipse at center, #2226a3 7%, #060a6d 100%);
  @media ${device.laptop} {
    height: 80px;
    width: 80px;
    font-size: 50px;
    line-height: 70px;
  }
  @media ${device.mobileL} {
    height: 50px;
    width: 50px;
    font-size: 30px;
    line-height: 40px;
  }
`;
