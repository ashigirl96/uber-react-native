import { configureStore } from '@reduxjs/toolkit'
import { reducer as navReducer } from './slices/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch