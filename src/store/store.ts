import { configureStore } from "@reduxjs/toolkit";
import {
  fiftyHelpSlice,
  controlHelpSlice,
  countSlice,
  checkAnswerSlice,
} from "./index";

export const store = configureStore({
  reducer: {
    count: countSlice,
    fifty: fiftyHelpSlice,
    controlHelp: controlHelpSlice,
    checkAnswer: checkAnswerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
