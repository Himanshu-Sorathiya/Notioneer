import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  is_archivedView: boolean;
  selectedTag: string;
  searchFilter: string;
}

const initialState: FilterState = {
  is_archivedView: false,
  selectedTag: "",
  searchFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setArchivedView(state, action) {
      state.is_archivedView = action.payload;
    },

    setSelectedTag(state, action) {
      state.selectedTag = action.payload;
    },

    setSearchFilter(state, action) {
      state.searchFilter = action.payload;
    },

    resetFilters(state) {
      state.selectedTag = "";
      state.searchFilter = "";
    },
  },
});

export const {
  setArchivedView,
  setSelectedTag,
  setSearchFilter,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
