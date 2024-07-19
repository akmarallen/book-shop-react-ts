import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface Favorite {
  id: string;
  author: string;
  title: string;
  price: number;
  language: string;
  image: string;
}

interface FavoritesState {
  books: Favorite[];
}

const initialState: FavoritesState = {
  books: [],
};

const favoritesSlices = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Favorite>) => {
      const existingBook = state.books.find(
        (book) => book.id === action.payload.id
      );
      if (!existingBook) state.books.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export default favoritesSlices;
export const { addToFavorites, removeFromFavorites } = favoritesSlices.actions;
export const selectFavoriteBooks = (state: RootState) => state.books.books;
