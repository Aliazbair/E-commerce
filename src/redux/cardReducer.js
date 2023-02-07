import { createSlice } from '@reduxjs/toolkit';

// todo initialSate
const initialState = {
  products: [],
  shippingAddress: {},
};

// todo create card slice
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    // add to card function
    addToCart: (state, action) => {
      // get the item
      const item = state.products.find((item) => item.id === action.payload.id);

      // check the item if it exists inc qty
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    // remove card
    removeCard: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    // reset cart
    resetCart: (state, action) => {
      state.products = [];
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

// todo action creators are generate for each case reducer function
export const { addToCart, removeCard, resetCart, saveShippingAddress } =
  cardSlice.actions;

export default cardSlice.reducer;
