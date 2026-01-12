import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    setArchivedView(state, action: PayloadAction<boolean>) {
      state.isArchivedView = action.payload;
    },

    setSelectedTag(state, action: PayloadAction<string>) {
      state.selectedTag = action.payload;
    },

    setSearchFilter(state, action: PayloadAction<string>) {
      state.searchFilter = action.payload;
    },

    resetFilters(state) {
      state.selectedTag = initialState.selectedTag;
      state.searchFilter = initialState.searchFilter;
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
