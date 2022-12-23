import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ControlHelpProps } from "types";

interface initialStateProps extends ControlHelpProps {}
const initialState: initialStateProps = {
  isAuditoriaHelp: false,
  isCallFriendHelp: false,
  isFiftyHelp: false,
};
const controlHelpSlice = createSlice({
  name: "controlHelp",
  initialState: initialState,
  reducers: {
    setAuditoriaHelpAudio: (state, action: PayloadAction<boolean>) => {
      state.isAuditoriaHelp = action.payload;
    },
    setFiftyHelpAudio: (state, action: PayloadAction<boolean>) => {
      state.isFiftyHelp = action.payload;
    },
    setCallHelpAudio: (state, action: PayloadAction<boolean>) => {
      state.isCallFriendHelp = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  reset,
  setAuditoriaHelpAudio,
  setCallHelpAudio,
  setFiftyHelpAudio,
} = controlHelpSlice.actions;
export default controlHelpSlice.reducer;
