import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {},
  reducers: {
    updateFilter: (state, action) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },

    resetFilter: () => {
      console.log("%c[Redux Filter Reset]", "color: #FF6B6B; font-weight: bold;");
      return {};
    },
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
