import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchMovieNames: null,
    tmdbResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchResults: (state, action) => {
      const { gptSearchMovieNames, tmdbResults } = action.payload;
      state.gptSearchMovieNames = gptSearchMovieNames;
      state.tmdbResults = tmdbResults;
    },
  },
});

export const { toggleGptSearchView, addGptSearchResults } = gptSlice.actions;

export default gptSlice.reducer;
