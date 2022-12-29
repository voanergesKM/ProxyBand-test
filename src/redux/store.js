import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { albumsReducer } from './userAlbums/albumsSlice';
import { postsReducer } from './userPosts/postsSlice';
import { usersReducer } from './users/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
