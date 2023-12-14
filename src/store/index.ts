import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
    key: 'rootState',
    storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
