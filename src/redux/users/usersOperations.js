import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../services/usersApi';

export const fetchAllUsers = createAsyncThunk('users/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const users = await getUsers();
    return users.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
