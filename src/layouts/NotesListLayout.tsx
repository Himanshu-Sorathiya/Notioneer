import { useEffect } from "react";

import { selectFilteredAndOrderedNotes } from "../store/features/api/apiSelector.ts";
import { useGetNotesQuery } from "../store/features/api/apiSlice.ts";

import { selectSelectedNoteId } from "../store/features/notes/notesSelectors.ts";
import {
  setDraftNote,
  setSelectedNote,
} from "../store/features/notes/notesSlice.ts";
import { selectIsCreatingNewNote } from "../store/features/ui/uiSelectors.ts";
import { incrementEditorResetKey } from "../store/features/ui/uiSlice.ts";

import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";

import NotesListNewNoteButton from "../components/noteslist/NotesListNewNoteButton.tsx";
import NotesListNote from "../components/noteslist/NotesListNote.tsx";
import NotesListNoteSkeleton from "../components/noteslist/NotesListNoteSkeleton.tsx";

function NotesListLayout() {
  const orderedNotes = useAppSelector(selectFilteredAndOrderedNotes);

  const selectedNoteId = useAppSelector(selectSelectedNoteId);

  const isCreatingNewNote = useAppSelector(selectIsCreatingNewNote);

  const { isLoading, isFetching } = useGetNotesQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCreatingNewNote === true || isLoading === true || isFetching === true)
      return;

    if (orderedNotes.length === 0) {
      if (selectedNoteId) {
        dispatch(setSelectedNote(null));
        dispatch(setDraftNote(null));

        dispatch(incrementEditorResetKey());
      }

      return;
    }

    const exists = orderedNotes.some((n) => n.id === selectedNoteId);

    if (!exists) {
      if (selectedNoteId) return;

      dispatch(setSelectedNote(orderedNotes[0]));
      dispatch(setDraftNote(orderedNotes[0]));
      dispatch(incrementEditorResetKey());
    }
  }, [
    orderedNotes.length,
    selectedNoteId,
    isCreatingNewNote,
    isLoading,
    dispatch,
  ]);

  return (
    <div className="thin-scrollbar flex flex-col gap-1 overflow-y-auto px-3 py-4 [scrollbar-gutter:stable]">
      <NotesListNewNoteButton />

      {isLoading
        ? [...Array(5)].map((_, i) => <NotesListNoteSkeleton key={i} />)
        : orderedNotes.map((note) => (
            <NotesListNote key={note.id} note={note} />
          ))}
    </div>
  );
}

export default NotesListLayout;
