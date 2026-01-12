import { selectIsTagSelected } from "../../store/features/filter/filterSelectors.ts";
import { setSelectedTag } from "../../store/features/filter/filterSlice.ts";
import { selectIsDirty } from "../../store/features/ui/uiSelectors.ts";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";

import Icon from "../Icon.tsx";

function SideBarTag({ tag }: { tag: string }) {
  const isTagActive = useAppSelector((state) =>
    selectIsTagSelected(state, tag),
  );

  const isDirty = useAppSelector(selectIsDirty);

  const dispatch = useAppDispatch();

  return (
    <button
      className={`hover:bg-focus flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 break-all transition-all duration-150 disabled:cursor-not-allowed ${isTagActive ? "bg-focus text-main" : ""}`}
      disabled={isDirty}
      onClick={() => {
        dispatch(setSelectedTag(isTagActive ? "" : tag));
      }}
    >
      <Icon id="icon-tag" className="size-5"></Icon>

      <span>{tag}</span>
    </button>
  );
}

export default SideBarTag;
