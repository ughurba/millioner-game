import {
  correct,
  fonMusic,
  answer,
  wrong,
  fiftyFifty,
  phoneMusic,
  auditoriaMusic,
  excitation,
} from "assets";
import { Answer } from "helper/answer";
import { usePlayer } from "hooks/usePlayer";
import { useEffect, useMemo } from "react";
import { useAppSelector } from "store/hooks";

const musics = {
  wrongSong: wrong,
  fonSong: fonMusic,
  excitationSong: excitation,
  answerSong: answer,
  correctSong: correct,
  fiftySong: fiftyFifty,
  phoneSong: phoneMusic,
  auditoriaSong: auditoriaMusic,
};
export const Player = () => {
  const { count, checkAnswer, controlHelp } = useAppSelector((state) => state);
  const { musicSwitch } = usePlayer();
  const { isAuditoriaHelp, isCallFriendHelp, isFiftyHelp } = controlHelp;

  const controlAnswerSong = useMemo(() => {
    return new Map([
      [Answer.CHECKED, () => musicSwitch(musics.answerSong)],
      [
        Answer.CORRECT,
        () => (
          musicSwitch(musics.correctSong),
          setTimeout(() => musicSwitch(musics.fonSong), 3000)
        ),
      ],
      [
        Answer.WRONG,
        () => {
          musicSwitch(musics.wrongSong);
          setTimeout(() => () => musicSwitch(musics.fonSong), 2000);
        },
      ],
    ]);
  }, []);

  useEffect(() => {
    musicSwitch(count.count > 6 ? musics.excitationSong : musics.fonSong);
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
