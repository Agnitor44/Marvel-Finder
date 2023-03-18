"use client";

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { data: [] };

// Actual Slice
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action) => {
      const array = current(state).data;
      return {
        data: [...array, action.payload],
      };
    },
    sub: (state, action) => {
      const id = action.payload;
      const array = current(state).data;
      const newArray = [...array].filter((item) => item.id !== id);
      return {
        data: newArray,
      };
    },
  },
});

export const { add, sub } = favoritesSlice.actions;
export default favoritesSlice.reducer;
