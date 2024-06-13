import { useContext } from 'react';
import { ProductI, ProductWithQuantity } from '../types';
import { cartContext } from '../context/cart/cartContext';

interface CartContextHookReturnType {
  items: ProductWithQuantity[];
  totalOfAllProducts: number;
  addItemToCart: (product: ProductI, quantity: number) => void;
  removeItemFromCart: (product: ProductI) => void;
  removeAllItems: () => void;
}

export const useCartContext = (): CartContextHookReturnType => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('Context should be used only under context provider');
  }
  return context as CartContextHookReturnType;
};
