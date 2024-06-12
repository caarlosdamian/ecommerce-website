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
      console.count('Entrando:')
      const { product, quantity } = payload;
      const { items } = state;
      if (items.length !== 0) {
        const productIndex = items.findIndex(
          (element) => element.id === product.id
        );
        if (productIndex !== -1) {
          items[productIndex] = {
            ...items[productIndex],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            quantity: items[productIndex].quantity + quantity,
          };
          return { items };
        }
      }
      items.push({
        ...product,
        quantity: quantity,
      });
      return { items };
      break;
    }

    case 'remove':
      return state;
      break;

    default:
      return state;
      break;
  }
};
