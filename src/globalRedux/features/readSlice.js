"use client";

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { data: [] };

// Actual Slice
export const readSlice = createSlice({
  name: "read",
  initialState,
  reducers: {
    add: (state, action) => {
      const array = current(state).data;
      return {
        data: [...array, action.payload],
      };
    },

    edit: (state, action) => {
        const array = current(state).data;
        const id = array.findIndex(item => item.id === action.payload.id)
        const newArray = [...array]
        console.log( newArray[id])
        newArray[id] = {
            count: action.payload.count,
            id: action.payload.id
        }
        return {
          data: newArray,
        };
      },

  },
});

export const { add, edit } = readSlice.actions;
export default readSlice.reducer;
