import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import supabase from "../../../services/supabase.ts";

import type { Note } from "../../../types/note.ts";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    getNotes: builder.query<Note[], void>({
      providesTags: ["Notes"],
      queryFn: async () => {
        const { data, error } = await supabase.from("notes").select("*");

        if (error) return { error: error as any };

        return { data: data as Note[] };
      },
    }),

    addNote: builder.mutation<Note, Omit<Note, "id" | "user_id">>({
      invalidatesTags: ["Notes"],
      queryFn: async (newNote) => {
        const { data, error } = await supabase
          .from("notes")
          .insert(newNote)
          .select()
          .single();

        if (error) return { error: error as any };

        return { data: data as Note };
      },
    }),

    updateNote: builder.mutation<Note, Note>({
      invalidatesTags: ["Notes"],
      queryFn: async (updatedNote) => {
        const { data, error } = await supabase
          .from("notes")
          .update(updatedNote)
          .eq("id", updatedNote.id)
          .select()
          .single();

        if (error) return { error: error as any };
        return { data: data as Note };
      },
    }),

    deleteNote: builder.mutation<void, string>({
      invalidatesTags: ["Notes"],
      queryFn: async (id) => {
        const { error } = await supabase.from("notes").delete().eq("id", id);

        if (error) return { error: error as any };
        return { data: undefined };
      },
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = apiSlice;
export default apiSlice;
