import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Movie} from "../../models";

const initialState:Movie[]  = []

export const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.push(action.payload)
    },
    removeMovie: (state, action: PayloadAction<{id: number}>) => {
      return state.filter(p => p.id !== action.payload.id)
    }
  }
})

export const myListReducer = myListSlice.reducer
export const myListActions = myListSlice.actions