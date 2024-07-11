import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartBook {
  id: string;
  quantity: number;
}

interface CartState {
  cart: CartBook[];
}

const initialState: CartState = {
  cart: [],
};

const counterSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartBook>) => {
      const bookInCart = state.cart.find(
        (book) => book.id === action.payload.id
      );
      if (bookInCart) {
        bookInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
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
