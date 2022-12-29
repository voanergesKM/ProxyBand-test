import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAlbums } from '../../services/usersApi';

export const fetchUserAlbums = createAsyncThunk(
  'user/getAlbums',
  async (id, { rejectWithValue }) => {
    try {
      const albums = await fetchAlbums(id);

      return albums.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
