import { logo } from "assets";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { Wrapper, StyledButton, StyledImage, Text, WrapperText } from "./style";
import { StartedProps } from "./types";
import bonuses from "data/bonus.json";
import { useCheck } from "hooks/useCheck";
interface Props {
  started: StartedProps;
  setStarted: (started: StartedProps) => void;
}
export const Start: FC<Props> = ({ setStarted, started }) => {
  const [money, setMoney] = useState<string>("0");
  const { count } = useAppSelector((state) => state.count);
  const handleClick = () => {
    if (!started.startGame) {
      setStarted({ ...{ startGame: true, gameOver: false, win: false } });
    }

    if (started.win) {
      setStarted({ ...{ gameOver: false, startGame: true, win: false } });
    }
  };
  useEffect(() => {
    if (count > 0) setMoney(bonuses[count - 1].money);
  }, []);

  return (
    <Wrapper>
      <StyledImage src={logo} />
      <WrapperText>
        {started.win ? (
          <Text>Təbriklər👏 siz 1000 000 AZN qazandınız🥳</Text>
        ) : (
          <Text>
            {!started.gameOver
              ? "Millyonçu oynuna xoş gəlmisiniz👋"
              : `Uduzdunuz! qazanılan məbləq ${money} AZN Bir daha sınayın`}
          </Text>
        )}
        <StyledButton onClick={handleClick}>
          {!started.gameOver ? "Başla" : "Yeniden başla"}
        </StyledButton>
      </WrapperText>
    </Wrapper>
  );
};
