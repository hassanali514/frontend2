// import {configureStore} from "@reduxjs/toolkit"
// import userReducer from "../features/user/userSlice"

// const store = configureStore({
//     reducer:{
//         user:userReducer
//     }
// })

// export default store
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)