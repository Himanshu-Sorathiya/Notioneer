import Icon from "../Icon.tsx";

function SideBarNotesButton({
  archive,
  is_archivedView,
  selectedTag,
  iconId,
  label,
  disabled,
  onClick,
}: {
  archive: boolean;
  is_archivedView: boolean;
  selectedTag: string;
  iconId: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  const getButtonClass = (archived: boolean) =>
    `${
      is_archivedView === archived && !selectedTag
        ? "bg-focus text-main"
        : is_archivedView === archived && selectedTag
          ? "text-main"
          : ""
    }`;

  return (
    <button
      className={`hover:bg-focus group text-strong flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all duration-150 disabled:cursor-not-allowed ${getButtonClass(archive)}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon
        id={iconId}
        className={`group-hover:text-main size-5 transition-all duration-150 ${is_archivedView === archive ? "text-main" : ""}`}
      ></Icon>

      <span>{label}</span>
    </button>
  );
}

export default SideBarNotesButton;
