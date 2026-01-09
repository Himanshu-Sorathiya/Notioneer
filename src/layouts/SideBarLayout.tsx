import { useDispatch, useSelector } from "react-redux";

import {
  resetFilters,
  setArchivedView,
  setSearchFilter,
  setSelectedTag,
} from "../store/filterSlice.ts";
import type { RootState } from "../store/store.ts";

import Logo from "../components/Logo.tsx";
import SideBarNotesButton from "../components/sidebar/SideBarNotesButton.tsx";
import SideBarTags from "../components/sidebar/SideBarTags.tsx";

function SideBarLayout() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  const is_archivedView = useSelector(
    (state: RootState) => state.filter.is_archivedView,
  );
  const selectedTag = useSelector(
    (state: RootState) => state.filter.selectedTag,
  );
  const searchFilter = useSelector(
    (state: RootState) => state.filter.searchFilter,
  );

  const isDirty = useSelector((state: RootState) => state.ui.isDirty);

  const dispatch = useDispatch();

  function handleNotesViewChange({ targetView }: { targetView: boolean }) {
    if (is_archivedView === targetView) {
      dispatch(resetFilters());
    } else {
      if (targetView === true && isDirty === true) return;

      dispatch(setArchivedView(targetView));

      const tagsInNotes = [
        ...new Set(
          notes
            .filter((n) => (targetView ? n.is_archived : !n.is_archived))
            .flatMap((n) => n.tags),
        ),
      ];
      dispatch(
        setSelectedTag(tagsInNotes.includes(selectedTag) ? selectedTag : ""),
      );

      dispatch(setSearchFilter(searchFilter));
    }
  }

  return (
    <div className="border-r-surface grid h-screen grid-rows-[auto_auto_1fr] gap-2 border-r py-4 pl-6">
      <Logo />

      <div className="border-b-surface grid grid-rows-2 gap-1 border-b py-2 pr-6">
        <SideBarNotesButton
          archive={false}
          is_archivedView={is_archivedView}
          selectedTag={selectedTag}
          iconId="icon-all-notes"
          label="All Notes"
          onClick={() => handleNotesViewChange({ targetView: false })}
        />

        <SideBarNotesButton
          archive={true}
          is_archivedView={is_archivedView}
          selectedTag={selectedTag}
          disabled={isDirty}
          iconId="icon-archive-notes"
          label="Archived Notes"
          onClick={() => handleNotesViewChange({ targetView: true })}
        />
      </div>

      <SideBarTags />
    </div>
  );
}

export default SideBarLayout;
