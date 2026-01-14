import { useGetNotesQuery } from "../../store/features/api/apiSlice.ts";

import { selectIsArchivedView } from "../../store/features/filter/filterSelectors.ts";

import { useAppSelector } from "../../hooks/hooks.ts";

import SideBarTag from "./SideBarTag.tsx";
import SidebarTagSkeleton from "./SidebarTagSkeleton.tsx";

function SideBarTags() {
  const isArchivedView = useAppSelector(selectIsArchivedView);

  const { data: notes = [], isLoading } = useGetNotesQuery();

  const tagsByArchiveStatus = Array.from(
    new Set(
      notes
        .filter((note) => note.is_archived === isArchivedView)
        .flatMap((note) => note.tags),
    ),
  );

  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <span className="text-[1rem] text-gray-500">Tags</span>

      <div className="thin-scrollbar flex h-full flex-col gap-1 overflow-y-auto pr-3 [scrollbar-gutter:stable]">
        {isLoading
          ? [...Array(7)].map((_, i) => <SidebarTagSkeleton key={i} />)
          : tagsByArchiveStatus.map((tag) => (
              <SideBarTag key={tag} tag={tag} />
            ))}
      </div>
    </div>
  );
}

export default SideBarTags;
