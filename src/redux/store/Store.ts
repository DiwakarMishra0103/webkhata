import { configureStore } from "@reduxjs/toolkit";
import auth_feature from "../features/auth/auth_feature";

export const store = configureStore({
  reducer: {
    auth: auth_feature,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
