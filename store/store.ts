import {configureStore} from "@reduxjs/toolkit";
import {myListReducer} from "./myList/myList.slice";

export const store = configureStore({
  reducer: {
    myList: myListReducer
  }
})

export type TypeRootState = ReturnType<typeof store.getState>