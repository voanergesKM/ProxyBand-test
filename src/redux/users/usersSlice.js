import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers } from './usersOperations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchAllUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }),
});

export const usersReducer = usersSlice.reducer;
