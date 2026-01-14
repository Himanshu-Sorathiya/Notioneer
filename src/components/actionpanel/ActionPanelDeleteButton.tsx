import { useDeleteNoteMutation } from "../../store/features/api/apiSlice.ts";

import { selectSelectedNoteId } from "../../store/features/notes/notesSelectors.ts";
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

function ActionPanelButton() {
  const selectedNoteId = useAppSelector(selectSelectedNoteId);

  const [deleteNote] = useDeleteNoteMutation();

  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    if (!selectedNoteId) return;

    await deleteNote(selectedNoteId).unwrap();

    dispatch(setSelectedNote(null));
    dispatch(setDraftNote(null));

    dispatch(setIsDirty(false));

    dispatch(incrementEditorResetKey());
  };

  if (!selectedNoteId) return null;

  return (
    <button
      className="hover:text-main flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 text-center text-gray-300 transition-all duration-150"
      onClick={handleDelete}
    >
      <Icon id="icon-trash" className="size-5"></Icon>

      <span>Delete Note</span>
    </button>
  );
}

export default ActionPanelButton;
