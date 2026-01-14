import { createSelector } from "@reduxjs/toolkit";

import apiSlice from "./apiSlice.ts";

import type { RootState } from "../../store.ts";
import {
  selectIsArchivedView,
  selectSearchFilter,
  selectSelectedTag,
} from "../filter/filterSelectors.ts";

const selectNotes = apiSlice.endpoints.getNotes.select();

export const selectTagsByArchiveStatus = createSelector(
  [selectNotes, (_state: RootState, isArchived: boolean) => isArchived],
  (notesResult, isArchived) => {
    const notes = notesResult?.data ?? [];

    return Array.from(
      new Set(
        notes
          .filter((note) => note.is_archived === isArchived)
          .flatMap((note) => note.tags),
      ),
    );
  },
);

export const selectFilteredAndOrderedNotes = createSelector(
  [selectNotes, selectIsArchivedView, selectSelectedTag, selectSearchFilter],
  (notesResult, isArchivedView, selectedTag, searchFilter) => {
    const notes = notesResult?.data ?? [];
    const query = searchFilter.toLowerCase();

    let filtered = notes.filter((note) => {
      const matchesArchive = note.is_archived === isArchivedView;

      const matchesTag = !selectedTag || note.tags.includes(selectedTag);

      return matchesArchive && matchesTag;
    });

    if (!query) return filtered;

    return [...filtered].sort((a, b) => {
      const getScore = (note: typeof a) => {
        if (note.title.toLowerCase().includes(query)) return 2;

        if (note.tags.some((t) => t.toLowerCase().includes(query))) return 1;

        return 0;
      };

      const scoreA = getScore(a);
      const scoreB = getScore(b);

      if (scoreA !== scoreB) return scoreB - scoreA;

      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    });
  },
);
