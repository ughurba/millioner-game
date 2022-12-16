import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  count: number;
  disabled: boolean;
}
const initialState: initialStateProps = {
  count: 0,
  disabled: false,
};
const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    incrmentCount: (state) => {
      state.count = state.count + 1;
    },

    reset: () => initialState,
  },
});

export const { reset, incrmentCount } = countSlice.actions;
export default countSlice.reducer;
