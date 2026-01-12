import type { RootState } from "../../store.ts";

export const selectIsArchivedView = (state: RootState) =>
  state.filter.isArchivedView;

export const selectSelectedTag = (state: RootState) => state.filter.selectedTag;

export const selectSearchFilter = (state: RootState) =>
  state.filter.searchFilter;

export const selectIsTagSelected = (state: RootState, tag: string) =>
  tag === state.filter.selectedTag;
