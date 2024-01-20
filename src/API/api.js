import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-FT-SF",
  }),
  endpoints: (builder) => ({
    getPlayer: builder.query({
      query: (id) => '/players/'+id,
    }),
    getPlayers: builder.query({
      query: () => "/players",
    }),
    addNewPlayer: builder.mutation({
      query: (addPlayer) => ({
        url: '/players',
        method: 'POST',
        body: addPlayer,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/` +id,
        method: 'DELETE',
      }),
    }),
    searchPlayers: builder.query({
      query: (searchTerm) => `/players/search?query=${searchTerm}`,  // Updated syntax for string interpolation
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useGetPlayerQuery, useGetPlayersQuery, useAddNewPlayerMutation, useDeletePlayerMutation, useSearchPlayersQuery } = Api;