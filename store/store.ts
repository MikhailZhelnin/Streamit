import {configureStore} from "@reduxjs/toolkit";
import {myListReducer} from "./myList/myList.slice";
import {singleMovieApi} from "./singleMovie/singleMovie.api";

export const store = configureStore({
  reducer: {
    [singleMovieApi.reducerPath]: singleMovieApi.reducer,
    myList: myListReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(singleMovieApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>