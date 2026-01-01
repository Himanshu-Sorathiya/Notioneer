import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  isArchivedView: boolean;
  selectedTag: string;
  searchFilter: string;
}

const initialState: FilterState = {
  isArchivedView: false,
  selectedTag: "",
  searchFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setArchivedView(state, action) {
      state.isArchivedView = action.payload;
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
