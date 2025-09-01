import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  shortDescription: string;
  image: string;
  category: string;
  company: string;
  unit: string;
  mass: string;
  price: number;
  discountPct: number;
  stock: number;
  rating: number;
}

export interface CartItem extends Medicine {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (medicine: Medicine) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (medicine: Medicine) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === medicine.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === medicine.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({
            items: [...items, { ...medicine, quantity: 1 }]
          });
        }
      },
      
      removeItem: (id: string) => {
        set({
          items: get().items.filter(item => item.id !== id)
        });
      },
      
      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const discountedPrice = item.price * (1 - item.discountPct / 100);
          return total + (discountedPrice * item.quantity);
        }, 0);
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'medx-cart-storage'
    }
  )
);