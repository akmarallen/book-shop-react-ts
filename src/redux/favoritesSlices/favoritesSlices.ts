import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface Favorite {
  id: string;
  author: string;
  title: string;
  price: number;
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
    toggleFavorite: (state, action: PayloadAction<Favorite>) => {
      const existingBookIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      );

      if (existingBookIndex !== -1) {
        state.books.splice(existingBookIndex, 1);
      } else {
        state.books.push({ ...action.payload });
      }
    },
  },
});

export default favoritesSlices;
export const { toggleFavorite } = favoritesSlices.actions;
export const selectFavoriteBooks = (state: RootState) => state.favorite.books;
