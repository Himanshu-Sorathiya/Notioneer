interface Note {
  id: string;
  user_id?: string;
  title: string;
  tags: string[];
  content: string;
  is_archived: boolean;
  updated_at: string;
  created_at: string;
}

export type { Note };
