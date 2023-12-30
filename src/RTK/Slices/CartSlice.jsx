import { createSlice } from "@reduxjs/toolkit";

const getItemLocalStorage = () => {
  try {
    // Retrieve the cart data from local storage
    const cartData = localStorage.getItem("cart");
    // Parse the JSON data and return it
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    return [];
  }
};

const setItemLocalStorage = (cart) => {
  try {
    // Stringify the cart data and save it to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: getItemLocalStorage(), userInfo: {} },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, discrption } = action.payload;
      const existingProduct = state.items.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({
          id,
          image,
          name,
          price,
          discrption,
          quantity: 1,
        });
      }
      setItemLocalStorage(state.items);
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const increaseProduct = state.items.find((product) => product.id === id);
      if (increaseProduct) {
        increaseProduct.quantity += 1;
      }
      setItemLocalStorage(state.items);
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const decreaseProductIndex = state.items.findIndex(
        (product) => product.id === id
      );

      if (decreaseProductIndex !== -1) {
        const decreaseProduct = state.items[decreaseProductIndex];
        if (decreaseProduct.quantity > 1) {
          decreaseProduct.quantity -= 1;
        } else {
          state.items.splice(decreaseProductIndex, 1);
        }
      }

      setItemLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const updateCart = state.items.filter((product) => !(product.id === id));
      setItemLocalStorage([...updateCart]);
      return { ...state, items: updateCart };
    },

    clearCart: (state) => {
      localStorage.removeItem("cart");
      return { items: [], userInfo: {} }; // Return the entire initial state
    },
    addUser: (state, action) => {
      state.userInfo = { ...action.payload };
    },
    removeUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  addUser,
  removeUser,
} = cartSlice.actions;

export default cartSlice.reducer;
// export const selectCart = (state) => state.cart;
