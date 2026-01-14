import { useGetNotesQuery } from "../store/features/api/apiSlice.ts";

import EditorPaneActions from "../components/editorpane/EditorPaneActions.tsx";
import EditorPaneContent from "../components/editorpane/EditorPaneContent.tsx";
import EditorPaneContentSkeleton from "../components/editorpane/EditorPaneContentSkeleton.tsx";
import EditorPaneHeader from "../components/editorpane/EditorPaneHeader.tsx";
import EditorPaneHeaderSkeleton from "../components/editorpane/EditorPaneHeaderSkeleton.tsx";

function EditorPaneLayout() {
  const { isLoading } = useGetNotesQuery();

  return (
    <div className="border-x-surface flex h-full flex-col gap-2 border-x p-5">
      {isLoading ? (
        <>
          <EditorPaneHeaderSkeleton />
          <EditorPaneContentSkeleton />
        </>
      ) : (
        <>
          <EditorPaneHeader />
          <EditorPaneContent />
          <EditorPaneActions />
        </>
      )}
    </div>
  );
}

export default EditorPaneLayout;
