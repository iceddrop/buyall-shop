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
  productId: '',
  changeIdState: (id) => set(() => ({ productId: id })),
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