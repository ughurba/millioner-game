import {
  Wrapper,
  Container,
  ImplementFlex,
  WrapperHeader,
  WrapperHelp,
  QuestionAndVariant,
} from "./style";
import {
  Auditoria,
  Bonus,
  CallAFriend,
  FiftyFifty,
  Flex,
  Question,
  Timer,
  Variants,
  BurgerMenu,
} from "components";

import { useState } from "react";

export const Game = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <WrapperHeader>
          <Flex JsContent="space-between">
            <Timer />
            <ImplementFlex
              AlItems="center"
              JsContent="space-between"
              FlexColumn="column"
            >
              <WrapperHelp>
                <FiftyFifty />
                <CallAFriend />
                <Auditoria />
              </WrapperHelp>
              <QuestionAndVariant FlexColumn="column">
                <Question />
                <Variants />
              </QuestionAndVariant>
            </ImplementFlex>

            <Bonus />
          </Flex>
          <BurgerMenu open={open} setOpen={setOpen} />
        </WrapperHeader>
      </Container>
    </Wrapper>
  );
};
