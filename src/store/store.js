import { create } from "zustand";
import axios from "axios";

const ProductsData = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const useIdStore = create((set) => ({
  productId: localStorage.getItem("product-id") || null,
  changeIdState: (id) => {
    localStorage.setItem("product-id", id);
    set(() => ({ productId: id }));
  },
}));

export const useCategoryStore = create((set) => ({
  productCategory: localStorage.getItem("item-category") || null,
  changeCategoryState: (category) => {
    localStorage.setItem("item-category", category);
    set(() => ({ productCategory: category }));
  },
}));

export const useGetAllProducts = create((set) => ({
  ...ProductsData,
  execute: async () => {
    set({ ...ProductsData, loading: true });
    try {
      const res = await axios.get("https://dummyjson.com/products");
      set({ ...ProductsData, success: true, data: res.data });
    } catch (err) {
      set({ ...ProductsData, error: true, errorData: err.message });
    }
  },
}));

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  try {
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    return []; // Return empty array if parsing fails
  }
};

export const useCartStore = create((set, get) => ({
  // Initialize cart using getCartFromLocalStorage()
  cart: getCartFromLocalStorage(),

  // Add an item to the cart
  addToCart: (item) =>
    set((state) => {
      const { cart } = state; // Access current state directly

      // Check if item already exists in the cart
      const itemExists = cart.find((cartItem) => cartItem.id === item.id);

      let newCart;

      if (itemExists) {
        // If item exists, update its quantity
        newCart = cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item is new, add it with quantity 1
        newCart = [...cart, { ...item, quantity: 1 }];
      }

      // Update localStorage with the new cart state
      localStorage.setItem("cart", JSON.stringify(newCart));
      alert("Item added to cart");

      // Update state with the new cart
      return { cart: newCart };
    }),

  removeFromCart: (item) =>
    set((state) => {
      const { cart } = state;

      const itemExists = cart.find((cartItem) => cartItem?.id === item?.id);

      // Remove item if it exists in the cart
      const newCart = itemExists
        ? cart.filter((cartItem) => cartItem.id !== item.id)
        : cart;

      // Update localStorage with the new cart state
      localStorage.setItem("cart", JSON.stringify(newCart));
      alert("Item removed from cart");

      return { cart: newCart };
    }),
}));
