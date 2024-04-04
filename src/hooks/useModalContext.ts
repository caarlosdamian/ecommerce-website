import { useContext } from 'react';
import { ModalContext } from '../context/modal/modalContext';
import { ModalContextInitialState } from '../types';
import { ModalActionTypes } from '../context/modal/modalActions';

interface ModalContextHookReturnType {
  handleClosedModal: () => void;
  modalState: ModalContextInitialState;
  handleOpenModal: (type: ModalActionTypes) => void;
}

export const useModalContext = ():ModalContextHookReturnType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Context should be used only under context provider');
  }
  return context as ModalContextHookReturnType;
};