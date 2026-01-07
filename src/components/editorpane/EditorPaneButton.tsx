function EditorPaneButton({
  label,
  className,
  onClick
}: {
  label: string;
  className: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`bg-main text-strong cursor-pointer rounded-lg px-4 py-2 text-center transition-all duration-150 hover:bg-[#2547d0] ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default EditorPaneButton;
