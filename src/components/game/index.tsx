import {
  Wrapper,
  Container,
  ImplementFlex,
  WrapperHeader,
  WrapperHelp,
} from "./style";
import {
  Player,
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
              <Flex FlexColumn="column">
                <Question />
                <Variants />
              </Flex>
            </ImplementFlex>

            <Bonus />
          </Flex>
          <BurgerMenu open={open} setOpen={setOpen} />
        </WrapperHeader>
      </Container>
    </Wrapper>
  );
};
