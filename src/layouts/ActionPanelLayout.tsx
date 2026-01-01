import { useDispatch, useSelector } from "react-redux";

import { deleteNote, toggleArchive } from "../store/notesSlice.ts";
import type { RootState } from "../store/store.ts";

function ActionPanelLayout() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  const selectedNote = useSelector((state: RootState) => state.ui.selectedNote);

  const note = notes.find((note) => note.id === selectedNote);

  const dispatch = useDispatch();

  if (!note) return null;

  return (
    <div className="flex flex-col gap-3 px-3 py-4">
      <button
        className="hover:text-main w-full cursor-pointer rounded-lg border border-gray-400 px-4 py-2 text-center transition-all duration-150"
        onClick={() => dispatch(toggleArchive(note.id))}
      >
        {note?.isArchived === false ? "Archive Note" : "Unarchive Note"}
      </button>

      <button
        className="hover:text-main w-full cursor-pointer rounded-lg border border-gray-400 px-4 py-2 text-center transition-all duration-150"
        onClick={() => dispatch(deleteNote(note.id))}
      >
        Delete Note
      </button>
    </div>
  );
}

export default ActionPanelLayout;
