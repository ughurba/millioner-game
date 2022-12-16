import { Bonus } from "components/bonus";
import { Question } from "../question";
import { Wrapper, Container } from "./style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "components/flex";
import { Auditoria } from "components/auditoria";
import { FiftyFifty } from "components/fiftyFifty";
import { CallAFriend } from "components/callFriend";
import { Variants } from "components/variants";

export const Secound = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: white;
  background: blue;
  border-radius: 50%;
  margin-left: 30px;
`;
export const WrapperHeader = styled.div`
  margin-top: 30px;
`;
export const DecleredFlex = styled(Flex)`
  height: 600px;
`;

export const Game = () => {
  const [secound, setSecound] = useState(40);

  return (
    <Wrapper>
      <Container>
        <WrapperHeader>
          <Flex JsContent="space-between">
            <Secound>{secound}</Secound>
            <DecleredFlex
              AlItems="center"
              JsContent="space-between"
              FlexColumn="column"
            >
              <Flex>
                <FiftyFifty />
                <CallAFriend />
                <Auditoria />
              </Flex>
              <Flex AlItems="center" JsContent="center" FlexColumn="column">
                <Question />
                <Variants />
              </Flex>
            </DecleredFlex>

            <Bonus />
          </Flex>
        </WrapperHeader>
      </Container>
    </Wrapper>
  );
};
