import styled from "styled-components";
import { Flex } from "components/flex";
import { device } from "theme/device";

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin: 0 7%;

  @media ${device.tablet} {
    margin: 0;
  }
`;
export const StyledHelp = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapperHeader = styled.div`
  margin-top: 30px;
`;

export const WrapperHelp = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${device.mobileL} {
    margin-right: 80px;
  }
`;
export const QuestionAndVariant = styled(Flex)`
  @media ${device.mobileL} {
    align-items: center;
  }
  @media ${device.mobileM} {
    align-items: flex-end;
  }
`;
export const ImplementFlex = styled(Flex)`
  height: 600px;

  @media ${`(min-width: 1024px)`} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobileL} {
    align-items: flex-end !important;
    min-height: 740px;
    max-width: 370px;
  }
  @media ${device.mobileM} {
    min-height: 700px;
    max-width: 340px;
  }
`;
