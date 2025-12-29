import type { Note } from "../types/types.ts";

function ActionPanelLayout({ note }: { note: Note | null }) {
  if (!note) return null;

  return (
    <div className="flex flex-col gap-3 px-3 py-4">
      <button className="hover:text-main w-full cursor-pointer rounded-lg border border-gray-400 px-4 py-2 text-center transition-all duration-150">
        {note?.isArchived === false ? "Archive Note" : "Unarchive Note"}
      </button>

      <button className="hover:text-main w-full cursor-pointer rounded-lg border border-gray-400 px-4 py-2 text-center transition-all duration-150">
        Delete Note
      </button>
    </div>
  );
}

export default ActionPanelLayout;
