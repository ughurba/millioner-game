import { device } from "theme/device";
import styled from "styled-components";

export const PhoneImg = styled.img`
  width: 38px;
  @media ${device.mobileL} {
    width: 25px;
  }
`;
export const StyledCall = styled.button<{ isCallHelpFriend: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isCallHelpFriend
      ? props.theme.colors.red
      : props.theme.colors.background};
  border: 4px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 70px / 40px;
  width: 75px;
  height: 52px;
  cursor: pointer;
  @media ${device.mobileL} {
    width: 50px;
    height: 40px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  margin-left: 8px;
`;
export const WrapperCallAnsewr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: 30px;
  left: 0;
  border: 4px solid ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.background};
  height: 200px;
  width: 600px;
  border-radius: 10px;
  @media ${device.mobileL} {
    max-height: 110px;
    max-width: 270px;
    left: -120px !important;
    margin-top: 30px !important;
  }
  @media ${device.laptop} {
    height: 170px;
    width: 570px;
    left: -200px;
    margin-top: 50px;
  }
`;
export const StyledImg = styled.img`
  width: 120px;
  height: 100%;
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 170px;
  width: 380px;
  font-size: 20px;
  font-weight: bold;
  padding-right: 20px;
  @media ${device.mobileL} {
    font-size: 12px;
    margin-left: 15px;
  }
`;
