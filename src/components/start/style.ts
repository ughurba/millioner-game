import styled from "styled-components";
import { device } from "theme/device";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 18%;
  z-index: 1000;
  background-color: red;
  width: 908px;
  height: 508px;
  border: 4px solid rgba(34, 38, 163, 0.08);
  border-radius: 20px;
  background: radial-gradient(
    ellipse at center,
    rgba(34, 38, 163, 1) 17%,
    rgba(34, 38, 163, 0.08) 93%,
    rgba(255, 255, 255, 0) 100%
  );
  @media ${device.tablet} {
    width: 700px;
    height: 508px;
    left: 5%;
  }
  @media ${device.mobileL} {
    width: 350px;
    justify-content: space-around;
  }
`;
export const StyledImage = styled.img`
  width: 340px;
  height: 240px;
  margin-top: 20px;
  @media ${device.tablet} {
    padding: 30px;
  }
  @media ${device.mobileL} {
    padding: 0;
    width: 200px;
    height: 140px;
  }
`;
export const WrapperText = styled.div`
  width: 450px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding: 10px;
  border-left: 5px solid #fff;
  border-right: 5px solid #fff;
  background: linear-gradient(
    to right,
    rgba(6, 10, 109, 1) 0%,
    rgba(34, 38, 163, 1) 12%,
    rgba(34, 38, 163, 1) 50%,
    rgba(34, 38, 163, 1) 88%,
    rgba(6, 10, 109, 1) 100%
  );
  @media ${device.tablet} {
    width: 350px;
  }
  @media ${device.mobileL} {
    width: 250px;
    font-size: 15px;
  }
`;
export const Text = styled.p`
  margin: 15px 0px;
`;
export const StyledButton = styled.button`
  height: 50px;
  width: 150px;
  cursor: pointer;
  color: rgba(6, 10, 109, 1);
  font-weight: bold;
  margin-bottom: 5px;
`;
