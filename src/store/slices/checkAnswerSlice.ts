import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "helper/answer";

interface initialStateProps {
  answer: Answer;
}
const initialState: initialStateProps = {
  answer: Answer.pending,
};
const checkAnswerSlice = createSlice({
  name: "checkAnswer",
  initialState: initialState,
  reducers: {
    setCheckAnswer: (state, action: PayloadAction<Answer>) => {
      state.answer = action.payload;
    },
  },
});

export const { setCheckAnswer } = checkAnswerSlice.actions;
export default checkAnswerSlice.reducer;
