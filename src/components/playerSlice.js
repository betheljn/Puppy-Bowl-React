import { createSlice, createAction } from "@reduxjs/toolkit";
import { Api } from "../API/api";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    players: [],
    searchquery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      Api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        console.log(payload.data.players);
        return payload.data.players;
      }
    );
  },
});

export const { setSearchQuery } = playerSlice.actions;
export const selectPlayers = (state) => state.player.players;
export const selectSearchQuery = (state) => state.player.searchQuery;
export const searchPlayers = createAction("PuppyBowl/searchPlayers");

export default playerSlice.reducer;