import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  selectedNote: null | number;
}

const initialState: uiState = {
  selectedNote: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedNote(state, action) {
      state.selectedNote = action.payload;
    },
  },
});

export const { setSelectedNote } = uiSlice.actions;
export default uiSlice.reducer;
