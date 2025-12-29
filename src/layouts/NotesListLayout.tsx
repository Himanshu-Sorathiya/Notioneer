import type { Note } from "../types/types.ts";

function NotesListLayout({
  notes,
  selectedNoteId,
  setSelectedNoteId,
}: {
  notes: Note[];
  selectedNoteId: null | number;
  setSelectedNoteId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div className="thin-scrollbar flex flex-col gap-1 overflow-y-auto px-3 py-4">
      <button className="bg-main mb-2 w-full cursor-pointer rounded-lg px-4 py-2 text-center">
        + Create new Note
      </button>

      {notes.map((note) => {
        return (
          <div
            key={note.id}
            className={`border-b-focus border-b pb-0.5 ${note.id === selectedNoteId ? "bg-focus" : ""}`}
            onClick={() => setSelectedNoteId(note.id)}
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
