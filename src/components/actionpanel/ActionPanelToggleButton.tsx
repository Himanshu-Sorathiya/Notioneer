import { useUpdateNoteMutation } from "../../store/features/api/apiSlice.ts";

import { selectSelectedNote } from "../../store/features/notes/notesSelectors.ts";
import {
  setDraftNote,
  setSelectedNote,
} from "../../store/features/notes/notesSlice.ts";
import {
  incrementEditorResetKey,
  setIsDirty,
} from "../../store/features/ui/uiSlice.ts";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";

import Icon from "../Icon.tsx";

function ActionPanelToggleButton() {
  const selectedNote = useAppSelector(selectSelectedNote);

  const [updateNote] = useUpdateNoteMutation();

  const dispatch = useAppDispatch();

  const handleToggle = async () => {
    if (!selectedNote) return;

    await updateNote({
      ...selectedNote,
      is_archived: !selectedNote.is_archived,
    }).unwrap();

    dispatch(setSelectedNote(null));
    dispatch(setDraftNote(null));

    dispatch(setIsDirty(false));

    dispatch(incrementEditorResetKey());
  };

  if (!selectedNote) return null;

  return (
    <button
      className="hover:text-main flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 text-center text-gray-300 transition-all duration-150"
      onClick={handleToggle}
    >
      <Icon
        id={`${selectedNote.is_archived === false ? "icon-archive-notes" : "icon-unarchive-notes"}`}
        className="size-5"
      ></Icon>

      <span>
        {selectedNote.is_archived ? "Unarchive Note" : "Archive Note"}
      </span>
    </button>
  );
}

export default ActionPanelToggleButton;
