import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./reducer";
import { RootState } from "redux/store";

type TSelectedBook = {
  book: Book;
  count: number;
};

type State = {
  books: Book[];
  isLoading: boolean;
  error: null;
  selectedBooks: TSelectedBook[];
};

const initialState: State = {
  books: [],
  isLoading: false,
  error: null,
  selectedBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.selectedBooks.push(action.payload);
    },
    removeBook: (state, action) => {
      state;
      action;
    },
    changeCount: (state, action) => {
      state;
      action;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.books = payload;
      state.isLoading = false;
    });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addBook, changeCount, removeBook } = booksSlice.actions;

export default booksSlice;

export const selectBooks = (state: RootState) => state.books.books;

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  imageLinks: ImageLinks;
  language: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: {
    amount: number | 0;
    currencyCode: string;
  };
}
