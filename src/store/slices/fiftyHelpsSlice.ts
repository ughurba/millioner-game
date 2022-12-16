import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  fiftyHelp: number[];
}
const initialState: initialStateProps = {
  fiftyHelp: [],
};
const fiftyHelpSlice = createSlice({
  name: "fiftyHelp",
  initialState: initialState,
  reducers: {
    fiftyHelpVariantActive: (state, action: PayloadAction<number[]>) => {
      state.fiftyHelp = action.payload;
    },
    reset: () => initialState,
  },
});

export const { fiftyHelpVariantActive, reset } = fiftyHelpSlice.actions;
export default fiftyHelpSlice.reducer;
