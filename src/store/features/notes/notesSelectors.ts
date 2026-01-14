import type { Note } from "../../../types/note.ts";

import type { RootState } from "../../store.ts";

export const selectSelectedNote = (state: RootState) =>
  state.notes.selectedNote;

export const selectDraftNote = (state: RootState) => state.notes.draftNote;

export const selectIsNoteSelected = (state: RootState, note: Note) =>
  state.notes.selectedNote?.id === note.id;

export const selectSelectedNoteId = (state: RootState) =>
  state.notes.selectedNote?.id;

export const selectSelectedNoteArchiveStatus = (state: RootState) =>
  state.notes.selectedNote?.is_archived;

export const selectDraftNoteId = (state: RootState) =>
  state.notes.draftNote?.id;

export const selectDraftNoteTitle = (state: RootState) =>
  state.notes.draftNote?.title || "";

export const selectDraftNoteTags = (state: RootState) =>
  state.notes.draftNote?.tags || [];

export const selectDraftNoteUpdatedAt = (state: RootState) =>
  state.notes.draftNote?.updated_at;

export const selectDraftNoteContent = (state: RootState) =>
  state.notes.draftNote?.content || "";
