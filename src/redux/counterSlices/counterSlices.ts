import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface ISelectedBooks {
  id: string;
  quantity: number;
  author: string;
  title: string;
  image: string;
}

interface ISelectedState {
  cart: ISelectedBooks[];
}

const initialState: ISelectedState = {
  cart: [],
};

const counterSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ISelectedBooks>) => {
      const bookInCart = state.cart.find(
        (book) => book.id === action.payload.id
      );
      if (bookInCart) {
        bookInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // console.log(state.cart);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const book = state.cart.find((book) => book.id === action.payload);
      if (book) {
        book.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const book = state.cart.find((book) => book.id === action.payload);
      if (book) {
        if (book.quantity === 1) {
          book.quantity = 0;
        } else {
          book.quantity--;
        }
      }
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },
  },
});

export default counterSlices;
export const cartReducer = counterSlices.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeBook } =
  counterSlices.actions;
export const selectedBooks = (state: RootState) => state.cart.cart;
