import Icon from "../Icon";

function SidebarTagSkeleton() {
  return (
    <div className="flex items-center gap-2 rounded-md px-3 py-2">
      <Icon id="icon-tag" className="size-5" />

      <div className="bg-mark h-6 w-2/3 animate-pulse rounded" />
    </div>
  );
}

export default SidebarTagSkeleton;
