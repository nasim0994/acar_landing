import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export type ICart = {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
};

type ICartState = {
  carts: ICart[];
};

const cartValue = {
  carts: [],
};

const loadState = () => {
  const storedState = localStorage.getItem("cartState");
  return storedState ? JSON.parse(storedState) : cartValue;
};

const initialState: ICartState = loadState();

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const oldCarts = state.carts;
      const { product, selectedQuantity } = action.payload;
      const { _id, title, price, image, discountPrice } = product;

      //   check if the item is already in the cart
      const isExistingItem = oldCarts?.find((item) => item?._id == _id);

      if (isExistingItem) {
        state.carts = oldCarts?.filter((item) => item?._id !== _id);
        localStorage.setItem("cartState", JSON.stringify(state));
      } else {
        state.carts.push({
          _id,
          title,
          price: discountPrice || price,
          quantity: selectedQuantity,
          image,
        });
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    },

    buyNow: (state, action) => {
      const { car, selectedQuantity } = action.payload;
      const { _id, title, price, image } = car;

      state.carts = [
        {
          _id,
          title,
          price,
          quantity: selectedQuantity,
          image,
        },
      ];

      localStorage.setItem("cartState", JSON.stringify(state));

      toast.success("Item added to cart successfully");
    },

    removeFromCart: (state, action) => {
      const _id = action.payload;

      const oldCarts = state.carts;
      //   check if the item is already in the cart
      const isExistingItem = oldCarts?.find((item) => item?._id == _id);

      if (isExistingItem) {
        state.carts = oldCarts?.filter((item) => item?._id !== _id);
        localStorage.setItem("cartState", JSON.stringify(state));
        toast.success("Item removed from cart");
      } else {
        toast.error("Item not found in cart");
      }
    },

    clearCartAfterOrder: (state) => {
      state.carts = [];
      localStorage.setItem("cartState", JSON.stringify(state));
    },

    changeQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const oldCarts = state.carts;

      const cartItem = oldCarts?.find((item) => item?._id === _id);

      if (!cartItem) {
        toast.error("Item not found in cart");
      } else {
        cartItem.quantity = quantity;
      }

      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  changeQuantity,
  buyNow,
  clearCartAfterOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
