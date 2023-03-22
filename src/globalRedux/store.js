"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoritesSlice";
import readReducer from './features/readSlice';
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
favorites: favoritesReducer,
read: readReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    state: persistedReducer,
  },
});

export const persistor = persistStore(store);
