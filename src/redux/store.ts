import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlices/bookSlices";
import { useDispatch } from "react-redux";
import cartSlice from "./counterSlices/counterSlices";

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
