import { useEffect } from "react";

import { useGetNotesQuery } from "../store/features/api/apiSlice.ts";

import {
  selectIsArchivedView,
  selectSearchFilter,
  selectSelectedTag,
} from "../store/features/filter/filterSelectors.ts";
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

import type { Note } from "../types/note.ts";

const sortByDate = (a: Note, b: Note) =>
  new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();

function NotesListLayout() {
  const isArchivedView = useAppSelector(selectIsArchivedView);
  const selectedTag = useAppSelector(selectSelectedTag);
  const searchFilter = useAppSelector(selectSearchFilter);

  const { data: notes = [] } = useGetNotesQuery();

  let sortedNotes = [...notes].sort(sortByDate);

  const query = searchFilter.toLowerCase();

  let orderedNotes = sortedNotes.filter((note) => {
    const matchesArchive = note.is_archived === isArchivedView;

    const matchesTag = !selectedTag || note.tags.includes(selectedTag);

    return matchesArchive && matchesTag;
  });

  if (query) {
    orderedNotes = orderedNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        note.content.toLowerCase().includes(query),
    );

    orderedNotes = [...orderedNotes].sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query) ? 2 : 0;

      const bTitle = b.title.toLowerCase().includes(query) ? 2 : 0;

      if (aTitle !== bTitle) return bTitle - aTitle;

      const aTag = a.tags.some((t) => t.toLowerCase().includes(query)) ? 1 : 0;

      const bTag = b.tags.some((t) => t.toLowerCase().includes(query)) ? 1 : 0;

      return bTag - aTag;
    });
  }

  const selectedNoteId = useAppSelector(selectSelectedNoteId);

  const isCreatingNewNote = useAppSelector(selectIsCreatingNewNote);

  const { isLoading } = useGetNotesQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCreatingNewNote === true) return;

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
      dispatch(setSelectedNote(orderedNotes[0]));
      dispatch(setDraftNote(orderedNotes[0]));

      dispatch(incrementEditorResetKey());
    }
  }, [orderedNotes.length, selectedNoteId, isCreatingNewNote, dispatch]);

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
