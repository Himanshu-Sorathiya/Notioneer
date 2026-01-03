import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../store/store.ts";
import { setSelectedNote } from "../store/uiSlice.ts";

import Icon from "../components/Icon.tsx";

function NotesListLayout() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  const isArchivedView = useSelector(
    (state: RootState) => state.filter.isArchivedView,
  );
  const selectedTag = useSelector(
    (state: RootState) => state.filter.selectedTag,
  );
  const searchFilter = useSelector(
    (state: RootState) => state.filter.searchFilter,
  );

  const selectedNote = useSelector((state: RootState) => state.ui.selectedNote);

  const dispatch = useDispatch();

  const filteredNotes = notes
    .filter((note) => note.isArchived === isArchivedView)
    .filter(
      (note) =>
        !selectedTag || note.tags.some((tag) => tag.includes(selectedTag)),
    )
    .filter((note) => {
      if (!searchFilter) return true;

      const query = searchFilter.toLowerCase();

      return (
        note.title.toLowerCase().includes(query) ||
        note.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        note.content.toLowerCase().includes(query)
      );
    });

  const orderedNotes = searchFilter
    ? [
        ...filteredNotes.filter((n) =>
          n.title.toLowerCase().includes(searchFilter.toLowerCase()),
        ),
        ...filteredNotes.filter(
          (n) =>
            !n.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
            n.tags.some((tag) =>
              tag.toLowerCase().includes(searchFilter.toLowerCase()),
            ),
        ),
        ...filteredNotes.filter(
          (n) =>
            !n.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
            !n.tags.some((tag) =>
              tag.toLowerCase().includes(searchFilter.toLowerCase()),
            ) &&
            n.content.toLowerCase().includes(searchFilter.toLowerCase()),
        ),
      ]
    : filteredNotes;

  useEffect(() => {
    if (orderedNotes.length === 0) {
      dispatch(setSelectedNote(null));

      return;
    }

    const exists = orderedNotes.some((n) => n.id === selectedNote);

    if (!exists) {
      dispatch(setSelectedNote(orderedNotes[0].id));
    }
  }, [orderedNotes, selectedNote]);

  return (
    <div className="thin-scrollbar flex flex-col gap-1 overflow-y-auto px-3 py-4">
      <button className="bg-main mb-2 flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-center">
        <Icon id="icon-plus" className="size-5"></Icon>

        <span>Create new Note</span>
      </button>

      {orderedNotes.map((note) => {
        return (
          <div
            key={note.id}
            className={`border-b-focus border-b pb-0.5 ${note.id === selectedNote ? "bg-focus" : ""}`}
            onClick={() => dispatch(setSelectedNote(note.id))}
          >
            <div
              key={note.id}
              className="hover:bg-focus flex cursor-pointer flex-col gap-2 rounded-lg px-4 py-2"
            >
              <h2 className="font-bold">{note.title}</h2>

              <p className="flex flex-wrap gap-1 text-xs">
                {note.tags.map((tag) => (
                  <span key={tag} className="bg-mark rounded-md px-1.5 py-1">
                    {tag}
                  </span>
                ))}
              </p>

              <p className="text-sm">{note.lastEdited}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NotesListLayout;
