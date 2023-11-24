import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './reducers/cart'
import revealReducer from './reducers/reveal'

import api from "../services/api";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        reveal: revealReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>