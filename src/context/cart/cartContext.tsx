import { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import { ProductI, PropsChildren } from '../../types';

const cartContext = createContext({});

const CartProvider = ({ children }: PropsChildren) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalOfAllProducts: 0,
  });

  const addItemToCart = (product: ProductI, quantity: number) => {
    dispatch({ type: 'add', payload: { product, quantity } });
  };
  const removeItemFromCart = (product: ProductI) => {
    dispatch({ type: 'decrement', payload: { product, quantity: 0 } });
  };

  const removeAllItems = () => {
    dispatch({ type: 'remove' });
  };
  return (
    <cartContext.Provider
      value={{
        totalOfAllProducts: state.totalOfAllProducts,
        items: state.items,
        removeItemFromCart,
        addItemToCart,
        removeAllItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { cartContext, CartProvider };
