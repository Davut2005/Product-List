import { create } from 'zustand';

export interface Product {
  id: string;
  title: string;
  description: string;
  liked: boolean;
}

export interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  toggleLike: (id: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  deleteProduct: (id) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
  toggleLike: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      ),
    })),
}));
