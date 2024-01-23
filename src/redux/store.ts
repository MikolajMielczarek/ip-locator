import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import stackUserReducer from './stackUser';
import stackSearchReducer from './stackSearch';
import searchReducer from './search';

const store = configureStore({
  reducer: {
    user: userReducer,
    stackUser: stackUserReducer,
    stackSearch: stackSearchReducer,
    search: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;
