import { device } from "theme/device";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Height = styled.div<{ percent: number | undefined }>`
  position: absolute;
  background: linear-gradient(to right, #afa700 0%, #eef22e 46%, #afa700 100%);
  height: ${(props) => (props.percent ? `${props.percent}px` : "0.5px")};
  width: 70px;
  margin-left: 5px;
`;

export const StyledImage = styled.img`
  width: 43px;
  @media ${device.mobileL} {
    width: 30px;
  }
`;
export const StyledAuditoria = styled.button<{ isAuditoria: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isAuditoria ? props.theme.colors.red : props.theme.colors.background};
  border: 4px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 70px / 40px;
  width: 75px;
  height: 52px;
  margin-left: 10px;
  cursor: pointer;
  @media ${device.mobileL} {
    width: 50px;
    height: 40px;
  }
`;
