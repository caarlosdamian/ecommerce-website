import { ModalActionTypes } from './modalActions';

export const modalReducer = (
  state = { type: 'idle' },
  action: { type: string }
) => {
  switch (action.type) {
    case ModalActionTypes.CLOSE_MODAL:
      return {
        type: 'idle',
      };
    case ModalActionTypes.OPEN_MENU:
      return {
        type: 'menu',
      };
    case ModalActionTypes.OPEN_CART:
      return {
        type: 'cart',
      };
    case ModalActionTypes.OPEN_ORDER:
      return {
        type: 'order',
      };
    default:
      return state;
  }
};
