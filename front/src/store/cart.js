import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: storedCart,
    total: storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find((item) => item._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find((item) => item._id === id);
      if (product) {
        product.quantity = quantity;
      }
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;