import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import userReducer from './redux/userSlice'
import postReducer from './redux/postSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    user : userReducer,
    post : postReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
