interface Note {
  id: string;
  title: string;
  tags: string[];
  content: string;
  is_archived: boolean;
  updated_at: string;
}

export type { Note };
