import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import booksSlice from "./booksSlices/bookSlices";
import counterSlice from "./counterSlices/counterSlices";
import favoritesSlices from "./favoritesSlices/favoritesSlices";

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    cart: counterSlice.reducer,
    favorite: favoritesSlices.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
