import { useDispatch, useSelector } from "react-redux";

import { deleteNote, toggleArchive } from "../store/notesSlice.ts";
import type { RootState } from "../store/store.ts";

import Icon from "../components/Icon.tsx";

function ActionPanelLayout() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  const selectedNote = useSelector((state: RootState) => state.ui.selectedNote);

  const note = notes.find((note) => note.id === selectedNote);

  const dispatch = useDispatch();

  if (!note) return null;

  return (
    <div className="flex flex-col gap-3 px-3 py-4">
      <button
        className="hover:text-main flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 text-center text-gray-300 transition-all duration-150"
        onClick={() => dispatch(toggleArchive(note.id))}
      >
        <Icon
          id={`${note?.isArchived === false ? "icon-archive-notes" : "icon-unarchive-notes"}`}
          className="size-5"
        ></Icon>

        <span>
          {note?.isArchived === false ? "Archive Note" : "Unarchive Note"}
        </span>
      </button>

      <button
        className="hover:text-main flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 text-center text-gray-300 transition-all duration-150"
        onClick={() => dispatch(deleteNote(note.id))}
      >
        <Icon id="icon-trash" className="size-5"></Icon>

        <span> Delete Note</span>
      </button>
    </div>
  );
}

export default ActionPanelLayout;
