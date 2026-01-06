import { createSlice } from '@reduxjs/toolkit';
import { saveLocalStorage, loadLocalStorage } from './localStorage';

const initialState = {
  items: loadLocalStorage() || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.productId === item.productId);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      saveLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((i) => i.productId !== productId);
      saveLocalStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((i) => i.productId === productId);
      if (item) item.quantity = quantity;
      saveLocalStorage(state.items);
    },
    updateNote: (state, action) => {
      const { productId, note } = action.payload;
      const item = state.items.find((i) => i.productId === productId);
      if (item) item.note = note;
      saveLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  updateNote,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
