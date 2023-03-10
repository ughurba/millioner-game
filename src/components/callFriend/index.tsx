import { useEffect, useMemo, useState } from "react";
import firends from "data/friendlyText.json";
import { phone } from "assets";
import {
  Wrapper,
  PhoneImg,
  StyledCall,
  StyledImg,
  Text,
  WrapperCallAnsewr,
} from "./style";
import { useAppDispatch, useAppSelector } from "store/hooks";
import variants from "data/variants.json";
import { Answer } from "helper/answer";
import { CallFriendProps } from "./types";
import { setCallHelpAudio } from "store/slices/controlHelpSlice";

export const CallAFriend = () => {
  const { count } = useAppSelector((state) => state.count);
  const { answer } = useAppSelector((state) => state.checkAnswer);
  const { isAuditoriaHelp, isFiftyHelp } = useAppSelector(
    (state) => state.controlHelp
  );
  const dispatch = useAppDispatch();
  const [helpCallFriend, setHelpCallFriend] = useState<CallFriendProps>({
    calling: false,
    isHelpCallFriend: false,
    isOpenTextFriend: false,
  });
  const randomIndex = useMemo(
    () => Math.floor(Math.random() * firends.length),
    []
  );

  useEffect(() => {
    if (answer === Answer.CORRECT) {
      if (helpCallFriend.isOpenTextFriend) {
        setHelpCallFriend({
          ...{
            calling: false,
            isHelpCallFriend: true,
            isOpenTextFriend: false,
          },
        });
      }
    } else if (answer === Answer.WRONG) {
      setHelpCallFriend({
        ...{ calling: false, isHelpCallFriend: false, isOpenTextFriend: false },
      });
    }
  }, [answer]);

  useEffect(() => {
    dispatch(setCallHelpAudio(helpCallFriend.isOpenTextFriend));
  }, [helpCallFriend.isOpenTextFriend]);

  const handleCallAFriend = () => {
    setHelpCallFriend({
      ...{ calling: true, isHelpCallFriend: true, isOpenTextFriend: true },
    });
    setTimeout(() => {
      setHelpCallFriend({
        ...{ calling: false, isHelpCallFriend: true, isOpenTextFriend: true },
      });
    }, 2000);
  };

  const { calling, isHelpCallFriend, isOpenTextFriend } = helpCallFriend;
  return (
    <Wrapper>
      <StyledCall
        data-testid="call-element"
        isCallHelpFriend={isHelpCallFriend}
        disabled={isHelpCallFriend || isAuditoriaHelp || isFiftyHelp}
        onClick={handleCallAFriend}
      >
        <PhoneImg src={phone} />
      </StyledCall>
      {isOpenTextFriend && (
        <WrapperCallAnsewr>
          {calling ? (
            <Text>Dostunuza zeng gedir...</Text>
          ) : (
            <>
              <StyledImg src={firends[randomIndex]?.imgUrl} />
              <Text>
                {firends[randomIndex].text}
                {
                  variants[count].find((v) => (v.isCorrectAnswer ? v : ""))
                    ?.variant
                }
              </Text>
            </>
          )}
        </WrapperCallAnsewr>
      )}
    </Wrapper>
  );
};
