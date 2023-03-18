"use client";

import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoritesSlice";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedReducer,
  },
});

export const persistor = persistStore(store);
