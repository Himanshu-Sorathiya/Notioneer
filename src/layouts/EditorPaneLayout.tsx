import { notes } from "../constants/data.ts";

function EditorPaneLayout({
  selectedNoteId,
}: {
  selectedNoteId: number | null;
}) {
  const note = notes.find((note) => note.id === selectedNoteId);

  if (!note)
    return (
      <div
        className={"border-x-surface flex flex-col gap-2 border-x p-5"}
      ></div>
    );

  return (
    <div className={"border-x-surface flex flex-col gap-2 border-x p-5"}>
      <div className="border-b-surface flex flex-col gap-3 border-b pb-3">
        <div className="text-2xl font-bold">{note?.title}</div>

        <div className="grid grid-cols-[1fr_4fr] gap-2">
          <span className="text-gray-300">Tags</span>

          <span className="font-semibold">{note?.tags}</span>
        </div>

        <div className="grid grid-cols-[1fr_4fr] gap-2">
          <span className="text-gray-300">Last Edited</span>

          <span className="font-semibold">{note?.lastEdited}</span>
        </div>
      </div>

      <div className="text-strong">{note?.content}</div>
    </div>
  );
}

export default EditorPaneLayout;
