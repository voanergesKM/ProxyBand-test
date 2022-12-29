import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../../services/usersApi';

export const fetchUserPosts = createAsyncThunk('user/getPosts', async (id, { rejectWithValue }) => {
  try {
    const posts = await fetchPosts(id);

    return posts.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
