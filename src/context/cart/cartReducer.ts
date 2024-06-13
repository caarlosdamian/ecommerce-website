import { CartActionType, CartT, ProductI } from '../../types';

export const cartReducer = (
  state: CartT,
  action: {
    type: CartActionType;
    payload: { product: ProductI; quantity: number };
  }
) => {
  const { payload, type } = action;

  switch (type) {
    case 'add': {
      const { product, quantity } = payload;
      const { items } = state;
      if (items.length !== 0) {
        const productIndex = items.findIndex(
          (element) => element.id === product.id
        );
        if (productIndex !== -1) {
          items[productIndex] = {
            ...items[productIndex],
            quantity: items[productIndex].quantity + quantity,
            totalPrice:
              product.price * (items[productIndex].quantity + quantity),
          };
          return { items };
        }
      }
      items.push({
        ...product,
        quantity: quantity,
        totalPrice: product.price * quantity,
      });
      return { items };
      break;
    }

    case 'remove':
      return state;
      break;
    case 'decrement': {
      const { items } = state;
      if (state.items.length !== 0) {
        const productIndex = items.findIndex(
          (elemnt) => elemnt.id === payload.product.id
        );
        if (productIndex !== -1) {
          if (items[productIndex].quantity === 1) {
            items.splice(productIndex, 1);
            return { items };
          }
          items[productIndex] = {
            ...items[productIndex],
            quantity: items[productIndex].quantity - 1,
            totalPrice:
              payload.product.price * (items[productIndex].quantity - 1),
          };
          return { items };
        }
      }
      return { items };
      break;
    }

    default:
      return state;
      break;
  }
};
