import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "helper/answer";
import { ControlPlayerProps } from "types";

interface initialStateProps extends ControlPlayerProps {}
const initialState: initialStateProps = {
  isAuditoriaHelp: false,
  isCallFriendHelp: false,
  isFiftyHelp: false,
};
const controlPlayerSlice = createSlice({
  name: "controlPlayer",
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
} = controlPlayerSlice.actions;
export default controlPlayerSlice.reducer;
