import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";

function TopBarHeader() {
  const is_archivedView = useSelector(
    (state: RootState) => state.filter.is_archivedView,
  );
  const selectedTag = useSelector(
    (state: RootState) => state.filter.selectedTag,
  );

  const header = selectedTag
    ? `${is_archivedView === false ? "All" : "Archived"} Notes tagged: ${selectedTag}`
    : is_archivedView === false
      ? "All Notes"
      : "Archived Notes";

  return (
    <span className="max-w-md text-2xl font-bold break-all">{header}</span>
  );
}

export default TopBarHeader;
