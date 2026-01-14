function NotesListNoteSkeleton() {
  return (
    <div className="border-b-focus border-b pb-1">
      <div className="flex flex-col gap-2 px-4 py-2">
        <div className="bg-mark h-6 w-4/5 animate-pulse rounded" />

        <div className="flex flex-wrap gap-1">
          <div className="bg-mark h-4.5 w-10 animate-pulse rounded-md" />

          <div className="bg-mark h-4.5 w-12 animate-pulse rounded-md" />

          <div className="bg-mark h-4.5 w-16 animate-pulse rounded-md" />
        </div>

        <div className="bg-mark h-5 w-3/5 animate-pulse rounded" />
      </div>
    </div>
  );
}

export default NotesListNoteSkeleton;
