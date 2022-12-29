import { createSlice } from '@reduxjs/toolkit';
import { fetchUserAlbums } from './albumsOperations';

export const userAlbumSlice = createSlice({
  name: 'albums',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchUserAlbums.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserAlbums.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserAlbums.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }),
});

export const albumsReducer = userAlbumSlice.reducer;
