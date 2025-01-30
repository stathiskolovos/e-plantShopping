import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // in shopping cart i need image, name, cost => payload
      const { image, name, cost} = action.payload;
      const inCart = state.items.find(item => item.name === name); // check if plant already in cart
      if (inCart) { // if in cart +1 quantity
        inCart.quantity++;
      } else { // else set quantity to 1
        state.items.push({image, name, cost, quantity: 1});
      }

    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action,payload); // filter out plant
    },
    updateQuantity: (state, action) => {
      const {image, name, cost, quantity} = action.payload;
      const updateItem = state.items.find(item => items.name === name);
      if (updateItem) {
        updateItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
