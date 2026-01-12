import type { RootState } from "../../store.ts";

export const selectMode = (state: RootState) => state.ui.mode;

export const selectIsCreatingNewNote = (state: RootState) =>
  state.ui.isCreatingNewNote;

export const selectIsDirty = (state: RootState) => state.ui.isDirty;

export const selectEditorResetKey = (state: RootState) =>
  state.ui.editorResetKey;
