import { createSlice } from '@reduxjs/toolkit';

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const initialState = {
  items: loadFromLocalStorage('cart'),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      saveToLocalStorage('cart', state.items);
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item._id !== idToRemove);
      saveToLocalStorage('cart', state.items);
    },
    increaseQuantity: (state, action) => {
      console.log(state.items)
      const id = action.payload;
      const itemToUpdate = state.items.find(item => item._id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        saveToLocalStorage('cart', state.items);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const itemToUpdate = state.items.find(item => item._id === id);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
        saveToLocalStorage('cart', state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage('cart', state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
