import { configureStore } from "@reduxjs/toolkit";
import {
  fiftyHelpSlice,
  controlPlayerSlice,
  countSlice,
  checkAnswerSlice,
} from "./index";

export const store = configureStore({
  reducer: {
    count: countSlice,
    fifty: fiftyHelpSlice,
    player: controlPlayerSlice,
    checkAnswer: checkAnswerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
