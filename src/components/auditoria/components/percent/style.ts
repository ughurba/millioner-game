import styled from "styled-components";
import { device } from "theme/device";

export const WrapperPercent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  top: 230px;
  right: -24px;

  @media ${device.mobileL} {
    right: -55px;
  }
  display: flex;
  transform: rotate(180deg);
`;
export const Height = styled.div<{ percent: number | undefined }>`
  position: absolute;
  background: linear-gradient(to right, #afa700 0%, #eef22e 46%, #afa700 100%);
  height: ${(props) => (props.percent ? `${props.percent}px` : "0.5px")};
  width: 70px;
  margin-left: 5px;
`;
export const Percent = styled.span`
  display: inline-block;
  width: 70px;
  height: 40px;
  font-size: 30px;
  text-align: center;
  color: #eef22e;
  margin-left: 5px;
  background: radial-gradient(ellipse at center, #2226a3 7%, #060a6d 100%);
  transform: rotate(180deg);
`;
export const PercentNumber = styled.div`
  width: 70px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  height: 20px;
  margin-left: 5px;
  margin-bottom: 7px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 6%,
    rgba(0, 0, 0, 1) 7%,
    rgba(12, 6, 8, 0) 100%
  );
`;
export const PercentNumberWrapper = styled.div`
  position: absolute;
  transform: rotate(180deg);
  top: 170px;
  border-bottom: 2px solid #afa700;
`;
