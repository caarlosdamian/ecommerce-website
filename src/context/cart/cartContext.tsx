import { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import { ProductI, PropsChildren } from '../../types';

const cartContext = createContext({});

const CartProvider = ({ children }: PropsChildren) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItemToCart = (product: ProductI, quantity: number) => {
    dispatch({ type: 'add', payload: { product, quantity } });
  };
  const removeItemFromCart = (product: ProductI) => {
    dispatch({ type: 'remove', payload: { product, quantity: 0 } });
  };
  return (
    <cartContext.Provider
      value={{ items: state.items, removeItemFromCart, addItemToCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { cartContext, CartProvider };
