import { createSelector } from "@reduxjs/toolkit";

import type { Note } from "../../../types/note.ts";

import type { RootState } from "../../store.ts";

import {
    selectIsArchivedView,
    selectSearchFilter,
    selectSelectedTag,
} from "../filter/filterSelectors.ts";

export const selectNotes = (state: RootState) => state.notes.notes;

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

export const selectTagsByArchiveStatus = createSelector(
  [selectNotes, (_state: RootState, isArchived: boolean) => isArchived],
  (notes, isArchivedView) => {
    return Array.from(
      new Set(
        notes
          .filter((note) => note.is_archived === isArchivedView)
          .flatMap((note) => note.tags),
      ),
    );
  },
);

export const selectFilteredAndOrderedNotes = createSelector(
  [selectNotes, selectIsArchivedView, selectSelectedTag, selectSearchFilter],
  (notes, isArchivedView, selectedTag, searchFilter) => {
    const query = searchFilter.toLowerCase();

    let result = notes.filter((note) => {
      const matchesArchive = note.is_archived === isArchivedView;

      const matchesTag = !selectedTag || note.tags.includes(selectedTag);

      return matchesArchive && matchesTag;
    });

    if (query) {
      result = result.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          note.content.toLowerCase().includes(query),
      );

      return [...result].sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(query) ? 2 : 0;

        const bTitle = b.title.toLowerCase().includes(query) ? 2 : 0;

        if (aTitle !== bTitle) return bTitle - aTitle;

        const aTag = a.tags.some((t) => t.toLowerCase().includes(query))
          ? 1
          : 0;

        const bTag = b.tags.some((t) => t.toLowerCase().includes(query))
          ? 1
          : 0;

        return bTag - aTag;
      });
    }

    return result;
  },
);
