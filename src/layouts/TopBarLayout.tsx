function TopBarLayout({
  isSelectedNoteArchived,
  selectedTag,
  searchFilter,
  setSearchFilter,
}: {
  isSelectedNoteArchived: boolean;
  selectedTag: string;
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const header = selectedTag
    ? `${isSelectedNoteArchived === false ? "All" : "Archived"} Notes tagged: ${selectedTag}`
    : isSelectedNoteArchived === false
      ? "All Notes"
      : "Archived Notes";

  return (
    <div className="border-b-surface col-span-3 flex items-center justify-between border-b px-4 py-4">
      <span className="max-w-md text-2xl font-bold break-all">{header}</span>

      <div className="relative min-w-sm">
        <input
          type="text"
          placeholder="Search by Title, Tags and Content..."
          className={`bg-base peer focus:border-strong focus:text-strong w-full rounded-md border border-gray-400 py-3 pr-4 pl-12 text-sm text-gray-400 transition-all duration-150 outline-none ${searchFilter ? "text-strong" : ""} `}
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`peer-focus:text-strong absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-gray-400 ${searchFilter ? "text-strong" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default TopBarLayout;
