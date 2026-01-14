import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { Note } from "../../../types/note.ts";

interface NoteState {
  selectedNote: Note | null;
  draftNote: Note | null;
}

const initialState: NoteState = {
  selectedNote: null,
  draftNote: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setSelectedNote(state, action: PayloadAction<Note | null>) {
      state.selectedNote = action.payload;
    },

    setDraftNote(state, action: PayloadAction<Note | null>) {
      state.draftNote = action.payload;
    },

    updateDraftField(
      state,
      action: PayloadAction<{ field: keyof Note; value: any }>,
    ) {
      if (state.draftNote) {
        (state.draftNote as any)[action.payload.field] = action.payload.value;
      }
    },
  },
});

export const { setSelectedNote, setDraftNote, updateDraftField } =
  notesSlice.actions;
export default notesSlice.reducer;
