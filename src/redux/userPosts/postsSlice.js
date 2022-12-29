import { createSlice } from '@reduxjs/toolkit';
import { fetchUserPosts } from './postsOperations';

export const userPostsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchUserPosts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }),
});

export const postsReducer = userPostsSlice.reducer;
