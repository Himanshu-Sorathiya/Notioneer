import type { Note } from "../types/types.ts";

import logo from "../assets/logo.svg";

function SideBarLayout({
  notes,
  isSelectedNoteArchived,
  selectedTag,
  searchFilter,
  setIsSelectedNoteArchived,
  setSelectedTag,
  setSearchFilter,
}: {
  notes: Note[];
  isSelectedNoteArchived: boolean;
  selectedTag: string;
  searchFilter: string;
  setIsSelectedNoteArchived: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const tags = [
    ...new Set(
      notes
        .filter((note) => note.isArchived === isSelectedNoteArchived)
        .flatMap((note) => note.tags),
    ),
  ];

  const getButtonClass = (archived: boolean) =>
    `hover:bg-focus cursor-pointer rounded-md px-3 py-2 text-left transition-all duration-150 ${
      isSelectedNoteArchived === archived && !selectedTag
        ? "bg-focus text-main"
        : isSelectedNoteArchived === archived && selectedTag
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
          className={getButtonClass(false)}
          onClick={() => {
            if (!isSelectedNoteArchived) {
              setSelectedTag("");

              setSearchFilter("");
            } else {
              setIsSelectedNoteArchived(false);

              const tagsInAllNotes = [
                ...new Set(
                  notes.filter((n) => !n.isArchived).flatMap((n) => n.tags),
                ),
              ];
              setSelectedTag((prev) =>
                tagsInAllNotes.includes(prev) ? prev : "",
              );

              setSearchFilter(searchFilter);
            }
          }}
        >
          All Notes
        </button>

        <button
          className={getButtonClass(true)}
          onClick={() => {
            if (isSelectedNoteArchived) {
              setSelectedTag("");

              setSearchFilter("");
            } else {
              setIsSelectedNoteArchived(true);

              const tagsInArchived = [
                ...new Set(
                  notes.filter((n) => n.isArchived).flatMap((n) => n.tags),
                ),
              ];
              setSelectedTag((prev) =>
                tagsInArchived.includes(prev) ? prev : "",
              );

              setSearchFilter(searchFilter);
            }
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
