import { notes } from "../constants/data.ts";

import logo from "../assets/logo.svg";

function SideBarLayout({
  selectedNote,
  selectedTag,
  setSelectedNote,
  setSelectedTag,
}: {
  selectedNote: string;
  selectedTag: string;
  setSelectedNote: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  const tags = [
    ...new Set(
      notes
        .filter((note) => note.status === selectedNote)
        .flatMap((note) => {
          return note.tags.split(", ");
        }),
    ),
  ];

  const getButtonClass = (noteType: string) =>
    `hover:bg-focus cursor-pointer rounded-md px-3 py-2 text-left transition-all duration-150 ${
      selectedNote === noteType && !selectedTag
        ? "bg-focus text-main"
        : selectedNote === noteType && selectedTag
          ? "text-main"
          : ""
    }`;

  return (
    <div
      className={
        "border-r-surface grid h-screen grid-rows-[auto_auto_1fr] gap-2 border-r py-4 pl-6"
      }
    >
      <img src={logo} className="size-11" alt="Logo of Notioneer" />

      <div className="border-b-surface grid grid-rows-2 gap-1 border-b py-2 pr-6">
        <button
          className={getButtonClass("all")}
          onClick={() => {
            setSelectedNote("all");
            setSelectedTag((prev) => {
              if (selectedNote === "all") return "";

              return notes.some(
                (note) =>
                  note.status === "all" && note.tags.split(", ").includes(prev),
              )
                ? prev
                : "";
            });
          }}
        >
          All Notes
        </button>

        <button
          className={getButtonClass("archived")}
          onClick={() => {
            setSelectedNote("archived");
            setSelectedTag((prev) => {
              if (selectedNote === "archived") return "";

              return notes.some(
                (note) =>
                  note.status === "archived" &&
                  note.tags.split(", ").includes(prev),
              )
                ? prev
                : "";
            });
          }}
        >
          Archived Notes
        </button>
      </div>

      <div className="flex h-full flex-col gap-2 overflow-hidden">
        <span className="text-[1rem] text-gray-500">Tags</span>

        <div className="thin-scrollbar flex h-full flex-col gap-1 overflow-y-auto pr-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`hover:bg-focus cursor-pointer rounded-md px-3 py-2 break-all transition-all duration-150 ${selectedTag === tag ? "bg-focus text-main" : ""}`}
              onClick={() => {
                if (selectedTag === tag) {
                  setSelectedTag("");
                } else {
                  setSelectedTag(tag);
                }
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBarLayout;
