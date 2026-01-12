import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./features/filter/filterSlice.ts";
import notesReducer from "./features/notes/notesSlice.ts";
import uiReducer from "./features/ui/uiSlice.ts";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    filter: filterReducer,
    ui: uiReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { AppDispatch, RootState };
