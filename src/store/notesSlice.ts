import { createSlice } from "@reduxjs/toolkit";

import type { Note } from "../types/note.ts";

import { notes } from "../constants/data.ts";

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: notes,
};

const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
    },

    updateNote(state, action) {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      });
    },

    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    toggleArchive(state, action) {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload) {
          return { ...note, isArchived: !note.isArchived };
        } else {
          return note;
        }
      });
    },
  },
});

export const { addNote, updateNote, deleteNote, toggleArchive } =
  notesSlice.actions;
export default notesSlice.reducer;
