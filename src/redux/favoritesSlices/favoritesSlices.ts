import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Favorite {
  id: string;
  title: string;
  price: number;
  author: string;
  image: string;
}

interface FavoritesState {
  books: Favorite[];
}

const initialState: FavoritesState = {
  books: [],
};

const favoritesSlices = createSlice({
  name: "favorites",
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
export const selectFavoriteBooks = (state: { favorites: FavoritesState }) =>
  state.favorites.books;
