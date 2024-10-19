import { create } from 'zustand'
import axios from 'axios';


const ProductsData  = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

export const useIdStore = create((set) => ({
  productId: localStorage.getItem('product-id') || null,
  changeIdState: (id) => { 
    localStorage.setItem('product-id', id);
    set(() => ({ productId: id }));
  }
}))

export const useCategoryStore = create((set) => ({
  productCategory: localStorage.getItem('item-category') || null,
  changeCategoryState: (category) => {
    localStorage.setItem('item-category', category);
    set(() => ({ productCategory : category}))
  }
}))

export const useGetAllProducts = create((set) => ({
    ...ProductsData,
    execute: async () => {
      set({ ...ProductsData, loading: true });
      try {
        const res = await axios.get('https://dummyjson.com/products');
        set({ ...ProductsData, success: true, data: res.data });
      } catch (err) {
        set({ ...ProductsData, error: true, errorData: err.message });
      }
    }
}))

export const useCartStore = create((set, get) => ({
  cart: [],
  
  // Add an item to the cart
  addToCart: (item) => set((state) => {
    const { cart } = get();

    const itemExists = state.cart.find((cartItem) => cartItem.id === item.id);
    
    if (itemExists) {
      // If item already exists, increase its quantity
      return {
        cart: cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    } else {
      // If item is new, add it to the cart with a quantity of 1
      return {
        cart: [...cart, { ...item, quantity: 1 }],
      };
    }
  }), 
}))