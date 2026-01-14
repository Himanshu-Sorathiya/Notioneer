import {
  useAddNoteMutation,
  useUpdateNoteMutation,
} from "../../store/features/api/apiSlice.ts";

import {
  selectDraftNote,
  selectSelectedNote,
} from "../../store/features/notes/notesSelectors.ts";
import {
  setDraftNote,
  setSelectedNote,
} from "../../store/features/notes/notesSlice.ts";
import {
  selectIsCreatingNewNote,
  selectIsDirty,
} from "../../store/features/ui/uiSelectors.ts";
import {
  incrementEditorResetKey,
  setIsCreatingNewNote,
  setIsDirty,
} from "../../store/features/ui/uiSlice.ts";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";

import EditorPaneButton from "./EditorPaneButton.tsx";

import type { Note } from "../../types/note.ts";

function EditorPaneActions() {
  const selectedNote = useAppSelector(selectSelectedNote);
  const draftNote = useAppSelector(selectDraftNote);

  const isCreatingNewNote = useAppSelector(selectIsCreatingNewNote);
  const isDirty = useAppSelector(selectIsDirty);

  const [addNote] = useAddNoteMutation();
  const [updateNote] = useUpdateNoteMutation();

  const dispatch = useAppDispatch();

  const handleSave = async () => {
    if (!draftNote) return;

    const noteToSave: Note = {
      ...draftNote,
      updated_at: new Date().toISOString(),
    };

    try {
      let savedNote: Note;

      if (isCreatingNewNote) {
        savedNote = await addNote(noteToSave).unwrap();
      } else {
        await updateNote(noteToSave).unwrap();
        savedNote = noteToSave;
      }

      dispatch(setIsCreatingNewNote(false));
      dispatch(setIsDirty(false));

      dispatch(setSelectedNote(savedNote));
      dispatch(setDraftNote(savedNote));

      dispatch(incrementEditorResetKey());
    } catch (error) {}
  };

  const handleCancel = () => {
    dispatch(setIsCreatingNewNote(false));
    dispatch(setIsDirty(false));

    dispatch(setSelectedNote(selectedNote));
    dispatch(setDraftNote(selectedNote));

    dispatch(incrementEditorResetKey());
  };

  return (
    <div className="border-t-surface flex justify-end gap-2 border-t pt-3">
      <EditorPaneButton
        label="Save"
        className="bg-main hover:bg-[#2547d0]"
        disabled={!isDirty}
        onClick={handleSave}
      />

      <EditorPaneButton
        label="Cancel"
        className="bg-muted hover:bg-focus"
        disabled={!isDirty}
        onClick={handleCancel}
      />
    </div>
  );
}

export default EditorPaneActions;
