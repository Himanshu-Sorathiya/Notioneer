import { useEffect, useState } from "react";

import ActionPanelLayout from "./ActionPanelLayout.tsx";
import EditorPaneLayout from "./EditorPaneLayout.tsx";
import NotesListLayout from "./NotesListLayout.tsx";
import SideBarLayout from "./SideBarLayout.tsx";
import TopBarLayout from "./TopBarLayout.tsx";

import { notes } from "../constants/data.ts";

function AppLayout() {
  const [isSelectedNoteArchived, setIsSelectedNoteArchived] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const filteredNotes = notes

    .filter((note) => note.isArchived === isSelectedNoteArchived)
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

  const [selectedNoteId, setSelectedNoteId] = useState<null | number>(null);

  useEffect(() => {
    if (orderedNotes.length === 0) {
      setSelectedNoteId(null);
      return;
    }

    const exists = orderedNotes.some((n) => n.id === selectedNoteId);

    if (!exists) {
      setSelectedNoteId(orderedNotes[0].id);
    }
  }, [orderedNotes, selectedNoteId]);

  return (
    <div
      className={
        "bg-base text-strong font-inter grid h-screen w-screen grid-cols-[4fr_20fr] overflow-hidden"
      }
    >
      <SideBarLayout
        notes={notes}
        isSelectedNoteArchived={isSelectedNoteArchived}
        selectedTag={selectedTag}
        searchFilter={searchFilter}
        setIsSelectedNoteArchived={setIsSelectedNoteArchived}
        setSelectedTag={setSelectedTag}
        setSearchFilter={setSearchFilter}
      />

      <div
        className={
          "grid grid-cols-[5fr_11fr_4fr] grid-rows-[1fr_19fr] overflow-hidden pr-6"
        }
      >
        <TopBarLayout
          isSelectedNoteArchived={isSelectedNoteArchived}
          selectedTag={selectedTag}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />

        <NotesListLayout
          notes={orderedNotes}
          selectedNoteId={selectedNoteId}
          setSelectedNoteId={setSelectedNoteId}
        />

        <EditorPaneLayout selectedNoteId={selectedNoteId} />

        <ActionPanelLayout
          note={notes.find((n) => n.id === selectedNoteId) || null}
        />
      </div>
    </div>
  );
}

export default AppLayout;
