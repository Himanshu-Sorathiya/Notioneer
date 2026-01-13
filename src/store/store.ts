import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "./features/api/apiSlice.ts";
import filterReducer from "./features/filter/filterSlice.ts";
import notesReducer from "./features/notes/notesSlice.ts";
import uiReducer from "./features/ui/uiSlice.ts";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    filter: filterReducer,
    ui: uiReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { AppDispatch, RootState };
