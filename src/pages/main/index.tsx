import { Game } from "components/game";
import { Player, Start } from "components";
import { useEffect, useState } from "react";
import { StartedProps } from "components/start/types";
import { Answer } from "helper/answer";
import { useAppSelector } from "store/hooks";
import questions from "data/questions.json";
import { useCheck } from "hooks/useCheck";
export const Main = () => {
  const [started, setStarted] = useState<StartedProps>({
    gameOver: false,
    startGame: false,
    win: false,
  });
  const { answer } = useAppSelector((state) => state.checkAnswer);
  const { count } = useAppSelector((state) => state.count);
  const { runClearStates } = useCheck(count);

  useEffect(() => {
    if (answer === Answer.WRONG) {
      setStarted({ ...{ startGame: false, gameOver: true, win: false } });
      runClearStates();
    }
  }, [answer, setStarted]);

  useEffect(() => {
    if (questions.length - 1 < count) {
      setStarted({ ...{ win: true, gameOver: false, startGame: true } });
      runClearStates();
    }
  }, [count]);

  return (
    <>
      {!started.startGame || started.gameOver || started.win ? (
        <Start setStarted={setStarted} started={started} />
      ) : (
        <Game />
      )}
      {/* {started.startGame && <Player />} */}
    </>
  );
};
