import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { Note } from "../../../types/note.ts";

import { notes } from "../../../constants/data.ts";

interface NoteState {
  notes: Note[];
  selectedNote: Note | null;
  draftNote: Note | null;
}

const sortByDate = (a: Note, b: Note) =>
  new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();

const initialState: NoteState = {
  notes: [...notes].sort(sortByDate),
  selectedNote: null,
  draftNote: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);

      state.notes.sort(sortByDate);
    },

    updateNote(state, action: PayloadAction<Note>) {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id,
      );

      if (index !== -1) {
        state.notes[index] = action.payload;

        state.notes.sort(sortByDate);
      }
    },

    deleteNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    toggleArchive(state, action: PayloadAction<string>) {
      const note = state.notes.find((n) => n.id === action.payload);

      if (note) {
        note.is_archived = !note.is_archived;
      }
    },

    updateDraftField(
      state,
      action: PayloadAction<{ field: keyof Note; value: any }>,
    ) {
      if (state.draftNote) {
        (state.draftNote as any)[action.payload.field] = action.payload.value;
      }
    },

    setSelectedNote(state, action: PayloadAction<Note | null>) {
      state.selectedNote = action.payload;
    },

    setDraftNote(state, action: PayloadAction<Note | null>) {
      state.draftNote = action.payload;
    },
  },
});

export const {
  addNote,
  updateNote,
  deleteNote,
  toggleArchive,
  setSelectedNote,
  setDraftNote,
  updateDraftField,
} = notesSlice.actions;
export default notesSlice.reducer;
