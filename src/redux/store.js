import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './userPosts/postsSlice';
import { usersReducer } from './users/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
