import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {MovieWithVideos} from "../../models";

export const singleMovieApi = createApi({
  reducerPath: 'api/singleMovie',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/'}),
  endpoints: build => ({
    getSingleMovie: build.query<MovieWithVideos, number>({
      query: (id: number) => `movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`,
    })
  })
})

export const {useGetSingleMovieQuery} = singleMovieApi