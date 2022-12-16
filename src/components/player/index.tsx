import {
  correct,
  fonMusic,
  answer,
  wrong,
  fiftyFifty,
  phoneMusic,
  auditoriaMusic,
} from "assets";
import { Answer } from "helper/answer";
import { usePlayer } from "hooks/usePlayer";
import { useEffect, useMemo } from "react";
import { useAppSelector } from "store/hooks";

const musics = {
  wrongSong: wrong,
  fonSong: fonMusic,
  answerSong: answer,
  correctSong: correct,
  fiftySong: fiftyFifty,
  phoneSong: phoneMusic,
  auditoriaSong: auditoriaMusic,
};
export const Player = () => {
  const { fifty, count, checkAnswer, player } = useAppSelector(
    (state) => state
  );
  const { musicSwitch } = usePlayer();
  const { isAuditoriaHelp, isCallFriendHelp, isFiftyHelp } = player;

  const controlAnswerSong = useMemo(() => {
    return new Map([
      [Answer.checked, () => musicSwitch(musics.answerSong)],
      [
        Answer.correct,
        () => (
          musicSwitch(musics.correctSong),
          setTimeout(() => musicSwitch(musics.fonSong), 3000)
        ),
      ],
      [
        Answer.wrong,
        () => {
          musicSwitch(musics.wrongSong);
          setTimeout(() => () => musicSwitch(musics.fonSong), 2000);
        },
      ],
    ]);
  }, []);

  useEffect(() => {
    const playingAnswerMusic = controlAnswerSong.get(checkAnswer.answer);
    if (playingAnswerMusic) playingAnswerMusic();
  }, [checkAnswer.answer, controlAnswerSong]);

  useEffect(() => {
    if (isFiftyHelp) {
      musicSwitch(musics.answerSong);
      setTimeout(() => {
        musicSwitch(musics.fiftySong);
        setTimeout(() => musicSwitch(musics.fonSong), 1000);
      }, 2000);
    } else if (isAuditoriaHelp) {
      musicSwitch(musics.answerSong);
      setTimeout(() => musicSwitch(musics.auditoriaSong), 2000);
    } else if (isCallFriendHelp) {
      musicSwitch(musics.answerSong);
      setTimeout(() => musicSwitch(musics.phoneSong), 2000);
    }
  }, [isAuditoriaHelp, isCallFriendHelp, isFiftyHelp]);
  return <></>;
};
